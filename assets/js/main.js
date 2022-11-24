const nav__close = document.querySelector('.nav__close');
const nav__toggle = document.querySelector('.nav__toggle');

const nav__menu = document.querySelector('.nav__menu');

// Function of showing menu
const showMenu = function () {
  nav__menu.classList.add('show-menu');
};

// Function of removing menu
const removeMenu = function (e) {
  nav__menu.classList.remove('show-menu');
};

// Adding Listener to Navigation Links

document
  .querySelectorAll('.nav__link')
  .forEach((el) => el.addEventListener('click', removeMenu));

// SHOWING MENU ON CLICK
nav__toggle.addEventListener('click', showMenu);

// REMOVING MENU ON CLICK
nav__close.addEventListener('click', removeMenu);

// ACTIVE SECTION LINK

const sections = document.querySelectorAll('section[id');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;

    let sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* Mix it Up Filter Library Function */

// Selecting the container of the card and the card itself

var mixerProduct = mixitup('.product-cards', {
  selectors: {
    target: '.product-card',
  },
  animation: {
    duration: 400,
  },
});

/* SHOW SCROLL UP */

const scrollUp = function () {
  const scrollUp = document.getElementById('scrollUp');

  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll-up');
  else scrollUp.classList.remove('show-scroll-up');
};

window.addEventListener('scroll', scrollUp);

/* SCROLL REVEAL JS */

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 200,
});

sr.reveal('.hero-subtitle');
sr.reveal('.hero-title', { delay: 800, origin: 'left' });
sr.reveal('.hero-description', { delay: 1000, origin: 'left' });
sr.reveal('.hero-button', { delay: 1200, origin: 'right' });
sr.reveal('.statics-cars', { delay: 1200, origin: 'right' });
sr.reveal('.statics-customers', { delay: 1600, origin: 'left' });
sr.reveal('.statics-line', { delay: 0, distance: '400px' });
sr.reveal('.hero-image', { origin: 'bottom' });

sr.reveal('.about');
sr.reveal('.about__container', { origin: 'right', delay: 800 });
sr.reveal('.about-image', { origin: 'left', delay: 800 });
sr.reveal('.card', { origin: 'bottom', delay: 800, interval: 1000 });

sr.reveal('.brands-logo', { delay: 400, interval: 200 });

sr.reveal('.why', { delay: 400, origin: 'left', interval: 200 });

sr.reveal('.newsletter__container', { origin: 'bottom' });
sr.reveal('.newsletter-title', {
  origin: 'left',
  distance: '500px',
  delay: 400,
});

sr.reveal('.newsletter-description', { origin: 'bottom', delay: 1500 });
sr.reveal('.newsletter-input', { origin: 'bottom', delay: 1500 });

sr.reveal('.products__container');
sr.reveal('.product-group', { interval: 200, origin: 'left' });
sr.reveal('.product-card', { interval: 300, distance: '40px', duration: 1000 });

sr.reveal('.app-image', { origin: 'right' });
sr.reveal('.app__container', { origin: 'left', delay: 800 });

sr.reveal('.app', { interval: 400 });
