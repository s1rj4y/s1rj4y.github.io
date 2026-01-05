document.addEventListener('DOMContentLoaded', () => {
    const menuBtns = document.querySelectorAll('.menu-toggle');
    const sidebar  = document.querySelector('.sidebar');
    const designBtns = document.querySelectorAll('.design-btn');

    // Menü ein- & ausklappen
    menuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    });

    // Klick auf Design-Button Menü schließen
    designBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    });
});