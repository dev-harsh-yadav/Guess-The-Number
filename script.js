'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let oldscore = -1;
const DisplayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        // document.querySelector('.message').textContent = `😢No Number`;
        DisplayMessage(`👀🤦Enter a Number`);
    }
    else if (secretnumber === guess) {
        // document.querySelector('.message').textContent = '🎉 Correct Answer!!';
        DisplayMessage('🎉 Correct Answer!!');
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor = '#19661f';
        document.querySelector('.number').style.width = '30rem';
        highscore = document.querySelector('.score').textContent;
    }
    else if (secretnumber !== guess) {
        if (score > 1) {
            // document.querySelector('.message').textContent = (guess > secretnumber ? 'Too High!!' : 'Too LOW!!');
            DisplayMessage((guess > secretnumber ? '🐱‍🏍Too High!!' : '🤖👾Too LOW!!'));
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '😢You lost the game';
            DisplayMessage('😢You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
   
})
document.querySelector('.again').addEventListener('click', function () {
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    // document.querySelector('.message').textContent = 'Start guessing...';
    DisplayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#4f729b';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    if (highscore > oldscore) {
        document.querySelector('.highscore').textContent = highscore;
        oldscore = highscore;
    }
})
