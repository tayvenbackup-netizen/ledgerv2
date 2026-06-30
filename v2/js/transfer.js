/* Transfer → Receive via crypto address flow.
   Self-contained; does not touch the obfuscated ledger.js. Reuses the
   .settings-overlay/.open bottom-sheet pattern and a coinPanel-style
   slide-in panel for the Receive screen. */
(function() {
    'use strict';

    var byId = function(id) {
        return document.getElementById(id);
    };

    // ---------------------------------------------------------------- data
    var ETH_NETWORKS = [{
            id: 'ethereum',
            name: 'Ethereum',
            icon: './assets/icons/ethereum.svg',
            addr: 'eth'
        },
        {
            id: 'base',
            name: 'Base',
            icon: './assets/icons/base.svg',
            addr: 'eth'
        },
        {
            id: 'arbitrum',
            name: 'Arbitrum',
            icon: './assets/icons/arbitrum.svg',
            addr: 'eth'
        },
        {
            id: 'optimism',
            name: 'OP Mainnet',
            icon: './assets/icons/optimism.svg',
            addr: 'eth'
        },
        {
            id: 'blast',
            name: 'Blast',
            icon: './assets/icons/blast.svg',
            addr: 'eth'
        },
        {
            id: 'linea',
            name: 'Linea',
            icon: './assets/icons/linea.svg',
            addr: 'eth'
        },
        {
            id: 'scroll',
            name: 'Scroll',
            icon: './assets/icons/scroll.svg',
            addr: 'eth'
        },
        {
            id: 'zksync',
            name: 'ZKsync',
            icon: './assets/icons/zksync.svg',
            addr: 'eth'
        }
    ];
    var STABLE_NETWORKS = [{
            id: 'eth',
            name: 'Ethereum',
            icon: './assets/icons/ethereum.svg',
            addr: 'eth'
        },
        {
            id: 'sol',
            name: 'Solana',
            icon: './assets/solana.avif',
            addr: 'sol'
        },
        {
            id: 'trx',
            name: 'Tron',
            icon: './assets/12114250.png',
            addr: 'trx'
        },
        {
            id: 'bnb',
            name: 'BNB Chain',
            icon: './assets/bnb-bnb-logo.png',
            addr: 'bnb'
        }
    ];
    var ASSETS = [{
            key: 'btc',
            name: 'Bitcoin',
            sym: 'BTC',
            icon: './assets/bitcoin.avif',
            addr: 'btc',
            net: 'Bitcoin',
            netIcon: './assets/bitcoin.avif'
        },
        {
            key: 'eth',
            name: 'Ethereum',
            sym: 'ETH',
            icon: './assets/ethereum-l.png',
            networks: ETH_NETWORKS
        },
        {
            key: 'sol',
            name: 'Solana',
            sym: 'SOL',
            icon: './assets/solana.avif',
            addr: 'sol',
            net: 'Solana',
            netIcon: './assets/solana.avif'
        },
        {
            key: 'trx',
            name: 'TRON',
            sym: 'TRX',
            icon: './assets/12114250.png',
            addr: 'trx',
            net: 'Tron',
            netIcon: './assets/12114250.png'
        },
        {
            key: 'bnb',
            name: 'BNB',
            sym: 'BNB',
            icon: './assets/bnb-bnb-logo.png',
            addr: 'bnb',
            net: 'BNB Chain',
            netIcon: './assets/bnb-bnb-logo.png'
        },
        {
            key: 'usdt',
            name: 'Tether USD',
            sym: 'USDT',
            icon: './assets/usdt.avif',
            networks: STABLE_NETWORKS,
            stable: true
        },
        {
            key: 'usdc',
            name: 'USD Coin',
            sym: 'USDC',
            icon: './assets/usdc.avif',
            networks: STABLE_NETWORKS,
            stable: true
        }
    ];

    // ---------------------------------------------------------- settings
    function loadLS() {
        try {
            return JSON.parse(localStorage.getItem('ledgerSettings')) || {};
        } catch (e) {
            return {};
        }
    }

    function saveLS(s) {
        try {
            localStorage.setItem('ledgerSettings', JSON.stringify(s));
        } catch (e) {}
    }

    function getAmount(key) {
        var s = loadLS();
        return (s.coins && +s.coins[key]) || 0;
    }

    function getCurrency() {
        var s = loadLS();
        return s.currency || 'usd';
    }

    function getPrice(key) {
        try {
            var c = JSON.parse(localStorage.getItem('lprice_' + key + '_' + getCurrency()));
            return (c && +c.price) || 0;
        } catch (e) {
            return 0;
        }
    }
    var CUR_SYM = {
        usd: '$',
        eur: '€',
        gbp: '£',
        cad: 'CA$',
        aud: 'A$',
        jpy: '¥',
        chf: 'CHF',
        cny: '¥',
        inr: '₹',
        brl: 'R$',
        sek: 'kr',
        nok: 'kr',
        nzd: 'NZ$',
        sgd: 'S$',
        hkd: 'HK$',
        krw: '₩',
        'try': '₺',
        mxn: 'MX$',
        dkk: 'kr',
        czk: 'Kč',
        zar: 'R'
    };

    function fmtVal(v) {
        return (CUR_SYM[getCurrency()] || '$') + (v || 0).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function fmtAmt(a, sym) {
        a = +a || 0;
        var str = a === 0 ? '0' : (a < 1 ? a.toFixed(8).replace(/0+$/, '').replace(/\.$/, '') : a.toLocaleString('en-US', {
            maximumFractionDigits: 8
        }));
        return str + ' ' + sym;
    }

    // ----------------------------------------------------------- addresses
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
        return '0x' + rhex(40); // eth / evm
    }
    var ADDR_FMT = {
        eth: 'eth',
        bnb: 'eth',
        btc: 'btc',
        sol: 'sol',
        trx: 'trx'
    };
    // Reads (and lazily creates) the address stored under ledgerSettings.accountAddresses,
    // keyed exactly like the coin panel so the Receive address stays consistent.
    function getAddress(coinKey) {
        var s = loadLS();
        s.accountAddresses = s.accountAddresses || {};
        if (!s.accountAddresses[coinKey]) {
            s.accountAddresses[coinKey] = genAddr(ADDR_FMT[coinKey] || 'eth');
            saveLS(s);
        }
        return s.accountAddresses[coinKey];
    }

    function getAccountName(asset) {
        var s = loadLS();
        var n = (s.accountNames || {})[asset.key];
        return n || (asset.name + ' 1');
    }

    function truncate(a) {
        return (a && a.length > 10) ? (a.slice(0, 4) + '...' + a.slice(-4)) : (a || '');
    }

    function isPrimaryNet(asset, net) {
        if (!asset.networks) return true;
        if (asset.stable) {
            var s = loadLS();
            return net.id === (s[asset.key + 'Chain'] || 'eth');
        }
        return net.id === asset.networks[0].id; // ETH → ethereum mainnet carries the balance
    }

    // --------------------------------------------------------------- DOM
    var transferSheet = byId('transferSheet'),
        tfSheet = byId('tfSheet'),
        receivePanel = byId('receivePanel');
    if (!transferSheet || !tfSheet || !receivePanel) return;
    var tfList = byId('tfList'),
        tfTitle = byId('tfSheetTitle'),
        tfBack = byId('tfBack'),
        tfSearchWrap = byId('tfSearchWrap'),
        tfSearch = byId('tfSearch');

    var state = {
        step: 'asset',
        asset: null,
        network: null
    };

    function openSheet(el) {
        el.classList.add('open');
    }

    function closeSheet(el) {
        el.classList.remove('open');
    }

    function closeFlow() {
        closeSheet(transferSheet);
        closeSheet(tfSheet);
    }

    function rowEl(opt) {
        var b = document.createElement('button');
        b.className = 'tf-row';
        b.type = 'button';
        var sub = opt.sub ? '<div class="tf-row-sub">' + (opt.badge ? '<span class="tf-row-badge"></span>' : '') + opt.sub + '</div>' : '';
        var right = (opt.val != null) ? '<div class="tf-row-right"><div class="tf-row-val">' + opt.val + '</div><div class="tf-row-amt">' + opt.amt + '</div></div>' : '';
        b.innerHTML =
            '<span class="tf-row-logo"><img src="' + opt.logo + '" alt=""></span>' +
            '<span class="tf-row-mid"><div class="tf-row-name">' + opt.name + '</div>' + sub + '</span>' +
            right;
        if (opt.badge) {
            var badge = b.querySelector('.tf-row-badge');
            if (badge) {
                badge.style.cssText = 'width:14px;height:14px;border-radius:50%;background-size:cover;background-position:center;display:inline-block;background-image:url(' + opt.badge + ')';
            }
        }
        return b;
    }

    function setTitle(text) {
        tfTitle.textContent = text;
    }

    function t(key, fallback) {
        try {
            return (window.i18n && window.i18n.t(key) !== key) ? window.i18n.t(key) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    // ----- step renderers -----
    function renderStep() {
        if (state.step === 'asset') renderAsset();
        else if (state.step === 'network') renderNetwork();
        else renderAccount();
    }

    function renderAsset() {
        setTitle(t('transfer.select_asset', 'Select asset'));
        tfBack.style.visibility = 'hidden';
        tfSearchWrap.style.display = '';
        var q = (tfSearch.value || '').toLowerCase().trim();
        tfList.innerHTML = '';
        ASSETS.forEach(function(a) {
            if (q && a.name.toLowerCase().indexOf(q) < 0 && a.sym.toLowerCase().indexOf(q) < 0) return;
            var amt = getAmount(a.key),
                val = amt * getPrice(a.key);
            var row = rowEl({
                logo: a.icon,
                name: a.name,
                sub: a.sym,
                val: fmtVal(val),
                amt: fmtAmt(amt, a.sym)
            });
            row.addEventListener('click', function() {
                pickAsset(a);
            });
            tfList.appendChild(row);
        });
    }

    function renderNetwork() {
        setTitle(t('transfer.select_network', 'Select network'));
        tfBack.style.visibility = 'visible';
        tfSearchWrap.style.display = 'none';
        tfList.innerHTML = '';
        var a = state.asset;
        a.networks.forEach(function(n) {
            var primary = isPrimaryNet(a, n);
            var amt = primary ? getAmount(a.key) : 0;
            var val = amt * getPrice(a.key);
            var row = rowEl({
                logo: n.icon,
                name: n.name,
                sub: primary ? '1 account' : null,
                val: fmtVal(val),
                amt: fmtAmt(amt, a.sym)
            });
            row.addEventListener('click', function() {
                pickNetwork(n);
            });
            tfList.appendChild(row);
        });
    }

    function renderAccount() {
        setTitle(t('transfer.select_account', 'Select account'));
        tfBack.style.visibility = 'visible';
        tfSearchWrap.style.display = 'none';
        tfList.innerHTML = '';
        var a = state.asset,
            n = state.network;
        var name = getAccountName(a),
            addr = getAddress(n.addr);
        var primary = isPrimaryNet(a, n);
        var amt = primary ? getAmount(a.key) : 0,
            val = amt * getPrice(a.key);
        var row = rowEl({
            logo: a.icon,
            name: name,
            sub: truncate(addr),
            badge: n.icon,
            val: fmtVal(val),
            amt: fmtAmt(amt, a.sym)
        });
        row.classList.add('tf-account-row');
        row.addEventListener('click', function() {
            openReceive(a, n, name, addr);
        });
        tfList.appendChild(row);

        var add = document.createElement('button');
        add.type = 'button';
        add.className = 'tf-add-row';
        add.innerHTML = '<span>' + t('transfer.add_account', 'Add new or existing account') + '</span>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
        tfList.appendChild(add); // inert
    }

    // ----- navigation -----
    function pickAsset(a) {
        state.asset = a;
        state.network = null;
        if (a.networks && a.networks.length) {
            state.step = 'network';
        } else {
            state.network = {
                id: a.addr,
                name: a.net,
                icon: a.netIcon,
                addr: a.addr
            };
            state.step = 'account';
        }
        renderStep();
    }

    function pickNetwork(n) {
        state.network = n;
        state.step = 'account';
        renderStep();
    }

    function goBack() {
        if (state.step === 'account') {
            state.step = state.asset.networks ? 'network' : 'asset';
        } else if (state.step === 'network') {
            state.step = 'asset';
        }
        renderStep();
    }

    // ----- receive screen -----
    function openReceive(a, n, name, addr) {
        byId('rcvTitle').textContent = (t('transfer.receive', 'Receive') + ' ' + a.sym);
        byId('rcvSub').textContent = (t('transfer.on', 'On') + ' ' + n.name);
        byId('rcvAcctName').textContent = name;
        byId('rcvAddr').textContent = addr;
        var logo = byId('rcvQrLogo');
        logo.src = a.icon;
        byId('rcvWarn').textContent = 'Send only tokens from ' + n.name + ' network. Sending from another network may result in permanent loss of your tokens.';

        var holder = byId('rcvQr');
        holder.innerHTML = '';
        try {
            var qr = window.qrcode(0, 'M');
            qr.addData(addr);
            qr.make();
            var svg = qr.createSvgTag ? qr.createSvgTag({
                cellSize: 4,
                margin: 0,
                scalable: true
            }) : '';
            if (svg && svg.indexOf('<svg') === 0) holder.innerHTML = svg;
            else {
                var img = document.createElement('img');
                img.style.cssText = 'width:100%;height:100%;image-rendering:pixelated';
                img.src = qr.createDataURL(6, 0);
                holder.appendChild(img);
            }
        } catch (e) {}

        receivePanel._addr = addr;
        closeFlow();
        requestAnimationFrame(function() {
            receivePanel.classList.add('rcv-open');
        });
    }

    function closeReceive() {
        receivePanel.classList.remove('rcv-open');
    }

    // ----- clipboard + toast -----
    function copyText(txt) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(txt).catch(function() {
                fallbackCopy(txt);
            });
        } else {
            fallbackCopy(txt);
        }
    }

    function fallbackCopy(txt) {
        var ta = document.createElement('textarea');
        ta.value = txt;
        ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try {
            document.execCommand('copy');
        } catch (e) {}
        document.body.removeChild(ta);
    }
    var toastTimer;

    function showToast(msg) {
        var el = byId('tfToast');
        if (!el) return;
        el.textContent = msg;
        el.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function() {
            el.classList.remove('show');
        }, 1800);
    }

    // --------------------------------------------------------------- wire
    function startReceiveFlow() {
        state = {
            step: 'asset',
            asset: null,
            network: null
        };
        tfSearch.value = '';
        renderStep();
        openSheet(tfSheet);
    }

    // Drag-to-dismiss: grab the header/handle and pull the sheet down to close.
    function enableSheetDrag(overlay, closeFn) {
        var panel = overlay.querySelector('.settings-panel');
        if (!panel) return;
        var startY = 0,
            dy = 0,
            dragging = false;

        function inHandle(target) {
            return !!(target && target.closest && target.closest('.tf-head, .tf-title, .settings-header'));
        }
        panel.addEventListener('pointerdown', function(e) {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            if (!inHandle(e.target) || e.target.closest('button')) return; // not on the × button
            dragging = true;
            startY = e.clientY;
            dy = 0;
            panel.style.transition = 'none';
            try {
                panel.setPointerCapture(e.pointerId);
            } catch (x) {}
        });
        panel.addEventListener('pointermove', function(e) {
            if (!dragging) return;
            dy = e.clientY - startY;
            if (dy < 0) dy = -Math.min(20, -dy * 0.3); // a little resistance pulling up
            panel.style.transform = 'translateY(' + dy + 'px)';
        });

        function end() {
            if (!dragging) return;
            dragging = false;
            panel.style.transition = '';
            if (dy > 90) closeFn();
            panel.style.transform = '';
        }
        panel.addEventListener('pointerup', end);
        panel.addEventListener('pointercancel', end);
    }

    function init() {
        // Home "Receive" button opens the Receive menu. "Send" is intentionally inert.
        var rcvBtn = byId('actReceive');
        if (rcvBtn) rcvBtn.addEventListener('click', function() {
            openSheet(transferSheet);
        });

        transferSheet.querySelectorAll('.tf-menu-row').forEach(function(row) {
            row.addEventListener('click', function() {
                if (row.getAttribute('data-tf') === 'receive') {
                    closeSheet(transferSheet);
                    startReceiveFlow();
                }
                // 'send' / 'bank' are intentionally inert
            });
        });
        byId('transferSheetClose').addEventListener('click', function() {
            closeSheet(transferSheet);
        });
        transferSheet.addEventListener('click', function(e) {
            if (e.target === transferSheet) closeSheet(transferSheet);
        });

        byId('tfClose').addEventListener('click', closeFlow);
        tfBack.addEventListener('click', goBack);
        tfSheet.addEventListener('click', function(e) {
            if (e.target === tfSheet) closeFlow();
        });
        tfSearch.addEventListener('input', function() {
            if (state.step === 'asset') renderAsset();
        });

        byId('rcvClose').addEventListener('click', closeReceive);
        byId('rcvCopy').addEventListener('click', function() {
            copyText(receivePanel._addr || byId('rcvAddr').textContent);
            showToast(t('transfer.copy_done', 'Address copied'));
        });
        // rcvShare / rcvHelp / rcvVerify are intentionally inert

        // Drag-down-to-dismiss on the bottom sheets.
        enableSheetDrag(transferSheet, function() {
            closeSheet(transferSheet);
        });
        enableSheetDrag(tfSheet, closeFlow);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();