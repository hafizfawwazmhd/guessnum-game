'use strict';
//Random number generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNum = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  scoreNum = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = scoreNum;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
});

//Event listener click untuk button check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //condition untuk secret number hampir sama or sama dengan input number
  if (!guess) {
    document.querySelector('.message').textContent = 'Takde message anjir';
  } else if (guess === secretNumber) {
    if (scoreNum > highscore) {
      highscore = scoreNum;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (guess !== secretNumber) {
    if (scoreNum > 1) {
      // Use terniary operator to avoid repeating code.
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess < secretNumber) {
  //   if (scoreNum > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     scoreNum--;
  //     document.querySelector('.score').textContent = scoreNum;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
