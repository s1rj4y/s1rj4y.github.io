document.addEventListener('DOMContentLoaded', () => {
    const body        = document.body;
    const btnDark     = document.getElementById('theme-toggle-dark');
    const btnLight    = document.getElementById('theme-toggle-light');

    // gespeichertes Theme anwenden
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('theme-dark');
    } else {
        body.classList.remove('theme-dark');
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('theme-dark');
        } else {
            body.classList.remove('theme-dark');
        }
        localStorage.setItem('theme', theme);
    }

    btnDark.addEventListener('click', () => setTheme('dark'));
    btnLight.addEventListener('click', () => setTheme('light'));
});
