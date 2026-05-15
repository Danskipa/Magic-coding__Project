export const initTimeCalculatorGame = () => {
  const gameContainer = document.querySelector('.game-id_5');

  const gameHTML = `<h2 class="time-сalculator__title">Калькулятор часу</h2>
        <div class="time-calculator__game">
          <input class="time-calculator__input" data-input type="number" placeholder="Введіть число"/>
          <button class="time-calculator__button" data-button >Search</button>
          <p class="time-calculator__result">Результат</p>
        </div>`;
  gameContainer.innerHTML = gameHTML;

  //logic
  const input = document.querySelector('[data-input]');
  const button = document.querySelector('[data-button]');

  button.addEventListener( "click", () => {
    const value = input.value;
  }

  )
};