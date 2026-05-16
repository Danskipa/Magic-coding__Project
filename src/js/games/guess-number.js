let secretNumber = Math.floor(Math.random() * 100) + 1;

const input = document.querySelector('.guess-input');
const subtitle = document.querySelector('.guess-subtitle');

subtitle.textContent = '';

const handleGuess = event => {
  const userValue = Number(event.target.value);
  if (userValue === secretNumber) {
    subtitle.textContent = `Вітаю, ви вгадали число! (${secretNumber})`;
  } else if (userValue > secretNumber) {
    subtitle.textContent = 'Занадто велике число';
  } else {
    subtitle.textContent = 'Занадто мале число';
  }
};
input.addEventListener('change', handleGuess);
