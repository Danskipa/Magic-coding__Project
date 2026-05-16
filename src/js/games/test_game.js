export const initTestGame = () => {
  const gameContainer = document.querySelector('.game-id_1');

  const gameHTML = `<h2 class="time-сalculator__title">Калькулятор часу</h2>
        <div class="time-calculator__game">
          <input class="time-calculator__input" data-input type="number" placeholder="Введіть число"/>
          <button class="time-calculator__button" data-button >Search</button>
          <p class="time-calculator__result" data-result >Результат</p>
        </div>`;
  gameContainer.innerHTML = gameHTML;

  //logic

};
