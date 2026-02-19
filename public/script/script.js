const menuBtn = document.querySelector(`.menu-btn`);
const menu = document.querySelector(`.menu`);

menuBtn.addEventListener(`click`, () => {
  menu.classList.toggle(`active`);
  menuBtn.classList.toggle(`active`)

  if (menu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
})