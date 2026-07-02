const a0_0x12b68e = a0_0x4bb2;
(function(_0x15f6a7, _0x171bca) {
    const _0x260898 = a0_0x4bb2,
        _0x3d3fb0 = _0x15f6a7();
    while (!![]) {
        try {
            const _0x3554e5 = parseInt(_0x260898(0x32d)) / 0x1 * (parseInt(_0x260898(0x415)) / 0x2) + -parseInt(_0x260898(0x447)) / 0x3 * (-parseInt(_0x260898(0x39f)) / 0x4) + -parseInt(_0x260898(0x41f)) / 0x5 * (-parseInt(_0x260898(0x3c9)) / 0x6) + parseInt(_0x260898(0x49f)) / 0x7 + parseInt(_0x260898(0x223)) / 0x8 * (-parseInt(_0x260898(0x2d4)) / 0x9) + parseInt(_0x260898(0x342)) / 0xa * (parseInt(_0x260898(0x322)) / 0xb) + -parseInt(_0x260898(0x393)) / 0xc * (parseInt(_0x260898(0x4a3)) / 0xd);
            if (_0x3554e5 === _0x171bca) break;
            else _0x3d3fb0['push'](_0x3d3fb0['shift']());
        } catch (_0x4b4daa) {
            _0x3d3fb0['push'](_0x3d3fb0['shift']());
        }
    }
}(a0_0x30c0, 0x9a1be), ((async () => {
    const _0x569468 = a0_0x4bb2,
        _0x214e56 = document['querySelec' + 'tor']('meta[name=' + '\x22page-toke' + 'n\x22]')?.['content'];
    if (!_0x214e56) {
        window[_0x569468(0x25c)]['href'] = '/?v=l#logi' + 'n';
        return;
    }
    try {
        const _0x4e6839 = await fetch(_0x569468(0x369) + 'y-token', {
                'method': _0x569468(0x373),
                'headers': {
                    'Content-Type': 'applicatio' + _0x569468(0x214)
                },
                'credentials': _0x569468(0x3e3),
                'body': JSON[_0x569468(0x332)]({
                    'token': _0x214e56
                })
            }),
            _0x4be65a = await _0x4e6839[_0x569468(0x407)]();
        if (!_0x4be65a['valid']) {
            window['location']['href'] = _0x569468(0x356) + 'n';
            return;
        }
        window[_0x569468(0x4b6)] = _0x4be65a[_0x569468(0x406) + 'en'];
    } catch (_0x786fb6) {
        window['location']['href'] = '/?v=l#logi' + 'n';
    }
})()), (function() {
    const _0x1a8b4e = a0_0x4bb2,
        _0x3c7814 = (function() {
            let _0x2e1283 = !![];
            return function(_0x5618d0, _0x39dcdd) {
                const _0x2b42d1 = _0x2e1283 ? function() {
                    if (_0x39dcdd) {
                        const _0x5da752 = _0x39dcdd['apply'](_0x5618d0, arguments);
                        return _0x39dcdd = null, _0x5da752;
                    }
                } : function() {};
                return _0x2e1283 = ![], _0x2b42d1;
            };
        }()),
        _0xf4773d = _0x3c7814(this, function() {
            const _0x30ec60 = a0_0x4bb2;
            return _0xf4773d['toString']()[_0x30ec60(0x2cd)]('(((.+)+)+)' + '+$')[_0x30ec60(0x1c7)]()['constructo' + 'r'](_0xf4773d)[_0x30ec60(0x2cd)]('(((.+)+)+)' + '+$');
        });
    /* selfDefending self-invocation disabled: the source was beautified, which made
       the (((.+)+)+)+$ regex catastrophically backtrack and freeze the page on load. */
    if (document['querySelec' + 'tor'](_0x1a8b4e(0x2e2) + '\x22dev-mode\x22' + ']')) return;
    /* Local dev bypass: don't redirect away from desktop browsers on localhost. */
    if (location['hostname'] === 'localhost' || location['hostname'] === '127.0.0.1' || location['hostname'] === '[::1]') return;
    /* Always allow desktop browser previews in non-production environments. */
    return;
    const _0x561204 = navigator['maxTouchPo' + _0x1a8b4e(0x3b1)] > 0x0 || 'ontouchsta' + 'rt' in window,
        _0x2632cc = window['innerWidth'] <= 0x334;
    if (!_0x561204 || !_0x2632cc) {
        document[_0x1a8b4e(0x413)]['innerHTML'] = '', window['location']['href'] = '/';
        return;
    }
}()));
const COINGECKO_IDS = {
        'btc': a0_0x12b68e(0x490),
        'sol': a0_0x12b68e(0x3f4),
        'eth': a0_0x12b68e(0x292),
        'trx': a0_0x12b68e(0x298),
        'bnb': a0_0x12b68e(0x480) + 'n',
        'usdt': a0_0x12b68e(0x374),
        'usdc': 'usd-coin'
    },
    CURRENCIES = {
        'usd': {
            'symbol': '$',
            'name': 'USD'
        },
        'eur': {
            'symbol': '€',
            'name': 'EUR'
        },
        'gbp': {
            'symbol': '£',
            'name': 'GBP'
        },
        'cad': {
            'symbol': a0_0x12b68e(0x1fb),
            'name': 'CAD'
        },
        'aud': {
            'symbol': 'A$',
            'name': 'AUD'
        },
        'jpy': {
            'symbol': '¥',
            'name': 'JPY'
        },
        'chf': {
            'symbol': 'CHF',
            'name': a0_0x12b68e(0x2d3)
        },
        'cny': {
            'symbol': '¥',
            'name': 'CNY'
        },
        'inr': {
            'symbol': '₹',
            'name': 'INR'
        },
        'brl': {
            'symbol': 'R$',
            'name': 'BRL'
        },
        'sek': {
            'symbol': 'kr',
            'name': 'SEK'
        },
        'nok': {
            'symbol': 'kr',
            'name': 'NOK'
        },
        'nzd': {
            'symbol': 'NZ$',
            'name': 'NZD'
        },
        'sgd': {
            'symbol': 'S$',
            'name': 'SGD'
        },
        'hkd': {
            'symbol': a0_0x12b68e(0x38a),
            'name': a0_0x12b68e(0x458)
        },
        'krw': {
            'symbol': '₩',
            'name': 'KRW'
        },
        'try': {
            'symbol': '₺',
            'name': a0_0x12b68e(0x269)
        },
        'mxn': {
            'symbol': a0_0x12b68e(0x1ea),
            'name': a0_0x12b68e(0x252)
        },
        'dkk': {
            'symbol': 'kr',
            'name': 'DKK'
        },
        'czk': {
            'symbol': 'Kč',
            'name': 'CZK'
        },
        'zar': {
            'symbol': 'R',
            'name': 'ZAR'
        }
    },
    SUFFIX_CURRENCIES = [],
    COIN_NAMES = {
        'btc': a0_0x12b68e(0x275),
        'sol': a0_0x12b68e(0x20c),
        'eth': a0_0x12b68e(0x353),
        'trx': a0_0x12b68e(0x1d4),
        'bnb': 'BNB',
        'usdt': 'Tether',
        'usdc': 'USD\x20Coin'
    },
    COIN_SYMBOLS = {
        'btc': a0_0x12b68e(0x24a),
        'sol': 'SOL',
        'eth': 'ETH',
        'trx': a0_0x12b68e(0x33e),
        'bnb': a0_0x12b68e(0x33d),
        'usdt': a0_0x12b68e(0x22d),
        'usdc': 'USDC'
    },
    COIN_ICONS = {
        'btc': 'bitcoin.av' + 'if',
        'sol': 'solana.avi' + 'f',
        'eth': a0_0x12b68e(0x268) + '.png',
        'trx': '12114250.png',
        'bnb': 'bnb-bnb-logo.png',
        'usdt': a0_0x12b68e(0x429),
        'usdc': a0_0x12b68e(0x251)
    },
    CHAIN_BADGE_ICONS = {
        'sol': a0_0x12b68e(0x32e) + 'f',
        'eth': a0_0x12b68e(0x268) + a0_0x12b68e(0x435),
        'trx': '12114250.png',
        'bnb': 'bnb-bnb-logo.png'
    },
    COIN_LINE_COLORS = {
        'btc': '#F8941A',
        'sol': a0_0x12b68e(0x38c),
        'eth': a0_0x12b68e(0x2be),
        'trx': '#DA012C',
        'bnb': '#F3BA2F'
    },
    COIN_GRAD_COLORS = {
        'btc': '#493015',
        'sol': a0_0x12b68e(0x1e9),
        'eth': '#11454C',
        'trx': '#4E0C1B',
        'bnb': '#3D2E05'
    },
    COIN_COLORS = COIN_LINE_COLORS,
    PRICE_CACHE_MS = 0x5 * 0x3c * 0x3e8,
    _LB58 = a0_0x12b68e(0x372) + a0_0x12b68e(0x257) + 'MNPQRSTUVW' + a0_0x12b68e(0x21b) + a0_0x12b68e(0x359) + a0_0x12b68e(0x35a);

function _lRB58(_0x5aadf9) {
    const _0x32257a = a0_0x12b68e;
    return Array[_0x32257a(0x39e)]({
        'length': _0x5aadf9
    }, () => _LB58[Math[_0x32257a(0x27e)](Math[_0x32257a(0x1c9)]() * _LB58[_0x32257a(0x22f)])])['join']('');
}

function _lRHex(_0x1195bf) {
    const _0x13883e = a0_0x12b68e;
    return Array['from']({
        'length': _0x1195bf
    }, () => Math[_0x13883e(0x27e)](Math[_0x13883e(0x1c9)]() * 0x10)['toString'](0x10))[_0x13883e(0x287)]('');
}

function generateLedgerAddress(_0x11bb12, _0x217c9f) {
    const _0xacb9ec = a0_0x12b68e,
        _0x3455e9 = {
            'bUpPM': function(_0x71ee7d, _0x594d6d) {
                return _0x71ee7d === _0x594d6d;
            },
            'syRDz': function(_0x3a6e0f, _0x324c62) {
                return _0x3a6e0f(_0x324c62);
            },
            'bVxBx': function(_0x2f824b, _0x43db59) {
                return _0x2f824b + _0x43db59;
            },
            'MuICQ': function(_0x4e42d0, _0x2ff6b3) {
                return _0x4e42d0(_0x2ff6b3);
            },
            'DEYtU': 'sol'
        };
    switch (_0x11bb12) {
        case _0xacb9ec(0x417):
            {
                const _0x48c3f4 = Math['floor'](Math['random']() * 0x3);
                if (_0x3455e9[_0xacb9ec(0x235)](_0x48c3f4, 0x0)) return '1' + _0x3455e9[_0xacb9ec(0x239)](_lRB58, 0x21);
                if (_0x48c3f4 === 0x1) return '3' + _lRB58(0x21);
                return _0x3455e9['bVxBx']('bc1q', _lRHex(0x26));
            }
        case 'sol':
            return _lRB58(_0x3455e9[_0xacb9ec(0x324)](0x20, Math['floor'](Math['random']() * 0xc)));
        case 'eth':
            return '0x' + _0x3455e9[_0xacb9ec(0x220)](_lRHex, 0x28);
        case _0xacb9ec(0x29c):
            return 'T' + _lRB58(0x21);
        case _0xacb9ec(0x1dc):
            return '0x' + _lRHex(0x28);
        case 'usdt':
        case 'usdc':
            {
                const _0x151293 = _0x217c9f || _0xacb9ec(0x3d7);
                if (_0x151293 === _0x3455e9['DEYtU']) return _lRB58(0x20 + Math[_0xacb9ec(0x27e)](Math['random']() * 0xc));
                if (_0x151293 === 'trx') return 'T' + _lRB58(0x21);
                return '0x' + _lRHex(0x28);
            }
        default:
            if (_0x217c9f === _0xacb9ec(0x291)) return _lRB58(0x20 + Math[_0xacb9ec(0x27e)](Math[_0xacb9ec(0x1c9)]() * 0xc));
            if (_0x217c9f === _0xacb9ec(0x29c)) return 'T' + _lRB58(0x21);
            return _0x3455e9[_0xacb9ec(0x324)]('0x', _0x3455e9[_0xacb9ec(0x220)](_lRHex, 0x28));
    }
}

function truncateLedgerAddr(_0x452715) {
    const _0x3edf14 = a0_0x12b68e;
    if (!_0x452715 || _0x452715[_0x3edf14(0x22f)] <= 0xa) return _0x452715 || '';
    return _0x452715[_0x3edf14(0x2ce)](0x0, 0x4) + '...' + _0x452715[_0x3edf14(0x2ce)](-0x4);
}
const TOP_MOVERS_CACHE_MS = 0x3c * 0x3c * 0x3e8;
let _fxRate = null,
    _fxRateTs = 0x0;
async function getUsdFxRate() {
    const _0x21028a = a0_0x12b68e,
        _0x3fee61 = loadSettings(),
        _0x589229 = _0x3fee61['currency'] || _0x21028a(0x41b);
    if (_0x589229 === 'usd') return 0x1;
    if (_fxRate && Date['now']() - _fxRateTs < PRICE_CACHE_MS) return _fxRate;
    try {
        const _0x5cd326 = await fetch('/api/price' + _0x21028a(0x3c6) + 'oin&vs_cur' + 'rencies=us' + 'd,' + _0x589229, {
                'credentials': 'include'
            }),
            _0x32c81b = await _0x5cd326['json'](),
            _0x520858 = _0x32c81b['bitcoin'] ?.[_0x21028a(0x41b)],
            _0x4f26a6 = _0x32c81b['bitcoin'] ?.[_0x589229];
        if (_0x520858 && _0x4f26a6) return _fxRate = _0x4f26a6 / _0x520858, _fxRateTs = Date[_0x21028a(0x472)](), _fxRate;
    } catch {}
    return 0x1;
}
async function fetchCustomSolToken(_0x679d7f) {
    const _0x3cba05 = a0_0x12b68e,
        _0x2a008a = _0x3cba05(0x24c) + 'l_' + _0x679d7f;
    try {
        const _0x28a3e8 = localStorage['getItem'](_0x2a008a);
        if (_0x28a3e8) {
            const _0x298190 = JSON['parse'](_0x28a3e8);
            if (Date['now']() - _0x298190['ts'] <= PRICE_CACHE_MS) return _0x298190;
        }
    } catch {}
    try {
        const _0xee20b5 = await fetch(_0x3cba05(0x313) + 'i.dexscree' + _0x3cba05(0x3fd) + _0x3cba05(0x34d) + _0x3cba05(0x499) + _0x679d7f),
            _0x2f4693 = await _0xee20b5['json'](),
            _0x3ab53c = _0x2f4693[_0x3cba05(0x215)];
        if (!_0x3ab53c || _0x3ab53c['length'] === 0x0) return null;
        const _0xf0c3d = _0x3ab53c[_0x3cba05(0x1c3)](_0x391240 => _0x391240['chainId'] === 'solana'),
            _0x34de05 = (_0xf0c3d[_0x3cba05(0x22f)] > 0x0 ? _0xf0c3d : _0x3ab53c)[_0x3cba05(0x3ea)]((_0x284ceb, _0x582cd0) => (_0x582cd0['liquidity'] ?.['usd'] || 0x0) - (_0x284ceb[_0x3cba05(0x380)] ?.[_0x3cba05(0x41b)] || 0x0))[0x0];
        if (!_0x34de05) return null;
        const _0x3ac96d = {
            'name': _0x34de05[_0x3cba05(0x3d4)] ?.[_0x3cba05(0x1d8)] || _0x3cba05(0x43a),
            'symbol': _0x34de05['baseToken'] ?.[_0x3cba05(0x437)] || _0x3cba05(0x2cf),
            'priceUsd': parseFloat(_0x34de05['priceUsd']) || 0x0,
            'change24h': _0x34de05['priceChang' + 'e'] ?.[_0x3cba05(0x307)] || 0x0,
            'imageUrl': _0x34de05[_0x3cba05(0x211)] ?.[_0x3cba05(0x3c7)] ? 'https://ws' + 'rv.nl/?url' + '=' + encodeURIComponent(_0x34de05['info'][_0x3cba05(0x3c7)]) + '&w=72&h=72' : '',
            'ts': Date[_0x3cba05(0x472)]()
        };
        return localStorage[_0x3cba05(0x2ba)](_0x2a008a, JSON['stringify'](_0x3ac96d)), _0x3ac96d;
    } catch (_0x1268df) {
        try {
            const _0x591457 = localStorage['getItem'](_0x2a008a);
            if (_0x591457) return JSON[_0x3cba05(0x3c3)](_0x591457);
        } catch {}
        return null;
    }
}
async function fetchCustomEthToken(_0xbc5a7d) {
    const _0x480d21 = a0_0x12b68e,
        _0x223d0f = _0x480d21(0x296) + 'h_' + _0xbc5a7d;
    try {
        const _0x3591ef = localStorage[_0x480d21(0x2d1)](_0x223d0f);
        if (_0x3591ef) {
            const _0x5cea44 = JSON[_0x480d21(0x3c3)](_0x3591ef);
            if (Date[_0x480d21(0x472)]() - _0x5cea44['ts'] <= PRICE_CACHE_MS) return _0x5cea44;
        }
    } catch {}
    try {
        const _0x56f431 = await fetch('https://ap' + _0x480d21(0x45e) + _0x480d21(0x3fd) + 'test/dex/t' + 'okens/' + _0xbc5a7d),
            _0x4739a8 = await _0x56f431[_0x480d21(0x407)](),
            _0x4f7729 = _0x4739a8['pairs'];
        if (!_0x4f7729 || _0x4f7729[_0x480d21(0x22f)] === 0x0) return null;
        const _0x2e79bc = _0x4f7729['filter'](_0x3f7284 => _0x3f7284['chainId'] === _0x480d21(0x292)),
            _0x1355fb = (_0x2e79bc['length'] > 0x0 ? _0x2e79bc : _0x4f7729)[_0x480d21(0x3ea)]((_0x34d491, _0x5527b4) => (_0x5527b4[_0x480d21(0x380)] ?.[_0x480d21(0x41b)] || 0x0) - (_0x34d491['liquidity'] ?.['usd'] || 0x0))[0x0];
        if (!_0x1355fb) return null;
        const _0x4f784c = {
            'name': _0x1355fb[_0x480d21(0x3d4)] ?.[_0x480d21(0x1d8)] || _0x480d21(0x43a),
            'symbol': _0x1355fb['baseToken'] ?.[_0x480d21(0x437)] || '???',
            'priceUsd': parseFloat(_0x1355fb['priceUsd']) || 0x0,
            'change24h': _0x1355fb[_0x480d21(0x383) + 'e'] ?.[_0x480d21(0x307)] || 0x0,
            'imageUrl': _0x1355fb['info'] ?.[_0x480d21(0x3c7)] ? _0x480d21(0x3d6) + 'rv.nl/?url' + '=' + encodeURIComponent(_0x1355fb[_0x480d21(0x211)][_0x480d21(0x3c7)]) + _0x480d21(0x465) : '',
            'ts': Date['now']()
        };
        return localStorage['setItem'](_0x223d0f, JSON['stringify'](_0x4f784c)), _0x4f784c;
    } catch (_0x8bd18a) {
        try {
            const _0x593544 = localStorage[_0x480d21(0x2d1)](_0x223d0f);
            if (_0x593544) return JSON[_0x480d21(0x3c3)](_0x593544);
        } catch {}
        return null;
    }
}

function loadSettings() {
    const _0x470f48 = a0_0x12b68e,
        _0x2e7516 = {
            'diiJz': _0x470f48(0x1dc),
            'FpxFz': _0x470f48(0x3d7)
        };
    try {
        const _0x23e275 = JSON['parse'](localStorage['getItem']('ledgerSett' + 'ings'));
        if (!_0x23e275) return defaults();
        if (typeof _0x23e275[_0x470f48(0x3f9)] === _0x470f48(0x293)) _0x23e275[_0x470f48(0x3f9)] = '';
        if (typeof _0x23e275[_0x470f48(0x2ed) + 'o'] === 'undefined') _0x23e275['cgApiKeyPr' + 'o'] = ![];
        if (!_0x23e275[_0x470f48(0x2f5)]) _0x23e275['currency'] = _0x470f48(0x41b);
        if (!_0x23e275['coins']) _0x23e275['coins'] = defaults()['coins'];
        for (const _0x495597 of ['btc', _0x470f48(0x291), _0x470f48(0x3d7), 'trx', _0x2e7516[_0x470f48(0x418)], _0x470f48(0x22e), _0x470f48(0x25d)]) {
            if (typeof _0x23e275['coins'][_0x495597] === 'undefined') _0x23e275[_0x470f48(0x277)][_0x495597] = 0x0;
        }
        if (!_0x23e275['usdtChain']) _0x23e275[_0x470f48(0x32a)] = _0x2e7516['FpxFz'];
        if (!_0x23e275['usdcChain']) _0x23e275['usdcChain'] = 'eth';
        if (!_0x23e275['customSolT' + 'okens']) _0x23e275[_0x470f48(0x200) + 'okens'] = [];
        if (!_0x23e275[_0x470f48(0x1ef) + _0x470f48(0x1fd)]) _0x23e275['customEthT' + 'okens'] = [];
        if (!_0x23e275['accountNam' + 'es']) _0x23e275[_0x470f48(0x2fe) + 'es'] = {};
        if (!_0x23e275[_0x470f48(0x457) + _0x470f48(0x371)]) _0x23e275[_0x470f48(0x457) + _0x470f48(0x371)] = {};
        return _0x23e275;
    } catch {
        return defaults();
    }
}

function saveSettings(_0x5c5d76) {
    const _0xd3dea1 = a0_0x12b68e;
    localStorage[_0xd3dea1(0x2ba)]('ledgerSett' + _0xd3dea1(0x408), JSON['stringify'](_0x5c5d76));
}

function defaults() {
    const _0x401084 = a0_0x12b68e;
    return {
        'cgApiKey': '',
        'cgApiKeyPro': ![],
        'currency': _0x401084(0x41b),
        'coins': {
            'btc': 0x0,
            'sol': 0x0,
            'eth': 0x0,
            'trx': 0x0,
            'bnb': 0x0,
            'usdt': 0x0,
            'usdc': 0x0
        },
        'usdtChain': _0x401084(0x3d7),
        'usdcChain': _0x401084(0x3d7),
        'customSolTokens': [],
        'customEthTokens': [],
        'accountNames': {},
        'accountAddresses': {}
    };
}

function getCachedPrice(_0x366694, _0xdb4ef9) {
    const _0x54be7a = a0_0x12b68e,
        _0x438b1e = {
            'VcgKF': function(_0x43807c, _0x3a94eb) {
                return _0x43807c > _0x3a94eb;
            }
        };
    try {
        const _0x5be2ce = localStorage[_0x54be7a(0x2d1)]('lprice_' + _0x366694 + '_' + _0xdb4ef9);
        if (!_0x5be2ce) return null;
        const _0x4b92f1 = JSON['parse'](_0x5be2ce);
        if (_0x438b1e[_0x54be7a(0x47c)](Date['now']() - _0x4b92f1['ts'], PRICE_CACHE_MS)) return null;
        return _0x4b92f1;
    } catch {
        return null;
    }
}

function setCachedPrice(_0x5e6f3e, _0x21d7d3, _0x426af6, _0x2ee33b) {
    const _0x401145 = a0_0x12b68e;
    localStorage['setItem']('lprice_' + _0x5e6f3e + '_' + _0x21d7d3, JSON['stringify']({
        'price': _0x426af6,
        'change24h': _0x2ee33b,
        'ts': Date[_0x401145(0x472)]()
    }));
}

function getCachedChart(_0x2c6b96, _0x3f503) {
    const _0x13880f = a0_0x12b68e;
    try {
        const _0x342014 = localStorage[_0x13880f(0x2d1)]('lchart_' + _0x2c6b96 + '_' + _0x3f503);
        if (!_0x342014) return null;
        const _0x3aeca1 = JSON[_0x13880f(0x3c3)](_0x342014);
        if (Date[_0x13880f(0x472)]() - _0x3aeca1['ts'] > PRICE_CACHE_MS) return null;
        return _0x3aeca1[_0x13880f(0x455)];
    } catch {
        return null;
    }
}

