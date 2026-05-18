export const initBiggestNummber = () => {
  const gameContainer = document.querySelector('.game-id_8');
  //==========================
  const gameHTML = `  <div class="biggest-num__container">
    <h2 class="biggest-num__title">Введіть 3 числа</h2>
      <ul class="biggest-num__list">
      <li class="biggest-num__item">
        <label for="biggest-num__input--one">
          <input
            class="num biggest-num__input"
            type="text"
            id="biggest-num__input--one"
              placeholder="Введіть число"
          />
        </label>
      </li>
      <li class="biggest-num__item">
        <label for="biggest-num__input--two">
          <input
            class="num biggest-num__input"
            type="text"
            id="biggest-num__input--two"
              placeholder="Введіть число"
          />
        </label>
      </li>
      <li class="biggest-num__item">
        <label for="biggest-num__input--three">
          <input

            class="num biggest-num__input"
            type="text"
            id="biggest-num__input--three"
              placeholder="Введіть число"
          />
        </label>
      </li>
    </ul>
<p class="biggest-num__text">Найбільше число, яке ви ввели - (<span class="biggest-num__text--part">число</span>)</p>      </div>`;
  gameContainer.innerHTML = gameHTML;
  // logik
  const numOne = document.querySelector('#biggest-num__input--one');
  const numTwo = document.querySelector('#biggest-num__input--two');
  const numThree = document.querySelector('#biggest-num__input--three');
  const biggestNum = document.querySelector('.biggest-num__text--part');

  const handleLogik = () => {
    const arrNums = [
      Number(numOne.value),
      Number(numTwo.value),
      Number(numThree.value),
    ];

    let num = arrNums[0];

    for (let i = 0; i < arrNums.length; i++) {
      if (arrNums[i] > num) {
        num = arrNums[i];
      }
    }

    biggestNum.textContent = `${num === 0 ? 'число' : num}`;
  };

  //==========================
  numOne.addEventListener('input', handleLogik);
  numTwo.addEventListener('input', handleLogik);
  numThree.addEventListener('input', handleLogik);
};
