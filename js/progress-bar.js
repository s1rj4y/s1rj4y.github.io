document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('progress-toggle-btn');
    const progressBars = document.querySelectorAll('.progress-bar');
    let isActive = false;

    function getButtonText() {
        const isEnglish = document.body.classList.contains('lang-en');
        if (isActive) {
            return isEnglish ? 'Off' : 'Aus'; 
        } else {
            return isEnglish ? 'On' : 'An';
        }
    }

    function updateButtonText() {
        btn.textContent = getButtonText();
    }

    function startProgressBars() {
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const percent = bar.getAttribute('data-percent');
                bar.style.width = percent + '%';
            }, 50 + index * 150);
        });
    }

    function resetProgressBars() {
        progressBars.forEach(bar => {
            bar.style.width = '0';
        });
    }

    btn.addEventListener('click', () => {
        isActive = !isActive;
        btn.classList.toggle('active', isActive);
        updateButtonText();
        if (isActive) {
            startProgressBars();
        } else {
            resetProgressBars();
        }
    });

    // Initialtext
    updateButtonText();

    document.addEventListener('languageChanged', () => {
        updateButtonText();
    });
});