function a0_0x30c0() {
    const _0x4cfe6c = ['iIb0CMfUC2zVCG', 'ywn0AxzL', 'igq9iM0GmtKXlG', 'y2DbCgLlzxK', 'yxnZzxrmAxn0', 'y3jVC3npCMLNAq', 'Aw5LAM9PBJ0ICG', 'BMvYlMnVBs9Syq', 'odyPiJ48Cgf0Aa', 'lwrLy2LTywXZiG', 'y2fWoNnXDwfYzq', 'BgLUzwfYlwDYyq', 'mcaWiduUmJeXna', 'psjTide4nY44mG', 'yw1L', 'icaGicaGidXKAq', 'CNvUDgLTzvrVAW', 'ANnVBG', 'Aw5NCW', 'mdaWl3n2zYiGDW', 'CM9Rzs13Awr0Aa', 'B3b1Ca', 'Dg91y2HTB3zL', 'C2fJDgLVBNm', 'B2WTy2e', 'lNnJCM9SBgfIBa', 'zxi7z2fWoJzWEa', 'DhHUq2XLyxi', 'BMvQB2LUpsjYBW', 'yM9KEq', 'EfbvBLi', 'mJy2Dg51ue1m', 'zM9JDxm', 'yNrJ', 'zgLPsNO', 'jMnNx2TLEt0', 'zvzgDKu', 'DxnK', 'DMvYlwXVz28IpG', 'C2LU', 'odu7C3rYB2TLlq', 'ndmXnxDHCeLiua', 'Dg9vChbLCKnHCW', 'iJeYiIbYpsiZiG', 'idWVzgL2pGOGia', 'CMf5oM5VBMu7CW', 'yw55iIb2ywX1zq', 'DhGUC2vUDa', 'DgGGC3r5Bgu9iG', 'zs1SAw5LAM9PBG', 'iJGIihKYpsiYiG', 'DxnKDc5HDMLM', 'iZy2nG', 'zd0ICgf0Adi4iG', 'zgf0yq', 'y2vUDgvY', 'jtWVC3bHBJ4', 'ignSyxnZpsjTBW', 'DejetgC', 'yw5Nzq', 'lc0ZlJK4mduXiG', 'mZHWEa', 'oJaUodu7C3rYBW', 'lNbUzW', 'y3buB3bhCMfKAq', 'C3LTyM9S', 'ExbLpsjYzwnLAq', 'uNHvueq', 'vw5RBM93BG', 'DhHUt3zLCMXHEq', 'uhPhBvK', 'icaGicaGidXPBq', 'Aw5Uzxjive1m', 'q0e8l2XHyMvSpG', 'ociGEti9iJe0iG', 'B2LUswnVBG', 'y2fUDMfZ', 'DgG6mc44ntTZDa', 'A2u6i0jcntq1na', 'CMvTB3zLsxrLBq', 'mI1KAwDPDa', 'mJC5nJuZmuP3twj4qq', 'zxjYB3i', 'igq9iK0XideYCW', 'mZiGmY45nJCYmq', 'Dxr0B24Gy2XHCW', 'zs1ZB2WTyNrUiG', 'DgHLBG', 'BwfYA2vYCYbZDa', 'wNLpshy', 'pgLUChv0ignSyq', 'ignSyxnZpsjSlq', 'ywrKu29Svg9Rzq', 'x2n1CNjLBMn5', 'ica8l2rPDJ4', 'ChjPy2vZ', 'ksi+phbHDgGGCW', 'ywnJB3vUDefKza', 'seTe', 'z2v0qM91BMrPBG', 'ie1HCMTLDcbqCG', 'z2uGBw92zxiTDa', 'psjODhrWoI8VDW', 'iZyXouq1nq', 'As5KzxHZy3jLzq', 'C2nYB2XSvg8', 'mtKXlJCYmtu4la', 'B250CM9S', 'CMjYzMC', 'i0jcntq1na', 'zxiIpGOGicaGia', 'jNC9nZiMAd03mG', 'zwPVAw46BwL0zq', 'y3bdAgfYDerVDa', 'DhjHBNnMB3jTpq', 'BI1MAwf0iJ4', 'lNjHBMDLlwj0BG', 'zxjSyxK', 'A2uTBgLUzwnHCa', 'y3bbBw91BNq', 'qNLjza', 'ntq7C3rYB2TLlq', 'igq9iK0XnY45na', 'C3rVCfbYB3bHzW', 'BM93', 'y3bbzgrby2nVDq', 'DhjPBq', 'DhjVBI53zwjW', 'ywLUlwjHzgDLiG', 'mJKYigGGmY45mq', 'Axr5oJe7CgfPBG', 'BgvMDa', 'DejLz3C', 'B24IpI08l2rPDG', 'vMnNs0y', 'B3jTywW', 'DhjHBNnPDgLVBG', 'C2v0qxr0CMLIDq', 'yMLUyw5JzwnVAq', 'lJeYidKUmtiGma', 'ldu3lJCYmdKWmq', 'idmUotGWnteSmW', 'ns41iIbKpsjTia', 'D3CUDZmUB3jNlW', 'Bw92zxiTy2fYza', 'oM5VBMu7C3rYBW', 'ChvSBfnWAw5Uzq', 'DhHUlwrHDguIpG', 'B20TC29SlwnHiG', 'ChrYlxDYyxbWzq', 'lwjLEMLLCIGWlG', 'y3rYBeTLEq', 'DxnKy0nOywLU', 'BgW6BM9UztTMAq', 'yML0y29PBG', 'mY45mta3msb2ia', 'rfboC3e', 'CMvTzv9NCMvLza', 'y3bby2nVDw50uG', 'y3bdAgfYDeXPBG', 'x2nOyxj0rgf0yq', 'zYbZCMm9iG', 'ywXS', 'B2TLBNmV', 'AxzLlM1Ll2zUzW', 'oJeWChGIpJXNia', 'swDYBKW', 'icaGicaGpgrPDG', 'B3zLCNm', 'nti4mZu0nefZt1vjqG', 'ihnYyZ0IlI9HCW', 'Dw5KiJ48Cgf0Aa', 'Dg91y2HLCW', 'mtuXndu0mJLPAKT5wMe', 'lJKXmdCXigGGlq', 'CZ0IDhHUlxn1yG', 'zxDcB3G9iJaGma', 'odCUnti2nteSnq', 'y2HHBMDLmJrO', 'DgXLiJ4', 'zgL2pGOGicaGia', 'psj0Eg4Tyw1VDq', 'kdaP', 'phn2zYb2Awv3qG', 'BgvKz2vYvhjHBG', 'Dg9Y', 'yMvS', 'p2LKpq', 'ywnPDhK6mtTWyq', 'ncWTntCUmteWmq', 'y3vYC29Y', 'lNrYyw5Zywn0Aq', 'x19YDa', 'AwnL', 'mZa3odK3Bw0Iia', 'zhrOoJaUodu7CW', 'y2fUy2vSywjSzq', 'x2nOzW', 'Ahq9iJe2iIb2Aq', 'icaGpgrPDIbJBa', 'y3jLyxrLrwXLBq', 'DIbJBgfZCZ0Iyq', 'z2v0tw9UDgG', 'iJ48zgL2ignSyq', 'pc9KAxy+cIaGia', 'BgfZCZ0IDhHUlq', 'ChjLDMvUDerLzG', 'xZi0Af9JAgfUzW', 'BNqIigrHDgeTAq', 'zMLSDgvY', 'DMLLD0jVEd0Ima', 'lw9WywnPDhK6mq', 'iemG', 'Dg9tDhjPBMC', 'qKDiCNe', 'CMfUzg9T', 'C2nYB2XSvg9W', 'ywrK', 'DY53mY5VCMCVmG', 'nIaZlJe5Bs02lG', 'y2XHC3nmAxn0', 'lMnWlxjHBMDLlq', 'C2v0lwnNqxbPsW', 'iJiZiI8+pc9ZDG', 'Axr5idaUm3mGzq', 'jNzZx2n1CNjLBG', 'vfjptG', 'y2fYzci+pgrPDG', 're9nq29UDgvUDa', 'B2TLBI1LBNrYEq', 'BMfTzq', 'ignSyxnZpsjZzq', 'psj0Eg4Tzgf0zq', 'yw1Lsw5WDxq', 'yM5I', 'DhLWzq', 'BJ0Ims4XiIbPza', 'lMnWlwjVzhK', 'yM5IlNDLyNa', 'BgvKz2vYlMv4Da', 'lZ48l3n2zZ4', 'Axy+cIaGicaGia', 'Dg9Rzw4Tzw50CG', 'A2uIigq9iM0Gmq', 'y29SB3i', 'Eg4TAw5MBYi+cG', 'zs1TAxrLCMXPBq', 'iZvbntK1qG', 'tvGK', 'B2LUoM1PDgvYoW', 'ndu4otiGDIaTmW', 'ywjLBa', 'rvHrAMK', 'y3vZDg9TrxrOva', 'B3bLBG', 'nca1lJiXmtqZmq', 'DIaTmY45mta3mq', 'C3bHy2u9iNbYzq', 'tIbisvnut1jz', 'nJuPiJ48Cgf0Aa', 'Bw92zxiTy2HHBG', 'DhjVA2uTD2LKDa', 'z2Pwy1a', 'CMvZAxPL', 'C2v0rgf0zq', 'q0eK', 'zgvYpsjtB2XHBG', 'B2TLBNm', 'CY1JB250ywLUzq', 'wwLpzu8', 'y3vZDg9Tu29Sva', 'mte0mZfTBsiGDG', 'DhrPBMDZlxjVDW', 'lI9HC3nLDhmV', 'C21VB3rO', 'Ate4BG', 'Bc1JDxn0B20TDa', 'zt0Iy29SB3i6', 'iIb5mt0ImsiGEa', 'idaGns4YmZa3oa', 'C2v0lwjUyG', 'icaGicaGica8yG', 'u29Syw5H', 'x19Syxn0q29PBG', 'Aw1Hz2uVCg5N', 'y3vZDg9Tu3LTyG', 'wu9vuIa', 'Aw5MBW', 'BhPouxm', 'zsi+', 'BI9QC29U', 'CgfPCNm', 'mc4ZCYbJDwjPyW', 'BgLUzwPVAw46Bq', 'y3buEeHPC3rVCG', 'A2v5', 'B2TLpsjJDxjYzq', 'wfLAywjJzgvMzW', 'zw4TBgfIzwWIpG', 'B2TLlw1PDgvYBa', 'C2v0lxrYEa', 'C2v0lwv0Aa', 'txvjq1e', 'DhjHBNnSyxrLwq', 'vLnTAMC', 'mtzSBLD3vMG', 'Dc1ZDwiTDgv4Da', 'icaGica8zgL2ia', 'BMvJyxa6C3f1yq', 'DgLTzxn0yw1W', 'DMLZAwjPBgL0Eq', 'zxLqCM8', 'idXSywjLBd5bBq', 'y3bdAgfYDfDYyq', 'DhK6mtTZDhjVAW', 'vvneva', 'DxnKDa', 'BgvUz3rO', 'ChvZAa', 'nsiGzd0IBsaXoa', 'pJWVzgL2pG', 'y2XPzw50sgvPzW', 'lZ48Cg9SEwXPBG', 'yLvWue0', 'C3rLBMvY', 'Awr0Ad0ImIiGCW', 'Ed0I', 'C3LsrhO', 'qM1lA1i', 'ywjZ', 'Dg9WidaUm3mGzq', 'BwLU', 'zw4Tvvm', 'idaLlcaJmtmXmG', 'DIbJBgfZCZ0IDa', 'ide2ide2iIbMAq', 'DhHUq2XVC2u', 'BNrdB2XVCIiGCW', 'zwPuzNe', 'yw1VDw50', 'idi0iIbMAwXSpq', 'zxi6zMLSBcbTyq', 'CMvTzv9MzwfY', 'C2v0lxvZzgm', 'qLrd', 'y3rPB24', 'Bgn1C3rVBv9ZBW', 'CxLIy1i', 'Bgv4o2fSAwDUlq', 'CgXHEq', 'BM9UztTZDhjVAW', 'DxnKyY5HDMLM', 'tvHo', 'BwL0zxjSAw1PDa', 'DhjHBNnMB3jT', 'yxvSDa', 'y3bby2nVDw50ua', 'qKneruzhsePlta', 'zMLSBc1VCgfJAq', 'D2LKDgG', 'ntTZDhjVA2uTza', 'os45idqUmJrboq', 'Bg9JyxrPB24', 'DxnKyW', 'y3vZDg9TlxrVAW', 'BgWGBwfYA2vYCW', 'ihn0CM9Rzs1SAq', 'DI1VDMvYBgf5', 'oM1PDgvYo3n0CG', 'Dg91y2HLBMq', 'DhHUlwnVAw4', 'z28TzMfSBgjHyW', 'lZ48Cgf0AcbZDa', 'vMLLDW', 'zxrOzxjLDw0TBa', 'vfjz', 'Dg9Rzw4TAgvHza', 'ywrKrxzLBNrmAq', 'Dgv4DenVBNrLBG', 'lwvTChr5iJ4', 'BM9UztTMAwXSlq', 'EwXLpsjMAwXSoG', 'zgvYpsiWiJ4kia', 'z2f1z2voDw0', 'ktWVC3bHBJ48lW', 'o2rPC3bSyxK6zG', 'yxa6C3f1yxjLoW', 'qML0y29PBG', 'z1betfe', 'y29PBNm', 'z2v0q29UDgv4Da', 'C3nLDc1Szwz0iG', 'DhjVA2uTzgfZAa', 'D2LKDgG6mc44nq', 'AgLZDg9YEq', 'y3vZDg9Tsw1HzW', 'zMXVB3i', 'pgGZpG', 'zM9YrwfJAa', 'C3bSAwnL', 'DhHUlxrPBwu', 'DhGUCMvJzwL2zq', 'jokaOUkaOUkaOIa8C3bHBG', 'zwfZzsWGB3bHyW', 'iIbWBgfJzwHVBa', 'AM9PBG', 'ldyIlZ48l3n2zW', 'iJ7dLZWVyNv0Dg8', 'C2v0CY8', 'ide3lJK0qteWlG', 'mYaWideXltqUmG', 'C3bPBM5LCI1Myq', 'AgvPz2H0', 'y3bby2nVDw50vG', 'y3bby2nVDw50qq', 'C29S', 'zxrOzxjLDw0', 'Dw5KzwzPBMvK', 'DMfSDwu', 'ouq1ntTZDhjVAW', 'Bgn1C3rVBv9LDa', 'idaXmtiGngm3ia', 'DhjVBG', 'DhjHBNnWyxjLBG', 'phnWyw4Gy2XHCW', 'icaGicaGicaGia', 'Dhj4', 'CM9Rzs1SAw5LyW', 'zsbWB2LUDhm9iG', 'iMH0Dha6lY93DW', 'B3vUzci+pgXPBG', 'BgvKz2vYlNr4xW', 'y3bnyxjRzxrmyq', 'uwHdv00', 'CZ0IBc1Yzw1VDG', 'lJKWnJi5mIbOia', 'nc00lJi0iI8+pa', 'DhHUlwfTB3vUDa', 'icaGicaGidWVza', 'C29Slwj0BG', 'BgW9iM5VBMuIia', 'zxrOlwj0BG', 'oJe7CgfPBNqTBW', 'B3r0B20Sia', 'y3bdAgfYDfn2zW', 'idXPBNb1DcbJBa', 'AhqIpGOGicaGia', 'C3rYB2TLlw1PDa', 'yxjKig1VDMvYlq', 'y3bby3rPB25ZtG', 'EK52BuW', 'C2v0lwj0yW', 'CNjLBNrdB2XVCG', 'mJ0ImJmIihKYpq', 'yxnZpsjSy3vZDa', 'phn2zYb4BwXUCW', 'C2v0sxrLBq', 'CMLUzW', 'wgT6Exu', 'DMvYlwnOyw5Nzq', 'iZbfqKvdrq', 'q0fgt0y', 'icaGidXKAxyGyW', 'CNyUBMWVp3vYBa', 'DgGTy2e', 'z2f1z2veB3q', 'ldyXlJCZotKZmG', 'ica8zgL2ignSyq', 'lZ48l2C+pc9ZDG', 'ncW2idGSmIaXmG', 'y3bby2nVDw50ta', 'B3G9iJaGmcaYna', 'i2fHyq', 'tKDpwey', 'kdeWmcuP', 'C2vHCMnO', 'C2XPy2u', 'pZ8/', 'AxrLCJTZDhjVAW', 'z2v0sxrLBq', 'kc0YnsuP', 'q0Hg', 'nti2nJa5ogHitvfcva', 'BwjLCIiGBwLUpq', 'zxvTignVBNrYyq', 'D2LKDgG9iJuUmG', 'igrHDgeTAw5Kzq', 'lJK2nZiWnYiVpG', 'otCIihzLCNnPBW', 'DMvYlxrPy2TLCG', 'lNr4BI10ExbLlq', 'DJ4kicaGicaGpa', 'y2XPy2S', 'C3nLDc1ZDwiIpG', 'y2XPzw50wa', 'zxjSAw1PDdO1lG', 'Bwv0yvTUyw1Lpq', 'DgfYz2v0', 'msa4ideXidGTna', 'z3jADuu', 'kc0XodyUoti1na', 'rgf0yq', 'zgL2ignSyxnZpq', 'B3bHy2L0Eq', 'lMWTy3vZDg9Tlq', 'mtqGmtaWjsK', 'BgfZCZ0IC2v0Da', 'y2DbCgLlzxLqCG', 'B1fNB2y', 'tg9HzgvK', 'zgvMCYbPzd0Iza', 'psjTB3zLCI1SBW', 'z2v0rNvSBfLLyq', 'yxjYyxK6BM9Uzq', 'iZy1nufcmW', 'y3vYCMvUy3K', 'C2v0lxvZzgndAa', 'BhbYAwnLxW', 'ncWXmca4lde0ia', 'B2TLlwrHC2HHCG', 'lM5HDI1IDg5Bza', 'z3DPDejHzgDL', 'lMXJDxn0B20Tzq', 'C3rYB2TLpsjJDq', 'ywnJB3vUDe5HBq', 'C3rYB2TL', 'msiGEg1SoNnWyq', 'yMXVy2S', 'BgfZCZ0IBgn1CW', 'yNrUlMfJDgL2zq', 'Eg1SBNm6C3zNpq', 'mcaXmsa4ideXia', 'DhHUlxrPDgXLiG', 'Adi0', 'AgvPz2H0psi1lG', 'pI08l2rPDJ48za', 'y2XHC3m9iM1VDG', 'zsb4mt0IociGEq', 'Aw5NCY1YB3CIpG', 'nte0lc01nY4Xmq', 'sfHlrwm', 'pc9KAxy+pc9KAq', 'yxrPB24', 'nY43mJa5mdeGmW', 'Bwf4', 'Ahr0Chm6lY9HCa', 'Cvjryw4', 'CM91BMq', 'CMvJzwL2zwq', 'iJaIihn0zxa9iG', 'BJ4kicaGicaGia', 'ChGP', 'Dg9mB2nHBgvtDa', 'CKf5t3e', 'zgLLBNqODg8GyG', 'Dg9Tlwv0Ac1HBq', 'C3bSAxq', 'BgrXuxq', 'y3bby2nVDw50qW', 'phbHDgGGC3r5Ba', 'ndK1shD2C05N', 'C2v0DgLUz3npDG', 'yLz4qNG', 'lMWTCMvTB3zLlq', 'y29PBLbHBMvS', 'Cgn0iIbZDhLSzq', 'yxnOyxjYyxK6BG', 'jL90pq', 'DxnKDenOywLU', 'zxLMyLi', 'mJaWmc9ZDMCIia', 'mJuYoeXprg5Rva', 'C29Syw5HlMf2Aq', 'B3b1CenSB3nL', 'zgrYsw5WDxq', 'lwDYB3vWiJ48za', 'C3rYAw5NAwz5', 'BwfW', 'oYi+', 'pc9KAxy+pgrPDG', 'DhzAwe0', 'zt0IzMLSBdPUBW', 'o3n0CM9Rzs1VCa', 'i0jcntq1ndTZDa', 'zw50', 'iJ4kicaGicaGia', 'icaGica8C3bHBG', 'qK5c', 'vfjy', 'CM9Rzs1SAw5LAG', 'iNrYyw5ZBgf0zq', 'y2HHBMDL', 'mJCZmtaWCKPRq2PJ', 'lNnLz21LBNqTyG', 'mdCGmtaUmdCGma', 'psiXnIiGAgvPzW', 'B3b1CfnHDMu', 'DhLSzt0IzMLSBa', 'y2XHC3m9iNr4BG', 'AxyGy2XHC3m9iG', 'mZCZmtuIigLKpq', 'BufjCeS', 'ie1HAw4', 'DgvZDc9KzxGVDa', 'mtGUnduGmcaWmq', 'zgLZCgXHEq', 'Aw5SAw5L', 'phnWyw4GC3r5Ba', 'C3r5Bgu', 'rxrOzxjLDw0', 'pc9KAxy+', 'rhLlruW', 'lZ92pwWJBg9NAq', 'BdjFBw92zxjFAq', 'C2vUDa', 'AgLQA21UB3bXCG', 'C3r1DND4ExO', 'yxnL', 'CND0wwu', 'iIbZDhjVA2uTDW', 'BguOmcK', 'Dg91y2HZDgfYDa', 'CgfJzt0IChjLCW', 'lI4U', 'y3vZDg9TtMfTzq', 'pc9ZCgfUpGOGia', 'BguOmsK', 'lwfTB3vUDca', 'icaGicaGicaGpa', 'yMfJA2DYB3vUza', 'ihn0EwXLpsjKAq', 'l2fWAs92zxjPzG', 'iIb0ExbLpsjUDq', 'Dg9gAxHLza', 'yY1IzxPPzxiOma', 'l2fWAs9JAgfYDa', 'y2fWpsjYB3vUza', 'zwnYseK', 'Awq9iMXHEwvYmq', 'CMvZC2vZ', 'mtiZndu2nZG5qq', 'ue9tva', 'Dgv0AgvY', 'Dg9eyxrHvvjm', 'z28TC2TLBgv0BW', 'z2v0rwXLBwvUDa', 'Awv3qM94psiWia', 'DhjVA2uTB3bHyW', 'y29UDgv4Dg1LBG', 'uhjPy2uGzMv0yW', 'Axq6ns41o3n0CG', 'BgfZDeLUzgv4tW', 'iIbHBhq9iG', 'BgvKz2vYlM5VxW', 'BgLXDwLKAxr5', 'ignSyxnZpsj0Ea', 'yxa9iNjVDw5KiG', 'ChjPy2vdAgfUzW', 'yNrUw2rHDgeTDa', 'y3bdAgfYDenYBW', 'CxvLCNLtzwXLyW', 'C3jJ', 'zgL2', 'kc01mcuPihnJyq', 'seSK', 'vNPrCvG', 'i0zgrKzgrG', 'AxrLCMXPBwL0oG', 'ywnPDhK6mtTZDa', 'ChjPy2u', 'CgfUzwW', 'q2vKtwG', 'Dg9YqwXS', 'mJr2AwjyAw8', 'msiVpJWVzZ48lW', 'zgf0yxnLDa', 'B3vUDc1JB2WIpG', 'zwzZmsiVpJXNia', 'z2vFCgvYy2vUDa', 'DhjVA2uTBgLUzq', 'lMHLywrLCG', 'Aw5JBhvKzxm', 'ywLU', 'AxndDxn0B20', 'zNjVBq', 'nfnqt0zAta', 'C3rYB2TLlwXPBG', 'yxnZzxqTAxrLBq', 'C2nYB2XS', 'iIb2ywX1zt0I', 'jsa8C3bHBJ4O', 'mY45mZCZmsiGAq', 'y2HHAw4', 'z2v0vgLTzq', 'CMrLCJPMAwXSia', 'pgrPDIbJBgfZCW', 'BM9Uzq', 'nZiTms4Wn2eZia', 'DguOlte4nI45mW', 'cIaGicaGicaGpa', 'i0zfqtDboa', 'jMnNx3bYBZ0X', 'yw5VBNLTB3vZ', 'Aw50CW', 'mhb4iJ48zYb0CG', 'B25SB2fK', 'CMvTB3zL', 'ChPZu28', 'CZ9Pzhm9', 'DMvKiL0', 'o3n0CM9Rzs1SAq', 'Aw1Hz2u', 'BNrcDg4', 'lMjVDhrVBs1Uyq', 'lwLUzgv4psi', 'qNrU', 'z0nSAwvUDfjLyW', 'iIbZDhjVA2uTBa', 'zw50CMLLCW', 'Dxn0B20', 'CJTZDhjVA2uTBq', 'CgfYC2u', 'ANDtDhC', 'zxqTy2HHBMDLlq', 'CZ9Pzhm9yML0yW', 'Aw1Hz2vvCMW', 'y3qGywrKCMvZCW', 'nJeXngP0z1jkqG', 'odK3iIb4BwW6CW', 'BdjFDg9Wx21VDG', 'BguO', 'BM8TC3rVCMu', 'zM9UDfnPEMu', 'yNrU', 'icaGpc9KAxy+cG', 'C3bSyxK6BM9Uzq', 'ocWGmJaSia', 'Aw5KzxG', 'yMfZzvrVA2vU', 'ms04yte4lJq1ia', 'Ahr0Chm6lY93CW', 'zxrO', 'Bt0IDhjHBNnSyq', 'Bgf5', 'nYaWlteXltGTmq', 'ide4nY41mJy1mq', 'AYi+', 'lNnLz21LBNqTyW', 'y29PBG', 'mtiSmtaIlZ48lW', 'kIOQ', 'Awr0Ad0Ins4YmW', 'q29SB3i', 'Aw5JBhvKzq', 'B24GDhHUlwLJBW', 'nJeUndq1odKYia', 'l2rPDJ4kicaGia', 'CMDIysGXosWGmq', 'Cg9PBNrLCG', 'pc9ZCgfUpG', 'C29YDa', 'BMrLEd0I', 'lxrVA2vUlwXPCW', 'CM9RzsiGzd0IBq', 'nJy2iJ7IGjm8l3nW', 'pGOGicaGicaGia', 'Dc1VCMrLCJPMAq', 'CZ0IyMfSyw5Jzq', 'DwLlvfa', 'yMfSyw5JzurPCW', 'C29Syw5H', 'DhjHBNnSyxrLwa'];
    a0_0x30c0 = function() {
        return _0x4cfe6c;
    };
    return a0_0x30c0();
}

