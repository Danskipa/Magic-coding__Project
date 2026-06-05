export const initDinosaurGame = () => {
  const gameContainer = document.querySelector('.game-id_6');

  class DinosaurGame {
    constructor(dinosaur, gameArea) {
      this.dinosaur = dinosaur;
      this.gameArea = gameArea;
      this.gameOver = false;
      this.isJumping = false;
      this.gameModalStart();
    }
    init() {
      document.addEventListener('keydown', event => {
        if (event.code === 'Space' && !this.gameOver && !this.isJumping) {
          event.preventDefault();
          this.jump();
        }
      });
      this.gameArea.addEventListener('mousedown', event => {
        if (!this.gameOver && !this.isJumping) {
          event.preventDefault();
          this.jump();
        }
      });
      this.renderObstacles();
      this.checkCollision();
      this.move();
    }
    move() {
      this.dinosaur.classList.add('move');
      this.gameArea.classList.add('move');
      if (!this.gameOver) {
        this.dinosaur.style.animationPlayState = 'running';
        this.gameArea.style.animationPlayState = 'running';
      }
    }
    jump() {
      this.isJumping = true;
      this.dinosaur.classList.add('jump');
      setTimeout(() => {
        this.isJumping = false;
        this.dinosaur.classList.remove('jump');
      }, 600);
    }

    randomCactuses() {
      const randomNum = Math.floor(Math.random() * (10 - 0 + 1));
      const obstacle = this.gameArea.querySelector('.cactus');
      if (randomNum >= 8) {
        obstacle.classList.add('cactuses');
      } else if (randomNum >= 5 && randomNum <= 7) {
        obstacle.classList.add('cactus--one');
      } else if (randomNum >= 2 && randomNum <= 4) {
        obstacle.classList.add('cactuses--two');
      } else if (randomNum <= 1) {
        obstacle.classList.add('cactuses--small');
      }
    }

    renderObstacles() {
      const obstacle = document.createElement('div');
      obstacle.classList.add('cactus');

      this.gameArea.appendChild(obstacle);
      this.randomCactuses();

      const handleAnimation = () => {
        obstacle.removeEventListener('animationend', handleAnimation);
        obstacle.remove();
        if (!this.gameOver) {
          this.renderObstacles();
        }
      };
      obstacle.addEventListener('animationend', handleAnimation);
    }

    checkCollision() {
      const gameProcess = () => {
        if (this.gameOver === true) return;
        const obstacle = this.gameArea.querySelector('.cactus');
        const obstacleRect = obstacle.getBoundingClientRect();
        const dinosaurRect = this.dinosaur.getBoundingClientRect();
        if (
          dinosaurRect.right > obstacleRect.left &&
          dinosaurRect.left < obstacleRect.right &&
          dinosaurRect.bottom > obstacleRect.top
        ) {
          this.endGame(obstacle);
          return;
        }
        requestAnimationFrame(gameProcess);
      };
      requestAnimationFrame(gameProcess);
    }

    endGame(obstacle) {
      this.dinosaur.style.animationPlayState = 'paused';
      this.gameArea.style.animationPlayState = 'paused';
      obstacle.style.animationPlayState = 'paused';
      this.gameOver = true;
      this.gameOverModal();
    }
    createModal(msg, btnText, btnCallback) {
      const modalHtml = `
      <div class="dinosaur__modal">
        <p class="dinosaur__message">${msg}</p>
        <button class="dinosaur__start button">${btnText}</button>
      </div>`;
      this.gameArea.insertAdjacentHTML('beforeend', modalHtml);
      const modal = this.gameArea.querySelector('.dinosaur__modal');
      modal.classList.add('show');
      const retryBtn = this.gameArea.querySelector('.dinosaur__start');
      retryBtn.addEventListener('click', btnCallback);
    }
    gameModalStart() {
      this.createModal('Зіграємо?', 'Почати гру', () => {
        const modal = this.gameArea.querySelector('.dinosaur__modal');
        modal.classList.remove('show');
        setTimeout(() => {
          modal.remove();
        }, 250);
        this.init();
      });
    }
    gameOverModal() {
      this.createModal('GAME OVER!', 'Спробувати знову', () =>
        this.restartGame()
      );
    }
    restartGame() {
      this.gameArea.querySelector('.dinosaur__modal').remove();
      this.gameArea.querySelector('.cactus').remove();
      this.gameOver = false;
      this.renderObstacles();
      this.checkCollision();
      this.move();
    }
  }

  const gameHTML = `
    <h2 class="dinosaur__title">Google динозавр</h2>
    <div class="dinosaur__game">
      <div class="dinosaur"></div>
    </div>`;
  gameContainer.innerHTML = gameHTML;

  const dinosaur = gameContainer.querySelector('.dinosaur');
  const gameArea = document.querySelector('.dinosaur__game');
  new DinosaurGame(dinosaur, gameArea);
  //logic
};
