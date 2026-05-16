export const initTimeCalculatorGame = () => {
  const gameContainer = document.querySelector('.game-id_5');

  const gameHTML = `<h2 class="time-сalculator__title">Калькулятор часу</h2>
        <div class="time-calculator__game">
        <div class="time-calculator__input-container">
          <input class="time-calculator__input" data-input type="number" placeholder="Введіть число"/>
          <button class="time-calculator__button" data-button >Search</button>
          </div>
        <p class="time-calculator__result" data-result >Результат</p>
        </div>`;
  gameContainer.innerHTML = gameHTML;

  //logic
  const input = document.querySelector('[data-input]');
  const button = document.querySelector('[data-button]');
  const result = document.querySelector("[data-result]")
  button.addEventListener( "click", () => {
    let seconds = Number(input.value);

    const days = Math.floor(seconds / 86400);
  seconds %= 86400;

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  const time = num => String(num).padStart(2, '0');
  result.textContent =
    `${days} дн. ${time(hours)}:${time(minutes)}:${time(seconds)}`;
  }

  );
};