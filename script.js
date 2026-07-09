document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.timeline-item');

    const options = {
        threshold: 0.3, // Déclenche l'animation quand 30% du bloc est visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Arrête de surveiller une fois animé
            }
        });
    }, options);

    items.forEach(item => {
        observer.observe(item);
    });
});