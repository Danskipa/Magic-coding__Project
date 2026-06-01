const form = document.querySelector('.footer-form');
const backdrop = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-modal-close]');

console.log('Форма:', form);
console.log('Бекдроп:', backdrop);
console.log('Кнопка закриття:', closeBtn);

const handleOpenModal = event => {
  event.preventDefault();
  backdrop.classList.remove('is-hidden');
  form.reset();
};

const handleCloseModal = event => {
  event.preventDefault();
  backdrop.classList.add('is-hidden');
};

form.addEventListener('submit', handleOpenModal);
closeBtn.addEventListener('click', handleCloseModal);
