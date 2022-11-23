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

/*=============== SHOW SCROLL UP ===============*/

// SCROLL REVEAL JS =================================
