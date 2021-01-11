"use strict"

function gamerMove(block) {
  const index = humanSequence.push(block) - 1;
  const sound = document.querySelector(`[data-sound='${block}']`);
  sound.play();
  const remainingMoves = sequence.length - humanSequence.length;

//refactorizar pls]
  if (humanSequence[index] !== sequence[index]) {
    resetGame('U faild little human 🤡');
    return;
  }
  if (humanSequence.length === sequence.length) {
    if (humanSequence.length === 20) {
      resetGame('WOW, You win a potato 🥔');
      return
    }
    humanSequence = [];
    message.textContent = 'Nice U Got it! 🤠';
    setTimeout(() => {
      nextRound();
    }, 1000);
    return;
  }
  message.textContent = ` You have ${remainingMoves} moves 🧐${remainingMoves > 1 ? '' : ''}`;
}

function GamerNextMoves(level) {
  blockContainer.classList.remove('unclickable');
  message.textContent = `You have ${level} moves 🧐${level > 1 ? '' : ''}`;
}