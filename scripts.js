// Cambiar navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

new Swiper(".mySwiperCaja", {
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1.2 },
    576: { slidesPerView: 2.2 },
    768: { slidesPerView: 2.5 },
    992: { slidesPerView: 3.2 }
  }
});

