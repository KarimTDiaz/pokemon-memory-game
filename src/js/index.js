// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { flipCard, flipSingleCard } from './reverse-card.js';

const cardContainerElement = document.getElementById('card');
flipCard();

cardContainerElement.addEventListener('click', ev => {
  flipSingleCard(ev.target);
});
