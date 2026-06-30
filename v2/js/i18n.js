(function() {
    const SUPPORTED = ['en', 'fr', 'es', 'pt', 'ru', 'tr'];
    const STORAGE_KEY = 'i18n_lang';
    let currentLang = 'en';
    let translations = {};

    const style = document.createElement('style');
    style.textContent = [
        '.i18n-section{margin-bottom:16px}',
        '.i18n-section-label{color:#888;font-size:11px;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px}',
        '.i18n-switcher{width:100%;padding:8px 12px;background:#1e1e1e;color:#fff;',
        'border:1px solid #444;border-radius:8px;font-size:14px;cursor:pointer;',
        'appearance:none;-webkit-appearance:none;',
        'background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%23888\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E");',
        'background-repeat:no-repeat;background-position:right 10px center}',
        '.i18n-switcher:focus{outline:none;border-color:#666}'
    ].join('');
    document.head.appendChild(style);

    async function load(lang) {
        if (!SUPPORTED.includes(lang)) lang = 'en';
        try {
            const res = await fetch('/locales/' + lang + '.json?v=12');
            if (!res.ok) throw new Error('HTTP ' + res.status);
            translations = await res.json();
            currentLang = lang;
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (_) {
            if (lang !== 'en') {
                try {
                    const res = await fetch('/locales/en.json?v=12');
                    translations = await res.json();
                    currentLang = 'en';
                } catch (__) {}
            }
        }
    }

    function t(key) {
        const parts = key.split('.');
        let val = translations;
        for (let i = 0; i < parts.length; i++) {
            if (val == null || typeof val !== 'object') return key;
            val = val[parts[i]];
        }
        return typeof val === 'string' ? val : key;
    }

    function apply() {
        const els = document.querySelectorAll('[data-i18n]');
        for (let i = 0; i < els.length; i++) {
            const el = els[i];
            const key = el.getAttribute('data-i18n');
            const text = t(key);
            if (text !== key) el.textContent = text;
        }
        const switchers = document.querySelectorAll('.i18n-switcher');
        for (let i = 0; i < switchers.length; i++) {
            switchers[i].value = currentLang;
        }
        const phEls = document.querySelectorAll('[data-i18n-placeholder]');
        for (let i = 0; i < phEls.length; i++) {
            const text = t(phEls[i].getAttribute('data-i18n-placeholder'));
            if (text !== phEls[i].getAttribute('data-i18n-placeholder')) phEls[i].placeholder = text;
        }
        document.documentElement.lang = currentLang;
    }

    function detect() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED.includes(saved)) return saved;
        const browser = (navigator.language || '').split('-')[0].toLowerCase();
        return SUPPORTED.includes(browser) ? browser : 'en';
    }

    function wireSwitchers() {
        const switchers = document.querySelectorAll('.i18n-switcher');
        for (let i = 0; i < switchers.length; i++) {
            (function(sel) {
                sel.value = currentLang;
                sel.addEventListener('change', function(e) {
                    load(e.target.value).then(function() {
                        apply();
                    });
                });
            })(switchers[i]);
        }
    }

    let resolveReady;
    const readyPromise = new Promise(function(resolve) {
        resolveReady = resolve;
    });

    async function init() {
        const lang = detect();
        await load(lang);
        apply();
        wireSwitchers();
        resolveReady();
    }

    window.i18n = {
        t: t,
        apply: apply,
        load: load,
        ready: readyPromise
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();