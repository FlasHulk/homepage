(function() {
    'use strict';

    let rocketBtn = document.querySelector('.rocket');

    window.addEventListener('scroll', activeRocket);
    rocketBtn.addEventListener('click', rocketTop);

    function activeRocket() {
        let scrolled = window.scrollY,
            coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            rocketBtn.classList.add('active');
        }

        if (scrolled < coords) {
            rocketBtn.classList.remove('active');
        }
    }

    function rocketTop() {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

})();