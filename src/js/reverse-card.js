
let firstCard;
let secondCard;

const flipCard = () => {
  const cardsElement = document.querySelectorAll('.card');

  cardsElement.forEach(card => {
    card.classList.add('card--show');
  })
  const timeoutId = setTimeout(() => {
      cardsElement.forEach(card => {
        card.classList.remove('card--show');
        clearTimeout(timeoutId);
    });
  },2000);
};

const compareCards = () => {
  if(firstCard.dataset.card !== secondCard.dataset.card){
   firstCard.classList.remove('card--show')
   secondCard.classList.remove('card--show')
  }
  firstCard = undefined
  secondCard = undefined
}

const flipSingleCard = (selectedCard) => {
  if(!firstCard){
    firstCard = selectedCard
    firstCard.classList.add('card--show')
  } else {
    secondCard = selectedCard
    secondCard.classList.add('card--show')
  }
  selectedCard.addEventListener('transitionend',() => {
    if(firstCard && secondCard){
      compareCards()
    }
  }, {once: true})
}

export { flipCard, flipSingleCard };
