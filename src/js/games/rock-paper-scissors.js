export const initRockPaperScissors = () => {
  const gameContainer = document.querySelector('.game-id_3');

  let computerScore = 0;
  let playerScore = 0;

  let playerChoice = '';

  const choices = ['rock', 'scissors', 'paper'];

  const gameHTML = `
  <div class="container rps-container">
  <h2 class="rps-title">Камінь - ножиці - папір</h2>
  <div class="rps-gameplay">
    <ul class="rps-list">
      <li class="rps-item">
        <button class="rps-button__option rock" data-choice="rock"></button>
      </li>
      <li class="rps-item">
        <button
          class="rps-button__option scissors"
          data-choice="scissors"
        ></button>
      </li>
      <li class="rps-item">
        <button class="rps-button__option paper" data-choice="paper"></button>
      </li>
    </ul>
    <ul class="rps-score">
      <li class="rps-item__score">Рахунок:</li>
      <li class="rps-item__score" id="cpu-score">
        Комп’ютер - ${computerScore}
      </li>
      <li class="rps-item__score" id="player-score">Ви - ${playerScore}</li>
    </ul>
  </div>
  <p class="rps-text">Зробіть свій вибір!</p>
  <button class="rps-button">Варіант комп’ютера</button>
</div>
`;
  gameContainer.innerHTML = gameHTML;

  const resultText = gameContainer.querySelector('.rps-text');
  const cpuScoreElement = gameContainer.querySelector('#cpu-score');
  const playerScoreElement = gameContainer.querySelector('#player-score');
  const optionButtons = gameContainer.querySelectorAll('.rps-button__option');
  const playButton = gameContainer.querySelector('.rps-button');

  const handlePlayerChoice = event => {
    playerChoice = event.target.dataset.choice;
  };

  const handlePlayClick = event => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === 'rock' && computerChoice === 'rock') {
      resultText.textContent = 'Нічия в цьому раунді!';
      resultText.style.color = '#000000';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      playerScore++;
      resultText.textContent = 'Ви виграли раунд!';
      resultText.style.color = '#039900';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      resultText.textContent = 'Комп’ютер виграв раунд!';
      resultText.style.color = '#990000';
    }

    if (playerChoice === 'scissors' && computerChoice === 'scissors') {
      resultText.textContent = 'Нічия в цьому раунді!';
      resultText.style.color = '#000000';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      playerScore++;
      resultText.textContent = 'Ви виграли раунд!';
      resultText.style.color = '#039900';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      computerScore++;
      resultText.textContent = 'Комп’ютер виграв раунд!';
      resultText.style.color = '#990000';
    }

    if (playerChoice === 'paper' && computerChoice === 'paper') {
      resultText.textContent = 'Нічия в цьому раунді!';
      resultText.style.color = '#000000';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      playerScore++;
      resultText.textContent = 'Ви виграли раунд!';
      resultText.style.color = '#039900';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      resultText.textContent = 'Комп’ютер виграв раунд!';
      resultText.style.color = '#990000';
    }

    cpuScoreElement.textContent = `Комп'ютер - ${computerScore}`;
    playerScoreElement.textContent = `Ви - ${playerScore}`;
  };

  playButton.addEventListener('click', handlePlayClick);
  optionButtons.forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
  });
};
