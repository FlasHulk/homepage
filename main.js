(function() {
  'use strict';

  let rocketBtn = document.querySelector('.rocket');

  window.addEventListener('scroll', activeRocket);
  rocketBtn.addEventListener('click', rocketTop);
  animation();

  function activeRocket() {
    let scrolled = window.scrollY;

    if (scrolled > 200) {
      rocketBtn.classList.add('active');
    }

    if (scrolled < 200) {
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

  function animation() {
    const animItems = document.querySelectorAll('.anim');
    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver((items, observer) => {
        items.forEach(function(entry) {
          let el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('active');
          }
        })
      }, {
        rootMargin: "0px 0px 0px 0px"
      });

      animItems.forEach(function(item) {
        observer.observe(item);
      });
    }
  }
})();