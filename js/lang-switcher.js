document.addEventListener('DOMContentLoaded', () => {
    const body       = document.body;
    const toggleToEn = document.getElementById('lang-toggle-en');
    const toggleToDe = document.getElementById('lang-toggle-de');

    // Beim Laden: gespeicherte Sprache anwenden
    const savedLang = localStorage.getItem('lang'); // 'de' oder 'en'
    if (savedLang === 'en') {
        body.classList.add('lang-en');
    } else {
        body.classList.remove('lang-en'); // Standard: Deutsch
    }

    function setLanguage(lang) {
        if (lang === 'en') {
            body.classList.add('lang-en');
        } else {
            body.classList.remove('lang-en');
        }
        localStorage.setItem('lang', lang); // Präferenz speichern
        document.dispatchEvent(new CustomEvent('languageChanged')); // Live-Sprachumstellung
    }

    toggleToEn.addEventListener('click', () => setLanguage('en'));
    toggleToDe.addEventListener('click', () => setLanguage('de'));
});
