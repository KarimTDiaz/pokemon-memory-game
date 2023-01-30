// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { flipCard, flipSingleCard } from './reverse-card.js';

import { createGameBoard, shuffleArray } from './game-board.js';

const cardContainerElement = document.getElementById('card');

cardContainerElement.append(createGameBoard(shuffleArray))


cardContainerElement.addEventListener('click', ev => {
  flipSingleCard(ev.target);
});

window.addEventListener('load', flipCard)