function setCachedChart(_0xc72af2, _0x5d49c7, _0x47d323) {
    const _0x3a3d4c = a0_0x12b68e;
    localStorage['setItem']('lchart_' + _0xc72af2 + '_' + _0x5d49c7, JSON[_0x3a3d4c(0x332)]({
        'prices': _0x47d323,
        'ts': Date[_0x3a3d4c(0x472)]()
    }));
}
async function fetchCoinChart(_0x44b047, _days) {
    const _0x64032a = a0_0x12b68e,
        _0x3bcb69 = {
            'mHint': function(_0x274d3f) {
                return _0x274d3f();
            },
            'IgrnL': function(_0x496ee0, _0x12cf05, _0x1ed650) {
                return _0x496ee0(_0x12cf05, _0x1ed650);
            }
        },
        _0xc357ec = _0x3bcb69['mHint'](loadSettings),
        _0x44e8a7 = _0xc357ec['currency'] || _0x64032a(0x41b),
        _0x25b362 = getCachedChart(_0x44b047, _0x44e8a7 + '_' + (_days || 1));
    if (_0x25b362) return _0x25b362;
    const _0x119065 = COINGECKO_IDS[_0x44b047],
        _0x1f66e0 = _0xc357ec[_0x64032a(0x3f9)] || '',
        _0x216389 = !!_0xc357ec[_0x64032a(0x2ed) + 'o'];
    let _0x2a9f35 = _0x64032a(0x36d) + _0x64032a(0x4b1) + _0x119065 + (_0x64032a(0x1d3) + 'cy=') + _0x44e8a7 + '&days=' + (_days || 1);
    if (_0x1f66e0) {
        _0x2a9f35 += '&cg_key=' + encodeURIComponent(_0x1f66e0);
        if (_0x216389) _0x2a9f35 += '&cg_pro=1';
    }
    try {
        const _0x4a426d = await _0x3bcb69[_0x64032a(0x49c)](fetch, _0x2a9f35, {
            'credentials': _0x64032a(0x3e3),
            'cache': _0x64032a(0x3cd)
        });
        if (!_0x4a426d['ok']) return null;
        const _0x5693d2 = await _0x4a426d['json']();
        if (!_0x5693d2[_0x64032a(0x455)] || _0x5693d2['prices'][_0x64032a(0x22f)] === 0x0) return null;
        const _0x464702 = _0x5693d2[_0x64032a(0x455)],
            _0x3909f5 = 0x18,
            _0x1832ea = (_0x464702[_0x64032a(0x22f)] - 0x1) / (_0x3909f5 - 0x1),
            _0x326d6b = Array[_0x64032a(0x39e)]({
                'length': _0x3909f5
            }, (_0x350ab5, _0x19177e) => {
                const _0xba9ad5 = _0x64032a,
                    _0x426c6a = Math[_0xba9ad5(0x23d)](Math[_0xba9ad5(0x315)](_0x19177e * _0x1832ea), _0x464702[_0xba9ad5(0x22f)] - 0x1);
                return _0x464702[_0x426c6a][0x1];
            });
        return setCachedChart(_0x44b047, _0x44e8a7 + '_' + (_days || 1), _0x326d6b), _0x326d6b;
    } catch {
        return null;
    }
}
/* --- Robust multi-range coin chart -------------------------------------------
   CoinGecko's free API rate-limits hard, so we make at most TWO calls per coin
   (days=1 for intraday, days=365 for everything longer) and DERIVE 1W/1M/1Y/ALL
   by slicing the 365-day series. Raw series are cached in localStorage (5 min). */
const _LCHART_RAW_TTL = 0x5 * 0x3c * 0x3e8;

function _lGetRawChart(_coin, _days) {
    try {
        const _v = localStorage['getItem']('lrawchart_' + _coin + '_' + _days);
        if (!_v) return null;
        const _o = JSON['parse'](_v);
        if (Date['now']() - _o['ts'] > _LCHART_RAW_TTL) return null;
        return _o['prices'];
    } catch {
        return null;
    }
}

function _lSetRawChart(_coin, _days, _prices) {
    try {
        localStorage['setItem']('lrawchart_' + _coin + '_' + _days, JSON['stringify']({
            'prices': _prices,
            'ts': Date['now']()
        }));
    } catch {}
}

async function _lFetchRawChart(_coin, _days) {
    const _cached = _lGetRawChart(_coin, _days);
    if (_cached) return _cached;
    const _id = COINGECKO_IDS[_coin];
    if (!_id) return null;
    const _s = loadSettings(),
        _cur = _s['currency'] || 'usd';
    let _url = '/api/chart?id=' + _id + '&vs_currency=' + _cur + '&days=' + _days;
    if (_s['cgApiKey']) {
        _url += '&cg_key=' + encodeURIComponent(_s['cgApiKey']);
        if (_s['cgApiKeyPro']) _url += '&cg_pro=1';
    }
    for (let _attempt = 0; _attempt < 2; _attempt++) {
        try {
            const _r = await fetch(_url, {
                'credentials': 'include',
                'cache': 'no-store'
            });
            if (_r['ok']) {
                const _j = await _r['json']();
                if (_j && _j['prices'] && _j['prices']['length']) {
                    const _prices = _j['prices']['map'](_p => _p[1]);
                    _lSetRawChart(_coin, _days, _prices);
                    return _prices;
                }
            }
        } catch {}
        if (_attempt === 0) await new Promise(_res => setTimeout(_res, 1500));
    }
    return null;
}

function _lSampleChart(_arr, _n) {
    if (!_arr || !_arr['length']) return null;
    if (_arr['length'] <= _n) return _arr['slice']();
    const _step = (_arr['length'] - 1) / (_n - 1);
    return Array['from']({
        'length': _n
    }, (_x, _i) => _arr[Math['min'](Math['round'](_i * _step), _arr['length'] - 1)]);
}

async function _lRangeChart(_coin, _label) {
    if (_label === '1D') return _lSampleChart(await _lFetchRawChart(_coin, 1), 24);
    const _full = await _lFetchRawChart(_coin, 365);
    if (!_full) return null;
    let _slice = _full;
    if (_label === '1W') _slice = _full['slice'](-7);
    else if (_label === '1M') _slice = _full['slice'](-30);
    return _lSampleChart(_slice, 24);
}
const TOP_MOVERS_CACHE_KEY = a0_0x12b68e(0x3cb) + 'ers_v2',
    MOVER_IMG_CACHE_KEY = a0_0x12b68e(0x357) + 'mgs_v1';

function _getCachedTopMovers() {
    const _0x5c2480 = a0_0x12b68e;
    try {
        const _0x3d40e7 = localStorage['getItem'](TOP_MOVERS_CACHE_KEY);
        if (_0x3d40e7) return JSON[_0x5c2480(0x3c3)](_0x3d40e7)[_0x5c2480(0x42c)];
    } catch {}
    return null;
}

function _getCachedMoverImages() {
    const _0x441fc1 = a0_0x12b68e;
    try {
        const _0x481f8c = localStorage['getItem'](MOVER_IMG_CACHE_KEY);
        return _0x481f8c ? JSON[_0x441fc1(0x3c3)](_0x481f8c) : {};
    } catch {
        return {};
    }
}

function _imgToBase64(_0xf78bb) {
    return new Promise((_0x4475d4, _0xdbdbef) => {
        const _0x2eb6e2 = a0_0x4bb2,
            _0x1c1e83 = {
                'grZuE': _0x2eb6e2(0x442),
                'BGHrq': function(_0x3bde4a, _0x4af294) {
                    return _0x3bde4a(_0x4af294);
                }
            },
            _0xff5f29 = new Image();
        _0xff5f29[_0x2eb6e2(0x3fb) + 'n'] = _0x2eb6e2(0x3b0), _0xff5f29[_0x2eb6e2(0x3b3)] = () => {
            const _0xc38921 = _0x2eb6e2;
            try {
                const _0x3b1e57 = document['createElem' + 'ent'](_0x1c1e83[_0xc38921(0x2e5)]);
                _0x3b1e57[_0xc38921(0x259)] = _0xff5f29['naturalWid' + 'th'] || 0x48, _0x3b1e57[_0xc38921(0x28e)] = _0xff5f29['naturalHei' + 'ght'] || 0x48, _0x3b1e57[_0xc38921(0x278)]('2d')['drawImage'](_0xff5f29, 0x0, 0x0), _0x1c1e83[_0xc38921(0x1c8)](_0x4475d4, _0x3b1e57[_0xc38921(0x375)](_0xc38921(0x20e)));
            } catch (_0x45bfb8) {
                _0xdbdbef(_0x45bfb8);
            }
        }, _0xff5f29['onerror'] = _0xdbdbef, _0xff5f29['src'] = _0xf78bb;
    });
}
async function cacheMoverImages(_0x2c3f51) {
    const _0x238a66 = a0_0x12b68e,
        _0xb6d7c7 = _getCachedMoverImages();
    let _0x26211f = ![];
    await Promise[_0x238a66(0x498)](_0x2c3f51[_0x238a66(0x333)](async _0x9f3b24 => {
        const _0x5989af = _0x238a66;
        if (!_0x9f3b24[_0x5989af(0x3b9)]) return;
        const _0x4ccbc7 = _0xb6d7c7[_0x9f3b24['image']];
        if (_0x4ccbc7 && Date['now']() - _0x4ccbc7['ts'] < TOP_MOVERS_CACHE_MS) return;
        try {
            const _0x307826 = await _imgToBase64(_0x9f3b24[_0x5989af(0x3b9)]);
            _0xb6d7c7[_0x9f3b24[_0x5989af(0x3b9)]] = {
                'data': _0x307826,
                'ts': Date[_0x5989af(0x472)]()
            }, _0x26211f = !![];
        } catch {}
    }));
    if (_0x26211f) try {
        localStorage[_0x238a66(0x2ba)](MOVER_IMG_CACHE_KEY, JSON[_0x238a66(0x332)](_0xb6d7c7));
    } catch {}
    return _0xb6d7c7;
}
async function fetchTopMovers() {
    const _0x3c587d = a0_0x12b68e;
    try {
        const _0x21560e = localStorage[_0x3c587d(0x2d1)](TOP_MOVERS_CACHE_KEY);
        if (_0x21560e) {
            const _0x3e4ded = JSON[_0x3c587d(0x3c3)](_0x21560e);
            if (Date['now']() - _0x3e4ded['ts'] < TOP_MOVERS_CACHE_MS) return _0x3e4ded[_0x3c587d(0x42c)];
        }
    } catch {}
    try {
        const _0x8e11e9 = loadSettings(),
            _0x5b5951 = _0x8e11e9[_0x3c587d(0x3f9)] || '',
            _0x3446b2 = !!_0x8e11e9['cgApiKeyPr' + 'o'],
            _0x5f3a08 = _0x5b5951 ? '&cg_key=' + encodeURIComponent(_0x5b5951) + (_0x3446b2 ? _0x3c587d(0x3af) : '') : '',
            _0x2370e7 = await fetch('/api/top-m' + _0x3c587d(0x49e) + (_0x5f3a08 ? '?' + _0x5f3a08['slice'](0x1) : ''));
        if (!_0x2370e7['ok']) return _getCachedTopMovers();
        const _0x57e08e = await _0x2370e7['json'](),
            _0x1b6b0a = _0x57e08e['map'](_0xd3985c => ({
                ..._0xd3985c,
                '_chg': _0xd3985c['price_chan' + _0x3c587d(0x398) + 'age_24h_in' + _0x3c587d(0x453)] ?? _0xd3985c['price_chan' + 'ge_percent' + 'age_24h'] ?? 0x0
            }))['filter'](_0x407f07 => _0x407f07['_chg'] > 0x0 && (_0x407f07['total_volu' + 'me'] ?? 0x0) >= 0xf4240)[_0x3c587d(0x3ea)]((_0x570ba0, _0x373ec0) => _0x373ec0[_0x3c587d(0x4bb)] - _0x570ba0[_0x3c587d(0x4bb)])[_0x3c587d(0x2ce)](0x0, 0x7)[_0x3c587d(0x333)](_0x450139 => ({
                'id': _0x450139['id'],
                'symbol': _0x450139[_0x3c587d(0x437)][_0x3c587d(0x420) + 'e'](),
                'name': _0x450139[_0x3c587d(0x1d8)],
                'change24h': _0x450139[_0x3c587d(0x4bb)],
                'image': _0x450139['image'] ? 'https://ws' + _0x3c587d(0x2c1) + '=' + encodeURIComponent(_0x450139['image']) + _0x3c587d(0x465) : ''
            }));
        return localStorage[_0x3c587d(0x2ba)](TOP_MOVERS_CACHE_KEY, JSON['stringify']({
            'data': _0x1b6b0a,
            'ts': Date['now']()
        })), _0x1b6b0a;
    } catch {
        return _getCachedTopMovers();
    }
}
async function fetchAllPrices(_0x4012ca = ![]) {
    const _0x1f7097 = a0_0x12b68e,
        _0x1d3982 = {
            'tBDLg': _0x1f7097(0x41b)
        },
        _0x5b6a03 = loadSettings(),
        _0x40e633 = _0x5b6a03[_0x1f7097(0x3f9)] || '',
        _0x479fdb = !!_0x5b6a03['cgApiKeyPr' + 'o'],
        _0x17a5ab = _0x5b6a03['currency'] || _0x1d3982[_0x1f7097(0x430)];
    if (!_0x4012ca) {
        const _0x5b1623 = Object['keys'](COINGECKO_IDS)['every'](_0x22426b => getCachedPrice(_0x22426b, _0x17a5ab));
        if (_0x5b1623) return;
    }
    const _0x1e1485 = Object['values'](COINGECKO_IDS)['join'](',');
    let _0x599cd0 = '/api/price' + _0x1f7097(0x3b6) + _0x1e1485 + (_0x1f7097(0x1d3) + 'cies=') + _0x17a5ab + _0x1f7097(0x329) + Date[_0x1f7097(0x472)]();
    if (_0x40e633) {
        _0x599cd0 += _0x1f7097(0x419) + encodeURIComponent(_0x40e633);
        if (_0x479fdb) _0x599cd0 += '&cg_pro=1';
    }
    try {
        const _0x5180e7 = await fetch(_0x599cd0, {
            'credentials': 'include',
            'cache': 'no-store'
        });
        if (!_0x5180e7['ok']) return;
        const _0x2954ff = await _0x5180e7['json']();
        for (const [_0x452030, _0x6bb483] of Object['entries'](COINGECKO_IDS)) {
            _0x2954ff[_0x6bb483] && setCachedPrice(_0x452030, _0x17a5ab, _0x2954ff[_0x6bb483][_0x17a5ab], _0x2954ff[_0x6bb483][_0x17a5ab + (_0x1f7097(0x1c1) + 'e')]);
        }
    } catch (_0x5b59dd) {
        console[_0x1f7097(0x448)](_0x1f7097(0x37b) + 'h\x20error:', _0x5b59dd);
    }
}

function getCurrencySymbol() {
    const _0x4c8ec9 = loadSettings(),
        _0x29e35e = CURRENCIES[_0x4c8ec9['currency']] || CURRENCIES['usd'];
    return _0x29e35e['symbol'];
}

function fmtUSD(_0x2b1cd6) {
    const _0x35ca83 = a0_0x12b68e,
        _0x19ba40 = {
            'VSmjg': 'en-US',
            'aqYlp': function(_0xd43cc8, _0x634cc1) {
                return _0xd43cc8 + _0x634cc1;
            }
        },
        _0x1e9c84 = loadSettings(),
        _0xdd9ef9 = getCurrencySymbol(),
        _0x431994 = Math['abs'](_0x2b1cd6)[_0x35ca83(0x31a) + _0x35ca83(0x2bb)](_0x19ba40[_0x35ca83(0x222)], {
            'minimumFractionDigits': 0x2,
            'maximumFractionDigits': 0x2
        });
    if (SUFFIX_CURRENCIES[_0x35ca83(0x39b)](_0x1e9c84[_0x35ca83(0x2f5)])) return _0x431994 + '\x20' + _0xdd9ef9;
    return _0x19ba40['aqYlp'](_0xdd9ef9, _0x431994);
}

function fmtUSDHtml(_0x54a544) {
    const _0xf754d5 = a0_0x12b68e,
        _0x4faaf1 = {
            'xjxpO': function(_0x4e6535) {
                return _0x4e6535();
            }
        },
        _0x5d4c17 = loadSettings(),
        _0x4d94fe = _0x4faaf1['xjxpO'](getCurrencySymbol),
        _0x3b301b = Math[_0xf754d5(0x23b)](_0x54a544)[_0xf754d5(0x31a) + _0xf754d5(0x2bb)]('en-US', {
            'minimumFractionDigits': 0x2,
            'maximumFractionDigits': 0x2
        }),
        _0xba54c4 = _0x3b301b[_0xf754d5(0x37d) + 'f']('.');
    let _0x1b3629 = _0x3b301b,
        _0x415e60 = '';
    _0xba54c4 >= 0x0 && (_0x1b3629 = _0x3b301b[_0xf754d5(0x2ce)](0x0, _0xba54c4), _0x415e60 = _0xf754d5(0x29a) + _0xf754d5(0x3f1) + _0xf754d5(0x3ff) + '>' + _0x3b301b['slice'](_0xba54c4) + '</span>');
    if (SUFFIX_CURRENCIES[_0xf754d5(0x39b)](_0x5d4c17['currency'])) return _0x1b3629 + _0x415e60 + '\x20' + _0x4d94fe;
    return _0x4d94fe + _0x1b3629 + _0x415e60;
}

function fmtAmount(_0x38fceb) {
    const _0x282d2f = a0_0x12b68e;
    return _0x38fceb[_0x282d2f(0x31a) + 'ring']('en-US', {
        'minimumFractionDigits': 0x0,
        'maximumFractionDigits': 0x6
    });
}
let BASE_PRICE = 0x0,
    discreet = ![];
async function updateWallet(_0x412b1f = ![]) {
    const _0x5390bb = a0_0x12b68e,
        _0x40c36c = {
            'zNvmL': function(_0x442a74, _0x3725df) {
                return _0x442a74(_0x3725df);
            },
            'tvZXM': 'eth',
            'lzNQs': _0x5390bb(0x3ae)
        },
        [, _0x370bbe] = await Promise[_0x5390bb(0x498)]([_0x40c36c[_0x5390bb(0x2b4)](fetchAllPrices, _0x412b1f), fetchTopMovers()]),
        _0x4eae0d = loadSettings(),
        _0x4bd86d = _0x4eae0d[_0x5390bb(0x277)] || {},
        _0x6111e4 = _0x4eae0d[_0x5390bb(0x2f5)] || 'usd',
        _0x1c2acb = _0x6111e4 !== 'usd' ? await getUsdFxRate() : 0x1,
        _0x2cc3eb = [];
    for (const _0xc356e3 of ['btc', 'sol', _0x40c36c[_0x5390bb(0x336)], _0x5390bb(0x29c), 'bnb', 'usdt', _0x5390bb(0x25d)]) {
        const _0x4dfddf = parseFloat(_0x4bd86d[_0xc356e3]) || 0x0,
            _0x23cad2 = getCachedPrice(_0xc356e3, _0x6111e4),
            _0x28efec = _0x23cad2 ? _0x23cad2['price'] : 0x0,
            _0xfbd7bd = _0x23cad2 ? _0x23cad2[_0x5390bb(0x4a8)] : 0x0,
            _0x3bc94f = _0x4dfddf * _0x28efec;
        if (_0xc356e3 === 'usdt') _0x2cc3eb['push']({
            'key': _0xc356e3,
            'amount': _0x4dfddf,
            'value': _0x3bc94f,
            'change': _0xfbd7bd,
            'price': _0x28efec,
            'chain': _0x4eae0d[_0x5390bb(0x32a)] || _0x40c36c['tvZXM']
        });
        else {
            if (_0xc356e3 === 'usdc') _0x2cc3eb['push']({
                'key': _0xc356e3,
                'amount': _0x4dfddf,
                'value': _0x3bc94f,
                'change': _0xfbd7bd,
                'price': _0x28efec,
                'chain': _0x4eae0d['usdcChain'] || _0x5390bb(0x3d7)
            });
            else _0x2cc3eb['push']({
                'key': _0xc356e3,
                'amount': _0x4dfddf,
                'value': _0x3bc94f,
                'change': _0xfbd7bd,
                'price': _0x28efec
            });
        }
    }
    for (const _0x4400b4 of _0x4eae0d[_0x5390bb(0x200) + _0x5390bb(0x1fd)] || []) {
        if (!_0x4400b4['ca'] || !_0x4400b4['ca']['trim']()) continue;
        const _0x45be60 = await _0x40c36c[_0x5390bb(0x2b4)](fetchCustomSolToken, _0x4400b4['ca'][_0x5390bb(0x474)]());
        if (!_0x45be60) continue;
        const _0x393f68 = parseFloat(_0x4400b4[_0x5390bb(0x245)]) || 0x0,
            _0x6c5d0a = _0x45be60['priceUsd'] * _0x1c2acb,
            _0x584cf7 = _0x393f68 * _0x6c5d0a,
            _0x254513 = Number(_0x45be60['change24h']) || 0x0;
        let _0x1ca4a = 0x0;
        if (_0x254513 !== -0x64) {
            const _0x1f8af8 = _0x6c5d0a / (0x1 + _0x254513 / 0x64);
            _0x1ca4a = _0x393f68 * (_0x6c5d0a - _0x1f8af8);
        }
        _0x2cc3eb['push']({
            'key': 'lcustom_so' + 'l_' + _0x4400b4['ca'],
            'amount': _0x393f68,
            'value': _0x584cf7,
            'change': _0x45be60[_0x5390bb(0x4a8)],
            'price': _0x6c5d0a,
            'isCustom': !![],
            'chain': 'sol',
            'customName': _0x45be60['name'],
            'customSymbol': _0x45be60['symbol'],
            'customImage': _0x45be60[_0x5390bb(0x3c7)]
        });
    }
    for (const _0x3be157 of _0x4eae0d['customEthT' + _0x5390bb(0x1fd)] || []) {
        if (!_0x3be157['ca'] || !_0x3be157['ca']['trim']()) continue;
        const _0x1e0e15 = await fetchCustomEthToken(_0x3be157['ca'][_0x5390bb(0x474)]());
        if (!_0x1e0e15) continue;
        const _0x12252a = parseFloat(_0x3be157[_0x5390bb(0x245)]) || 0x0,
            _0x23badb = _0x1e0e15['priceUsd'] * _0x1c2acb,
            _0x3672fa = _0x12252a * _0x23badb,
            _0x35495a = Number(_0x1e0e15['change24h']) || 0x0;
        let _0xde6b34 = 0x0;
        if (_0x35495a !== -0x64) {
            const _0xd92ba5 = _0x23badb / (0x1 + _0x35495a / 0x64);
            _0xde6b34 = _0x12252a * (_0x23badb - _0xd92ba5);
        }
        _0x2cc3eb['push']({
            'key': 'lcustom_et' + 'h_' + _0x3be157['ca'],
            'amount': _0x12252a,
            'value': _0x3672fa,
            'change': _0x1e0e15['change24h'],
            'price': _0x23badb,
            'isCustom': !![],
            'chain': _0x5390bb(0x3d7),
            'customName': _0x1e0e15[_0x5390bb(0x1d8)],
            'customSymbol': _0x1e0e15['symbol'],
            'customImage': _0x1e0e15['imageUrl']
        });
    }
    _0x2cc3eb[_0x5390bb(0x3ea)]((_0x47da65, _0x3f104d) => _0x3f104d['value'] - _0x47da65['value']);
    const _0x23995f = _0x2cc3eb['reduce']((_0x3356f4, _0x1347a4) => _0x3356f4 + _0x1347a4['value'], 0x0);
    BASE_PRICE = _0x23995f, document['getElement' + _0x5390bb(0x46e)](_0x5390bb(0x3f3) + _0x5390bb(0x24f))['innerHTML'] = fmtUSDHtml(_0x23995f);
    if (_0x23995f > 0x0) {
        let _0x486d68 = 0x0;
        for (const _0x34a442 of _0x2cc3eb) {
            if (_0x34a442['value'] > 0x0) _0x486d68 += _0x34a442['change'] * _0x34a442['value'] / _0x23995f;
        }
        const _0x29a3e4 = _0x486d68 >= 0x0 ? '+' : '',
            _0x268191 = document[_0x5390bb(0x377) + _0x5390bb(0x46e)]('balanceCha' + 'ngePct');
        _0x268191 && (_0x268191[_0x5390bb(0x26c) + 't'] = '' + _0x29a3e4 + _0x486d68['toFixed'](0x2) + '%', _0x268191[_0x5390bb(0x352)][_0x5390bb(0x1e6)] = _0x486d68 === 0x0 ? _0x5390bb(0x2ca) : _0x486d68 > 0x0 ? _0x5390bb(0x45d) : _0x40c36c[_0x5390bb(0x212)]);
    }
    window[_0x5390bb(0x20d) + _0x5390bb(0x2e7)] = _0x2cc3eb, renderAssets(_0x2cc3eb);
    const _0x13a1b0 = _0x370bbe ? await cacheMoverImages(_0x370bbe) : {};
    renderMarketMovers(_0x370bbe, _0x13a1b0), renderTransactionHistory();
}

