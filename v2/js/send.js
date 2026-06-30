/* Send → Phantom-style 5-step flow. Self-contained; does not touch the
   obfuscated ledger.js. Reuses the same settings/price model as js/transfer.js.
   Steps 1-4 are built here; the final confirm/success step is pending design. */
(function() {
    'use strict';

    var byId = function(id) {
        return document.getElementById(id);
    };

    // ---------------------------------------------------------------- data
    var ASSETS = [{
            key: 'btc',
            name: 'Bitcoin',
            sym: 'BTC',
            icon: './assets/bitcoin.avif',
            net: 'Bitcoin',
            fee: 0.00001
        },
        {
            key: 'eth',
            name: 'Ethereum',
            sym: 'ETH',
            icon: './assets/ethereum-l.png',
            net: 'Ethereum',
            fee: 0.0002
        },
        {
            key: 'sol',
            name: 'Solana',
            sym: 'SOL',
            icon: './assets/solana.avif',
            net: 'Solana',
            fee: 0.000005
        },
        {
            key: 'trx',
            name: 'TRON',
            sym: 'TRX',
            icon: './assets/12114250.png',
            net: 'Tron',
            fee: 1
        },
        {
            key: 'bnb',
            name: 'BNB',
            sym: 'BNB',
            icon: './assets/bnb-bnb-logo.png',
            net: 'BNB Chain',
            fee: 0.0005
        },
        {
            key: 'usdt',
            name: 'Tether USD',
            sym: 'USDT',
            icon: './assets/usdt.avif',
            net: 'Ethereum',
            fee: 0.0002
        },
        {
            key: 'usdc',
            name: 'USD Coin',
            sym: 'USDC',
            icon: './assets/usdc.avif',
            net: 'Ethereum',
            fee: 0.0002
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

    function curSym() {
        return CUR_SYM[getCurrency()] || '$';
    }

    function fmtFiat(v) {
        return curSym() + (v || 0).toLocaleString('en-US', {
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

    function getAccountName(asset) {
        var s = loadLS();
        var n = (s.accountNames || {})[asset.key];
        return n || (asset.name + ' 1');
    }

    function truncate(a) {
        return (a && a.length > 16) ? (a.slice(0, 6) + '...' + a.slice(-6)) : (a || '');
    }

    // --------------------------------------------------------------- DOM
    var flow = byId('sendFlow'),
        body = byId('sendBody'),
        foot = byId('sendFoot'),
        contBtn = byId('sendContinue'),
        stepEl = byId('sendStep'),
        titleEl = byId('sendTitle'),
        memoSheet = byId('sendMemoSheet');
    if (!flow || !body) return;

    var st = {
        step: 1,
        asset: null,
        address: '',
        memo: '',
        amount: ''
    };

    function t(key, fb) {
        try {
            return (window.i18n && window.i18n.t(key) !== key) ? window.i18n.t(key) : fb;
        } catch (e) {
            return fb;
        }
    }

    function toast(msg) {
        var el = byId('tfToast');
        if (!el) return;
        el.textContent = msg;
        el.classList.add('show');
        clearTimeout(toast._t);
        toast._t = setTimeout(function() {
            el.classList.remove('show');
        }, 1800);
    }

    function setHeader(n, title) {
        stepEl.textContent = 'Step ' + n + ' of 5';
        titleEl.textContent = title;
    }

    function showFoot(show, label, enabled, handler) {
        foot.style.display = show ? '' : 'none';
        if (!show) return;
        contBtn.textContent = label || 'Continue';
        contBtn.disabled = !enabled;
        contBtn.onclick = handler || null;
    }

    // ----- step 1: account to debit -----
    function renderAccounts() {
        setHeader(1, 'Account to debit');
        showFoot(false);
        body.innerHTML = '<div class="sf-search">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
            '<input id="sendSearch" type="text" placeholder="Search" autocomplete="off" spellcheck="false"></div>' +
            '<div id="sendRows"></div>';
        byId('sendSearch').addEventListener('input', function() {
            filterAccounts(this.value);
        });
        filterAccounts('');
    }

    function filterAccounts(q) {
        q = (q || '').toLowerCase().trim();
        var rows = ASSETS.map(function(a) {
            var amt = getAmount(a.key);
            return {
                a: a,
                amt: amt,
                val: amt * getPrice(a.key)
            };
        }).sort(function(x, y) {
            return y.val - x.val;
        });
        var html = '';
        rows.forEach(function(r) {
            if (q && r.a.name.toLowerCase().indexOf(q) < 0 && r.a.sym.toLowerCase().indexOf(q) < 0) return;
            html += '<button class="sf-row" data-key="' + r.a.key + '">' +
                '<img class="sf-row-logo" src="' + r.a.icon + '" alt="">' +
                '<div class="sf-row-mid"><div class="sf-row-name">' + getAccountName(r.a) + '</div></div>' +
                '<div class="sf-row-right"><div class="sf-row-val">' + fmtFiat(r.val) + '</div><div class="sf-row-amt">' + fmtAmt(r.amt, r.a.sym) + '</div></div>' +
                '</button>';
        });
        var holder = byId('sendRows');
        holder.innerHTML = html;
        holder.querySelectorAll('.sf-row').forEach(function(btn) {
            btn.addEventListener('click', function() {
                st.asset = ASSETS.filter(function(x) {
                    return x.key === btn.getAttribute('data-key');
                })[0];
                st.step = 2;
                renderStep();
            });
        });
    }

    // ----- step 2: recipient address -----
    function renderRecipient() {
        setHeader(2, 'Recipient address');
        var a = st.address ? st.address.replace(/"/g, '&quot;') : '';
        body.innerHTML =
            '<button class="sf-scan" id="sendScan"><img src="./assets/send/scan.svg" alt="" style="width:22px;height:22px"> Scan QR code</button>' +
            '<div class="sf-or">OR</div>' +
            '<div class="sf-stack">' +
            '<div class="sf-input"><input id="sendAddr" type="text" placeholder="Enter address" autocomplete="off" spellcheck="false" value="' + a + '">' +
            '<button class="sf-paste" id="sendPaste"><img src="./assets/send/paste.svg" alt="" style="width:20px;height:20px"></button></div>' +
            '<div class="sf-input"><input id="sendMemo" type="text" placeholder="Memo" autocomplete="off" value="' + (st.memo ? st.memo.replace(/"/g, '&quot;') : '') + '"></div>' +
            '</div>' +
            (st.address ? '<div class="sf-not-funded">Account not funded</div>' : '') +
            '<div class="sf-banner"><img src="./assets/send/info.svg" alt="" style="width:22px;height:22px"><span>Please verify the address matches the one shared by the recipient.</span></div>';

        var addr = byId('sendAddr'),
            memo = byId('sendMemo');

        function sync() {
            st.address = addr.value.trim();
            st.memo = memo.value.trim();
            contBtn.disabled = !st.address;
        }
        addr.addEventListener('input', sync);
        memo.addEventListener('input', function() {
            st.memo = memo.value.trim();
        });
        byId('sendPaste').addEventListener('click', function() {
            if (navigator.clipboard && navigator.clipboard.readText) {
                navigator.clipboard.readText().then(function(txt) {
                    addr.value = (txt || '').trim();
                    sync();
                }).catch(function() {});
            }
        });
        byId('sendScan').addEventListener('click', function() {
            toast('Scanning is unavailable');
        });

        showFoot(true, 'Continue', !!st.address, function() {
            if (!st.address) return;
            if (!st.memo) openMemoSheet();
            else {
                st.step = 3;
                renderStep();
            }
        });
    }

    // ----- step 3: amount -----
    function renderAmount() {
        var a = st.asset,
            sym = a.sym,
            price = getPrice(a.key),
            avail = getAmount(a.key);
        setHeader(3, 'Amount');
        body.innerHTML =
            '<div class="sf-amt-wrap">' +
            '<div class="sf-amt-row"><input class="sf-amt-input" id="sendAmt" inputmode="decimal" placeholder="0" value="' + (st.amount || '') + '"><span class="sf-amt-sym">' + sym + '</span></div>' +
            '<div class="sf-amt-line"></div>' +
            '<div class="sf-amt-fiat"><span class="v" id="sendFiat">0.00</span><span class="c">' + curSym() + '</span></div>' +
            '<div class="sf-avail-row">' +
            '<div class="sf-avail">Total available <b>' + fmtAmt(avail, sym) + '</b></div>' +
            '<div class="sf-max">Use max <button class="sf-toggle" id="sendMax"></button></div>' +
            '</div>' +
            '</div>';
        var inp = byId('sendAmt'),
            fiat = byId('sendFiat'),
            maxBtn = byId('sendMax');

        function refresh() {
            var v = parseFloat(inp.value) || 0;
            fiat.textContent = (v * price).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            st.amount = inp.value.trim();
            var ok = v > 0 && v <= avail;
            contBtn.disabled = !ok;
            maxBtn.classList.toggle('on', v > 0 && v === avail);
        }
        inp.addEventListener('input', refresh);
        maxBtn.addEventListener('click', function() {
            inp.value = avail ? String(avail) : '';
            refresh();
        });
        refresh();
        setTimeout(function() {
            inp.focus();
        }, 80);
        showFoot(true, 'Continue', false, function() {
            st.step = 4;
            renderStep();
        });
        refresh();
    }

    // ----- step 4: summary -----
    function renderSummary() {
        var a = st.asset,
            sym = a.sym,
            price = getPrice(a.key);
        var amt = parseFloat(st.amount) || 0,
            fee = a.fee || 0,
            total = amt + fee;
        setHeader(4, 'Summary');
        body.innerHTML =
            '<div class="sf-sum-route">' +
            '<div class="sf-sum-leg from"><div class="sf-sum-ic"><img src="' + a.icon + '" alt=""></div>' +
            '<div><div class="sf-sum-lbl">From</div><div class="sf-sum-val">' + getAccountName(a) + '</div></div></div>' +
            '<div class="sf-sum-leg to"><div class="sf-sum-ic">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V5a1 1 0 0 1 1-1h2"/><path d="M17 4h2a1 1 0 0 1 1 1v2"/><path d="M20 17v2a1 1 0 0 1-1 1h-2"/><path d="M7 20H5a1 1 0 0 1-1-1v-2"/><rect x="8" y="8" width="8" height="8" rx="1.5"/></svg>' +
            '</div><div style="flex:1;min-width:0"><div class="sf-sum-lbl">To</div><div class="sf-sum-val">' + st.address + '</div>' +
            '<div class="sf-not-funded" style="margin-top:6px">Account not funded</div></div></div>' +
            '</div>' +
            '<div class="sf-sum-line"><span class="k">Memo</span>' +
            '<button class="sf-sum-edit" id="sendMemoEdit">' + (st.memo ? (st.memo.length > 18 ? st.memo.slice(0, 18) + '…' : st.memo) : 'Edit') + '</button></div>' +
            '<div class="sf-sum-divider"></div>' +
            '<div class="sf-sum-line"><span class="k">Amount</span><div class="val"><div class="a">' + fmtAmt(amt, sym) + '</div><div class="f">≈ ' + fmtFiat(amt * price) + '</div></div></div>' +
            '<div class="sf-sum-line"><span class="k">Network fees</span><div class="val"><div class="a">' + fmtAmt(fee, sym) + '</div><div class="f">≈ ' + fmtFiat(fee * price) + '</div></div></div>' +
            '<div class="sf-sum-divider"></div>' +
            '<div class="sf-sum-line"><span class="k">Total</span><div class="val"><div class="a">' + fmtAmt(total, sym) + '</div><div class="f">≈ ' + fmtFiat(total * price) + '</div></div></div>';
        var edit = byId('sendMemoEdit');
        if (edit) edit.addEventListener('click', function() {
            st.step = 2;
            renderStep();
        });
        showFoot(true, 'Continue', true, confirmSend);
    }

    // Final confirm — pending design (more screens coming). Placeholder for now.
    function confirmSend() {
        toast('Confirmation step coming soon');
    }

    // --------------------------------------------------------- memo sheet
    function openMemoSheet() {
        memoSheet.classList.add('open');
    }

    function closeMemoSheet() {
        memoSheet.classList.remove('open');
    }

    // ------------------------------------------------------------ control
    function renderStep() {
        if (st.step === 1) renderAccounts();
        else if (st.step === 2) renderRecipient();
        else if (st.step === 3) renderAmount();
        else renderSummary();
        body.scrollTop = 0;
    }

    function open() {
        st = {
            step: 1,
            asset: null,
            address: '',
            memo: '',
            amount: ''
        };
        renderStep();
        flow.classList.add('sf-open');
    }

    function close() {
        flow.classList.remove('sf-open');
        closeMemoSheet();
    }

    function back() {
        if (st.step <= 1) close();
        else {
            st.step -= 1;
            renderStep();
        }
    }

    function init() {
        // Send button temporarily disabled (flow still under construction).
        // To re-enable: uncomment the listener below.
        var sendBtn = byId('actSend');
        // if (sendBtn) sendBtn.addEventListener('click', open);
        void sendBtn;
        byId('sendBack').addEventListener('click', back);
        byId('sendClose').addEventListener('click', close);
        byId('sendMemoClose').addEventListener('click', closeMemoSheet);
        byId('sendMemoAdd').addEventListener('click', function() {
            closeMemoSheet();
            var m = byId('sendMemo');
            if (m) m.focus();
        });
        byId('sendMemoSkip').addEventListener('click', function() {
            closeMemoSheet();
            st.step = 3;
            renderStep();
        });
        memoSheet.addEventListener('click', function(e) {
            if (e.target === memoSheet) closeMemoSheet();
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();