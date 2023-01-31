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
  pointerElement.children[2].textContent = `COMBO x ${counterCombo}`;
};

const flipCard = () => {
  const cardsElement = document.querySelectorAll('.card');
  cardsElement.forEach(card => {
    card.classList.add('card--show');
    canPlay = false;
  });
  const timeoutId = setTimeout(() => {
    cardsElement.forEach(card => {
      card.classList.remove('card--show');
      canPlay = true
      clearTimeout(timeoutId);
    });
  }, 4000);
};

const compareCards = () => {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    counterCombo += 1;
    counterPoints += 10 * counterCombo;
  } else {
    firstCard.classList.remove('card--show');
    secondCard.classList.remove('card--show');
    counterFails += 1;
    counterCombo = 0;
  }
  firstCard = undefined;
  secondCard = undefined;
  checkPoints();
  canPlay = true;
};

const flipSingleCard = selectedCard => {
  if(!canPlay || selectedCard.classList.contains('card--show'))return
  if (!firstCard) {
    canPlay=false
    firstCard = selectedCard;
    firstCard.classList.add('card--show');
    firstCard.addEventListener('transitionend', ()=>canPlay=true)
  } else {
    canPlay = false
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

export { flipCard, flipSingleCard, checkPoints };
