document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scroll para la navegación
    // Hace que los enlaces del menú se muevan suavemente a las secciones
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el salto brusco
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Animación al hacer scroll
    // Hace que las secciones aparezcan con una animación cuando entran en la pantalla
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Si la sección sale de la vista, le quitamos la clase para que se pueda animar de nuevo
                entry.target.classList.remove('visible');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Esto significa que la animación se activará cuando el 20% de la sección sea visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
