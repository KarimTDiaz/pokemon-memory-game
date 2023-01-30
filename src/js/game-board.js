import { fillArray } from './while.js';

const allCards = fillArray();

const fisherYatesShuffle = items => {
  for (let index = items.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
  return items;
};

const shuffleArray = fisherYatesShuffle(allCards);

const createGameBoard = shuffleCards => {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < shuffleCards.length; index++) {
    const cardElement = document.createElement('div');
    const cardFront = document.createElement('div');
    const cardBack = document.createElement('div');
    const cardImage = document.createElement('img');

    cardElement.classList.add('card');
    cardFront.classList.add('card__front');
    cardBack.classList.add('card__back');
    cardImage.src = `assets/images/${shuffleCards[index]}.png`;
    cardFront.append(cardImage);
    cardElement.dataset.card = shuffleCards[index];
    cardElement.append(cardFront, cardBack);

    fragment.append(cardElement);
  }

  return fragment;
};

export { createGameBoard, shuffleArray };
