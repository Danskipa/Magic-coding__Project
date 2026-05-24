const modal = document.querySelector('.modal');
const switcher = document.querySelector('.switcher');
const helloingSpan = document.querySelector('.helloing__text--part');
const formInput = document.querySelector('.form__input');
const helloingUser = document.querySelector('.helloing__text--part');
const btnSaveModal = document.querySelector('.form__button');
const secondeModal = document.querySelector('.seconde__modal');
const btnCloseModal = document.querySelector('.close__button');
const logoLink = document.querySelector('.logo__link--picture');
const logoW = document.querySelector('.logo__link_photo--white');
const logoD = document.querySelector('.logo__link_photo--dark');
const menuItems = document.querySelectorAll('.menu__item');
const mainGames = document.querySelectorAll(`.game`);
const gamesSections = document.querySelectorAll('.section');

const handleSwitcher = event => {
  if (event.target.checked) {
    document.body.classList.add('dark');
    logoW.classList.add('dark_logo');
    logoD.classList.add('dark_logo');

    menuItems.forEach(item => {
      item.classList.add('menu__item--dark');
    });
  } else {
    document.body.classList.remove('dark');
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
//sort
import { games } from '../js/data/data_games.js';

const plays = document.querySelectorAll('.menu__text');

const handlePlays = event => {
  const selected = event.currentTarget.dataset.category;

  gamesSections.forEach((gamesSections, i) => {
    const game = games[i];

    if (game.category === selected) {
      gamesSections.style.display = 'block';
    } else {
      gamesSections.style.display = 'none';
    }
  });
};

plays.forEach(play => {
  play.addEventListener('click', handlePlays);
});
