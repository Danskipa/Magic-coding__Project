const modal = document.querySelector('.modal');
const switcher = document.querySelector('.switcher');
const helloingSpan = document.querySelector('.helloing__text--part');
const formInput = document.querySelector('.form__input');
const helloingUser = document.querySelector('.helloing__text--part');
const btnSaveModal = document.querySelector('.form__button');
const secondeModal = document.querySelector('.seconde__modal');
const btnCloseModal = document.querySelector('.close__button');
const logoLink = document.querySelector('.logo__link--picture');
const logo = document.querySelector('.logo__img');

const handleSwitcher = event => {
  if (event.target.checked) {
    document.body.classList.add('dark');
    logoPickture.classList.add('logo__photo--dark');
    logo.src = './images/logo.svg';
  } else {
    document.body.classList.remove('dark');
    logoPickture.classList.remove('logo__photo--dark');
    logo.src = './images/logo_dark.svg';
  }
};

const handleHelooing = event => {
  helloingUser.textContent = event.target.value;
};

const handleSave = event => {
  if (btnSaveModal) {
    secondeModal.classList.remove('hidden');
  }
};
const handleClose = event => {
  if (btnCloseModal) {
    modal.classList.add('hidden');
    secondeModal.classList.add('hidden');
  }
};

switcher.addEventListener('change', handleSwitcher);

formInput.addEventListener('input', handleHelooing);
btnSaveModal.addEventListener('click', handleSave);
btnCloseModal.addEventListener('click', handleClose);
