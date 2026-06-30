/* Cross-app transfers: receive real sends from Phantom into the Ledger.

   Phantom delivers by crediting a recipient it finds in its own database. So this
   script (a) registers the Ledger user's receive addresses into Phantom's DB via
   the Ledger backend (/api/wallet/register), and (b) polls /api/wallet/incoming
   for credits. On a credit it silently bumps the balance and appends a 'received'
   row to the transaction history.

   Self-contained; reuses the global helpers exposed by js/ledger.js
   (loadSettings/saveSettings/updateWallet/loadTransactions/saveTransactions). */
(function() {
    'use strict';

    var POLL_MS = 4000;
    var LAST_SEEN_KEY = 'll_p2p_last_seen';
    var SEEN_IDS_KEY = 'll_p2p_seen_ids';

    // Address chains we register (one address per chain, matching the Receive flow).
    var CHAINS = ['btc', 'eth', 'sol', 'trx', 'bnb'];
    // Phantom token symbol -> Ledger coin key.
    var SYM_TO_COIN = {
        BTC: 'btc',
        ETH: 'eth',
        SOL: 'sol',
        TRX: 'trx',
        BNB: 'bnb',
        USDT: 'usdt',
        USDC: 'usdc'
    };

    function deviceId() {
        return localStorage.getItem('ll_device_id') || '';
    }

    function activated() {
        return localStorage.getItem('license_activated') === 'true';
    }

    // ---- settings (reuse ledger.js globals, with a localStorage fallback) ----
    function loadLS() {
        if (typeof window.loadSettings === 'function') return window.loadSettings();
        try {
            return JSON.parse(localStorage.getItem('ledgerSettings')) || {};
        } catch (e) {
            return {};
        }
    }

    function saveLS(s) {
        if (typeof window.saveSettings === 'function') return window.saveSettings(s);
        try {
            localStorage.setItem('ledgerSettings', JSON.stringify(s));
        } catch (e) {}
    }

    // ---- address generation (must match js/transfer.js formats) ----
    var B58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

    function rb58(n) {
        var s = '';
        for (var i = 0; i < n; i++) s += B58[Math.floor(Math.random() * B58.length)];
        return s;
    }

    function rhex(n) {
        var s = '';
        for (var i = 0; i < n; i++) s += Math.floor(Math.random() * 16).toString(16);
        return s;
    }

    function genAddr(fmt) {
        if (fmt === 'sol') return rb58(32 + Math.floor(Math.random() * 12));
        if (fmt === 'trx') return 'T' + rb58(33);
        if (fmt === 'btc') {
            var r = Math.floor(Math.random() * 3);
            if (r === 0) return '1' + rb58(33);
            if (r === 1) return '3' + rb58(33);
            return 'bc1q' + rhex(38);
        }
        return '0x' + rhex(40); // eth / bnb (evm)
    }
    var ADDR_FMT = {
        eth: 'eth',
        bnb: 'eth',
        btc: 'btc',
        sol: 'sol',
        trx: 'trx'
    };

    // Ensures every chain has an address stored under accountAddresses (same key the
    // Receive screen reads) and returns the map.
    function ensureAddresses() {
        var s = loadLS();
        s.accountAddresses = s.accountAddresses || {};
        var changed = false;
        CHAINS.forEach(function(k) {
            if (!s.accountAddresses[k]) {
                s.accountAddresses[k] = genAddr(ADDR_FMT[k] || 'eth');
                changed = true;
            }
        });
        if (changed) saveLS(s);
        var out = {};
        CHAINS.forEach(function(k) {
            out[k] = s.accountAddresses[k];
        });
        return out;
    }

    // ---- seen-id dedupe ----
    function seenIds() {
        try {
            return JSON.parse(localStorage.getItem(SEEN_IDS_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function markSeen(ids) {
        var all = seenIds().concat(ids);
        if (all.length > 200) all = all.slice(all.length - 200);
        try {
            localStorage.setItem(SEEN_IDS_KEY, JSON.stringify(all));
        } catch (e) {}
    }

    // ---- networking ----
    function headers() {
        return {
            'Content-Type': 'application/json',
            'X-Device-Id': deviceId()
        };
    }

    function register() {
        if (!deviceId() || !activated()) return;
        var addresses = ensureAddresses();
        fetch('/api/wallet/register', {
            method: 'POST',
            headers: headers(),
            body: JSON.stringify({
                addresses: addresses,
                primary: addresses.eth || addresses.sol
            })
        }).catch(function() {});
    }

    function applyCredit(ev) {
        var coin = SYM_TO_COIN[(ev.tokenSymbol || '').toUpperCase()];
        var amt = Number(ev.amount);
        if (!coin || !(amt > 0)) return false;

        // Silent balance bump.
        var s = loadLS();
        s.coins = s.coins || {};
        s.coins[coin] = (Number(s.coins[coin]) || 0) + amt;
        saveLS(s);

        // Append a received transaction (same shape as the manual add flow).
        if (typeof window.loadTransactions === 'function' && typeof window.saveTransactions === 'function') {
            var txns = window.loadTransactions();
            txns.push({
                id: Date.now() + Math.floor(Math.random() * 1000),
                coin: coin,
                type: 'received',
                amount: amt,
                timestamp: ev.createdAt ? Date.parse(ev.createdAt) || Date.now() : Date.now()
            });
            txns.sort(function(a, b) {
                return b.timestamp - a.timestamp;
            });
            window.saveTransactions(txns);
        }
        return true;
    }

    function refreshUI() {
        if (typeof window.updateWallet === 'function') {
            try {
                window.updateWallet();
                return;
            } catch (e) {}
        }
        if (typeof window.renderTransactionHistory === 'function') {
            try {
                window.renderTransactionHistory();
            } catch (e) {}
        }
    }

    function poll() {
        if (!deviceId() || !activated()) return;
        var after = localStorage.getItem(LAST_SEEN_KEY) || '';
        var url = '/api/wallet/incoming' + (after ? ('?after=' + encodeURIComponent(after)) : '');
        fetch(url, {
                headers: {
                    'X-Device-Id': deviceId()
                }
            })
            .then(function(r) {
                return r.json();
            })
            .then(function(data) {
                var events = (data && data.events) || [];
                if (!events.length) return;
                var seen = seenIds();
                var applied = false,
                    newIds = [],
                    latest = after;
                events.forEach(function(ev) {
                    if (ev.createdAt && (!latest || ev.createdAt > latest)) latest = ev.createdAt;
                    if (seen.indexOf(ev.id) !== -1) return; // already processed
                    if (applyCredit(ev)) {
                        applied = true;
                        newIds.push(ev.id);
                    }
                });
                if (newIds.length) markSeen(newIds);
                if (latest) localStorage.setItem(LAST_SEEN_KEY, latest);
                if (applied) refreshUI();
            })
            .catch(function() {});
    }

    function start() {
        register();
        poll();
        setInterval(poll, POLL_MS);
        window.addEventListener('focus', poll);
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) poll();
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();