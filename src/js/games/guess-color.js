import icon from '../../images/arrow-check.svg';
export const initColorGame = () => {
  const gameContainer = document.querySelector('.game-id_11');

  const gameHTML = `
            <h2 class="tone__title">Вгадай колір</h2>
            <div class="tone__game">
              <div class="tone__colors">
                <div class="tone__box tone__box--current"></div>
                <div class="tone__box tone__box--user">
                  <p class="similarity"></p>
                  <div class="tone__controls">
                      <input
                        id="r"
                        class="tone__range tone__range--red"
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                      />
                      <input
                        id="g"
                        class="tone__range tone__range--green"
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                      />
                      <input
                        id="b"
                        class="tone__range tone__range--blue"
                        type="range"
                        min="0"
                        max="255"
                        step="1"
                      />
                  </div>
                  <div class="tone__meta">
                    <button class="tone__btn btn__done" type="button">
                    </button>
                    <button class="tone__btn btn__next is__closed" type="button">
                    </button>
                  </div>
                </div>
              </div>
            </div>`;
  gameContainer.innerHTML = gameHTML;

  //logic
  const control = document.querySelector('.tone__controls');
  const userBox = document.querySelector('.tone__box--user');
  const currentBox = document.querySelector('.tone__box--current');
  const btnDone = document.querySelector('.btn__done');
  const btnNext = document.querySelector('.btn__next');
  const btns = document.querySelector('.tone__meta');
  const similarity = document.querySelector('.similarity');
  const ranges = document.querySelectorAll('.tone__range');

  const handleChangeBtn = () => {
    btnDone.classList.toggle('is__closed');
    btnNext.classList.toggle('is__closed');
    control.classList.toggle('is__closed');
  };

  let arrCurrentColor = [];
  let currentBoxColor;
  let arrUserColor = [];

  const generatorColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    arrCurrentColor = [r, g, b];
    currentBoxColor = `rgb(${r}, ${g}, ${b})`;
    currentBox.style.backgroundColor = currentBoxColor;
  };

  const renderReferenceBox = () => {
    const referenceBox = document.createElement('div');
    referenceBox.classList.add('box__reference');
    referenceBox.style.backgroundColor = currentBoxColor;
    userBox.appendChild(referenceBox);
  };

  const handleChooseColor = () => {
    const red = document.querySelector('.tone__range--red').value;
    const green = document.querySelector('.tone__range--green').value;
    const blue = document.querySelector('.tone__range--blue').value;
    arrUserColor = [red, green, blue];
    const userBoxColor = `rgb(${red}, ${green}, ${blue})`;
    userBox.style.backgroundColor = userBoxColor;
  };

  const getColorText = () => {
    if (
      arrUserColor[0] < 167 &&
      arrUserColor[1] < 167 &&
      arrUserColor[2] < 167
    ) {
      return 'var(--colorBgPrimary)';
    } else {
      return 'var(--colorTextPrimary)';
    }
  };

  let interest = 0;

  const calc = (arrNum1, arrNum2) => {
    let sumAllInterest = 0;
    for (let i = 0; i < 3; i++) {
      const difference = Math.abs(arrNum1[i] - arrNum2[i]);
      const interestRight = 100 - (difference * 100) / 255;
      sumAllInterest += interestRight;
    }
    interest = Math.floor(sumAllInterest / 3);
  };

  const handleComparison = () => {
    handleChooseColor();
    calc(arrCurrentColor, arrUserColor);
    similarity.style.color = getColorText();
    similarity.textContent = `${interest} %`;
    renderReferenceBox();
  };
  const restart = () => {
    generatorColor();
    const boxRef = userBox.querySelector('.box__reference');
    boxRef.remove();
    similarity.textContent = '';
    ranges.forEach(range => {
      range.value = 128;
    });
    userBox.style.backgroundColor = `rgb(128, 128, 128)`;
  };
  generatorColor();
  control.addEventListener('input', handleChooseColor);
  btnDone.addEventListener('click', handleComparison);
  btnNext.addEventListener('click', restart);
  btns.addEventListener('click', handleChangeBtn);
};
