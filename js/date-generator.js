document.addEventListener('DOMContentLoaded', () => {
    const dateSpan = document.getElementById('current-date');
    if (!dateSpan) return;

    const now = new Date();
    const formatted = now.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    dateSpan.textContent = formatted;
});