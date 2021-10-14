import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

// eslint-disable-next-line no-unused-vars
const navSlide = () => {
  const burger = document.querySelector('.menu__icon');
  const menu = document.querySelector('.menu__list');
  const menuItems = document.querySelectorAll('.menu__item');

  burger.addEventListener('click', () => {
    // Toggle nav
    menu.classList.toggle('menu-active');

    // Animate links
    menuItems.forEach((link, index) => {
      if (link.style.animation) {
        // eslint-disable-next-line no-param-reassign
        link.style.animation = '';
      } else {
        // eslint-disable-next-line no-param-reassign
        link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });
};

documentReady(() => {
  lazyImages();
});