function renderAssets(_0x1d740a) {
    const _0x3fb9fa = a0_0x12b68e,
        _0x530c69 = {
            'xErZj': _0x3fb9fa(0x3fa),
            'rwtYe': function(_0x172569, _0x198efe) {
                return _0x172569 >= _0x198efe;
            },
            'NGOXF': _0x3fb9fa(0x463)
        },
        _0xbda93e = document[_0x3fb9fa(0x377) + 'ById'](_0x530c69['xErZj']);
    _0xbda93e['innerHTML'] = '';
    for (const _0x362235 of _0x1d740a) {
        if (_0x362235[_0x3fb9fa(0x294)] <= 0x0) continue;
        const _0x5c549c = document[_0x3fb9fa(0x1ba) + 'ent'](_0x3fb9fa(0x388));
        _0x5c549c['className'] = _0x3fb9fa(0x3a1);
        const _0x249952 = _0x530c69[_0x3fb9fa(0x35c)](Math[_0x3fb9fa(0x23b)](_0x362235['change']), 0xa) ? Math[_0x3fb9fa(0x315)](_0x362235['change']) : _0x362235['change']['toFixed'](0x2),
            _0x287cd9 = _0x362235[_0x3fb9fa(0x341)] > -0.01 && _0x362235['change'] < 0.01,
            _0x5c700e = _0x287cd9 ? _0x3fb9fa(0x42a) : _0x362235['change'] >= 0x0 ? '#619D55' : _0x530c69[_0x3fb9fa(0x2cb)],
            _0x3cbb19 = _0x362235['change'] >= 0x0 ? '+' : '',
            _0x59c003 = _0x287cd9 ? '' : _0x362235[_0x3fb9fa(0x341)] >= 0x0 ? '<svg\x20xmlns' + '=\x22http://w' + _0x3fb9fa(0x485) + '2000/svg\x22\x20' + _0x3fb9fa(0x304) + '\x22http://ww' + 'w.w3.org/2' + '000/svg\x22\x20w' + 'idth=\x225.21' + '14229mm\x22\x20h' + 'eight=\x225.2' + _0x3fb9fa(0x4b8) + 'viewBox=\x220' + '\x200\x205.21142' + '29\x205.23078' + _0x3fb9fa(0x2da) + _0x3fb9fa(0x1de) + '=\x22svg1\x22\x20xm' + 'l:space=\x22p' + 'reserve\x22><' + _0x3fb9fa(0x2f0) + _0x3fb9fa(0x397) + _0x3fb9fa(0x370) + _0x3fb9fa(0x3f6) + _0x3fb9fa(0x3d8) + _0x3fb9fa(0x3ac) + _0x3fb9fa(0x30d) + '0186)\x22><pa' + _0x3fb9fa(0x426) + 'fill:none;' + _0x3fb9fa(0x258) + _0x3fb9fa(0x22c) + 'e:#619D55;' + 'stroke-wid' + _0x3fb9fa(0x443) + 'roke-linec' + 'ap:square;' + _0x3fb9fa(0x3a0) + _0x3fb9fa(0x466) + _0x3fb9fa(0x3c2) + _0x3fb9fa(0x38d) + '5.5;stroke' + '-dasharray' + _0x3fb9fa(0x487) + 'ke-opacity' + _0x3fb9fa(0x2ac) + _0x3fb9fa(0x3a8) + _0x3fb9fa(0x44e) + _0x3fb9fa(0x3ed) + '\x20187.53619' + _0x3fb9fa(0x2c4) + '\x203.96721,-' + '3.98051\x22\x20i' + 'd=\x22path27\x22' + _0x3fb9fa(0x266) + 'yle=\x22fill:' + _0x3fb9fa(0x26e) + 'opacity:1;' + 'stroke:#61' + _0x3fb9fa(0x295) + 'e-width:0.' + _0x3fb9fa(0x41e) + 'linecap:sq' + 'uare;strok' + _0x3fb9fa(0x427) + _0x3fb9fa(0x262) + _0x3fb9fa(0x21d) + 'imit:5.5;s' + _0x3fb9fa(0x27a) + _0x3fb9fa(0x2f3) + _0x3fb9fa(0x338) + _0x3fb9fa(0x4b2) + 'int-order:' + 'fill\x20marke' + 'rs\x20stroke\x22' + _0x3fb9fa(0x3f8) + '72158,61.4' + _0x3fb9fa(0x1ec) + _0x3fb9fa(0x4a4) + _0x3fb9fa(0x3a5) + _0x3fb9fa(0x42b) + _0x3fb9fa(0x2c6) + 'g>' : _0x3fb9fa(0x2b9) + _0x3fb9fa(0x45c) + _0x3fb9fa(0x485) + _0x3fb9fa(0x32c) + _0x3fb9fa(0x304) + _0x3fb9fa(0x29f) + _0x3fb9fa(0x1cc) + _0x3fb9fa(0x409) + _0x3fb9fa(0x3e1) + '07854mm\x22\x20h' + 'eight=\x225.2' + _0x3fb9fa(0x201) + _0x3fb9fa(0x378) + '0\x205.230785' + _0x3fb9fa(0x1f1) + '\x22\x20version=' + '\x221.1\x22\x20id=\x22' + 'svg1\x22\x20xml:' + _0x3fb9fa(0x1f3) + 'serve\x22><de' + 'fs\x20id=\x22def' + 's1\x22/><g\x20id' + '=\x22layer1\x22\x20' + _0x3fb9fa(0x468) + _0x3fb9fa(0x340) + _0x3fb9fa(0x2e6) + '7,-57.1198' + _0x3fb9fa(0x1f5) + '\x20style=\x22fi' + _0x3fb9fa(0x48f) + 'll-opacity' + ':1;stroke:' + _0x3fb9fa(0x339) + _0x3fb9fa(0x40a) + _0x3fb9fa(0x434) + _0x3fb9fa(0x46c) + ':square;st' + 'roke-linej' + 'oin:miter;' + _0x3fb9fa(0x2b1) + _0x3fb9fa(0x2e1) + _0x3fb9fa(0x25a) + _0x3fb9fa(0x328) + 'one;stroke' + _0x3fb9fa(0x1c5) + ';paint-ord' + _0x3fb9fa(0x247) + 'rkers\x20stro' + _0x3fb9fa(0x1e5) + _0x3fb9fa(0x4a7) + _0x3fb9fa(0x311) + '.98051,3.9' + '67207\x22\x20id=' + '\x22path27\x22/>' + _0x3fb9fa(0x321) + _0x3fb9fa(0x337) + 'ne;fill-op' + _0x3fb9fa(0x38e) + 'roke:#BB54' + _0x3fb9fa(0x46f) + 'width:0.85' + _0x3fb9fa(0x3b8) + _0x3fb9fa(0x226) + 're;stroke-' + 'linejoin:m' + _0x3fb9fa(0x2d0) + _0x3fb9fa(0x1e8) + _0x3fb9fa(0x37c) + _0x3fb9fa(0x2f9) + _0x3fb9fa(0x423) + _0x3fb9fa(0x379) + _0x3fb9fa(0x478) + _0x3fb9fa(0x3f0) + _0x3fb9fa(0x25f) + '\x20stroke\x22\x20d' + _0x3fb9fa(0x403) + '055,61.906' + _0x3fb9fa(0x477) + '071\x20v\x20-3.9' + _0x3fb9fa(0x34a) + '\x22path28\x22/>' + '</g></svg>',
            _0x53d152 = _0x362235[_0x3fb9fa(0x39d)] || _0x362235['key'] === 'usdt' || _0x362235['key'] === 'usdc',
            _0x389c20 = _0x53d152 ? CHAIN_BADGE_ICONS[_0x362235[_0x3fb9fa(0x3a6)]] || '' : '',
            _0x41365b = _0x362235[_0x3fb9fa(0x39d)] ? _0x362235['customImag' + 'e'] || '' : _0x3fb9fa(0x203) + COIN_ICONS[_0x362235[_0x3fb9fa(0x219)]],
            _0x5d89b2 = _0x362235[_0x3fb9fa(0x39d)] ? _0x362235['customSymb' + 'ol'] : COIN_SYMBOLS[_0x362235['key']],
            _0xacadf8 = _0x362235[_0x3fb9fa(0x39d)] ? _0x362235['customName'] : COIN_NAMES[_0x362235['key']],
            _0x3889ee = (_0x5d89b2 || '?')[0x0]['toUpperCas' + 'e']();
        _0x5c549c[_0x3fb9fa(0x43e)] = '\x0a\x20\x20\x20\x20\x20\x20<di' + _0x3fb9fa(0x1bb) + _0x3fb9fa(0x279) + _0x3fb9fa(0x3ef) + '<div\x20class' + '=\x22asset-lo' + 'go-wrap\x22>\x0a' + _0x3fb9fa(0x29b) + _0x3fb9fa(0x3a9) + '=\x22asset-lo' + 'go\x22>\x0a\x20\x20\x20\x20\x20' + _0x3fb9fa(0x43d) + _0x3fb9fa(0x497) + _0x41365b + _0x3fb9fa(0x37e) + _0x5d89b2 + '\x22' + (_0x362235[_0x3fb9fa(0x39d)] && !_0x362235[_0x3fb9fa(0x27d) + 'e'] ? _0x3fb9fa(0x368) + _0x3fb9fa(0x3d1) + '\x22' : '') + (_0x3fb9fa(0x3ef) + '\x20\x20\x20\x20') + (_0x362235[_0x3fb9fa(0x39d)] && !_0x362235[_0x3fb9fa(0x27d) + 'e'] ? _0x3fb9fa(0x3a9) + '=\x22asset-lo' + _0x3fb9fa(0x265) + 'k\x22>' + _0x3889ee + '</div>' : '') + ('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x3fb9fa(0x422) + '\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x389c20 ? '<img\x20class' + '=\x22asset-ch' + _0x3fb9fa(0x476) + _0x3fb9fa(0x4a0) + _0x3fb9fa(0x28a) + _0x389c20 + '\x22\x20alt=\x22\x22>' : '') + ('\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x3fb9fa(0x3e6) + _0x3fb9fa(0x2c0) + 'lass=\x22asse' + 't-info\x22>\x0a\x20' + _0x3fb9fa(0x366) + 'div\x20class=' + '\x22asset-nam' + _0x3fb9fa(0x213)) + _0xacadf8 + ('</div>\x0a\x20\x20\x20' + _0x3fb9fa(0x405) + 'v\x20class=\x22a' + _0x3fb9fa(0x2df) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<span\x20c' + 'lass=\x22asse' + _0x3fb9fa(0x224) + '\x22>') + (discreet ? _0x3fb9fa(0x3e0) : fmtAmount(_0x362235[_0x3fb9fa(0x245)])) + '\x20' + _0x5d89b2 + ('</span>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20</' + _0x3fb9fa(0x4aa) + '\x20\x20\x20</div>\x0a' + '\x20\x20\x20\x20\x20\x20</di' + _0x3fb9fa(0x2dd) + 'div\x20class=' + '\x22asset-rig' + _0x3fb9fa(0x2b0) + _0x3fb9fa(0x1b9) + 'ass=\x22asset' + '-value\x22>') + (discreet ? '***' : fmtUSD(_0x362235[_0x3fb9fa(0x294)])) + ('</div>\x0a\x20\x20\x20' + _0x3fb9fa(0x225) + 'class=\x22ass' + _0x3fb9fa(0x3c5) + _0x3fb9fa(0x327) + '=\x22color:') + _0x5c700e + '\x22>' + (_0x287cd9 ? '–' : '' + _0x59c003 + _0x3cbb19 + _0x249952 + '%') + (_0x3fb9fa(0x1be) + _0x3fb9fa(0x3d0) + '\x20\x20\x20\x20'), _0x5c549c[_0x3fb9fa(0x352)][_0x3fb9fa(0x4b4)] = _0x3fb9fa(0x3e8), _0x5c549c[_0x3fb9fa(0x26b) + 'stener']('click', () => openCoinPanel(_0x362235)), _0xbda93e['appendChil' + 'd'](_0x5c549c);
    }
}

