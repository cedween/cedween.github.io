document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.auto-position');

    function positionElements() {
        elements.forEach(element => {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            const elementHeight = element.offsetHeight;
            const elementWidth = element.offsetWidth;

            element.style.top = `${windowHeight - elementHeight}px`;
            element.style.left = `${windowWidth - elementWidth}px`;
        });
    }

    positionElements();

    window.addEventListener('resize', positionElements);
});
