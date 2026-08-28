const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.story': 'Historia',
    'nav.menu': 'Menú',
    'nav.gallery': 'Galería',
    'nav.visit': 'Visita',
    'header.call': 'Llamar',
    'hero.eyebrow': 'MARISCOS A LA LEÑA · ZONA ROMÁNTICA',
    'hero.title': 'El sabor del mar<br />sobre fuego de leña',
    'hero.subtitle': 'Mariscos mexicanos contemporáneos, cocinados a la leña en el corazón de Puerto Vallarta. Comida, música y buena vibra.',
    'hero.primary': 'Reservar mesa',
    'hero.secondary': 'Ver menú',
    'hero.stat1': '4.6 calificación de TripAdvisor',
    'hero.stat2': '100% cocina a la leña',
    'hero.stat3': 'Lun a Dom · 1 PM – 11 PM',
    'story.label': 'Nuestra historia',
    'story.title': 'Fuego, mar y buena vibra',
    'story.text1': 'PAL\'MAR nació de una idea simple: celebrar el marisco fresco de la bahía con la honestidad del fuego de leña. Cada platillo se cocina sobre brasas, dejando que el humo hable por sí mismo.',
    'story.text2': 'Somos un restaurante pequeño con un diseño contemporáneo, hecho para compartir. Nuestros platillos están pensados para el centro de la mesa, acompañados de cócteles frescos y buena música.',
    'story.card1.title': 'Fuego de leña',
    'story.card1.text': 'Todo pasa por nuestras brasas para lograr un sabor ahumado inconfundible.',
    'story.card2.title': 'Mariscos frescos',
    'story.card2.text': 'Producto local de la bahía, seleccionado fresco cada mañana.',
    'story.card3.title': 'Hecho para compartir',
    'story.card3.text': 'Platos generosos diseñados para el centro de la mesa.',
    'story.card4.title': 'Cócteles',
    'story.card4.text': 'Bebidas frescas y creativas que acompañan cada bocado.',
    'menu.label': 'Nuestro menú',
    'menu.title': 'Del mar a tu mesa',
    'menu.item1': 'Ensalada crujiente de pollo con aguacate y aderezo casero cremoso.',
    'menu.item2': 'Médula a la leña con tortillas y salsa de chile morita.',
    'menu.item3': 'Media docena de ostras con limón y salsa de la casa.',
    'menu.cta': 'Ver menú completo',
    'gallery.label': 'Momentos PAL\'MAR',
    'gallery.title': 'Recuerdos para compartir',
    'reviews.label': 'Lo que opinan',
    'reviews.title': 'Un lugar para repetir',
    'reviews.one': '“¡Increíble! El ceviche es de lo mejor que he probado. La ensalada Kikiriki es obligada y el ambiente es genial.”',
    'reviews.two': '“La médula, el kraken y el ceviche fueron fenomenales. Un lugar trendy con buena música y tragos deliciosos.”',
    'reviews.three': '“Diseño contemporáneo, comida para compartir y bebidas deliciosas. El paella de mariscos es espectacular.”',
    'visit.label': 'Visítanos',
    'visit.title': 'Te estamos esperando',
    'visit.addressLabel': 'Dirección',
    'visit.address': 'Ignacio L. Vallarta 268-B, Zona Romántica, Puerto Vallarta, Jalisco, México',
    'visit.hoursLabel': 'Horario',
    'visit.hours': 'Lunes a domingo · 1 PM – 11 PM',
    'visit.phoneLabel': 'Teléfono',
    'visit.directions': 'Cómo llegar',
    'visit.reserve': 'Reservar mesa',
    'reserve.label': 'Reserva tu mesa',
    'reserve.title': 'Asegura tu lugar y vive la experiencia PAL\'MAR.',
    'reserve.hours': 'Lunes a domingo · 1 PM – 11 PM',
    'form.nameLabel': 'Nombre',
    'form.namePlaceholder': 'Tu nombre',
    'form.emailLabel': 'Correo',
    'form.emailPlaceholder': 'Tu correo',
    'form.phoneLabel': 'Teléfono (opcional)',
    'form.phonePlaceholder': 'Tu teléfono',
    'form.dateLabel': 'Fecha',
    'form.messageLabel': 'Mensaje',
    'form.messagePlaceholder': 'Cuéntanos sobre tu reservación',
    'form.submit': 'Enviar mensaje',
    'footer.tagline': 'Mariscos a la leña en el corazón de Puerto Vallarta.',
    'footer.navigation': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.hours': 'Lunes a domingo · 1 PM – 11 PM',
    'footer.address': 'Ignacio L. Vallarta 268-B,<br />Zona Romántica, Puerto Vallarta',
    'footer.rights': '© 2026 PAL\'MAR Seafood & Grill Garage. Todos los derechos reservados.'
  },
  en: {
    'nav.home': 'Home',
    'nav.story': 'Story',
    'nav.menu': 'Menu',
    'nav.gallery': 'Gallery',
    'nav.visit': 'Visit',
    'header.call': 'Call',
    'hero.eyebrow': 'WOOD-FIRED SEAFOOD · ZONA ROMÁNTICA',
    'hero.title': 'The taste of the sea<br />over wood fire',
    'hero.subtitle': 'Contemporary Mexican seafood, cooked over a wood fire in the heart of Puerto Vallarta. Food, music and good vibes.',
    'hero.primary': 'Reserve a table',
    'hero.secondary': 'View menu',
    'hero.stat1': '4.6 TripAdvisor rating',
    'hero.stat2': '100% wood-fired cooking',
    'hero.stat3': 'Mon to Sun · 1 PM – 11 PM',
    'story.label': 'Our story',
    'story.title': 'Fire, sea and good vibes',
    'story.text1': 'PAL\'MAR was born from a simple idea: to celebrate the bay\'s fresh seafood with the honesty of a wood fire. Every dish is cooked over wood embers, letting the smoke speak for itself.',
    'story.text2': 'We are a small restaurant with contemporary design, made for sharing. Our dishes are meant for the center of the table, paired with fresh cocktails and good music.',
    'story.card1.title': 'Wood fire',
    'story.card1.text': 'Everything passes over our wood embers for an unmistakable smoky flavor.',
    'story.card2.title': 'Fresh seafood',
    'story.card2.text': 'Local bay product, selected fresh every morning.',
    'story.card3.title': 'Made to share',
    'story.card3.text': 'Generous plates designed for the center of the table.',
    'story.card4.title': 'Cocktails',
    'story.card4.text': 'Fresh, creative drinks that pair with every bite.',
    'menu.label': 'Our menu',
    'menu.title': 'From the sea to your table',
    'menu.item1': 'Crunchy chicken salad with avocado and house creamy dressing.',
    'menu.item2': 'Ember-roasted bone marrow with tortillas and morita chile salsa.',
    'menu.item3': 'Half dozen oysters with lime and house salsa.',
    'menu.cta': 'View full menu',
    'gallery.label': 'PAL\'MAR moments',
    'gallery.title': 'Memories worth sharing',
    'reviews.label': 'What people say',
    'reviews.title': 'A place to repeat',
    'reviews.one': '“Amazing! The ceviche is one of the best I\'ve ever had. The kikiriki salad is a must and the vibe is great.”',
    'reviews.two': '“The bone marrow, the kraken and the ceviche were phenomenal. A trendy spot with good music and delicious drinks.”',
    'reviews.three': '“Contemporary design, shareable food and delicious drinks. The seafood paella is spectacular.”',
    'visit.label': 'Visit us',
    'visit.title': 'We’re waiting for you',
    'visit.addressLabel': 'Address',
    'visit.address': 'Ignacio L. Vallarta 268-B, Zona Romántica, Puerto Vallarta, Jalisco, Mexico',
    'visit.hoursLabel': 'Hours',
    'visit.hours': 'Monday to Sunday · 1 PM – 11 PM',
    'visit.phoneLabel': 'Phone',
    'visit.directions': 'Get directions',
    'visit.reserve': 'Reserve a table',
    'reserve.label': 'Reserve your table',
    'reserve.title': 'Secure your spot and live the PAL\'MAR experience.',
    'reserve.hours': 'Monday to Sunday · 1 PM – 11 PM',
    'form.nameLabel': 'Name',
    'form.namePlaceholder': 'Your name',
    'form.emailLabel': 'Email',
    'form.emailPlaceholder': 'Your email',
    'form.phoneLabel': 'Phone (optional)',
    'form.phonePlaceholder': 'Your phone',
    'form.dateLabel': 'Date',
    'form.messageLabel': 'Message',
    'form.messagePlaceholder': 'Tell us about your reservation',
    'form.submit': 'Send message',
    'footer.tagline': 'Wood-fired seafood in the heart of Puerto Vallarta.',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.hours': 'Monday to Sunday · 1 PM – 11 PM',
    'footer.address': 'Ignacio L. Vallarta 268-B,<br />Zona Romántica, Puerto Vallarta',
    'footer.rights': '© 2026 PAL\'MAR Seafood & Grill Garage. All rights reserved.'
  }
};

