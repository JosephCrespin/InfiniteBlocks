"use strict"

function resetGame(text) {

  alert(text);
  sequence = [];
  humanSequence = [];
  level = 0;
  startButton.classList.remove('hidden');
  heading.textContent = 'Infinite Blocks';
  message.classList.add('hidden');
  blockContainer.classList.add('unclickable');

}