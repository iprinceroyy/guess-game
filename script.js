'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//add event listener

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const numberBox = document.querySelector('.number');
const body = document.querySelector('body');

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        displayMessage('No number');

        //when player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number');
        numberBox.textContent = secretNumber;

        body.style.backgroundColor = '#60b347';
        numberBox.style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

//Reset
const reset = document.querySelector('.again');
reset.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayMessage('Start guessing ...');
    document.querySelector('.score').textContent = score;
    numberBox.textContent = '?';
    document.querySelector('.guess').value = '';

    numberBox.style.width = '15rem';
    body.style.backgroundColor = '#222';
});