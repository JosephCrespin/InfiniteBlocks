"use strict"


let sequence = [];
let humanSequence = [];
let level = 0;

const startButton = document.querySelector('.js-start');
const message = document.querySelector('.js-message');
const heading = document.querySelector('.js-heading');
const blockContainer = document.querySelector('.js-container');


function activateBlock(color) {
  const block = document.querySelector(`[data-tile='${color}']`);
  const sound = document.querySelector(`[data-sound='${color}']`);

  block.classList.add('activated');
  sound.play();

  setTimeout(() => {
    block.classList.remove('activated');
  }, 200);
}

function playRound(nextSequence) {
  nextSequence.forEach((color, index) => {
    setTimeout(() => {
      activateBlock(color);
    }, (index + 1) * 600);
  });
}

