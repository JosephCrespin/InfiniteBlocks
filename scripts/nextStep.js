"use strict"

function nextStep() {
  const blocks = ['red', 'green', 'blue', 'yellow'];
  const random = blocks[Math.floor(Math.random() * blocks.length)];

  return random;
}

function nextRound() {
  level += 1;

  blockContainer.classList.add('unclickable');
  message.textContent = 'look carefully 🤔';
  heading.textContent = `Level ${level}`;

// gracias spread operator 
  const nextSequence = [...sequence];
  nextSequence.push(nextStep());
  playRound(nextSequence);

  sequence = [...nextSequence];
  setTimeout(() => {
    GamerNextMoves(level);
  }, level * 600 + 1000);
}
