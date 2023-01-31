let firstCard;
let secondCard;
let canPlay = true;
let counterPoints = 0;
let counterFails = 0;
let counterCombo = 0;

const pointerElement = document.getElementById('points');

const checkPoints = () => {
  pointerElement.children[0].textContent = `FAILS = ${counterFails}`;
  pointerElement.children[1].textContent = `POINTS = ${counterPoints}`;
};

const flipCard = () => {
  const cardsElement = document.querySelectorAll('.card');
  cardsElement.forEach(card => {
    card.classList.add('card--show');
  });
  const timeoutId = setTimeout(() => {
    cardsElement.forEach(card => {
      card.classList.remove('card--show');
      clearTimeout(timeoutId);
    });
  }, 2000);
};

const compareCards = () => {
  if (firstCard.dataset.card !== secondCard.dataset.card) {
    firstCard.classList.remove('card--show');
    secondCard.classList.remove('card--show');
    counterFails += 1;
    counterCombo = 0;
  } else {
    counterCombo += 1;
    counterPoints += 10 * counterCombo;
  }
  firstCard = undefined;
  secondCard = undefined;
  canPlay = true;
  checkPoints();
};

const flipSingleCard = selectedCard => {
  if (!firstCard) {
    firstCard = selectedCard;
    firstCard.classList.add('card--show');
  } else {
    canPlay = false;
    secondCard = selectedCard;
    secondCard.classList.add('card--show');
  }
  selectedCard.addEventListener(
    'transitionend',
    () => {
      if (firstCard && secondCard) {
        compareCards();
      }
    },
    { once: true }
  );
};

export { flipCard, flipSingleCard, checkPoints, canPlay };
