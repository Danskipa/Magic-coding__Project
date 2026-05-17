export const initCalculatorGame = () => {
  const gameContainer = document.querySelector('.game-id_4');

  const gameHTML = `<h2 class="calculator__title">Калькулятор</h2>
        <div class="calculator__game">
          <input class="number number__first" type="number" placeholder="Введіть число"/>
          <div class="calculator__actions">
            <button class="action" data-action="add">+</button>
            <button class="action" data-action="mul">*</button>
            <button class="action" data-action="sub">-</button>
            <button class="action" data-action="div">/</button>
          </div>
          <input class="number numbe__second" type="number" placeholder="Введіть число"/>
          <button class="calculate">=</button>
          <p class="result">Результат</p>
        </div>`;
  gameContainer.innerHTML = gameHTML;

  //logic
  const firstInput = document.querySelector('.number__first');
  const secondInput = document.querySelector('.numbe__second');
  const actions = document.querySelector('.calculator__actions');
  const calculate = document.querySelector('.calculate');
  const result = document.querySelector('.result');
  // ~~~
  let currentAction = '';
  let res = 0;

  const handleChooseAction = event => {
    document.querySelectorAll('.action').forEach(btn => {
      btn.classList.remove('choose');
    });
    event.target.classList.add('choose');
    currentAction = event.target.dataset.action;
  };

  const handleCalculate = event => {
    res = 0;
    const firstNumber = Number(firstInput.value);
    const secondNumber = Number(secondInput.value);
    console.log(firstNumber);
    switch (currentAction) {
      case 'add':
        res = firstNumber + secondNumber;
        result.textContent = res;
        break;
      case 'mul':
        res = firstNumber * secondNumber;
        result.textContent = res;
        break;
      case 'sub':
        res = firstNumber - secondNumber;
        result.textContent = res;
        break;
      case 'div':
        if (secondNumber === 0) {
          result.textContent = 'На 0 ділити не можна';
        } else {
          res = firstNumber / secondNumber;
          if (res % 1 === 0) {
            result.textContent = res;
          } else {
            result.textContent = res.toFixed(2);
          }
        }
        break;

      default:
        break;
    }
  };
  actions.addEventListener('click', handleChooseAction);
  calculate.addEventListener('click', handleCalculate);
};
