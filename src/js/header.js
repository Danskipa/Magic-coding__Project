const html = document.querySelector('html');
const backdropHeader = document.querySelector('.backdrop__header');
const switcher = document.querySelector('.switcher');
const helloingSpan = document.querySelector('.helloing__text--part');
const formInput = document.querySelector('.form__input');
const helloingUser = document.querySelector('.helloing__text--part');
const btnSaveModal = document.querySelector('.form__button');
const secondeBackdropHeader = document.querySelector(
  '.seconde__backdrop__header'
);
const btnCloseModal = document.querySelectorAll('.close__button');
const logoLink = document.querySelector('.logo__link--picture');
const logoW = document.querySelector('.logo__link_photo--white');
const logoD = document.querySelector('.logo__link_photo--dark');
const mainGames = document.querySelectorAll(`.game`);
const form = document.querySelector('.modal__form');
const modalPhotos = document.querySelector('.modal__photo--seconde');
const modals = document.querySelector('.modals');

const handleSwitcher = event => {
  if (event.target.checked) {
    html.style.setProperty('--colorBgPrimary', '#000000db');
    html.style.setProperty('--colorTextPrimary', '#ffffffb9');

    logoW.classList.add('dark_logo');
    logoD.classList.add('dark_logo');

    menuItems.forEach(item => {
      item.classList.add('menu__item--dark');
    });
  } else {
    html.style.setProperty('--colorCorrect', '#039900');
    html.style.setProperty('--colorIncorrect', '#990000');
    html.style.setProperty('--colorBgPrimary', '#ffffff');
    html.style.setProperty('--colorBgSecondary', '#d9d9d9');
    html.style.setProperty('--colorBgField', '#d7d7d7');
    html.style.setProperty('--colorBgSwitch', '#7a7a7a');
    html.style.setProperty('--colorBgChoose', '#f1f1f1');
    html.style.setProperty('--colorTextPrimary', '#000000');
    html.style.setProperty('--colorTextSecondary', '#7e7e7e');

    logoW.classList.remove('dark_logo');
    logoD.classList.remove('dark_logo');

    menuItems.forEach(item => {
      item.classList.remove('menu__item--dark');
    });
  }
};

const handleHelooing = event => {
  helloingUser.textContent = event.target.value;
};

const handleSave = event => {
  event.preventDefault();
  secondeBackdropHeader.classList.remove('hidden');
};
const handleClose = event => {
  modalPhotos.classList.add('hidden');
  backdropHeader.classList.add('hidden');
  secondeBackdropHeader.classList.add('hidden');
};

switcher.addEventListener('change', handleSwitcher);
formInput.addEventListener('input', handleHelooing);
form.addEventListener('submit', handleSave);
btnCloseModal.forEach(btn => {
  btn.addEventListener('click', handleClose);
});
