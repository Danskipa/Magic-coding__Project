const initGuessNumberGame = () => {
  const container = document.querySelector('.game-id_2');

  const html = `
        <h2 class="guess-title">Вгадай число, яке загадав комп’ютер</h2>
        <div class="guess-box">
          <div class="guess-input-wrapper">
            <input
              class="guess-input"
              placeholder="Введіть число"
              id="number"
              type="number"
            />
          </div>
          <label for="number"></label>
          <h3 class="guess-subtitle"></h3>
        </div>
  `;

  container.innerHTML = html;

  const input = container.querySelector('.guess-input');
  const subtitle = container.querySelector('.guess-subtitle');

  const secretNumber = Math.floor(Math.random() * 100) + 1;

  const handleGuess = event => {
    const value = Number(event.target.value);

    if (value === secretNumber) {
      subtitle.textContent = `Вітаю, ви вгадали число! (${secretNumber})`;
    } else if (value > secretNumber) {
      subtitle.textContent = 'Занадто велике число';
    } else {
      subtitle.textContent = 'Занадто мале число';
    }
  };

  input.addEventListener('input', handleGuess);
};

document.addEventListener('DOMContentLoaded', initGuessNumberGame);
