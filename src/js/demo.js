// const compareCards = () => {
//   if (firstCard.dataset.card === secondCard.dataset.card) {
//     firstCard.classList.remove('card--show');
//     secondCard.classList.remove('card--show');
//   } else {
//     firstCard.classList.add('card--show');
//     secondCard.classList.add('card--show');
//   }
// };

// const flipSingleCard = singleCard => {
//   if (!firstCard) {
//     firstCard = singleCard;
//     firstCard.classList.remove('card--show');
//   } else {
//     secondCard = singleCard;
//     secondCard.classList.remove('card--show');

//     singleCard.addEventListener(
//       'transitionend',
//       () => {
//         if (firstCard && secondCard) {
//           compareCards();
//         }
//       },
//       { once: true }
//     );
//   }

//   console.log(firstCard);
//   console.log(secondCard);

  //   if (firstCard.dataset !== secondCard.dataset) {
  //     firstCard.classList.remove('card--show');
  //     secondCard.classList.remove('card--show');
  //   } else {
  //     firstCard.classList.remove('card--show');
  //     secondCard.classList.remove('card--show');
  //   }
// };