const setNavState = () => {
  if (!nav) return;
  if (window.scrollY > 24) {
    nav.classList.add('solid');
  } else {
    nav.classList.remove('solid');
  }
};

const applyLanguage = (lang) => {
  const selected = translations[lang] || translations.es;

  document.documentElement.lang = lang === 'en' ? 'en' : 'es-MX';
  document.title = lang === 'en'
    ? "PAL'MAR Seafood & Grill Garage | Wood-Fired Seafood in Puerto Vallarta"
    : "PAL'MAR Seafood & Grill Garage | Mariscos a la leña en Puerto Vallarta";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      lang === 'en'
        ? 'PAL\'MAR Seafood & Grill Garage offers wood-fired seafood, creative cocktails and a contemporary experience in Puerto Vallarta.'
        : 'PAL\'MAR Seafood & Grill Garage ofrece mariscos a la leña, cocktails creativos y una experiencia contemporánea en Puerto Vallarta.'
    );
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = selected[key];
    if (value) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const value = selected[key];
    if (value) {
      element.setAttribute('placeholder', value);
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  localStorage.setItem('palmarLang', lang);
};

const initMenu = () => {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
};

const initReveal = () => {
  const reveals = document.querySelectorAll('.reveal');

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
      { threshold: 0.14 }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('revealed'));
  }
};

const initGsap = () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#mainNav', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.out'
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('palmarLang') || 'es';
  setNavState();
  initMenu();
  initReveal();
  initGsap();
  applyLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.lang);
    });
  });
});

window.addEventListener('scroll', setNavState);
