const body = document.body;
const preloader = document.getElementById('preloader');
const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const galleryItems = document.querySelectorAll('.gallery-item');
const heroSection = document.getElementById('hero');

const setNavState = () => {
  if (window.scrollY > 40) {
    nav.classList.add('solid');
  } else {
    nav.classList.remove('solid');
  }
};

const revealObserver = () => {
  const elements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((element) => observer.observe(element));
  } else {
    elements.forEach((element) => element.classList.add('revealed'));
  }
};

const initLightbox = () => {
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.dataset.src;
      lightboxImage.src = src;
      lightbox.classList.remove('hidden');
      body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    body.style.overflow = '';
    lightboxImage.src = '';
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.classList.add('hidden');
      body.style.overflow = '';
      lightboxImage.src = '';
    }
  });
};

const initMenu = () => {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
};

const initGsapAnimations = () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#hero h1', {
      opacity: 0,
      y: 24,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.25,
    });

    gsap.from('#hero p, #hero .btn-primary, #hero a[href^="tel:"]', {
      opacity: 0,
      y: 18,
      duration: 1.2,
      ease: 'power2.out',
      stagger: 0.12,
      delay: 0.45,
    });

    gsap.utils.toArray('.feature-card, .review-card, .amenity-card, .gallery-item, #horarios .reveal').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 22,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 92%',
        },
      });
    });

    gsap.to(heroSection, {
      backgroundPositionY: '35%',
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    });

    gsap.to('#nosotros .relative', {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '#nosotros',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
      },
    });

    const menuCards = gsap.utils.toArray('.feature-card');
    gsap.from(menuCards, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: 'power2.out',
      stagger: 0.14,
      scrollTrigger: {
        trigger: '#destacados',
        start: 'top 85%',
      },
    });
  }
};

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 750);

  setNavState();
  revealObserver();
  initMenu();
  initLightbox();
  initGsapAnimations();
});

window.addEventListener('scroll', () => {
  setNavState();
});
