'use strict';

// 1~100까지 랜덤 숫자 등장
let secretNumber = Math.trunc(Math.random() * 100) + 1;
// 숫자를 맞출 수 있는 기회
let score = 10;
// 최고 점수
let highscore = 0;

const check = document.querySelector('.check');
const again = document.querySelector('.again');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check를 click하면 실행되는 함수 작성
const checkClick = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤔 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

// check를 click했을 때 checkClick 실행
check.addEventListener('click', checkClick);

// Enter를 누르면 checkClick 실행
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') checkClick();
});

// message, score, number, guess 초기화 및 디자인 초기화 함수
const againClick = function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// again을 click할 때 againClick 함수 실행
again.addEventListener('click', againClick);

// a키를 눌렀을 때 againClick 함수 실행
document.addEventListener('keydown', function (e) {
  if (e.key === 'a') againClick();
});
