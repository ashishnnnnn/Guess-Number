'use strict';

// console.log(document.querySelector('.message').innerText);
// document.querySelector('.message').textContent = 'Correct Number!!';

// document.querySelector('.secret_number').textContent = 234567823;
// document.querySelector('.score').textContent = 21;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess, secret_number);
  if (!guess) {
    document.querySelector('.message').textContent = '🛑  No Number!!';
  } else if (guess === secret_number) {
    document.querySelector('.number').textContent = secret_number;

    document.querySelector('.message').textContent = '🎉 Currect Number!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }
  } else if (guess !== secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secret_number
          ? '🛑 Too High Go for lower values'
          : '🛑 Too Low Go for higher value';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '🥴 You Loose the game.';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
