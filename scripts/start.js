"use strict"


 function startGame() {
   startButton.classList.add('hidden');
  message.classList.remove('hidden');
   nextRound();
 }

startButton.addEventListener('click', startGame);
 blockContainer.addEventListener('click', event => {
 const { tile } = event.target.dataset;

  if (tile)gamerMove(tile);
 });