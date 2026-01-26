// main.js


if (window.ScrollTrigger) {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

// ================================
// 1️⃣ Language Switcher / i18n
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  if (typeof loadLanguage === "function") loadLanguage(savedLang);

  const switcher = document.getElementById("languageSwitcher");
  if (switcher) {
    switcher.value = savedLang;
    switcher.addEventListener("change", e => {
      if (typeof loadLanguage === "function") loadLanguage(e.target.value);
    });
  }
});

// ================================
// 2️⃣ Hero Section Animations (GSAP)
// ================================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded. Please include GSAP library.');
        return;
    }

    // Set initial states
    gsap.set('.hero-overlay', { x: '-100%' });
    gsap.set('.hero-text-content', { opacity: 0, x: -50 });
    gsap.set('.logo-overlay', { opacity: 0, scale: 0.5 });
    gsap.set('.angle-container', { opacity: 0, x: 100 });

    // Animate hero section
    gsap.timeline({ delay: 0.3 })
        .to('.hero-overlay', { x: '0%', duration: 1, ease: 'power2.out' })
        .to('.hero-text-content', { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
        .to('.logo-overlay', { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.4')
        .to('.angle-container', { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6');
});

// ================================
// 3️⃣ Window Load Animations
// ================================
window.addEventListener("load", () => {
    document.querySelectorAll(".hero-left").forEach(el => el.classList.add("animate"));
});

// ================================
// 4️⃣ Hero Swiper Initialization
// ================================
document.addEventListener("DOMContentLoaded", () => {
    if (typeof Swiper === 'undefined') {
        console.error('Swiper is not loaded. Please include Swiper library.');
        return;
    }

    new Swiper('.hero-swiper', {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        autoplay: { delay: 4000, disableOnInteraction: false },
        effect: 'slide',
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
    });
});

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



  const productsSwiper = new Swiper(".products-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".products-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".products-swiper .swiper-button-next",
    prevEl: ".products-swiper .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});


// Contact Form Handler
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form data
//             const formData = new FormData(contactForm);
//             const data = Object.fromEntries(formData);
            
//             // Validate form
//             if (validateForm(data)) {
//                 // Show success message
//                 alert('Thank you for your enquiry! We will get back to you soon.');
//                 contactForm.reset();
                
//                 // Here you would typically send the data to your server
//                 console.log('Form data:', data);
//             }
//         });
//     }
    
//     function validateForm(data) {
//         for (let key in data) {
//             if (!data[key] || data[key].trim() === '') {
//                 alert('Please fill in all required fields.');
//                 return false;
//             }
//         }
        
//         // Validate email
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(data.email)) {
//             alert('Please enter a valid email address.');
//             return false;
//         }
        
//         return true;
//     }
// });


// Make sure the path points to your PDF file in the project
// const brochureBtn = document.getElementById("downloadBrochureBtn");

// brochureBtn.addEventListener("click", () => {
//     const link = document.createElement("a");
//     link.href = "./brochure/Maredian_Seals_Brochure.pdf"; // path to your PDF
//     link.download = "Maredian_Seals_Brochure.pdf"; // filename when downloaded
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });

const brochureBtns = document.querySelectorAll(".downloadBrochureBtn");
const modal = document.getElementById("brochureModal");
const closeBtn = document.querySelector(".brochure-close");

function isBrochureAllowed() {
  return sessionStorage.getItem("brochureAllowed") === "yes";
}

function downloadBrochure() {
  const link = document.createElement("a");
  link.href = "./brochure/Maredian_Seals_Brochure.pdf";
  link.download = "Maredian_Seals_Brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

brochureBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (isBrochureAllowed()) {
      downloadBrochure();
    } else {
      modal.classList.add("active");
    }
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}






// ================================
// 5️⃣ Theme Toggle (optional)
// ================================
/*
// Uncomment to enable theme toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle?.querySelector('i');

// Set current theme from localStorage or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle?.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}
*/
