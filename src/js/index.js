// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {
  flipCard,
  flipSingleCard,
  checkPoints
} from './reverse-card.js';
import { createGameBoard, shuffleArray } from './game-board.js';

const cardContainerElement = document.getElementById('card');
cardContainerElement.append(createGameBoard(shuffleArray));
checkPoints();

cardContainerElement.addEventListener('click', ev => {
  if (!ev.target.classList.contains('card')) return;
  flipSingleCard(ev.target);
});

window.addEventListener('load', flipCard);
