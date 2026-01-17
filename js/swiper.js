const swiper = new Swiper('.testimonial-main', {
  slidesPerView: 4, // default (desktop)
  spaceBetween: 30,
  loop: true,
  loopedSlides: 5, // should equal your number of slides
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    // when window width is <= 767px (mobile)
    0: {
      slidesPerView: 1,
    },
    // when window width is between 768px - 1023px (tablet)
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 4,
    }
  }
});


const heroSwiper = new Swiper('.heroswipe.swiper', {
  slidesPerView: 1,
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.hero-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  }
});


  const mySwiper = new Swiper("", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

