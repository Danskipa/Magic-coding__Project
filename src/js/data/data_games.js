// import { initTestGame } from '../games/test_game.js';
import { initGuessNumberGame } from '../games/guess-number.js';
import { initRockPaperScissors } from '../games/rock-paper-scissors.js';
import { initCalculatorGame } from '../games/calculator.js';
import { initTimeCalculatorGame } from '../games/time_calculator.js';
import { initDinosaurGame } from '../games/dinosaur-game.js';
import { initLeapYearGame } from '../games/leap_year.js';
import { initFootball } from '../games/football.js';
import { initBiggestNummber } from '../games/biggest_num.js';
import { initColorGame } from '../games/guess-color.js';

export const games = [
 {
    init: initLeapYearGame,
    id: 1,
    name: "Високосний калькулятор",
    category: "numerical",
  },,
  {
    init: initGuessNumberGame,
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    init: initRockPaperScissors,
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    init: initCalculatorGame,
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    init: initTimeCalculatorGame,
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    init: initDinosaurGame,
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    init: initFootball,
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    init: initBiggestNummber,
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
  {
    init: initColorGame,
    id: 11,
    name: 'Вгадай колір',
    category: 'game',
  },
];
