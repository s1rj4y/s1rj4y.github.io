document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    const designBtns = document.querySelectorAll('.design-btn');

    // Array mit Designs
    const designs = ['simple', 'modern-blue', 'modern-grey', 'modern-white', 'retro']; 

    // Beim Laden: gespeichertes Design anwenden
    const savedDesign = localStorage.getItem('design');
    const initialDesign = designs.includes(savedDesign) ? savedDesign : 'simple'; // Default

    // Alle entfernen
    main.classList.remove('design-simple', 'design-modern', 'design-modern-blue', 'design-modern-grey', 'design-modern-white', 'design-retro');
    
    // Klassen setzen
    if (initialDesign === 'simple') {
        main.classList.add('design-simple');
    } else if (initialDesign === 'retro') {
        main.classList.add('design-retro');
    } else {
        main.classList.add('design-modern');
        main.classList.add(`design-modern-${initialDesign.split('-')[1]}`);
    }

    // aktiven Button markieren
    designBtns.forEach(btn => {
        const target = btn.dataset.design;
        btn.classList.toggle('active', target === initialDesign);
    });

    // Klick-Handler
    designBtns.forEach(btn => { 
        btn.addEventListener('click', function() {
            const targetDesign = this.dataset.design;

            // Alle alten Klassen entfernen
            main.classList.remove('design-simple', 'design-modern', 'design-modern-blue', 'design-modern-grey', 'design-modern-white', 'design-retro');

            // Neue Klassen setzen
            if (targetDesign === 'simple') {
                main.classList.add('design-simple');
            } else if (targetDesign === 'retro') {
                main.classList.add('design-retro');
            }
            else {
                main.classList.add('design-modern');
                main.classList.add(`design-modern-${targetDesign.split('-')[1]}`);
            }

            // Active-Status
            designBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            localStorage.setItem('design', targetDesign);
        });
    });
});