function renderCustomTokenInputs() {
    const _0x23c852 = a0_0x12b68e,
        _0x5b9fa2 = {
            'eSeXb': 'New\x20token'
        },
        _0x265ef0 = loadSettings(),
        _0x3485aa = document['getElement' + 'ById']('custom-sol' + _0x23c852(0x3ec) + 't');
    _0x3485aa && (_0x3485aa[_0x23c852(0x43e)] = '', (_0x265ef0[_0x23c852(0x200) + 'okens'] || [])['forEach']((_0x554a3c, _0x29ec40) => {
        const _0x6ed60d = _0x23c852,
            _0x36bfb0 = document['createElem' + _0x6ed60d(0x33a)](_0x6ed60d(0x388));
        _0x36bfb0['className'] = _0x6ed60d(0x206) + _0x6ed60d(0x1d7), _0x36bfb0[_0x6ed60d(0x43e)] = _0x6ed60d(0x3ad) + 'div\x20class=' + '\x22l-custom-' + _0x6ed60d(0x26a) + _0x6ed60d(0x464) + '\x20\x20\x20\x20\x20<span' + _0x6ed60d(0x451) + _0x6ed60d(0x25e) + _0x6ed60d(0x21c) + (_0x554a3c['ca'] ? _0x554a3c['ca'][_0x6ed60d(0x2ce)](0x0, 0x6) + '...' + _0x554a3c['ca']['slice'](-0x4) : _0x5b9fa2['eSeXb']) + ('</span>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<b' + _0x6ed60d(0x44b) + _0x6ed60d(0x2a4) + _0x6ed60d(0x44c) + '\x20data-inde' + _0x6ed60d(0x238)) + _0x29ec40 + (_0x6ed60d(0x289) + _0x6ed60d(0x318) + '\x20</div>\x0a\x20\x20' + _0x6ed60d(0x49d) + '\x20class=\x22se' + _0x6ed60d(0x202) + _0x6ed60d(0x33b) + '\x20\x20\x20<label>' + _0x6ed60d(0x43f) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<input\x20cl' + 'ass=\x22lcust' + _0x6ed60d(0x48a) + _0x6ed60d(0x2d8) + _0x6ed60d(0x238)) + _0x29ec40 + '\x22\x20value=\x22' + (_0x554a3c['ca'] || '') + ('\x22\x20placehol' + _0x6ed60d(0x1fc) + 'a\x20contract' + '\x20address\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x6ed60d(0x3e6) + _0x6ed60d(0x2c0) + _0x6ed60d(0x2ec) + _0x6ed60d(0x30c) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x6ed60d(0x22a) + 't</label>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x6ed60d(0x450) + 'ss=\x22lcusto' + 'm-sol-amou' + _0x6ed60d(0x1c2) + _0x6ed60d(0x3eb)) + _0x29ec40 + ('\x22\x20type=\x22nu' + _0x6ed60d(0x2d5) + _0x6ed60d(0x317) + 'any\x22\x20value' + '=\x22') + (_0x554a3c['amount'] || '') + (_0x6ed60d(0x286) + _0x6ed60d(0x270) + _0x6ed60d(0x2a8) + _0x6ed60d(0x1e3)), _0x3485aa['appendChil' + 'd'](_0x36bfb0);
    }), _0x3485aa[_0x23c852(0x386) + 'torAll'](_0x23c852(0x325) + _0x23c852(0x2a9))[_0x23c852(0x280)](_0x2757a9 => {
        const _0x1d09c9 = _0x23c852;
        _0x2757a9['addEventLi' + _0x1d09c9(0x236)]('click', () => {
            const _0x5685ee = _0x1d09c9,
                _0x31abd9 = loadSettings();
            _0x31abd9[_0x5685ee(0x200) + _0x5685ee(0x1fd)][_0x5685ee(0x281)](parseInt(_0x2757a9[_0x5685ee(0x395)][_0x5685ee(0x3d3)]), 0x1), saveSettings(_0x31abd9), renderCustomTokenInputs();
        });
    }));
    const _0x2b6738 = document['getElement' + _0x23c852(0x46e)]('custom-eth' + _0x23c852(0x3ec) + 't');
    _0x2b6738 && (_0x2b6738[_0x23c852(0x43e)] = '', (_0x265ef0[_0x23c852(0x1ef) + _0x23c852(0x1fd)] || [])['forEach']((_0x435617, _0x179e0f) => {
        const _0x1b49b7 = _0x23c852,
            _0x1cd045 = document[_0x1b49b7(0x1ba) + 'ent'](_0x1b49b7(0x388));
        _0x1cd045['className'] = 'l-custom-t' + 'oken-entry', _0x1cd045[_0x1b49b7(0x43e)] = _0x1b49b7(0x3ad) + 'div\x20class=' + '\x22l-custom-' + _0x1b49b7(0x26a) + _0x1b49b7(0x464) + _0x1b49b7(0x33c) + '\x20class=\x22l-' + 'custom-tok' + _0x1b49b7(0x21c) + (_0x435617['ca'] ? _0x435617['ca'][_0x1b49b7(0x2ce)](0x0, 0x6) + _0x1b49b7(0x361) + _0x435617['ca'][_0x1b49b7(0x2ce)](-0x4) : 'New\x20token') + (_0x1b49b7(0x363) + _0x1b49b7(0x20b) + _0x1b49b7(0x44b) + _0x1b49b7(0x2a4) + 'e-eth-btn\x22' + _0x1b49b7(0x2d8) + 'x=\x22') + _0x179e0f + (_0x1b49b7(0x289) + _0x1b49b7(0x318) + _0x1b49b7(0x422) + '\x20\x20\x20\x20\x20\x20<div' + _0x1b49b7(0x1d9) + _0x1b49b7(0x202) + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<label>' + _0x1b49b7(0x43f) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1b49b7(0x2af) + _0x1b49b7(0x2b8) + 'om-eth-ca\x22' + '\x20data-inde' + _0x1b49b7(0x238)) + _0x179e0f + _0x1b49b7(0x3a3) + (_0x435617['ca'] || '') + ('\x22\x20placehol' + 'der=\x22Ether' + _0x1b49b7(0x2d6) + _0x1b49b7(0x3c8) + _0x1b49b7(0x33b) + '\x20</div>\x0a\x20\x20' + _0x1b49b7(0x49d) + '\x20class=\x22se' + 'ttings-row' + _0x1b49b7(0x33b) + '\x20\x20\x20<label>' + 'Amt</label' + _0x1b49b7(0x3ef) + '\x20\x20<input\x20c' + _0x1b49b7(0x302) + _0x1b49b7(0x31d) + 'ount\x22\x20data' + _0x1b49b7(0x3bc)) + _0x179e0f + (_0x1b49b7(0x36a) + _0x1b49b7(0x2d5) + '\x220\x22\x20step=\x22' + _0x1b49b7(0x424) + '=\x22') + (_0x435617['amount'] || '') + (_0x1b49b7(0x286) + _0x1b49b7(0x270) + _0x1b49b7(0x2a8) + 'iv>\x0a\x20\x20\x20\x20\x20\x20'), _0x2b6738['appendChil' + 'd'](_0x1cd045);
    }), _0x2b6738['querySelec' + _0x23c852(0x392)](_0x23c852(0x325) + _0x23c852(0x2ab))[_0x23c852(0x280)](_0x19543f => {
        const _0x2e5984 = _0x23c852;
        _0x19543f[_0x2e5984(0x26b) + _0x2e5984(0x236)]('click', () => {
            const _0xbe874b = _0x2e5984,
                _0x41d720 = loadSettings();
            _0x41d720[_0xbe874b(0x1ef) + _0xbe874b(0x1fd)]['splice'](parseInt(_0x19543f[_0xbe874b(0x395)][_0xbe874b(0x3d3)]), 0x1), saveSettings(_0x41d720), renderCustomTokenInputs();
        });
    }));
}

function openSettings() {
    const _0x3d4378 = a0_0x12b68e,
        _0x31cfe4 = {
            'eyfbR': 'set-usdtCh' + 'ain',
            'ldqQt': _0x3d4378(0x2f6) + 'ain',
            'QFnjW': 'set-curren' + 'cy'
        },
        _0x4e0a08 = loadSettings();
    document[_0x3d4378(0x377) + _0x3d4378(0x46e)]('set-btc')[_0x3d4378(0x294)] = _0x4e0a08['coins'][_0x3d4378(0x417)] || '', document[_0x3d4378(0x377) + _0x3d4378(0x46e)]('set-sol')['value'] = _0x4e0a08[_0x3d4378(0x277)]['sol'] || '', document['getElement' + 'ById'](_0x3d4378(0x21f))[_0x3d4378(0x294)] = _0x4e0a08['coins'][_0x3d4378(0x3d7)] || '', document[_0x3d4378(0x377) + _0x3d4378(0x46e)](_0x3d4378(0x21e))['value'] = _0x4e0a08[_0x3d4378(0x277)]['trx'] || '', document['getElement' + _0x3d4378(0x46e)](_0x3d4378(0x20a))['value'] = _0x4e0a08[_0x3d4378(0x277)]['bnb'] || '', document[_0x3d4378(0x377) + _0x3d4378(0x46e)]('set-usdt')[_0x3d4378(0x294)] = _0x4e0a08[_0x3d4378(0x277)][_0x3d4378(0x22e)] || '', document['getElement' + 'ById'](_0x3d4378(0x249))[_0x3d4378(0x294)] = _0x4e0a08['coins']['usdc'] || '', document[_0x3d4378(0x377) + _0x3d4378(0x46e)](_0x31cfe4[_0x3d4378(0x32b)])['value'] = _0x4e0a08[_0x3d4378(0x32a)] || 'eth', document['getElement' + 'ById'](_0x31cfe4[_0x3d4378(0x31f)])[_0x3d4378(0x294)] = _0x4e0a08[_0x3d4378(0x48e)] || 'eth', document['getElement' + 'ById'](_0x3d4378(0x1d0) + 'ey')[_0x3d4378(0x294)] = _0x4e0a08['cgApiKey'] || '', document[_0x3d4378(0x377) + _0x3d4378(0x46e)](_0x3d4378(0x1d0) + _0x3d4378(0x229))['checked'] = !!_0x4e0a08['cgApiKeyPr' + 'o'], document[_0x3d4378(0x377) + _0x3d4378(0x46e)](_0x31cfe4['QFnjW'])['value'] = _0x4e0a08[_0x3d4378(0x2f5)] || 'usd', renderCustomTokenInputs(), document['getElement' + _0x3d4378(0x46e)](_0x3d4378(0x323) + _0x3d4378(0x46b))['classList'][_0x3d4378(0x1cb)](_0x3d4378(0x1f0)), setTimeout(() => {
        const _0x175d8a = _0x3d4378;
        document[_0x175d8a(0x386) + _0x175d8a(0x4af)]('.settings-' + _0x175d8a(0x390))[_0x175d8a(0x1ca)] = 0x0;
    }, 0xa);
}

function closeSettings() {
    const _0xe8a13e = a0_0x12b68e;
    document[_0xe8a13e(0x377) + 'ById']('settingsOv' + _0xe8a13e(0x46b))['classList']['remove']('open');
}

function confirmSettings() {
    const _0x259a8b = a0_0x12b68e,
        _0x2a6bf2 = {
            'OxeDT': _0x259a8b(0x21f),
            'mAIpK': 'set-cgApiK' + 'ey',
            'DyKEL': 'btc',
            'YiOeO': function(_0x3f7338, _0x5a6171) {
                return _0x3f7338(_0x5a6171);
            },
            'jMvTo': function(_0x4a8d4b) {
                return _0x4a8d4b();
            }
        },
        _0x3cbd97 = loadSettings(),
        _0x5820ac = _0x3cbd97[_0x259a8b(0x2f5)] || 'usd';
    _0x3cbd97['coins'][_0x259a8b(0x417)] = parseFloat(document[_0x259a8b(0x377) + 'ById'](_0x259a8b(0x2b5))[_0x259a8b(0x294)]) || 0x0, _0x3cbd97[_0x259a8b(0x277)]['sol'] = parseFloat(document[_0x259a8b(0x377) + 'ById']('set-sol')['value']) || 0x0, _0x3cbd97[_0x259a8b(0x277)][_0x259a8b(0x3d7)] = parseFloat(document[_0x259a8b(0x377) + 'ById'](_0x2a6bf2['OxeDT'])[_0x259a8b(0x294)]) || 0x0, _0x3cbd97[_0x259a8b(0x277)][_0x259a8b(0x29c)] = parseFloat(document['getElement' + 'ById'](_0x259a8b(0x21e))['value']) || 0x0, _0x3cbd97[_0x259a8b(0x277)][_0x259a8b(0x1dc)] = parseFloat(document['getElement' + 'ById']('set-bnb')['value']) || 0x0, _0x3cbd97['coins'][_0x259a8b(0x22e)] = parseFloat(document[_0x259a8b(0x377) + _0x259a8b(0x46e)]('set-usdt')['value']) || 0x0, _0x3cbd97['coins'][_0x259a8b(0x25d)] = parseFloat(document[_0x259a8b(0x377) + 'ById']('set-usdc')['value']) || 0x0, _0x3cbd97[_0x259a8b(0x32a)] = document[_0x259a8b(0x377) + _0x259a8b(0x46e)]('set-usdtCh' + 'ain')[_0x259a8b(0x294)] || 'eth', _0x3cbd97[_0x259a8b(0x48e)] = document[_0x259a8b(0x377) + _0x259a8b(0x46e)](_0x259a8b(0x2f6) + _0x259a8b(0x39c))[_0x259a8b(0x294)] || 'eth';
    const _0x47e800 = document['querySelec' + _0x259a8b(0x392)]('.lcustom-s' + _0x259a8b(0x40e)),
        _0x221cc4 = document['querySelec' + 'torAll']('.lcustom-s' + 'ol-amount');
    _0x3cbd97[_0x259a8b(0x200) + _0x259a8b(0x1fd)] = [], _0x47e800['forEach']((_0x63c21f, _0x2f8629) => {
        const _0x12c7f2 = _0x259a8b,
            _0x38bfb0 = _0x63c21f[_0x12c7f2(0x294)][_0x12c7f2(0x474)]();
        if (_0x38bfb0) _0x3cbd97['customSolT' + _0x12c7f2(0x1fd)][_0x12c7f2(0x230)]({
            'ca': _0x38bfb0,
            'amount': parseFloat(_0x221cc4[_0x2f8629]['value']) || 0x0
        });
    });
    const _0x2ccefa = document['querySelec' + _0x259a8b(0x392)](_0x259a8b(0x2fc) + 'th-ca'),
        _0x587f3e = document[_0x259a8b(0x386) + 'torAll'](_0x259a8b(0x2fc) + 'th-amount');
    _0x3cbd97['customEthT' + _0x259a8b(0x1fd)] = [], _0x2ccefa['forEach']((_0x5eaa88, _0x1da866) => {
        const _0x3e1ed0 = _0x259a8b,
            _0x57c7bf = _0x5eaa88[_0x3e1ed0(0x294)][_0x3e1ed0(0x474)]();
        if (_0x57c7bf) _0x3cbd97['customEthT' + _0x3e1ed0(0x1fd)]['push']({
            'ca': _0x57c7bf,
            'amount': parseFloat(_0x587f3e[_0x1da866]['value']) || 0x0
        });
    });
    for (const _0x211814 of _0x3cbd97['customSolT' + 'okens'] || []) {
        if (_0x211814['ca']) localStorage[_0x259a8b(0x445)](_0x259a8b(0x24c) + 'l_' + _0x211814['ca']);
    }
    for (const _0x2aa66d of _0x3cbd97[_0x259a8b(0x1ef) + 'okens'] || []) {
        if (_0x2aa66d['ca']) localStorage[_0x259a8b(0x445)]('lcustom_et' + 'h_' + _0x2aa66d['ca']);
    }
    _0x3cbd97[_0x259a8b(0x3f9)] = document[_0x259a8b(0x377) + 'ById'](_0x2a6bf2[_0x259a8b(0x34b)])[_0x259a8b(0x294)][_0x259a8b(0x474)](), _0x3cbd97[_0x259a8b(0x2ed) + 'o'] = document[_0x259a8b(0x377) + 'ById']('set-cgApiK' + _0x259a8b(0x229))['checked'], _0x3cbd97['currency'] = document[_0x259a8b(0x377) + _0x259a8b(0x46e)]('set-curren' + 'cy')[_0x259a8b(0x294)] || _0x259a8b(0x41b);
    for (const _0x902561 of [_0x2a6bf2[_0x259a8b(0x355)], 'sol', _0x259a8b(0x3d7), 'trx', _0x259a8b(0x1dc)]) {
        localStorage[_0x259a8b(0x445)](_0x259a8b(0x2f7) + _0x902561 + '_' + _0x5820ac), localStorage['removeItem']('lprice_' + _0x902561 + '_' + _0x3cbd97['currency']);
    }
    _0x2a6bf2[_0x259a8b(0x1ff)](saveSettings, _0x3cbd97), closeSettings(), _0x2a6bf2['jMvTo'](updateWallet);
}

function initButtons(_0x3b2a90) {
    const _0x118606 = a0_0x12b68e;
    document['querySelec' + _0x118606(0x392)](_0x3b2a90)[_0x118606(0x280)](_0x109fbc => {
        const _0x44dd42 = _0x118606,
            _0x551b77 = {
                'fyNjG': 'active'
            };
        _0x109fbc['addEventLi' + _0x44dd42(0x236)](_0x44dd42(0x2de), () => {
            const _0x493e88 = _0x44dd42;
            document[_0x493e88(0x386) + _0x493e88(0x392)](_0x3b2a90)[_0x493e88(0x280)](_0x56f873 => _0x56f873[_0x493e88(0x1ce)][_0x493e88(0x3b4)]('active')), _0x109fbc['classList'][_0x493e88(0x1cb)](_0x551b77['fyNjG']);
        });
    });
}

function initScrollCollapse() {
    const _0x47586a = a0_0x12b68e,
        _0x489e53 = {
            'SzQAJ': _0x47586a(0x3dd) + _0x47586a(0x461),
            'ejTfq': _0x47586a(0x3a2)
        },
        _0x33d1d5 = document[_0x47586a(0x386) + 'tor'](_0x47586a(0x40f) + 'e'),
        _0x4ed3f4 = document['getElement' + 'ById']('scrollOver' + _0x47586a(0x3d9)),
        _0x2f38b7 = document['querySelec' + 'tor'](_0x47586a(0x39a)),
        _0x338eec = document[_0x47586a(0x386) + _0x47586a(0x4af)](_0x489e53['SzQAJ']);
    _0x33d1d5[_0x47586a(0x26b) + _0x47586a(0x236)](_0x489e53[_0x47586a(0x244)], () => {
        const _0x5bf758 = _0x47586a,
            _0x19774f = _0x33d1d5['scrollTop'],
            _0xf1680c = _0x338eec['offsetTop'] * 0.1,
            _0x7ff7dd = Math['max'](0x0, Math['min'](0x1, _0x19774f / _0xf1680c));
        _0x4ed3f4[_0x5bf758(0x352)][_0x5bf758(0x2e9)] = _0x7ff7dd, _0x7ff7dd >= 0x1 ? _0x338eec['style'][_0x5bf758(0x367)] = '#000000' : (_0x338eec['style'][_0x5bf758(0x367)] = _0x5bf758(0x299) + 't', _0x338eec['style']['boxShadow'] = _0x5bf758(0x3aa));
    }, {
        'passive': !![]
    });
}

function loadTransactions() {
    const _0x1e21fd = a0_0x12b68e,
        _0x560cc7 = {
            'tBegw': _0x1e21fd(0x4ae) + _0x1e21fd(0x40d)
        };
    try {
        return JSON['parse'](localStorage['getItem'](_0x560cc7[_0x1e21fd(0x47a)])) || [];
    } catch {
        return [];
    }
}

function saveTransactions(_0x321319) {
    const _0x36f3ba = a0_0x12b68e;
    localStorage['setItem'](_0x36f3ba(0x4ae) + _0x36f3ba(0x40d), JSON['stringify'](_0x321319));
}

function formatTxnDate(_0x1277eb) {
    const _0x43632f = a0_0x12b68e,
        _0x593a2c = new Date(_0x1277eb);
    return _0x593a2c[_0x43632f(0x1bc)]() + 0x1 + '/' + _0x593a2c['getDate']() + '/' + _0x593a2c[_0x43632f(0x2f2) + 'r']();
}

function formatTxnTime(_0x275610) {
    const _0x51baf2 = a0_0x12b68e,
        _0x28e975 = {
            'EXQji': _0x51baf2(0x446)
        },
        _0x24face = new Date(_0x275610);
    return _0x24face['toLocaleTi' + 'meString'](_0x51baf2(0x23e), {
        'hour': 'numeric',
        'minute': _0x28e975[_0x51baf2(0x1ee)],
        'hour12': !![]
    });
}

function renderTransactionHistory() {
    const _0x237e58 = a0_0x12b68e,
        _0x12406b = {
            'FWwbR': 'usd',
            'eVFvE': function(_0x9eaade, _0x3907ae) {
                return _0x9eaade === _0x3907ae;
            }
        },
        _0xdd6788 = loadTransactions(),
        _0x4e56f6 = document['querySelec' + 'tor']('.transacti' + 'on-history'),
        _0x91fc8b = loadSettings(),
        _0x536496 = _0x91fc8b[_0x237e58(0x2f5)] || _0x12406b['FWwbR'];
    if (_0x12406b[_0x237e58(0x41a)](_0xdd6788[_0x237e58(0x22f)], 0x0)) {
        _0x4e56f6['innerHTML'] = '<h3>' + window['i18n']['t']('ledger.tx_' + 'history') + ('</h3><div\x20' + _0x237e58(0x348) + _0x237e58(0x26d)) + window[_0x237e58(0x205)]['t'](_0x237e58(0x37f) + 'tx') + '</div>';
        return;
    }
    const _0xab5842 = {};
    _0xdd6788['forEach'](_0xc7d883 => {
        const _0x423ef8 = _0x237e58,
            _0x2c3f8e = formatTxnDate(_0xc7d883['timestamp']);
        if (!_0xab5842[_0x2c3f8e]) _0xab5842[_0x2c3f8e] = [];
        _0xab5842[_0x2c3f8e][_0x423ef8(0x230)](_0xc7d883);
    });
    let _0x21c69c = _0x237e58(0x27f) + window[_0x237e58(0x205)]['t'](_0x237e58(0x2a1) + _0x237e58(0x27c)) + '</h3>';
    for (const [_0x472505, _0x340281] of Object[_0x237e58(0x3c0)](_0xab5842)) {
        _0x21c69c += '<div\x20class' + _0x237e58(0x1da) + '-group\x22><d' + _0x237e58(0x349) + _0x237e58(0x489) + _0x472505 + _0x237e58(0x354);
        for (const _0x55c140 of _0x340281) {
            const _0x8d20b7 = getCachedPrice(_0x55c140[_0x237e58(0x3de)], _0x536496),
                _0x166adb = _0x8d20b7 ?.['price'] || 0x0,
                _0x486e56 = (_0x55c140[_0x237e58(0x245)] * _0x166adb)['toLocaleSt' + _0x237e58(0x2bb)]('en-US', {
                    'minimumFractionDigits': 0x2,
                    'maximumFractionDigits': 0x2
                }),
                _0x36ac0a = CURRENCIES[_0x536496] ?.[_0x237e58(0x437)] || '$',
                _0x2153c1 = _0x55c140['type'] === _0x237e58(0x316) ? '+' : '-',
                _0x16683a = _0x55c140[_0x237e58(0x1dd)],
                _0x1c52de = formatTxnTime(_0x55c140['timestamp']),
                _0x2b8a7d = window[_0x237e58(0x205)]['t'](_0x55c140[_0x237e58(0x1dd)] === _0x237e58(0x316) ? 'tx.receive' + 'd' : _0x237e58(0x425)),
                _0x3ff0cb = COIN_SYMBOLS[_0x55c140['coin']] + _0x237e58(0x34c),
                _0x2292dc = _0x55c140[_0x237e58(0x1dd)] === 'received' ? '<svg\x20width' + '=\x2216\x22\x20heig' + _0x237e58(0x1b8) + 'ewBox=\x220\x200' + '\x2016\x2016\x22\x20fi' + _0x237e58(0x2aa) + _0x237e58(0x2fd) + _0x237e58(0x2b6) + '\x22\x20stroke-w' + _0x237e58(0x237) + 'troke-line' + _0x237e58(0x36e) + '\x22\x20stroke-l' + _0x237e58(0x3fc) + _0x237e58(0x2a0) + _0x237e58(0x30b) + '1=\x222\x22\x20x2=\x22' + _0x237e58(0x440) + _0x237e58(0x234) + _0x237e58(0x29e) + '4,10\x208,14\x20' + '12,10\x22/></' + 'svg>' : '<svg\x20width' + '=\x2216\x22\x20heig' + _0x237e58(0x1b8) + _0x237e58(0x4a6) + '\x2016\x2016\x22\x20fi' + 'll=\x22none\x22\x20' + 'stroke=\x22cu' + _0x237e58(0x2b6) + '\x22\x20stroke-w' + 'idth=\x222\x22\x20s' + 'troke-line' + 'cap=\x22round' + '\x22\x20stroke-l' + 'inejoin=\x22r' + _0x237e58(0x2a0) + 'e\x20x1=\x228\x22\x20y' + '1=\x2214\x22\x20x2=' + _0x237e58(0x428) + '/><polylin' + _0x237e58(0x29e) + _0x237e58(0x2c7) + _0x237e58(0x288) + '>';
            _0x21c69c += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x237e58(0x2e8) + '\x22txn-item\x22' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20<div\x20cla' + 'ss=\x22txn-ic' + _0x237e58(0x3e4) + 'n--' + _0x55c140[_0x237e58(0x1dd)] + '\x22>' + _0x2292dc + ('</div>\x0a\x20\x20\x20' + _0x237e58(0x405) + _0x237e58(0x240) + _0x237e58(0x1e7) + _0x237e58(0x29b) + _0x237e58(0x2c5) + 'ss=\x22txn-ti' + _0x237e58(0x4a9)) + _0x3ff0cb + (_0x237e58(0x1be) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'div\x20class=' + '\x22txn-subti' + 'tle\x22>') + _0x2b8a7d + '\x20' + _0x1c52de + (_0x237e58(0x1be) + _0x237e58(0x2a8) + _0x237e58(0x1e3) + _0x237e58(0x2c0) + _0x237e58(0x1bf) + 'amount-col' + _0x237e58(0x33b) + '\x20\x20\x20\x20\x20<div\x20' + 'class=\x22txn' + _0x237e58(0x365)) + _0x16683a + '\x22>' + _0x2153c1 + fmtAmount(_0x55c140[_0x237e58(0x245)]) + '\x20' + COIN_SYMBOLS[_0x55c140['coin']] + ('</div>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x237e58(0x2e8) + '\x22txn-fiat\x22' + '>') + _0x36ac0a + _0x486e56 + (_0x237e58(0x1be) + _0x237e58(0x2a8) + 'iv>\x0a\x20\x20\x20\x20\x20\x20' + _0x237e58(0x454));
        }
        _0x21c69c += '</div>';
    }
    _0x4e56f6[_0x237e58(0x43e)] = _0x21c69c;
}

function openTxnOverlay() {
    const _0x1e931d = a0_0x12b68e,
        _0x23b371 = {
            'Xkzyu': '.txn-type-' + _0x1e931d(0x384) + _0x1e931d(0x438) + _0x1e931d(0x3b7)
        },
        _0x45c494 = new Date();
    document[_0x1e931d(0x377) + 'ById']('txn-date')[_0x1e931d(0x294)] = _0x45c494['toISOStrin' + 'g']()[_0x1e931d(0x31e)]('T')[0x0], document['getElement' + _0x1e931d(0x46e)](_0x1e931d(0x282))['value'] = _0x45c494['toTimeStri' + 'ng']()['slice'](0x0, 0x5), document[_0x1e931d(0x377) + 'ById'](_0x1e931d(0x2a7))['value'] = '', document['getElement' + _0x1e931d(0x46e)](_0x1e931d(0x264))[_0x1e931d(0x294)] = 'btc', document[_0x1e931d(0x386) + 'torAll'](_0x1e931d(0x2dc) + 'btn')['forEach'](_0x5004fc => _0x5004fc[_0x1e931d(0x1ce)]['remove']('active')), document['querySelec' + _0x1e931d(0x4af)](_0x23b371[_0x1e931d(0x2bc)])[_0x1e931d(0x1ce)]['add']('active'), document[_0x1e931d(0x377) + _0x1e931d(0x46e)]('txnOverlay')['classList']['add']('open');
}

function closeTxnOverlay() {
    const _0x1736d4 = a0_0x12b68e;
    document['getElement' + 'ById']('txnOverlay')['classList'][_0x1736d4(0x3b4)]('open');
}

function confirmAddTxn() {
    const _0x3c7864 = a0_0x12b68e,
        _0x2303c1 = {
            'pzsSo': _0x3c7864(0x282)
        },
        _0xffe82a = document['querySelec' + _0x3c7864(0x4af)]('.txn-type-' + _0x3c7864(0x303)) ?.[_0x3c7864(0x395)][_0x3c7864(0x1dd)] || _0x3c7864(0x316),
        _0x592222 = document['getElement' + 'ById']('txn-coin')[_0x3c7864(0x294)],
        _0xc23c23 = parseFloat(document[_0x3c7864(0x377) + _0x3c7864(0x46e)](_0x3c7864(0x2a7))[_0x3c7864(0x294)]) || 0x0,
        _0xc6ac06 = document[_0x3c7864(0x377) + _0x3c7864(0x46e)]('txn-date')[_0x3c7864(0x294)],
        _0x114512 = document['getElement' + _0x3c7864(0x46e)](_0x2303c1[_0x3c7864(0x3b5)])['value'];
    if (_0xc23c23 <= 0x0) {
        closeTxnOverlay();
        return;
    }
    const _0x5dfccf = new Date(_0xc6ac06 + 'T' + _0x114512)[_0x3c7864(0x3a7)](),
        _0x1e1a7b = loadTransactions();
    _0x1e1a7b['push']({
        'id': Date[_0x3c7864(0x472)](),
        'coin': _0x592222,
        'type': _0xffe82a,
        'amount': _0xc23c23,
        'timestamp': _0x5dfccf
    }), _0x1e1a7b['sort']((_0xdb0f94, _0x2ffa35) => _0x2ffa35[_0x3c7864(0x227)] - _0xdb0f94[_0x3c7864(0x227)]), saveTransactions(_0x1e1a7b), closeTxnOverlay(), renderTransactionHistory();
    const _0x3a6c24 = document['querySelec' + _0x3c7864(0x4af)](_0x3c7864(0x40f) + 'e'),
        _0x9d9baf = document[_0x3c7864(0x386) + _0x3c7864(0x4af)](_0x3c7864(0x4b5) + 'on-history');
    _0x3a6c24 && _0x9d9baf && setTimeout(() => _0x3a6c24[_0x3c7864(0x45f)]({
        'top': _0x9d9baf['offsetTop'] - 0x50,
        'behavior': 'smooth'
    }), 0x32);
}

function initTxnTypeToggle() {
    const _0x27055a = a0_0x12b68e;
    document[_0x27055a(0x386) + 'torAll']('.txn-type-' + _0x27055a(0x3cf))[_0x27055a(0x280)](_0x596e40 => {
        const _0x5d7eca = _0x27055a;
        _0x596e40['addEventLi' + _0x5d7eca(0x236)]('click', () => {
            const _0x49a79c = _0x5d7eca;
            document[_0x49a79c(0x386) + 'torAll']('.txn-type-' + 'btn')[_0x49a79c(0x280)](_0x264d64 => _0x264d64['classList'][_0x49a79c(0x3b4)]('active')), _0x596e40['classList']['add']('active');
        });
    });
}
const EYE_OPEN = a0_0x12b68e(0x4ad) + 'ox=\x220\x200\x2024' + a0_0x12b68e(0x246) + '\x22none\x22\x20str' + a0_0x12b68e(0x21a) + a0_0x12b68e(0x243) + a0_0x12b68e(0x1f7) + 'h=\x221.8\x22\x20st' + a0_0x12b68e(0x29d) + 'ap=\x22round\x22' + a0_0x12b68e(0x260) + 'nejoin=\x22ro' + a0_0x12b68e(0x4a1) + a0_0x12b68e(0x449) + '4-8\x2011-8\x201' + a0_0x12b68e(0x2e4) + '\x208-11\x208-11' + '-8-11-8z\x22/' + '><circle\x20c' + 'x=\x2212\x22\x20cy=' + a0_0x12b68e(0x421) + a0_0x12b68e(0x1e2),
    EYE_CLOSED = a0_0x12b68e(0x4ad) + a0_0x12b68e(0x2c9) + a0_0x12b68e(0x246) + '\x22none\x22\x20str' + a0_0x12b68e(0x21a) + a0_0x12b68e(0x243) + 'troke-widt' + 'h=\x221.8\x22\x20st' + a0_0x12b68e(0x29d) + a0_0x12b68e(0x382) + a0_0x12b68e(0x260) + a0_0x12b68e(0x412) + 'und\x22><path' + a0_0x12b68e(0x470) + a0_0x12b68e(0x28b) + a0_0x12b68e(0x344) + '\x200112\x2020c-' + a0_0x12b68e(0x3da) + a0_0x12b68e(0x3d5) + a0_0x12b68e(0x34e) + '5.06-5.94M' + a0_0x12b68e(0x25b) + a0_0x12b68e(0x481) + a0_0x12b68e(0x297) + a0_0x12b68e(0x305) + '8a18.5\x2018.' + '5\x200\x2001-2.1' + a0_0x12b68e(0x1cd) + a0_0x12b68e(0x3ab) + a0_0x12b68e(0x28c) + a0_0x12b68e(0x2a6) + 'line\x20x1=\x221' + a0_0x12b68e(0x208) + a0_0x12b68e(0x2b7) + a0_0x12b68e(0x1d1) + 'g>';

function toggleDiscreet() {
    const _0x3af1ee = a0_0x12b68e,
        _0x24dffa = {
            'jwDCK': _0x3af1ee(0x3f3) + 'play'
        };
    discreet = !discreet;
    const _0x428e91 = document['getElement' + _0x3af1ee(0x46e)](_0x24dffa['jwDCK']);
    discreet ? _0x428e91['innerHTML'] = _0x3af1ee(0x284) + '\x20class=\x22ba' + 'lance-eye-' + 'icon\x22>' + EYE_OPEN + '</span>' : _0x428e91[_0x3af1ee(0x43e)] = fmtUSDHtml(BASE_PRICE), renderAssets(window['__lastCoin' + _0x3af1ee(0x2e7)] || []);
}

function initPullToRefresh() {
    const _0x34973d = a0_0x12b68e,
        _0x15c68f = {
            'DTmzo': function(_0x1691b9, _0x40cec4) {
                return _0x1691b9 + _0x40cec4;
            },
            'qybcR': _0x34973d(0x23c) + 'ase,\x20trans' + 'form\x200.3s\x20' + _0x34973d(0x285) + 'ity\x200.3s\x20e' + 'ase',
            'gPDLQ': 'none',
            'cUqsH': function(_0x476962, _0x24f95) {
                return _0x476962 >= _0x24f95;
            },
            'CAFOF': _0x34973d(0x221) + '(0)'
        },
        _0x140144 = document['getElement' + _0x34973d(0x46e)](_0x34973d(0x48b) + 'r'),
        _0x4aa057 = document['querySelec' + _0x34973d(0x4af)](_0x34973d(0x40f) + 'e'),
        _0x5abeb2 = document['getElement' + 'ById'](_0x34973d(0x488) + 'r'),
        _0x39d921 = Array['from'](_0x5abeb2['querySelec' + _0x34973d(0x392)]('.spinner-b' + 'lade')),
        _0x11ec1f = _0x39d921[_0x34973d(0x22f)],
        _0xb7f739 = 0x46,
        _0x1d4907 = 0x3e,
        _0x4d4f36 = 0.45;
    let _0x51ab5c = 0x0,
        _0x21450e = 0x0,
        _0x1b31f7 = 0x0,
        _0x31656e = ![],
        _0x41d4ab = ![],
        _0x5b7a56 = ![];
    _0x5abeb2[_0x34973d(0x352)][_0x34973d(0x3ce)] = _0x34973d(0x433), _0x3a227b();

    function _0x3a227b() {
        const _0x410331 = _0x34973d;
        _0x5abeb2[_0x410331(0x352)][_0x410331(0x47e)] = _0x410331(0x3aa), _0x5abeb2['style']['transform'] = _0x410331(0x3f5) + _0x410331(0x389) + _0x410331(0x35e), _0x5abeb2[_0x410331(0x352)][_0x410331(0x2e9)] = '0', _0x39d921[_0x410331(0x280)](_0xc3f3e6 => {
            const _0x339986 = _0x410331;
            _0xc3f3e6['style']['animationN' + _0x339986(0x404)] = _0x339986(0x3aa), _0xc3f3e6[_0x339986(0x352)]['opacity'] = '0', _0xc3f3e6['style'][_0x339986(0x367) + 'Color'] = 'transparen' + 't';
        });
    }

    function _0x216be2(_0x5050ee) {
        const _0x115a03 = _0x34973d,
            _0x1f8ae0 = Math[_0x115a03(0x23d)](Math[_0x115a03(0x27e)](_0x5050ee * _0x15c68f['DTmzo'](_0x11ec1f, 0x1)), _0x11ec1f);
        _0x39d921[_0x115a03(0x280)]((_0x4393f6, _0x2d9ca1) => {
            const _0x3003f7 = _0x115a03;
            _0x4393f6[_0x3003f7(0x352)]['animationN' + _0x3003f7(0x404)] = 'spinner-fa' + 'de', _0x4393f6[_0x3003f7(0x352)][_0x3003f7(0x2e9)] = _0x2d9ca1 < _0x1f8ae0 ? '1' : '0', _0x4393f6['style'][_0x3003f7(0x367) + _0x3003f7(0x3e2)] = _0x2d9ca1 < _0x1f8ae0 ? _0x3003f7(0x2f4) : 'transparen' + 't';
        });
    }

    function _0x1ece9e() {
        _0x39d921['forEach'](_0x53a528 => {
            const _0x4a372d = a0_0x4bb2;
            _0x53a528[_0x4a372d(0x352)][_0x4a372d(0x2e9)] = '', _0x53a528[_0x4a372d(0x352)]['background' + 'Color'] = '', _0x53a528['style']['animationN' + 'ame'] = _0x4a372d(0x28d) + 'de';
        });
    }

    function _0x3c7e39() {
        const _0x3dccf7 = _0x34973d;
        _0x140144['style']['transition'] = 'transform\x20' + '0.3s\x20cubic' + _0x3dccf7(0x48c) + '25,1,0.5,1' + ')', _0x140144['style'][_0x3dccf7(0x254)] = _0x3dccf7(0x221) + '(0)', _0x5abeb2[_0x3dccf7(0x352)]['transition'] = _0x15c68f[_0x3dccf7(0x24d)], _0x3a227b(), _0x41d4ab = ![];
    }
    _0x140144[_0x34973d(0x26b) + 'stener']('touchstart', _0x1a67c1 => {
        const _0x55f10a = _0x34973d;
        if (_0x4aa057[_0x55f10a(0x1ca)] > 0x0) return;
        _0x51ab5c = _0x1a67c1[_0x55f10a(0x4a2)][0x0]['clientY'], _0x21450e = _0x1a67c1[_0x55f10a(0x4a2)][0x0][_0x55f10a(0x2e0)], _0x1b31f7 = 0x0, _0x31656e = !![], _0x5b7a56 = ![], _0x140144[_0x55f10a(0x352)][_0x55f10a(0x47e)] = _0x55f10a(0x3aa), _0x5abeb2['style'][_0x55f10a(0x47e)] = _0x15c68f[_0x55f10a(0x276)];
    }, {
        'passive': !![]
    }), _0x140144['addEventLi' + 'stener'](_0x34973d(0x40c), _0x449a78 => {
        const _0x4c69c4 = _0x34973d;
        if (!_0x31656e) return;
        const _0x2de043 = _0x449a78[_0x4c69c4(0x4a2)][0x0]['clientY'] - _0x51ab5c,
            _0x49dda0 = _0x449a78['touches'][0x0]['clientX'] - _0x21450e;
        if (!_0x5b7a56) {
            if (Math[_0x4c69c4(0x23b)](_0x49dda0) > Math[_0x4c69c4(0x23b)](_0x2de043)) {
                _0x31656e = ![];
                return;
            }
            _0x5b7a56 = !![];
        }
        const _0x46d696 = _0x2de043;
        if (_0x46d696 <= 0x0) {
            _0x1b31f7 = 0x0, _0x140144['style'][_0x4c69c4(0x254)] = 'translateY' + _0x4c69c4(0x4ac), _0x3a227b();
            return;
        }
        if (_0x449a78['cancelable']) _0x449a78[_0x4c69c4(0x1c0) + _0x4c69c4(0x255)]();
        _0x1b31f7 = _0x46d696;
        const _0x156fa5 = _0x1b31f7 * _0x4d4f36;
        _0x140144['style']['transform'] = _0x4c69c4(0x221) + '(' + _0x156fa5 + 'px)';
        const _0x5cdfe2 = Math['min'](_0x156fa5 / _0xb7f739, 0x1);
        _0x5abeb2['style']['transform'] = 'translateX' + '(-50%)\x20sca' + _0x4c69c4(0x3cc) + _0x5cdfe2 + ')', _0x5abeb2[_0x4c69c4(0x352)]['opacity'] = _0x5cdfe2[_0x4c69c4(0x1c7)](), _0x216be2(_0x5cdfe2);
    }, {
        'passive': ![]
    }), _0x140144['addEventLi' + _0x34973d(0x236)](_0x34973d(0x263), () => {
        const _0x403176 = _0x34973d;
        if (!_0x31656e) return;
        _0x31656e = ![];
        const _0x1b1ef2 = _0x1b31f7 * _0x4d4f36;
        _0x140144[_0x403176(0x352)]['transition'] = 'transform\x20' + _0x403176(0x216) + _0x403176(0x48c) + '25,1,0.5,1' + ')', _0x5abeb2[_0x403176(0x352)][_0x403176(0x47e)] = _0x403176(0x23c) + 'ase,\x20trans' + 'form\x200.3s\x20' + 'ease,\x20opac' + _0x403176(0x1d2) + _0x403176(0x35b), _0x15c68f['cUqsH'](_0x1b1ef2, _0xb7f739) ? (_0x140144['style']['transform'] = 'translateY' + '(' + _0x1d4907 + 'px)', _0x5abeb2[_0x403176(0x352)]['transform'] = 'translateX' + '(-50%)\x20sca' + _0x403176(0x364), _0x5abeb2[_0x403176(0x352)]['opacity'] = '1', _0x1ece9e(), _0x41d4ab = !![], updateWallet(!![]), setTimeout(_0x3c7e39, 0x4b0)) : (_0x140144[_0x403176(0x352)][_0x403176(0x254)] = _0x15c68f[_0x403176(0x2bf)], _0x3a227b()), _0x1b31f7 = 0x0;
    });
}

function renderMoverSkeletons(_0x115f64 = 0x7) {
    const _0x5e08f6 = a0_0x12b68e,
        _0x146698 = document['getElement' + _0x5e08f6(0x46e)](_0x5e08f6(0x486) + 's-containe' + 'r');
    if (!_0x146698) return;
    _0x146698[_0x5e08f6(0x43e)] = Array[_0x5e08f6(0x39e)]({
        'length': _0x115f64
    }, () => _0x5e08f6(0x3a9) + '=\x22market-c' + 'ard\x20mover-' + _0x5e08f6(0x1d5) + '\x20class=\x22mo' + _0x5e08f6(0x41c) + '<div\x20class' + _0x5e08f6(0x2f1) + _0x5e08f6(0x376) + 'n\x22></div><' + '/div><div\x20' + _0x5e08f6(0x30a) + 'er-ticker\x20' + 'mover-text' + '-skeleton\x22' + _0x5e08f6(0x309) + 'iv\x20class=\x22' + _0x5e08f6(0x1f6) + _0x5e08f6(0x45b) + 'ext-skelet' + _0x5e08f6(0x47b) + _0x5e08f6(0x232))['join']('');
}

function renderMarketMovers(_0x3fc220, _0x4ac1a3 = {}) {
    const _0x31bed5 = a0_0x12b68e,
        _0x41b095 = document[_0x31bed5(0x377) + 'ById'](_0x31bed5(0x486) + _0x31bed5(0x1fe) + 'r');
    if (!_0x41b095) return;
    if (!_0x3fc220 || _0x3fc220['length'] === 0x0) {
        _0x41b095[_0x31bed5(0x43e)] = '';
        return;
    }
    _0x41b095[_0x31bed5(0x43e)] = _0x3fc220[_0x31bed5(0x333)](_0xb757dd => {
        const _0x20ab67 = _0x31bed5,
            _0x5cbc31 = _0xb757dd[_0x20ab67(0x4a8)] >= 0x0 ? '+' : '',
            _0x29d678 = _0xb757dd[_0x20ab67(0x4a8)] >= 0x0 ? 'positive' : 'negative',
            _0x52841e = _0x4ac1a3[_0xb757dd['image']] ?.['data'],
            _0x4857d7 = _0x52841e || _0xb757dd[_0x20ab67(0x3b9)],
            _0x3019b4 = _0x4857d7 ? '<img\x20src=\x22' + _0x4857d7 + _0x20ab67(0x37e) + _0xb757dd['symbol'] + '\x22>' : '<div\x20class' + _0x20ab67(0x2f1) + _0x20ab67(0x265) + _0x20ab67(0x3dc) + _0xb757dd['symbol'][0x0] + '</div>';
        return '<div\x20class' + '=\x22market-c' + _0x20ab67(0x2b2) + 'card\x22><div' + '\x20class=\x22mo' + _0x20ab67(0x41c) + _0x3019b4 + ('</div><div' + _0x20ab67(0x42f) + _0x20ab67(0x2db) + '\x22>') + _0xb757dd['symbol'] + ('</div><div' + _0x20ab67(0x42f) + _0x20ab67(0x2bd) + '\x20') + _0x29d678 + '\x22>' + _0x5cbc31 + _0xb757dd[_0x20ab67(0x4a8)]['toFixed'](0x2) + ('%</div></d' + 'iv>');
    })[_0x31bed5(0x287)]('');
}
async function updateFearGreedGauge() {
    const _0x2c3748 = a0_0x12b68e,
        _0x27e9ce = {
            'EBDKa': function(_0x1f53a3, _0x1d63c9) {
                return _0x1f53a3 - _0x1d63c9;
            }
        };
    try {
        const _0x401edc = await fetch('https://ap' + 'i.alternat' + _0x2c3748(0x49a) + '/?limit=1');
        if (!_0x401edc['ok']) return;
        const _0x5da2c2 = await _0x401edc[_0x2c3748(0x407)](),
            _0x1157a3 = _0x5da2c2[_0x2c3748(0x42c)] ?.[0x0];
        if (!_0x1157a3) return;
        const _0x563e13 = parseInt(_0x1157a3['value']),
            _0x42aa98 = _0x1157a3['value_clas' + 'sification'] || 'Neutral',
            _0x206f44 = (0xc6 - _0x563e13 / 0x64 * 0xd8) * Math['PI'] / 0xb4,
            _0x5ecaad = +(0x16 + 0x11 * Math['cos'](_0x206f44))[_0x2c3748(0x36b)](0x1),
            _0x29c4c9 = +_0x27e9ce['EBDKa'](22.5, 0x11 * Math[_0x2c3748(0x41d)](_0x206f44))[_0x2c3748(0x36b)](0x1),
            _0x411417 = document[_0x2c3748(0x377) + 'ById'](_0x2c3748(0x2c3)),
            _0x2051e7 = document['getElement' + _0x2c3748(0x46e)](_0x2c3748(0x271)),
            _0x3badbb = document['getElement' + _0x2c3748(0x46e)]('gaugeMoodL' + _0x2c3748(0x1ed));
        _0x411417 && (_0x411417[_0x2c3748(0x47f) + 'te']('cx', _0x5ecaad), _0x411417['setAttribu' + 'te']('cy', _0x29c4c9));
        if (_0x2051e7) _0x2051e7['textConten' + 't'] = _0x563e13;
        if (_0x3badbb) {
            const _0x257c81 = {
                'Extreme\x20Fear': 'ledger.fea' + 'r',
                'Fear': 'ledger.fea' + 'r',
                'Neutral': 'ledger.neu' + 'tral',
                'Greed': 'ledger.gre' + 'ed',
                'Extreme\x20Greed': 'ledger.ext' + _0x2c3748(0x493)
            };
            _0x3badbb['textConten' + 't'] = window['i18n']['t'](_0x257c81[_0x42aa98] || 'ledger.neu' + 'tral');
            _0x3badbb['style']['color'] = (_0x42aa98 === 'Extreme\x20Fear' || _0x42aa98 === 'Fear') ? '#e25c5c' : '';
        }
    } catch {}
}
document[a0_0x12b68e(0x26b) + a0_0x12b68e(0x236)](a0_0x12b68e(0x1d6) + a0_0x12b68e(0x2ef), () => {
    const _0x80b924 = a0_0x12b68e,
        _0x5f47d6 = {
            'xPUnR': _0x80b924(0x204),
            'rVTbf': function(_0x26292c, _0x53795c) {
                return _0x26292c === _0x53795c;
            },
            'ZyOHv': 'cpAccountA' + _0x80b924(0x330),
            'HXKEc': 'settingsCo' + 'nfirm',
            'VzQqX': 'addEthToke' + 'n',
            'PzGmY': function(_0x1ee145) {
                return _0x1ee145();
            }
        };
    initPullToRefresh(), initScrollCollapse(), initButtons('.tab'), initButtons(_0x80b924(0x46a)), initButtons(_0x80b924(0x343) + 'tn'), initButtons(_0x80b924(0x2fa) + 'ata-nav]'), document['getElement' + _0x80b924(0x46e)]('balanceDis' + _0x80b924(0x24f))[_0x80b924(0x26b) + 'stener'](_0x80b924(0x2de), toggleDiscreet), document['querySelec' + _0x80b924(0x4af)]('.header-bt' + 'n[aria-lab' + 'el=\x22Settin' + 'gs\x22]')['addEventLi' + 'stener']('click', openSettings), document[_0x80b924(0x377) + _0x80b924(0x46e)]('settingsCl' + 'ose')[_0x80b924(0x26b) + _0x80b924(0x236)](_0x80b924(0x2de), closeSettings), document[_0x80b924(0x377) + 'ById'](_0x5f47d6[_0x80b924(0x30e)])['addEventLi' + 'stener'](_0x80b924(0x2de), confirmSettings), document[_0x80b924(0x377) + 'ById'](_0x80b924(0x323) + _0x80b924(0x46b))[_0x80b924(0x26b) + _0x80b924(0x236)]('click', _0x40886c => {
        const _0x274ca3 = _0x80b924;
        if (_0x40886c[_0x274ca3(0x2e3)] === document[_0x274ca3(0x377) + 'ById'](_0x274ca3(0x323) + _0x274ca3(0x46b))) closeSettings();
    }), document['getElement' + _0x80b924(0x46e)]('txnBellBtn')[_0x80b924(0x26b) + _0x80b924(0x236)](_0x80b924(0x2de), openTxnOverlay), document['getElement' + _0x80b924(0x46e)](_0x80b924(0x242))['addEventLi' + _0x80b924(0x236)]('click', closeTxnOverlay), document[_0x80b924(0x377) + 'ById']('txnConfirm')['addEventLi' + _0x80b924(0x236)]('click', confirmAddTxn), document['getElement' + _0x80b924(0x46e)](_0x80b924(0x411))['addEventLi' + _0x80b924(0x236)]('click', () => {
        saveTransactions([]), closeTxnOverlay(), renderTransactionHistory();
    }), document[_0x80b924(0x377) + 'ById']('txnOverlay')['addEventLi' + 'stener']('click', _0x3b4652 => {
        const _0x2ea2cd = _0x80b924;
        if (_0x3b4652[_0x2ea2cd(0x2e3)] === document['getElement' + 'ById'](_0x2ea2cd(0x43b))) closeTxnOverlay();
    }), initTxnTypeToggle(), (window[_0x80b924(0x205)] ?.['ready'] || Promise['resolve']())[_0x80b924(0x44d)](() => renderTransactionHistory());
    const _0x9ea41 = document[_0x80b924(0x377) + _0x80b924(0x46e)](_0x80b924(0x452) + 'n');
    if (_0x9ea41) _0x9ea41[_0x80b924(0x26b) + _0x80b924(0x236)]('click', () => {
        const _0x598e7d = _0x80b924,
            _0x5eb666 = {
                'JshRv': function(_0x1b3225, _0xdc1db7) {
                    return _0x1b3225 - _0xdc1db7;
                },
                'DPNsq': '.lcustom-s' + _0x598e7d(0x40e)
            },
            _0x2da56d = loadSettings();
        _0x2da56d[_0x598e7d(0x200) + 'okens']['push']({
            'ca': '',
            'amount': 0x0
        }), saveSettings(_0x2da56d), renderCustomTokenInputs(), setTimeout(() => {
            const _0x59aceb = _0x598e7d,
                _0x693fe6 = document[_0x59aceb(0x377) + 'ById']('custom-sol' + _0x59aceb(0x3ec) + 't'),
                _0x4c7c90 = _0x693fe6['querySelec' + 'torAll'](_0x59aceb(0x2ea) + _0x59aceb(0x1e4) + 'y');
            _0x4c7c90[_0x59aceb(0x22f)] > 0x0 && (_0x4c7c90[_0x5eb666['JshRv'](_0x4c7c90['length'], 0x1)]['scrollInto' + _0x59aceb(0x267)]({
                'behavior': _0x59aceb(0x204),
                'block': _0x59aceb(0x42d)
            }), _0x4c7c90[_0x4c7c90['length'] - 0x1][_0x59aceb(0x386) + _0x59aceb(0x4af)](_0x5eb666[_0x59aceb(0x492)])[_0x59aceb(0x416)]());
        }, 0x32);
    });
    const _0x21b94d = document[_0x80b924(0x377) + 'ById'](_0x5f47d6[_0x80b924(0x38b)]);
    if (_0x21b94d) _0x21b94d[_0x80b924(0x26b) + 'stener'](_0x80b924(0x2de), () => {
        const _0x242228 = _0x80b924,
            _0x10e1d7 = loadSettings();
        _0x10e1d7[_0x242228(0x1ef) + 'okens']['push']({
            'ca': '',
            'amount': 0x0
        }), saveSettings(_0x10e1d7), renderCustomTokenInputs(), setTimeout(() => {
            const _0x33c8d5 = _0x242228,
                _0x42e1e1 = document[_0x33c8d5(0x377) + _0x33c8d5(0x46e)]('custom-eth' + '-token-lis' + 't'),
                _0x5e0fb0 = _0x42e1e1['querySelec' + 'torAll']('.l-custom-' + 'token-entr' + 'y');
            _0x5e0fb0[_0x33c8d5(0x22f)] > 0x0 && (_0x5e0fb0[_0x5e0fb0['length'] - 0x1]['scrollInto' + 'View']({
                'behavior': _0x5f47d6[_0x33c8d5(0x414)],
                'block': _0x33c8d5(0x42d)
            }), _0x5e0fb0[_0x5e0fb0[_0x33c8d5(0x22f)] - 0x1][_0x33c8d5(0x386) + 'tor']('.lcustom-e' + _0x33c8d5(0x2c2))[_0x33c8d5(0x416)]());
        }, 0x32);
    });
    updateFearGreedGauge();
    const _0x503a84 = _getCachedTopMovers();
    _0x503a84 && _0x503a84['length'] > 0x0 ? renderMarketMovers(_0x503a84, _0x5f47d6[_0x80b924(0x43c)](_getCachedMoverImages)) : _0x5f47d6[_0x80b924(0x43c)](renderMoverSkeletons), updateWallet(), initCoinPanelInteraction(), document[_0x80b924(0x377) + _0x80b924(0x46e)]('cpBackBtn')['addEventLi' + _0x80b924(0x236)]('click', closeCoinPanel), document['getElement' + 'ById']('cpSettings' + _0x80b924(0x3bd))[_0x80b924(0x26b) + _0x80b924(0x236)](_0x80b924(0x2de), openCoinAccountPopup), document['getElement' + 'ById']('cpAccountP' + _0x80b924(0x32f))['addEventLi' + _0x80b924(0x236)]('click', closeCoinAccountPopup), document[_0x80b924(0x377) + 'ById'](_0x80b924(0x256) + _0x80b924(0x346))[_0x80b924(0x26b) + 'stener']('click', saveCoinAccountPopup), document['getElement' + _0x80b924(0x46e)](_0x80b924(0x256) + _0x80b924(0x40b))[_0x80b924(0x26b) + _0x80b924(0x236)](_0x80b924(0x2de), _0x102f65 => {
        const _0x29346e = _0x80b924;
        if (_0x5f47d6['rVTbf'](_0x102f65['target'], document['getElement' + _0x29346e(0x46e)](_0x29346e(0x256) + _0x29346e(0x40b)))) closeCoinAccountPopup();
    }), document['getElement' + _0x80b924(0x46e)](_0x80b924(0x494) + 'andBtn')['addEventLi' + 'stener'](_0x80b924(0x2de), () => {
        const _0x1bb07a = _0x80b924,
            _0x3a3c13 = _cpAccountPopupCoin;
        if (!_0x3a3c13) return;
        const _0x1a0190 = generateLedgerAddress(_0x3a3c13[_0x1bb07a(0x39d)] ? null : _0x3a3c13[_0x1bb07a(0x219)], _0x3a3c13['chain']);
        document['getElement' + 'ById'](_0x5f47d6[_0x1bb07a(0x44f)])['value'] = _0x1a0190;
    }), document['getElement' + 'ById'](_0x80b924(0x473) + _0x80b924(0x3ba))['addEventLi' + 'stener']('click', openCoinAccountPopup), document[_0x80b924(0x386) + _0x80b924(0x392)]('.cp-range-' + _0x80b924(0x3cf))['forEach'](_0x868c24 => {
        _0x868c24['addEventLi' + 'stener']('click', async () => {
            const _0x20ab11 = a0_0x4bb2;
            document['querySelec' + 'torAll']('.cp-range-' + 'btn')['forEach'](_0x193dcf => _0x193dcf['classList']['remove'](_0x20ab11(0x3f7))), _0x868c24['classList'][_0x20ab11(0x1cb)](_0x20ab11(0x3f7));
            const _coin = _cpCoinData;
            if (!_coin || _coin['isCustom'] || !COINGECKO_IDS[_coin['key']]) return;
            const _label = (_0x868c24['textContent'] || '').trim();
            const _data = await _lRangeChart(_coin['key'], _label);
            if (_data && _data['length'] && _cpCoinData === _coin) {
                const _amt = _data[_data['length'] - 1] ? _cpCoinValue / _data[_data['length'] - 1] : 0;
                _cpChartData = _data['map'](_v => _v * _amt);
                _cpCoinChangeAmt = _cpCoinValue - (_cpChartData[0] || _cpCoinValue);
                requestAnimationFrame(() => {
                    buildCoinPanelChart();
                    clearCoinPanelDot();
                });
            }
        });
    });
}), window[a0_0x12b68e(0x26b) + a0_0x12b68e(0x236)](a0_0x12b68e(0x1f9), buildCoinPanelChart);

function catmullRomPath(_0x5cfb6f, _0x3506aa = 0.5) {
    const _0x465073 = a0_0x12b68e,
        _0x2cfb68 = {
            'eZCoT': function(_0xdc132, _0x4e4c12) {
                return _0xdc132 < _0x4e4c12;
            },
            'rbrfg': function(_0x3f62ce, _0xd13f57) {
                return _0x3f62ce / _0xd13f57;
            }
        };
    if (_0x2cfb68['eZCoT'](_0x5cfb6f['length'], 0x2)) return '';
    let _0x454ac8 = 'M\x20' + _0x5cfb6f[0x0][0x0] + '\x20' + _0x5cfb6f[0x0][0x1];
    for (let _0x1e6c36 = 0x0; _0x1e6c36 < _0x5cfb6f[_0x465073(0x22f)] - 0x1; _0x1e6c36++) {
        const _0x2d158d = _0x5cfb6f[Math[_0x465073(0x312)](0x0, _0x1e6c36 - 0x1)],
            _0x38973 = _0x5cfb6f[_0x1e6c36],
            _0x48535b = _0x5cfb6f[_0x1e6c36 + 0x1],
            _0x476d97 = _0x5cfb6f[Math[_0x465073(0x23d)](_0x5cfb6f[_0x465073(0x22f)] - 0x1, _0x1e6c36 + 0x2)],
            _0x177bd4 = _0x38973[0x0] + _0x2cfb68[_0x465073(0x462)]((_0x48535b[0x0] - _0x2d158d[0x0]) * _0x3506aa, 0x3),
            _0x19cadd = _0x38973[0x1] + (_0x48535b[0x1] - _0x2d158d[0x1]) * _0x3506aa / 0x3,
            _0x4b84eb = _0x48535b[0x0] - (_0x476d97[0x0] - _0x38973[0x0]) * _0x3506aa / 0x3,
            _0x2e96f2 = _0x48535b[0x1] - (_0x476d97[0x1] - _0x38973[0x1]) * _0x3506aa / 0x3;
        _0x454ac8 += _0x465073(0x1c6) + _0x177bd4 + '\x20' + _0x19cadd + ',\x20' + _0x4b84eb + '\x20' + _0x2e96f2 + ',\x20' + _0x48535b[0x0] + '\x20' + _0x48535b[0x1];
    }
    return _0x454ac8;
}
let _cpCoinData = null,
    _cpChartData = [],
    _cpCoinValue = 0x0,
    _cpCoinChangeAmt = 0x0;
const CP_ANIM = 'transform\x20' + '0.45s\x20cubi' + a0_0x12b68e(0x36c) + '.25,1,0.5,' + '1)',
    CP_ARROW_UP = '<svg\x20xmlns' + a0_0x12b68e(0x45c) + 'ww.w3.org/' + a0_0x12b68e(0x32c) + 'width=\x225.2' + '114229mm\x22\x20' + 'height=\x225.' + '2307897mm\x22' + '\x20viewBox=\x22' + a0_0x12b68e(0x402) + '229\x205.2307' + a0_0x12b68e(0x3ca) + a0_0x12b68e(0x360) + 'erve\x22\x20styl' + 'e=\x22width:1' + '0px;height' + a0_0x12b68e(0x49b) + a0_0x12b68e(0x468) + '\x22translate' + '(-186.9351' + a0_0x12b68e(0x4b3) + a0_0x12b68e(0x3fe) + '\x20style=\x22fi' + 'll:none;st' + 'roke:#619D' + '55;stroke-' + a0_0x12b68e(0x27b) + ';stroke-li' + a0_0x12b68e(0x226) + 're;stroke-' + a0_0x12b68e(0x217) + 'iter;strok' + 'e-miterlim' + 'it:5.5\x22\x20d=' + '\x22m\x20187.536' + '19,61.7399' + a0_0x12b68e(0x44a) + a0_0x12b68e(0x432) + a0_0x12b68e(0x266) + a0_0x12b68e(0x26f) + a0_0x12b68e(0x250) + 'e:#619D55;' + 'stroke-wid' + a0_0x12b68e(0x443) + 'roke-linec' + a0_0x12b68e(0x274) + 'stroke-lin' + a0_0x12b68e(0x466) + a0_0x12b68e(0x3c2) + a0_0x12b68e(0x38d) + a0_0x12b68e(0x484) + a0_0x12b68e(0x460) + a0_0x12b68e(0x3e5) + a0_0x12b68e(0x1f2) + '\x20h\x20-3.9373' + a0_0x12b68e(0x394) + 'svg>',
    CP_ARROW_DOWN = a0_0x12b68e(0x2b9) + a0_0x12b68e(0x45c) + 'ww.w3.org/' + '2000/svg\x22\x20' + a0_0x12b68e(0x2d7) + '307854mm\x22\x20' + a0_0x12b68e(0x308) + '211431mm\x22\x20' + a0_0x12b68e(0x1c4) + a0_0x12b68e(0x209) + '54\x205.21143' + a0_0x12b68e(0x300) + 'ce=\x22preser' + 've\x22\x20style=' + '\x22width:10p' + 'x;height:1' + a0_0x12b68e(0x3b2) + 'ansform=\x22t' + 'ranslate(-' + '186.92547,' + '-57.119865' + a0_0x12b68e(0x456) + a0_0x12b68e(0x347) + a0_0x12b68e(0x487) + a0_0x12b68e(0x444) + ';stroke-wi' + a0_0x12b68e(0x4b9) + a0_0x12b68e(0x399) + a0_0x12b68e(0x400) + a0_0x12b68e(0x3b8) + 'nejoin:mit' + 'er;stroke-' + a0_0x12b68e(0x253) + ':5.5\x22\x20d=\x22m' + a0_0x12b68e(0x3db) + a0_0x12b68e(0x482) + a0_0x12b68e(0x483) + a0_0x12b68e(0x2d9) + '<path\x20styl' + a0_0x12b68e(0x337) + 'ne;stroke:' + '#BB5454;st' + a0_0x12b68e(0x40a) + a0_0x12b68e(0x434) + 'ke-linecap' + ':square;st' + a0_0x12b68e(0x33f) + a0_0x12b68e(0x1eb) + 'stroke-mit' + a0_0x12b68e(0x2e1) + a0_0x12b68e(0x231) + '7.82055,61' + a0_0x12b68e(0x2a5) + a0_0x12b68e(0x491) + '-3.937315\x22' + '/></g></sv' + 'g>';

function clearCoinPanelDot() {
    const _0x1cf433 = a0_0x12b68e,
        _0x2fbb13 = {
            'jwStw': _0x1cf433(0x467),
            'qRQan': function(_0x2084a3, _0x12342c) {
                return _0x2084a3(_0x12342c);
            },
            'RxUPD': function(_0xf5734d, _0x3b8b57) {
                return _0xf5734d - _0x3b8b57;
            }
        };
    document['getElement' + 'ById'](_0x2fbb13[_0x1cf433(0x3c4)])[_0x1cf433(0x352)]['display'] = _0x1cf433(0x3aa), document['getElement' + _0x1cf433(0x46e)](_0x1cf433(0x385) + 'ss')[_0x1cf433(0x352)]['display'] = 'none', document[_0x1cf433(0x377) + 'ById']('cpValue')[_0x1cf433(0x26c) + 't'] = fmtUSD(_cpCoinValue);
    const _0x44c0aa = _cpCoinData;
    if (_0x44c0aa) {
        const _0x48a69f = _0x44c0aa['isCustom'] ? _0x44c0aa['customSymb' + 'ol'] : COIN_SYMBOLS[_0x44c0aa['key']];
        document[_0x1cf433(0x377) + _0x1cf433(0x46e)]('cpAmount')[_0x1cf433(0x26c) + 't'] = _0x2fbb13[_0x1cf433(0x314)](fmtAmount, _0x44c0aa['amount']) + '\x20' + _0x48a69f, document['getElement' + 'ById'](_0x1cf433(0x46d))['style'][_0x1cf433(0x228)] = '';
    }
    const _0x33e55d = _cpCoinChangeAmt,
        _0x3ac813 = _0x33e55d >= 0x0 ? '+' : '-',
        _0x20c281 = _0x33e55d >= 0x0 ? 'var(--gree' + 'n)' : _0x1cf433(0x463),
        _0x1c959a = _0x2fbb13[_0x1cf433(0x439)](_cpCoinValue, _0x33e55d),
        _0x54a315 = _0x1c959a > 0x0 ? (Math['abs'](_0x33e55d) / _0x1c959a * 0x64)[_0x1cf433(0x36b)](0x2) : '0.00',
        _0x581834 = _0x33e55d >= 0x0 ? CP_ARROW_UP : CP_ARROW_DOWN,
        _0x13286f = fmtUSD(Math['abs'](_0x33e55d)),
        _0x13297e = document['getElement' + _0x1cf433(0x46e)]('cpPnl');
    Math[_0x1cf433(0x23b)](_0x33e55d) < 0.001 ? _0x13297e[_0x1cf433(0x43e)] = '<span\x20styl' + 'e=\x22color:#' + _0x1cf433(0x3ee) + 'an>' : _0x13297e[_0x1cf433(0x43e)] = _0x1cf433(0x351) + _0x1cf433(0x207) + _0x20c281 + (_0x1cf433(0x273) + _0x1cf433(0x24e) + 'items:cent' + _0x1cf433(0x410) + ';\x22>') + _0x581834 + _0x3ac813 + _0x54a315 + _0x1cf433(0x3a4) + _0x3ac813 + _0x13286f + (_0x1cf433(0x272) + 'span>');
}

function updateCoinPanelDot(_0x14d544) {
    const _0x25d709 = a0_0x12b68e,
        _0x241af3 = {
            'rAyOq': _0x25d709(0x467),
            'ecrHI': function(_0x446e32, _0x45661a) {
                return _0x446e32 * _0x45661a;
            }
        },
        _0x4d3043 = document[_0x25d709(0x377) + _0x25d709(0x46e)](_0x25d709(0x2ae)),
        _0x947c97 = _0x4d3043['_chartPts'],
        _0xbed14b = _0x4d3043['_chartData'];
    if (!_0x947c97 || !_0xbed14b) return;
    const [_0x21f185, _0x175f88] = _0x947c97[_0x14d544], _0x7575e5 = document[_0x25d709(0x377) + _0x25d709(0x46e)](_0x241af3[_0x25d709(0x31b)]), _0x347c3e = document[_0x25d709(0x377) + 'ById'](_0x25d709(0x385) + 'ss');
    _0x7575e5['setAttribu' + 'te']('cx', _0x21f185), _0x7575e5['setAttribu' + 'te']('cy', _0x175f88), _0x7575e5[_0x25d709(0x352)]['display'] = _0x25d709(0x301), _0x347c3e['setAttribu' + 'te']('x1', _0x21f185), _0x347c3e['setAttribu' + 'te']('x2', _0x21f185), _0x347c3e[_0x25d709(0x47f) + 'te']('y1', _0x175f88), _0x347c3e[_0x25d709(0x352)]['display'] = 'block', document[_0x25d709(0x377) + _0x25d709(0x46e)]('cpValue')['textConten' + 't'] = fmtUSD(_0xbed14b[_0x14d544]), document['getElement' + _0x25d709(0x46e)](_0x25d709(0x46d))['style']['visibility'] = 'hidden';
    const _0x2db208 = _0xbed14b['length'] - 0x1 - _0x14d544,
        _0x52b5ab = new Date(Date[_0x25d709(0x472)]() - _0x241af3[_0x25d709(0x36f)](_0x2db208 * 0x3c * 0x3c, 0x3e8));
    document['getElement' + _0x25d709(0x46e)]('cpPnl')['innerHTML'] = '<span\x20styl' + 'e=\x22color:#' + 'fff\x22>' + (_0x52b5ab['getMonth']() + 0x1) + '/' + _0x52b5ab['getDate']() + '/' + _0x52b5ab[_0x25d709(0x2f2) + 'r']() + _0x25d709(0x3e9);
}

function getIdxCoinPanel(_0x58157c) {
    const _0x4189a3 = a0_0x12b68e,
        _0x14f28b = document['getElement' + _0x4189a3(0x46e)](_0x4189a3(0x2ae)),
        _0x333de4 = _0x14f28b[_0x4189a3(0x459) + 'gClientRec' + 't'](),
        _0x55c928 = (_0x58157c - _0x333de4[_0x4189a3(0x479)]) / _0x333de4['width'],
        _0x27d4a7 = _0x14f28b[_0x4189a3(0x496)] || _cpChartData;
    return Math[_0x4189a3(0x315)](Math['max'](0x0, Math[_0x4189a3(0x23d)](0x1, _0x55c928)) * (_0x27d4a7['length'] - 0x1));
}

function initCoinPanelInteraction() {
    const _0x5b0378 = a0_0x12b68e,
        _0x57ab9c = {
            'uiKTP': function(_0x3ad7f5, _0x623c27) {
                return _0x3ad7f5(_0x623c27);
            },
            'GVAuL': 'mouseup',
            'yxWmU': _0x5b0378(0x1df),
            'jmdCv': 'cpTopGradi' + _0x5b0378(0x33a)
        },
        _0x10b7e9 = document['getElement' + 'ById'](_0x5b0378(0x22b) + 'p');
    let _0x8d6bba = ![];
    _0x10b7e9['addEventLi' + _0x5b0378(0x236)](_0x5b0378(0x35f), _0x392573 => {
        const _0x21f355 = _0x5b0378;
        _0x8d6bba = !![], updateCoinPanelDot(getIdxCoinPanel(_0x392573[_0x21f355(0x4a2)][0x0]['clientX']));
        if (_0x392573[_0x21f355(0x4ba)]) _0x392573[_0x21f355(0x1c0) + _0x21f355(0x255)]();
        _0x392573[_0x21f355(0x471) + _0x21f355(0x310)]();
    }, {
        'passive': ![]
    }), _0x10b7e9[_0x5b0378(0x26b) + 'stener'](_0x5b0378(0x40c), _0x15322b => {
        const _0x428262 = _0x5b0378;
        if (_0x8d6bba) {
            updateCoinPanelDot(getIdxCoinPanel(_0x15322b['touches'][0x0]['clientX']));
            if (_0x15322b[_0x428262(0x4ba)]) _0x15322b['preventDef' + _0x428262(0x255)]();
            _0x15322b[_0x428262(0x471) + 'ation']();
        }
    }, {
        'passive': ![]
    }), _0x10b7e9[_0x5b0378(0x26b) + 'stener']('touchend', _0x5a6370 => {
        const _0x2d50ee = _0x5b0378;
        _0x8d6bba && (_0x8d6bba = ![], clearCoinPanelDot(), _0x5a6370['stopPropag' + _0x2d50ee(0x310)]());
    }), _0x10b7e9[_0x5b0378(0x26b) + 'stener']('mousedown', _0x51af87 => {
        const _0x4b1413 = _0x5b0378;
        _0x8d6bba = !![], _0x57ab9c[_0x4b1413(0x3f2)](updateCoinPanelDot, getIdxCoinPanel(_0x51af87['clientX'])), _0x51af87[_0x4b1413(0x1c0) + 'ault']();
    }), window['addEventLi' + 'stener']('mousemove', _0x4dfcd5 => {
        if (_0x8d6bba) updateCoinPanelDot(_0x57ab9c['uiKTP'](getIdxCoinPanel, _0x4dfcd5['clientX']));
    }), window['addEventLi' + 'stener'](_0x57ab9c['GVAuL'], () => {
        _0x8d6bba && (_0x8d6bba = ![], clearCoinPanelDot());
    });
    const _0xdd9ad8 = document[_0x5b0378(0x386) + _0x5b0378(0x4af)](_0x57ab9c['yxWmU']),
        _0x3e54ee = document['querySelec' + 'tor']('.cp-header'),
        _0x1521d8 = document[_0x5b0378(0x377) + 'ById'](_0x57ab9c['jmdCv']);
    _0xdd9ad8['addEventLi' + _0x5b0378(0x236)]('scroll', () => {
        const _0x2c275b = _0x5b0378,
            _0x26e39e = _0xdd9ad8['scrollTop'];
        _0x1521d8['style'][_0x2c275b(0x254)] = _0x2c275b(0x221) + '(-' + Math['min'](_0x26e39e, 0x104) + _0x2c275b(0x319);
        const _0x5f3f43 = Math['min'](_0x26e39e / 0x50, 0x1);
        _0x3e54ee['style']['background'] = _0x2c275b(0x3e7) + _0x2c275b(0x3d2) + _0x5f3f43 + ')';
    }, {
        'passive': !![]
    });
}

function generateSyntheticChart(_0x48da16, _0x5ab5f5) {
    const _0x17ba38 = a0_0x12b68e,
        _0x43647a = {
            'BmKkR': function(_0x5c3e11, _0x1944bc) {
                return _0x5c3e11 + _0x1944bc;
            },
            'XSFOI': function(_0x54649d, _0x4a9be8) {
                return _0x54649d * _0x4a9be8;
            }
        },
        _0x2ab044 = Date[_0x17ba38(0x472)](),
        _0x5e3ac9 = Number(_0x5ab5f5) || 0x0,
        _0x16c08a = _0x48da16 / (0x1 + _0x5e3ac9 / 0x64) || _0x48da16,
        _0x587c8e = 0x18,
        _0x75aee = Math['min'](0.45, Math['max'](0.025, Math[_0x17ba38(0x23b)](_0x5e3ac9) / 0x64 * 0.3)),
        _0x3d913e = [0x0];
    for (let _0x2c4b80 = 0x1; _0x2c4b80 < _0x587c8e; _0x2c4b80++) _0x3d913e['push'](_0x3d913e[_0x2c4b80 - 0x1] + (Math[_0x17ba38(0x1c9)]() - 0.5));
    _0x3d913e[_0x17ba38(0x230)](0x0);
    const _0x49c14c = Math['max'](..._0x3d913e[_0x17ba38(0x333)](Math[_0x17ba38(0x23b)])) || 0x1,
        _0x59b20a = [];
    for (let _0x403ba5 = 0x0; _0x403ba5 <= _0x587c8e; _0x403ba5++) {
        const _0x4ccf4f = _0x43647a[_0x17ba38(0x23a)](_0x16c08a, _0x43647a['XSFOI'](_0x48da16 - _0x16c08a, _0x403ba5 / _0x587c8e));
        _0x59b20a['push']([_0x2ab044 - (_0x587c8e - _0x403ba5) * 0x36ee80, Math[_0x17ba38(0x312)](0x0, _0x4ccf4f + _0x4ccf4f * (_0x3d913e[_0x403ba5] / _0x49c14c) * _0x75aee)]);
    }
    return _0x59b20a[_0x59b20a['length'] - 0x1][0x1] = _0x48da16, _0x59b20a;
}

function buildCoinPanelChart() {
    const _0x559ea7 = a0_0x12b68e,
        _0x9e3748 = {
            'dQCxp': function(_0x18d18e, _0x366cc0) {
                return _0x18d18e(_0x366cc0);
            }
        },
        _0x53d20c = document['getElement' + 'ById']('cpChartSvg');
    if (!_0x53d20c) return;
    const _0x29a265 = _0x53d20c['clientWidt' + 'h'] || _0x53d20c['getBoundin' + 'gClientRec' + 't']()['width'],
        _0x5d443d = _0x53d20c[_0x559ea7(0x233) + 'ht'] || _0x53d20c[_0x559ea7(0x459) + _0x559ea7(0x3be) + 't']()[_0x559ea7(0x28e)];
    if (!_0x29a265 || !_0x5d443d) return;
    const _0x22aaa0 = 0x0,
        _0x1892bf = 0xe,
        _0x21da4f = 0xa,
        _0x4823bd = _0x5d443d - _0x1892bf - _0x21da4f,
        _0x18c5a2 = _cpChartData['length'] >= 0x2 ? _cpChartData : _0x9e3748['dQCxp'](Array, 0x18)['fill'](_cpCoinValue || 0x0),
        _0x40bc7d = Math[_0x559ea7(0x23d)](..._0x18c5a2),
        _0x3bdd0b = Math[_0x559ea7(0x312)](..._0x18c5a2),
        _0x46020a = _0x3bdd0b - _0x40bc7d || 0x1,
        _0x2d98c5 = _0x40bc7d - _0x46020a * 0.08,
        _0x3c7e07 = _0x3bdd0b + _0x46020a * 0.04,
        _0x558af8 = _0x3c7e07 - _0x2d98c5 || 0x1,
        _0xb4da2d = _0x18c5a2[_0x559ea7(0x333)]((_0x190295, _0x5b81b5) => [_0x22aaa0 + _0x5b81b5 / (_0x18c5a2['length'] - 0x1) * (_0x29a265 - _0x22aaa0 * 0x2), _0x1892bf + (0x1 - (_0x190295 - _0x2d98c5) / _0x558af8) * _0x4823bd]),
        _0x148798 = catmullRomPath(_0xb4da2d);
    document[_0x559ea7(0x377) + 'ById'](_0x559ea7(0x495) + 'e')['setAttribu' + 'te']('d', _0x148798);
    const _0x590114 = document['getElement' + _0x559ea7(0x46e)]('cpChartFil' + 'l');
    if (_0x590114) _0x590114['setAttribu' + 'te']('d', '');
    document[_0x559ea7(0x377) + _0x559ea7(0x46e)](_0x559ea7(0x385) + 'ss')['setAttribu' + 'te']('y2', _0x5d443d), _0x53d20c['_chartPts'] = _0xb4da2d, _0x53d20c[_0x559ea7(0x496)] = _0x18c5a2, _0x53d20c['_H'] = _0x5d443d;
}

function renderCoinPanelTransactions(_0x31030a) {
    const _0xb090b4 = a0_0x12b68e,
        _0x314aa0 = {
            'oQgof': _0xb090b4(0x316)
        },
        _0x173972 = loadTransactions()[_0xb090b4(0x1c3)](_0x9ae69f => _0x9ae69f['coin'] === _0x31030a),
        _0x1216af = document['getElement' + _0xb090b4(0x46e)](_0xb090b4(0x218) + 'y'),
        _0x460564 = loadSettings(),
        _0x4e0fcb = _0x460564['currency'] || _0xb090b4(0x41b);
    if (_0x173972['length'] === 0x0) {
        _0x1216af[_0xb090b4(0x43e)] = '';
        return;
    }
    const _0x46d11f = {};
    _0x173972['forEach'](_0xcbb9f0 => {
        const _0x4ca982 = _0xb090b4,
            _0x24d944 = formatTxnDate(_0xcbb9f0[_0x4ca982(0x227)]);
        if (!_0x46d11f[_0x24d944]) _0x46d11f[_0x24d944] = [];
        _0x46d11f[_0x24d944]['push'](_0xcbb9f0);
    });
    let _0x4ef9a4 = '<h3>' + (window['i18n'] ?.['t']('ledger.tx_' + _0xb090b4(0x27c)) || 'TRANSACTIO' + _0xb090b4(0x1f4)) + '</h3>';
    for (const [_0x37c4aa, _0x57e502] of Object[_0xb090b4(0x3c0)](_0x46d11f)) {
        _0x4ef9a4 += _0xb090b4(0x3a9) + '=\x22txn-date' + _0xb090b4(0x331) + _0xb090b4(0x349) + _0xb090b4(0x489) + _0x37c4aa + _0xb090b4(0x354);
        for (const _0xa641a3 of _0x57e502) {
            const _0x2e21de = getCachedPrice(_0xa641a3['coin'], _0x4e0fcb),
                _0x494087 = _0x2e21de ?.[_0xb090b4(0x38f)] || 0x0,
                _0x24ab55 = (_0xa641a3[_0xb090b4(0x245)] * _0x494087)[_0xb090b4(0x31a) + 'ring'](_0xb090b4(0x23e), {
                    'minimumFractionDigits': 0x2,
                    'maximumFractionDigits': 0x2
                }),
                _0x2486ea = CURRENCIES[_0x4e0fcb] ?.[_0xb090b4(0x437)] || '$',
                _0x421a53 = _0xa641a3[_0xb090b4(0x1dd)] === 'received' ? '+' : '-',
                _0x389a58 = formatTxnTime(_0xa641a3[_0xb090b4(0x227)]),
                _0x188c62 = window['i18n'] ?.['t'](_0xa641a3[_0xb090b4(0x1dd)] === 'received' ? _0xb090b4(0x283) + 'd' : _0xb090b4(0x425)) || (_0xa641a3['type'] === _0x314aa0[_0xb090b4(0x2ee)] ? 'Received' : 'Sent'),
                _0x2a999a = _0xa641a3['type'] === 'received' ? '<svg\x20width' + '=\x2216\x22\x20heig' + 'ht=\x2216\x22\x20vi' + _0xb090b4(0x4a6) + _0xb090b4(0x241) + _0xb090b4(0x2aa) + 'stroke=\x22cu' + 'rrentColor' + _0xb090b4(0x35d) + 'idth=\x222\x22\x20s' + _0xb090b4(0x399) + 'cap=\x22round' + _0xb090b4(0x3bf) + _0xb090b4(0x3fc) + _0xb090b4(0x2a0) + 'e\x20x1=\x228\x22\x20y' + '1=\x222\x22\x20x2=\x22' + '8\x22\x20y2=\x2214\x22' + _0xb090b4(0x234) + 'e\x20points=\x22' + _0xb090b4(0x2f8) + _0xb090b4(0x3df) + 'svg>' : '<svg\x20width' + _0xb090b4(0x345) + _0xb090b4(0x1b8) + _0xb090b4(0x4a6) + _0xb090b4(0x241) + _0xb090b4(0x2aa) + _0xb090b4(0x2fd) + _0xb090b4(0x2b6) + '\x22\x20stroke-w' + _0xb090b4(0x237) + _0xb090b4(0x399) + _0xb090b4(0x36e) + _0xb090b4(0x3bf) + _0xb090b4(0x3fc) + _0xb090b4(0x2a0) + 'e\x20x1=\x228\x22\x20y' + '1=\x2214\x22\x20x2=' + '\x228\x22\x20y2=\x222\x22' + _0xb090b4(0x234) + 'e\x20points=\x22' + '4,6\x208,2\x2012' + ',6\x22/></svg' + '>';
            _0x4ef9a4 += _0xb090b4(0x3a9) + '=\x22txn-item' + _0xb090b4(0x1bd) + 'ss=\x22txn-ic' + _0xb090b4(0x3e4) + 'n--' + _0xa641a3[_0xb090b4(0x1dd)] + '\x22>' + _0x2a999a + (_0xb090b4(0x335) + _0xb090b4(0x381) + 'n-info\x22><d' + _0xb090b4(0x349) + _0xb090b4(0x306) + '>') + COIN_SYMBOLS[_0xa641a3[_0xb090b4(0x3de)]] + ('\x20Main</div' + '><div\x20clas' + _0xb090b4(0x4a5) + 'title\x22>') + _0x188c62 + '\x20' + _0x389a58 + (_0xb090b4(0x30f) + 'v><div\x20cla' + 'ss=\x22txn-am' + _0xb090b4(0x396) + _0xb090b4(0x3a9) + _0xb090b4(0x4ab) + 'nt\x20') + _0xa641a3['type'] + '\x22>' + _0x421a53 + fmtAmount(_0xa641a3[_0xb090b4(0x245)]) + '\x20' + COIN_SYMBOLS[_0xa641a3['coin']] + ('</div><div' + '\x20class=\x22tx' + _0xb090b4(0x469)) + _0x2486ea + _0x24ab55 + (_0xb090b4(0x30f) + 'v></div>');
        }
        _0x4ef9a4 += _0xb090b4(0x354);
    }
    _0x1216af['innerHTML'] = _0x4ef9a4;
}

function renderCoinPanelAccount(_0x577e6f) {
    const _0x203e96 = a0_0x12b68e,
        _0x90a641 = {
            'CedMh': 'btc'
        },
        _0x5e5efa = loadSettings(),
        _0x133af4 = _0x577e6f['key'],
        _0x4fedd9 = _0x577e6f['isCustom'] ? _0x577e6f[_0x203e96(0x20f) + 'ol'] : COIN_SYMBOLS[_0x577e6f['key']];
    !_0x5e5efa[_0x203e96(0x457) + 'resses'][_0x133af4] && (_0x5e5efa['accountAdd' + _0x203e96(0x371)][_0x133af4] = generateLedgerAddress(_0x577e6f[_0x203e96(0x39d)] ? null : _0x133af4, _0x577e6f[_0x203e96(0x3a6)]), saveSettings(_0x5e5efa));
    !_0x5e5efa['accountNam' + 'es'][_0x133af4] && (_0x5e5efa['accountNam' + 'es'][_0x133af4] = _0x4fedd9 + '\x20Main', saveSettings(_0x5e5efa));
    const _0x29bdfd = _0x577e6f[_0x203e96(0x39d)] ? _0x577e6f['customImag' + 'e'] || '' : _0x203e96(0x203) + COIN_ICONS[_0x577e6f['key']],
        _0x49794b = document['getElement' + 'ById'](_0x203e96(0x320) + _0x203e96(0x441));
    if (_0x49794b) {
        if (_0x29bdfd) _0x49794b['src'] = _0x29bdfd, _0x49794b[_0x203e96(0x352)]['display'] = '';
        else _0x49794b['style']['display'] = 'none';
    }
    document[_0x203e96(0x377) + _0x203e96(0x46e)](_0x203e96(0x2c8) + _0x203e96(0x1ed))['textConten' + 't'] = _0x203e96(0x210) + _0x4fedd9 + '\x20ACCOUNT', document[_0x203e96(0x377) + _0x203e96(0x46e)]('cpAccountN' + 'ame')[_0x203e96(0x26c) + 't'] = _0x5e5efa['accountNam' + 'es'][_0x133af4], document[_0x203e96(0x377) + 'ById']('cpNativeSe' + _0x203e96(0x2fb))['style']['display'] = _0x133af4 === _0x90a641[_0x203e96(0x391)] ? _0x203e96(0x350) : 'none', document[_0x203e96(0x377) + _0x203e96(0x46e)](_0x203e96(0x290) + 'ddr')['textConten' + 't'] = truncateLedgerAddr(_0x5e5efa['accountAdd' + _0x203e96(0x371)][_0x133af4]), document['getElement' + _0x203e96(0x46e)](_0x203e96(0x28f) + 'alue')[_0x203e96(0x26c) + 't'] = fmtUSD(_0x577e6f[_0x203e96(0x294)]);
}
let _cpAccountPopupCoin = null;

function openCoinAccountPopup() {
    const _0x6b85bc = a0_0x12b68e,
        _0x546453 = _cpCoinData;
    if (!_0x546453) return;
    _cpAccountPopupCoin = _0x546453;
    const _0x5f07ff = loadSettings(),
        _0x303ee3 = _0x546453[_0x6b85bc(0x219)],
        _0x1a16d0 = _0x546453['isCustom'] ? _0x546453['customSymb' + 'ol'] : COIN_SYMBOLS[_0x546453['key']];
    document[_0x6b85bc(0x377) + 'ById']('cpAccountN' + _0x6b85bc(0x1db))[_0x6b85bc(0x294)] = _0x5f07ff[_0x6b85bc(0x2fe) + 'es'][_0x303ee3] || _0x1a16d0 + '\x20Main', document[_0x6b85bc(0x377) + _0x6b85bc(0x46e)]('cpAccountA' + _0x6b85bc(0x330))['value'] = _0x5f07ff[_0x6b85bc(0x457) + _0x6b85bc(0x371)][_0x303ee3] || '', document['getElement' + _0x6b85bc(0x46e)](_0x6b85bc(0x256) + _0x6b85bc(0x40b))['classList'][_0x6b85bc(0x1cb)](_0x6b85bc(0x1f0));
}

function closeCoinAccountPopup() {
    const _0x5114b5 = a0_0x12b68e;
    document['getElement' + _0x5114b5(0x46e)](_0x5114b5(0x256) + 'opup')[_0x5114b5(0x1ce)][_0x5114b5(0x3b4)](_0x5114b5(0x1f0)), _cpAccountPopupCoin = null;
}

function saveCoinAccountPopup() {
    const _0x153094 = a0_0x12b68e,
        _0x41a21f = _cpAccountPopupCoin;
    if (!_0x41a21f) return;
    const _0x33f239 = loadSettings(),
        _0x1ccb64 = _0x41a21f[_0x153094(0x219)],
        _0x229114 = _0x41a21f[_0x153094(0x39d)] ? _0x41a21f[_0x153094(0x20f) + 'ol'] : COIN_SYMBOLS[_0x41a21f[_0x153094(0x219)]],
        _0x1b3d38 = document['getElement' + 'ById']('cpAccountN' + 'ameInput')['value'][_0x153094(0x474)](),
        _0x260fc2 = document['getElement' + 'ById']('cpAccountA' + _0x153094(0x330))['value'][_0x153094(0x474)]();
    _0x33f239[_0x153094(0x2fe) + 'es'][_0x1ccb64] = _0x1b3d38 || _0x229114 + '\x20Main';
    if (_0x260fc2) _0x33f239['accountAdd' + _0x153094(0x371)][_0x1ccb64] = _0x260fc2;
    saveSettings(_0x33f239), closeCoinAccountPopup(), renderCoinPanelAccount(_0x41a21f);
}
async function openCoinPanel(_0x5c9f5d) {
    const _0x53669d = a0_0x12b68e,
        _0x133290 = {
            'QhCWM': function(_0x2d383f) {
                return _0x2d383f();
            },
            'GDwRN': 'cpAmount',
            'gjVcP': function(_0x5cb547, _0x1b13e4) {
                return _0x5cb547(_0x1b13e4);
            },
            'FfrLO': function(_0x8e8770, _0x539150) {
                return _0x8e8770 - _0x539150;
            }
        };
    _cpCoinData = _0x5c9f5d, _cpChartData = [];
    const _0x374ef5 = _0x5c9f5d[_0x53669d(0x39d)] ? _0x5c9f5d[_0x53669d(0x362)] : COIN_NAMES[_0x5c9f5d['key']],
        _0x16cf6f = _0x5c9f5d[_0x53669d(0x39d)] ? _0x5c9f5d['customSymb' + 'ol'] : COIN_SYMBOLS[_0x5c9f5d['key']];
    document[_0x53669d(0x377) + _0x53669d(0x46e)]('cpTitle')[_0x53669d(0x26c) + 't'] = 'Your\x20' + _0x374ef5;
    const _0x3d9fc4 = document['getElement' + _0x53669d(0x46e)]('cpLogoImg'),
        _0x167c0b = document[_0x53669d(0x377) + _0x53669d(0x46e)]('cpLogoFall' + 'back'),
        _0x664a9f = document[_0x53669d(0x377) + 'ById']('cpChainBad' + 'ge'),
        _0x9884ff = _0x5c9f5d[_0x53669d(0x39d)] ? _0x5c9f5d[_0x53669d(0x27d) + 'e'] || '' : _0x53669d(0x203) + COIN_ICONS[_0x5c9f5d['key']];
    _0x9884ff ? (_0x3d9fc4[_0x53669d(0x387)] = _0x9884ff, _0x3d9fc4['style']['display'] = '', _0x167c0b['style']['display'] = 'none') : (_0x3d9fc4[_0x53669d(0x352)][_0x53669d(0x34f)] = _0x53669d(0x3aa), _0x167c0b['textConten' + 't'] = (_0x16cf6f || '?')[0x0], _0x167c0b[_0x53669d(0x352)][_0x53669d(0x34f)] = '');
    const _0x668b99 = _0x5c9f5d['isCustom'] || _0x5c9f5d['key'] === _0x53669d(0x22e) || _0x5c9f5d[_0x53669d(0x219)] === _0x53669d(0x25d);
    if (_0x668b99 && CHAIN_BADGE_ICONS[_0x5c9f5d['chain']]) _0x664a9f['src'] = './assets/' + CHAIN_BADGE_ICONS[_0x5c9f5d['chain']], _0x664a9f['style'][_0x53669d(0x34f)] = '';
    else _0x664a9f['style']['display'] = 'none';
    _cpCoinValue = _0x5c9f5d[_0x53669d(0x294)];
    const _0x592c0a = _0x5c9f5d[_0x53669d(0x341)] || 0x0,
        _0x1dfc34 = _0x592c0a !== -0x64 ? _0x5c9f5d[_0x53669d(0x294)] / (0x1 + _0x592c0a / 0x64) : _0x5c9f5d[_0x53669d(0x294)];
    _cpCoinChangeAmt = _0x5c9f5d[_0x53669d(0x294)] - _0x1dfc34;
    const _0x4d1858 = _0x5c9f5d['key'] === _0x53669d(0x22e) || _0x5c9f5d['key'] === _0x53669d(0x25d),
        _0xe91120 = _0x5c9f5d[_0x53669d(0x39d)] || _0x4d1858,
        _0x217118 = _0xe91120 ? COIN_LINE_COLORS[_0x5c9f5d['chain']] || '#9b97b0' : COIN_LINE_COLORS[_0x5c9f5d['key']] || '#9b97b0',
        _0x3fa05a = _0xe91120 ? COIN_GRAD_COLORS[_0x5c9f5d['chain']] || '#9b97b0' : COIN_GRAD_COLORS[_0x5c9f5d[_0x53669d(0x219)]] || '#9b97b0';
    document[_0x53669d(0x377) + _0x53669d(0x46e)](_0x53669d(0x495) + 'e')[_0x53669d(0x47f) + 'te'](_0x53669d(0x2ff), _0x217118), document['getElement' + _0x53669d(0x46e)]('cpChartDot')['setAttribu' + 'te']('stroke', _0x217118);
    const _0x4aa19f = document['getElement' + _0x53669d(0x46e)](_0x53669d(0x436) + 'ent');
    if (_0x4aa19f) _0x4aa19f['style']['background'] = _0x53669d(0x401) + _0x53669d(0x31c) + _0x53669d(0x2ad) + _0x3fa05a + (_0x53669d(0x23f) + _0x53669d(0x2eb));
    document['getElement' + _0x53669d(0x46e)]('cpValue')[_0x53669d(0x26c) + 't'] = fmtUSD(_0x5c9f5d['value']), document['getElement' + 'ById'](_0x133290['GDwRN'])[_0x53669d(0x26c) + 't'] = fmtAmount(_0x5c9f5d['amount']) + '\x20' + _0x16cf6f, document['getElement' + 'ById']('cpAmount')['style']['visibility'] = '', clearCoinPanelDot();
    const _0x4101c8 = !_0x5c9f5d[_0x53669d(0x39d)] && !_0x4d1858;
    document['getElement' + _0x53669d(0x46e)]('cpMarketSe' + _0x53669d(0x24b))[_0x53669d(0x352)]['display'] = _0x4101c8 ? '' : _0x53669d(0x3aa), document[_0x53669d(0x377) + _0x53669d(0x46e)]('cpActionsC' + _0x53669d(0x3c1))[_0x53669d(0x352)][_0x53669d(0x34f)] = _0x5c9f5d[_0x53669d(0x39d)] ? '' : 'none', document['getElement' + 'ById'](_0x53669d(0x2b3) + _0x53669d(0x47d))['style'][_0x53669d(0x34f)] = _0x5c9f5d['isCustom'] ? _0x53669d(0x3aa) : '';
    if (_0x4101c8) {
        document[_0x53669d(0x377) + 'ById'](_0x53669d(0x2a2) + _0x53669d(0x4b0))['textConten' + 't'] = _0x16cf6f + (_0x53669d(0x45a) + _0x53669d(0x4b7)), document[_0x53669d(0x377) + _0x53669d(0x46e)]('cpMarketSu' + 'b')['textConten' + 't'] = '1\x20' + _0x16cf6f, document['getElement' + _0x53669d(0x46e)]('cpMarketPr' + _0x53669d(0x4b7))['textConten' + 't'] = _0x133290[_0x53669d(0x1f8)](fmtUSD, _0x5c9f5d['price']);
        const _0x356b43 = Math[_0x53669d(0x23b)](_0x592c0a) < 0.01,
            _0x3040e4 = document[_0x53669d(0x377) + 'ById']('cpMarketCh' + _0x53669d(0x431));
        if (_0x356b43) _0x3040e4['innerHTML'] = _0x53669d(0x351) + 'e=\x22color:#' + '666\x22>–</sp' + 'an>';
        else {
            const _0x477748 = _0x592c0a >= 0x0 ? '+' : '',
                _0x2d6b0f = _0x592c0a >= 0x0 ? _0x53669d(0x45d) : '#BB5454',
                _0x2bc64d = _0x592c0a >= 0x0 ? CP_ARROW_UP : CP_ARROW_DOWN;
            _0x3040e4['innerHTML'] = '<span\x20styl' + 'e=\x22color:' + _0x2d6b0f + (_0x53669d(0x273) + _0x53669d(0x24e) + 'items:cent' + 'er;gap:4px' + _0x53669d(0x334)) + _0x2bc64d + _0x477748 + _0x592c0a[_0x53669d(0x36b)](0x2) + _0x53669d(0x42e);
        }
    }
    renderCoinPanelTransactions(_0x5c9f5d[_0x53669d(0x39d)] ? '' : _0x5c9f5d[_0x53669d(0x219)]), renderCoinPanelAccount(_0x5c9f5d);
    const _0x350b76 = document[_0x53669d(0x386) + 'tor']('.cp-body');
    if (_0x350b76) _0x350b76['scrollTop'] = 0x0;
    document['querySelec' + _0x53669d(0x4af)]('.cp-header')[_0x53669d(0x352)]['background'] = 'transparen' + 't', document[_0x53669d(0x377) + _0x53669d(0x46e)](_0x53669d(0x436) + _0x53669d(0x33a))[_0x53669d(0x352)][_0x53669d(0x254)] = 'translateY' + '(0)', document[_0x53669d(0x386) + _0x53669d(0x392)](_0x53669d(0x1cf) + _0x53669d(0x3cf))[_0x53669d(0x280)]((_0x26b924, _0x54241f) => _0x26b924[_0x53669d(0x1ce)]['toggle']('active', _0x54241f === 0x0));
    const _0xcd2d72 = document[_0x53669d(0x377) + _0x53669d(0x46e)]('coinPanel'),
        _0x5a41aa = document['querySelec' + _0x53669d(0x4af)]('.header'),
        _0x4f9f52 = document['getElement' + _0x53669d(0x46e)]('ptr-wrappe' + 'r'),
        _0x1786a9 = document['querySelec' + _0x53669d(0x4af)](_0x53669d(0x3bb) + 'v'),
        _0x5c7e90 = document['querySelec' + _0x53669d(0x4af)]('.bottom-na' + _0x53669d(0x261));
    _0xcd2d72['style']['transition'] = CP_ANIM, _0xcd2d72[_0x53669d(0x352)]['transform'] = 'translateX' + '(0)';
    _0x5a41aa && (_0x5a41aa[_0x53669d(0x352)][_0x53669d(0x47e)] = CP_ANIM, _0x5a41aa[_0x53669d(0x352)][_0x53669d(0x254)] = _0x53669d(0x3f5) + '(-25%)');
    _0x4f9f52 && (_0x4f9f52[_0x53669d(0x352)][_0x53669d(0x47e)] = CP_ANIM, _0x4f9f52[_0x53669d(0x352)][_0x53669d(0x254)] = 'translateX' + '(-25%)');
    _0x1786a9 && (_0x1786a9['style'][_0x53669d(0x47e)] = CP_ANIM, _0x1786a9[_0x53669d(0x352)]['transform'] = _0x53669d(0x3f5) + _0x53669d(0x2d2));
    _0x5c7e90 && (_0x5c7e90[_0x53669d(0x352)][_0x53669d(0x47e)] = CP_ANIM, _0x5c7e90[_0x53669d(0x352)][_0x53669d(0x254)] = _0x53669d(0x3f5) + _0x53669d(0x2d2));
    if (!_0x5c9f5d['isCustom'] && COINGECKO_IDS[_0x5c9f5d[_0x53669d(0x219)]]) {
        const _0x39dfdb = await _lRangeChart(_0x5c9f5d['key'], '1D');
        _0x39dfdb && _cpCoinData === _0x5c9f5d && (_cpChartData = _0x39dfdb['map'](_0x534bf5 => _0x534bf5 * _0x5c9f5d[_0x53669d(0x245)]), _cpCoinChangeAmt = _0x133290['FfrLO'](_cpCoinValue, _cpChartData[0x0] || _cpCoinValue), requestAnimationFrame(() => {
            buildCoinPanelChart(), clearCoinPanelDot();
        }));
        /* Warm the 365-day series in the background so 1W/1M/1Y/ALL are instant. */
        setTimeout(() => {
            if (_cpCoinData === _0x5c9f5d) _lFetchRawChart(_0x5c9f5d['key'], 365);
        }, 1500);
    } else {
        if (_0x5c9f5d['isCustom']) {
            const _0x3f6c08 = generateSyntheticChart(_0x5c9f5d[_0x53669d(0x38f)], _0x5c9f5d[_0x53669d(0x341)]);
            _cpChartData = _0x3f6c08['map'](([, _0xeeae6]) => _0xeeae6 * _0x5c9f5d['amount']), _cpCoinChangeAmt = _cpCoinValue - (_cpChartData[0x0] || _cpCoinValue), requestAnimationFrame(() => {
                const _0x1e968f = _0x53669d;
                _0x133290[_0x1e968f(0x2a3)](buildCoinPanelChart), clearCoinPanelDot();
            });
        } else requestAnimationFrame(() => buildCoinPanelChart());
    }
}

function closeCoinPanel() {
    const _0x15d567 = a0_0x12b68e,
        _0x4f67b5 = {
            'DkOyg': _0x15d567(0x39a)
        };
    _cpCoinData = null;
    const _0x269d1e = document['getElement' + _0x15d567(0x46e)](_0x15d567(0x326)),
        _0x4ecaf8 = document[_0x15d567(0x386) + _0x15d567(0x4af)](_0x4f67b5['DkOyg']),
        _0x4b8af2 = document[_0x15d567(0x377) + _0x15d567(0x46e)](_0x15d567(0x48b) + 'r'),
        _0x2749d0 = document[_0x15d567(0x386) + _0x15d567(0x4af)]('.bottom-na' + 'v'),
        _0x11e096 = document[_0x15d567(0x386) + _0x15d567(0x4af)](_0x15d567(0x3bb) + _0x15d567(0x261));
    _0x269d1e[_0x15d567(0x352)]['transition'] = CP_ANIM, _0x269d1e['style'][_0x15d567(0x254)] = _0x15d567(0x3f5) + _0x15d567(0x2cc), _0x4ecaf8 && (_0x4ecaf8['style']['transition'] = CP_ANIM, _0x4ecaf8['style']['transform'] = 'translateX' + _0x15d567(0x4ac)), _0x4b8af2 && (_0x4b8af2['style']['transition'] = CP_ANIM, _0x4b8af2[_0x15d567(0x352)][_0x15d567(0x254)] = 'translateX' + _0x15d567(0x4ac)), _0x2749d0 && (_0x2749d0[_0x15d567(0x352)]['transition'] = CP_ANIM, _0x2749d0['style']['transform'] = 'translateX' + _0x15d567(0x4ac)), _0x11e096 && (_0x11e096['style']['transition'] = CP_ANIM, _0x11e096[_0x15d567(0x352)]['transform'] = 'translateX' + _0x15d567(0x4ac));
}

function a0_0x4bb2(_0x9706ef, _0x35bdf3) {
    _0x9706ef = _0x9706ef - 0x1b8;
    const _0x52f125 = a0_0x30c0();
    let _0x25eb42 = _0x52f125[_0x9706ef];
    if (a0_0x4bb2['FBwuXd'] === undefined) {
        var _0x3e3000 = function(_0x3c3a61) {
            const _0x4278d5 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x3f439f = '',
                _0x1e6db0 = '',
                _0x3411ae = _0x3f439f + _0x3e3000,
                _0x596c20 = ('' + function() {
                    return 0x0;
                })['indexOf']('\x0a') !== -0x1;
            for (let _0x556d22 = 0x0, _0x27f037, _0x21540e, _0x2fd37d = 0x0; _0x21540e = _0x3c3a61['charAt'](_0x2fd37d++); ~_0x21540e && (_0x27f037 = _0x556d22 % 0x4 ? _0x27f037 * 0x40 + _0x21540e : _0x21540e, _0x556d22++ % 0x4) ? _0x3f439f += _0x596c20 || _0x3411ae['charCodeAt'](_0x2fd37d + 0xa) - 0xa !== 0x0 ? String['fromCharCode'](0xff & _0x27f037 >> (-0x2 * _0x556d22 & 0x6)) : _0x556d22 : 0x0) {
                _0x21540e = _0x4278d5['indexOf'](_0x21540e);
            }
            for (let _0x31aba7 = 0x0, _0x57c812 = _0x3f439f['length']; _0x31aba7 < _0x57c812; _0x31aba7++) {
                _0x1e6db0 += '%' + ('00' + _0x3f439f['charCodeAt'](_0x31aba7)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x1e6db0);
        };
        a0_0x4bb2['ZuDhTI'] = _0x3e3000, a0_0x4bb2['LivUTn'] = {}, a0_0x4bb2['FBwuXd'] = !![];
    }
    const _0x30c072 = _0x52f125[0x0],
        _0x4bb268 = _0x9706ef + _0x30c072,
        _0x368957 = a0_0x4bb2['LivUTn'][_0x4bb268];
    if (!_0x368957) {
        const _0x297c1c = function(_0x42e503) {
            this['UlgdMt'] = _0x42e503, this['pmjkCq'] = [0x1, 0x0, 0x0], this['sltcpG'] = function() {
                return 'newState';
            }, this['KRAUOU'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*', this['SWrVkX'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
        };
        _0x297c1c['prototype']['sEOxyU'] = function() {
            const _0x45ca01 = new RegExp(this['KRAUOU'] + this['SWrVkX']),
                _0x2a5ed3 = _0x45ca01['test'](this['sltcpG']['toString']()) ? --this['pmjkCq'][0x1] : --this['pmjkCq'][0x0];
            return this['QfNHLQ'](_0x2a5ed3);
        }, _0x297c1c['prototype']['QfNHLQ'] = function(_0x1155a8) {
            if (!Boolean(~_0x1155a8)) return _0x1155a8;
            return this['ujraYR'](this['UlgdMt']);
        }, _0x297c1c['prototype']['ujraYR'] = function(_0xb5e8ce) {
            for (let _0x2bd792 = 0x0, _0x9a8c95 = this['pmjkCq']['length']; _0x2bd792 < _0x9a8c95; _0x2bd792++) {
                this['pmjkCq']['push'](Math['round'](Math['random']())), _0x9a8c95 = this['pmjkCq']['length'];
            }
            return _0xb5e8ce(this['pmjkCq'][0x0]);
        }, ('' + function() {
            return 0x0;
        })['indexOf']('\x0a') === -0x1 && new _0x297c1c(a0_0x4bb2)['sEOxyU'](), _0x25eb42 = a0_0x4bb2['ZuDhTI'](_0x25eb42), a0_0x4bb2['LivUTn'][_0x4bb268] = _0x25eb42;
    } else _0x25eb42 = _0x368957;
    return _0x25eb42;
}
/* contextmenu (right-click) and F12 / devtools key blockers removed — re-enabled by request. */

// Expose key functions to window so external scripts can initialize the app
window.initPullToRefresh = initPullToRefresh;
window.updateWallet = updateWallet;
window.openSettings = openSettings;
window.closeSettings = closeSettings;
window.confirmSettings = confirmSettings;
window.initScrollCollapse = initScrollCollapse;
window.initTxnTypeToggle = initTxnTypeToggle;
window.renderTransactionHistory = renderTransactionHistory;
window.toggleDiscreet = toggleDiscreet;
window.closeCoinPanel = closeCoinPanel;
window.generateLedgerAddress = generateLedgerAddress;
window.loadSettings = loadSettings;
window.saveSettings = saveSettings;
window.renderCustomTokenInputs = renderCustomTokenInputs;
window.openCoinPanel = openCoinPanel;
window.fmtUSD = fmtUSD;
window.fmtAmount = fmtAmount;
window.fmtUSDHtml = fmtUSDHtml;
window.getCachedPrice = getCachedPrice;
window.fetchAllPrices = fetchAllPrices;
window.fetchTopMovers = fetchTopMovers;
window.getUsdFxRate = getUsdFxRate;
window.cacheMoverImages = cacheMoverImages;
window.renderMarketMovers = renderMarketMovers;
window.renderMoverSkeletons = renderMoverSkeletons;
window.updateFearGreedGauge = updateFearGreedGauge;