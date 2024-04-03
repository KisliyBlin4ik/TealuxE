const menuBtn = document.querySelector('.menu__btn');
const menuCLoseBtn = document.querySelector('.menu__close-btn');
const menuList = document.querySelector('.menu__list');
const menuOpenBg = document.querySelector('.menu--open-bg');

menuBtn.addEventListener('click', (event) => {
  menuList.classList.toggle('menu__list--open');
  menuOpenBg.classList.toggle('menu__list--open');
});
menuCLoseBtn.addEventListener('click', (event) => {
  menuList.classList.remove('menu__list--open');
  menuOpenBg.classList.remove('menu__list--open');
});
menuOpenBg.addEventListener('click', (event) => {
  if (event.target === menuOpenBg) {
    menuList.classList.remove('menu__list--open');
    menuOpenBg.classList.remove('menu__list--open');
  }
});
