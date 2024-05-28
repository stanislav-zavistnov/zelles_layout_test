const openBurgerButton = document.querySelector('.burger-button');
const blurBackground = document.querySelector('.burger-background-blur');
const burgerMenu = document.querySelector('.burger-nav-wrap');
const closeBurgerButton = document.querySelector('.burger-close-button');
const bodyElem = document.querySelector('.body');

openBurgerButton.addEventListener('click', () => {
  blurBackground.style.display = 'block';
  burgerMenu.style.display = 'block';
  bodyElem.style.overflowY = 'hidden';
});

closeBurgerButton.addEventListener('click', () => {
  burgerMenu.style.display = 'none';
  blurBackground.style.display = 'none';
  bodyElem.style.overflowY = 'auto';
});
