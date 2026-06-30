/* market-graph.js
 * Makes the "Explore the market" coin cards clickable and opens a detail panel
 * (#marketCoinPanel) with a price graph + market statistics.
 * Self-contained: reuses the existing /api/top-movers (coin metadata + stats)
 * and /api/chart (price series) endpoints. Does not touch ledger.js.
 */
(function() {
    'use strict';

    var panel = document.getElementById('marketCoinPanel');
    var scroll = document.querySelector('.market-scroll');
    if (!panel || !scroll) return; // markup absent -> stay inert

    // ---- element refs -------------------------------------------------------
    var el = {
        logoImg: document.getElementById('mcpLogoImg'),
        logoFallback: document.getElementById('mcpLogoFallback'),
        coinName: document.getElementById('mcpCoinName'),
        price: document.getElementById('mcpPrice'),
        changeArrow: document.getElementById('mcpChangeArrow'),
        changeText: document.getElementById('mcpChangeText'),
        chartWrap: document.getElementById('mcpChartWrap'),
        chartLine: document.getElementById('mcpChartLine'),
        chartFill: document.getElementById('mcpChartFill'),
        chartGrad: document.getElementById('mcpChartGradient'),
        chartCross: document.getElementById('mcpChartCross'),
        chartDot: document.getElementById('mcpChartDot'),
        backBtn: document.getElementById('mcpBackBtn'),
        starBtn: document.getElementById('mcpStarBtn'),
        statPrice: document.getElementById('mcpStatPrice'),
        statPriceChange: document.getElementById('mcpStatPriceChange'),
        statVolume: document.getElementById('mcpStatVolume'),
        stat24hRange: document.getElementById('mcpStat24hRange'),
        statAth: document.getElementById('mcpStatAth'),
        statAthDate: document.getElementById('mcpStatAthDate'),
        statAtl: document.getElementById('mcpStatAtl'),
        statAtlDate: document.getElementById('mcpStatAtlDate'),
        statMarketCap: document.getElementById('mcpStatMarketCap'),
        statRank: document.getElementById('mcpStatRank'),
        statCirculating: document.getElementById('mcpStatCirculating'),
        statTotalSupply: document.getElementById('mcpStatTotalSupply'),
        statMaxSupply: document.getElementById('mcpStatMaxSupply')
    };
    var rangeBtns = Array.prototype.slice.call(panel.querySelectorAll('.mcp-range-btn'));

    // ---- formatting helpers -------------------------------------------------
    function fmtPrice(n) {
        if (n == null || isNaN(n)) return '–';
        var min = n < 1 ? 4 : 2;
        var max = n < 1 ? 6 : 2;
        return '$' + Number(n).toLocaleString('en-US', {
            minimumFractionDigits: min,
            maximumFractionDigits: max
        });
    }

    function fmtCompactUsd(n) {
        if (n == null || isNaN(n) || n === 0) return '–';
        return '$' + Number(n).toLocaleString('en-US', {
            notation: 'compact',
            maximumFractionDigits: 2
        });
    }

    function fmtSupply(n, symbol) {
        if (n == null || isNaN(n) || n === 0) return '–';
        var s = Number(n).toLocaleString('en-US', {
            notation: 'compact',
            maximumFractionDigits: 2
        });
        return symbol ? s + ' ' + symbol.toUpperCase() : s;
    }

    function fmtPct(n) {
        if (n == null || isNaN(n)) return '';
        return (n >= 0 ? '+' : '') + Number(n).toFixed(2) + '%';
    }

    function fmtDate(iso) {
        if (!iso) return '';
        var d = new Date(iso);
        if (isNaN(d)) return '';
        return d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    // ---- coin lookup (from /api/top-movers) ---------------------------------
    var bySymbol = {},
        byId = {},
        moversLoaded = false;
    var moversPromise = fetch('/api/top-movers')
        .then(function(r) {
            return r.ok ? r.json() : [];
        })
        .then(function(list) {
            if (Array.isArray(list)) {
                list.forEach(function(c) {
                    if (c && c.symbol) bySymbol[String(c.symbol).toUpperCase()] = c;
                    if (c && c.id) byId[c.id] = c;
                });
            }
            moversLoaded = true;
        })
        .catch(function() {
            moversLoaded = true;
        });

    // ---- chart rendering ----------------------------------------------------
    var chartReq = 0; // guards against out-of-order responses
    var chartSamples = null; // [{x, y, price}] for crosshair
    var currentPriceText = '$0.00';

    function setLineFill(line, fill) {
        if (el.chartLine) el.chartLine.setAttribute('d', line);
        if (el.chartFill) el.chartFill.setAttribute('d', fill);
    }

    function renderChart(coinId, days) {
        var req = ++chartReq;
        setLineFill('', '');
        chartSamples = null;
        fetch('/api/chart?id=' + encodeURIComponent(coinId) + '&vs_currency=usd&days=' + days)
            .then(function(r) {
                return r.ok ? r.json() : null;
            })
            .then(function(data) {
                if (req !== chartReq) return; // a newer range was requested
                var prices = data && data.prices;
                if (!prices || !prices.length) {
                    setLineFill('', '');
                    return;
                }
                drawChart(prices);
            })
            .catch(function() {
                if (req === chartReq) setLineFill('', '');
            });
    }

    function drawChart(prices) {
        var W = el.chartWrap.clientWidth || 360;
        var H = el.chartWrap.clientHeight || 180;
        var padY = 6;
        var lo = Infinity,
            hi = -Infinity,
            i;
        for (i = 0; i < prices.length; i++) {
            var p = prices[i][1];
            if (p < lo) lo = p;
            if (p > hi) hi = p;
        }
        var span = hi - lo || 1;
        var n = prices.length;
        var pts = new Array(n);
        for (i = 0; i < n; i++) {
            var x = n === 1 ? W / 2 : (i / (n - 1)) * W;
            var y = padY + (1 - (prices[i][1] - lo) / span) * (H - 2 * padY);
            pts[i] = {
                x: x,
                y: y,
                price: prices[i][1]
            };
        }
        // make the area gradient span the full chart height (it is userSpaceOnUse)
        if (el.chartGrad) el.chartGrad.setAttribute('y2', H);
        var line = smoothPath(pts);
        var fill = line + ' L' + W.toFixed(2) + ' ' + H + ' L0 ' + H + ' Z';
        setLineFill(line, fill);
        chartSamples = pts;
    }

    // Catmull-Rom -> cubic bezier (control points at 1/6), matching upstream
    function smoothPath(p) {
        var n = p.length;
        if (n === 0) return '';
        if (n === 1) return 'M ' + p[0].x.toFixed(2) + ' ' + p[0].y.toFixed(2);
        var d = 'M ' + p[0].x.toFixed(2) + ' ' + p[0].y.toFixed(2);
        for (var i = 0; i < n - 1; i++) {
            var p0 = p[i - 1] || p[0];
            var p1 = p[i];
            var p2 = p[i + 1];
            var p3 = p[i + 2] || p[n - 1];
            var c1x = p1.x + (p2.x - p0.x) / 6;
            var c1y = p1.y + (p2.y - p0.y) / 6;
            var c2x = p2.x - (p3.x - p1.x) / 6;
            var c2y = p2.y - (p3.y - p1.y) / 6;
            d += ' C ' + c1x.toFixed(2) + ' ' + c1y.toFixed(2) + ', ' +
                c2x.toFixed(2) + ' ' + c2y.toFixed(2) + ', ' +
                p2.x.toFixed(2) + ' ' + p2.y.toFixed(2);
        }
        return d;
    }

    // ---- crosshair ----------------------------------------------------------
    function showCross(clientX) {
        if (!chartSamples || !chartSamples.length) return;
        var rect = el.chartWrap.getBoundingClientRect();
        var x = clientX - rect.left;
        var idx = Math.round((x / rect.width) * (chartSamples.length - 1));
        idx = Math.max(0, Math.min(chartSamples.length - 1, idx));
        var s = chartSamples[idx];
        el.chartCross.setAttribute('x1', s.x);
        el.chartCross.setAttribute('x2', s.x);
        el.chartCross.setAttribute('y1', 0);
        el.chartCross.setAttribute('y2', el.chartWrap.clientHeight);
        el.chartCross.style.display = '';
        el.chartDot.setAttribute('cx', s.x);
        el.chartDot.setAttribute('cy', s.y);
        el.chartDot.style.display = '';
        el.price.textContent = fmtPrice(s.price);
    }

    function hideCross() {
        el.chartCross.style.display = 'none';
        el.chartDot.style.display = 'none';
        el.price.textContent = currentPriceText;
    }
    el.chartWrap.addEventListener('pointerdown', function(e) {
        showCross(e.clientX);
    });
    el.chartWrap.addEventListener('pointermove', function(e) {
        if (e.pressure > 0 || e.buttons) showCross(e.clientX);
    });
    el.chartWrap.addEventListener('pointerup', hideCross);
    el.chartWrap.addEventListener('pointerleave', hideCross);

    // ---- header / stats -----------------------------------------------------
    var activeCoinId = null;

    function setLogo(src, symbol) {
        if (src) {
            el.logoImg.src = src;
            el.logoImg.style.display = '';
            el.logoFallback.style.display = 'none';
            el.logoImg.onerror = function() {
                el.logoImg.style.display = 'none';
                el.logoFallback.textContent = (symbol || '?').charAt(0).toUpperCase();
                el.logoFallback.style.display = '';
            };
        } else {
            el.logoImg.style.display = 'none';
            el.logoFallback.textContent = (symbol || '?').charAt(0).toUpperCase();
            el.logoFallback.style.display = '';
        }
    }

    function applyChange(value) {
        if (value == null || isNaN(value)) {
            el.changeText.textContent = '';
            el.changeArrow.innerHTML = '';
            return;
        }
        var up = value >= 0;
        el.changeText.textContent = fmtPct(value);
        el.changeText.style.color = up ? '#619D55' : '#bb5454';
        el.changeArrow.innerHTML = arrowSvg(up);
    }

    // upstream diagonal arrow (↗ up / ↘ down via vertical flip)
    function arrowSvg(up) {
        var color = up ? '#619D55' : '#bb5454';
        var flip = up ? '' : ' style="transform:scaleY(-1)"';
        var st = 'fill:none;stroke:' + color + ';stroke-width:0.85;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:5.5';
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.2114229 5.2307897"' +
            ' width="10" height="10"' + flip + '>' +
            '<g transform="translate(-186.93514,-57.110186)">' +
            '<path style="' + st + '" d="m 187.53619,61.739932 3.96721,-3.98051"/>' +
            '<path style="' + st + '" d="m 191.72158,61.445892 v -3.91071 h -3.93731"/>' +
            '</g></svg>';
    }

    function fillStats(coin) {
        var sym = coin.symbol;
        el.statPrice.textContent = fmtPrice(coin.current_price);
        el.statPriceChange.textContent = fmtPct(coin.price_change_percentage_24h);
        el.statPriceChange.style.color = (coin.price_change_percentage_24h || 0) >= 0 ? '#619D55' : '#bb5454';
        el.statVolume.textContent = fmtCompactUsd(coin.total_volume);
        el.stat24hRange.textContent =
            (coin.low_24h != null ? fmtPrice(coin.low_24h) : '–') + ' / ' +
            (coin.high_24h != null ? fmtPrice(coin.high_24h) : '–');
        el.statAth.textContent = fmtPrice(coin.ath);
        el.statAthDate.textContent = fmtDate(coin.ath_date);
        el.statAtl.textContent = fmtPrice(coin.atl);
        el.statAtlDate.textContent = fmtDate(coin.atl_date);
        el.statMarketCap.textContent = fmtCompactUsd(coin.market_cap);
        el.statRank.textContent = coin.market_cap_rank != null ? '#' + coin.market_cap_rank : '–';
        el.statCirculating.textContent = fmtSupply(coin.circulating_supply, sym);
        el.statTotalSupply.textContent = fmtSupply(coin.total_supply, sym);
        el.statMaxSupply.textContent = coin.max_supply ? fmtSupply(coin.max_supply, sym) : '∞';
    }

    // ---- open panel ---------------------------------------------------------
    function openPanel(coin) {
        activeCoinId = coin.id;
        el.coinName.textContent = coin.name || coin.symbol || '';
        currentPriceText = fmtPrice(coin.current_price);
        el.price.textContent = currentPriceText;
        setLogo(coin.image, coin.symbol);
        applyChange(coin.price_change_percentage_24h);
        fillStats(coin);

        rangeBtns.forEach(function(b) {
            b.classList.toggle('active', b.dataset.days === '1');
        });
        panel.classList.add('open');

        // render chart after the slide-in so the wrap has measurable width
        setTimeout(function() {
            renderChart(coin.id, 1);
        }, 60);
    }

    // ---- card click delegation ---------------------------------------------
    function resolveCoin(card) {
        var cgId = card.getAttribute('data-cg-id');
        if (cgId && byId[cgId]) return byId[cgId];
        var tickerEl = card.querySelector('.mover-ticker');
        var ticker = tickerEl ? tickerEl.textContent.trim().toUpperCase() : '';
        if (ticker && bySymbol[ticker]) return bySymbol[ticker];
        // fallback: open the chart by whatever CoinGecko id the card carries
        if (cgId) {
            var img = card.querySelector('img');
            return {
                id: cgId,
                name: ticker,
                symbol: ticker,
                image: img ? img.getAttribute('src') : ''
            };
        }
        return null;
    }

    scroll.addEventListener('click', function(e) {
        var card = e.target.closest('.mover-card');
        if (!card || card.classList.contains('view-all-card') || card.classList.contains('gauge-card')) return;

        function go() {
            var coin = resolveCoin(card);
            if (coin) openPanel(coin);
        }
        if (moversLoaded) go();
        else moversPromise.then(go);
    });

    // ---- panel controls -----------------------------------------------------
    el.backBtn.addEventListener('click', function() {
        panel.classList.remove('open');
    });

    el.starBtn.addEventListener('click', function() {
        el.starBtn.classList.toggle('starred');
        var on = el.starBtn.classList.contains('starred');
        var path = el.starBtn.querySelector('#star-empty');
        if (path) path.style.fill = on ? '#f5c451' : '#FFFFFF';
    });

    rangeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (!activeCoinId) return;
            rangeBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            renderChart(activeCoinId, btn.dataset.days);
        });
    });
})();