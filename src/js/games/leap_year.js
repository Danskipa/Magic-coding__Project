export const initLeapYearGame = () => {
  const container = document.querySelector('.game-id_1'); // Ensure this matches your HTML

  const html = `
      <h2 class="leap-year-title">Перевір в який рік ти народився</h2>
      <div class="leap-year-box">
        <div class="leap-year-input-wrapper">
          <input class="leap-year-input" placeholder="Введіть рік народження" />
        </div>
        <h3 class="leap-year-result"></h3>
      </div>
  `;
  container.innerHTML = html;
  const input = container.querySelector('.leap-year-input');
  const result = container.querySelector('.leap-year-result');
  input.addEventListener('input', event => {
    const year = Number(event.target.value);
    if (year === 0) {
      result.textContent = '';
      return;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      result.textContent = "Ви народилися у високосний рік!";
      result.style.color = "var(--colorCorrect)";
    } else {
      result.textContent = "Ви народилися не у високосний рік.";
      result.style.color = "var(--colorIncorrect)";
    }
  });
};
