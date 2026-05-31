import { games } from './data/data_games';

const gamesContainer = document.querySelector('[data-games]');

const renderGames = (games, container) => {
  const html = games.reduce((acc, game) => {
    const gameHTML = `      
    <section id="game-id_${game.id}" class="section">
        <div class="container">
          <div class="game game-id_${game.id}">
          </div>
        </div>
      </section>`;
    acc += gameHTML;
    return acc;
  }, '');
  container.innerHTML = html;
  games.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
};
renderGames(games, gamesContainer);

const gamesSections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.menu__item');
const plays = document.querySelectorAll('.menu__text');

const handlePlays = event => {
  const selected = event.currentTarget.dataset.category;

  const filteredGames = games.filter(game => game.category === selected);

  renderGames(filteredGames, gamesContainer);
};

menuItems.forEach(play => {
  play.addEventListener('click', handlePlays);
});
