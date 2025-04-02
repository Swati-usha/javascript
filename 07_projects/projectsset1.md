# Projects related to DOM

## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-5kkfhsqc?file=index.html)

# solution code

## project 1

```javascript
console.log("swaati")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## project2
``` javascript

const form = document.querySelector('form');
// this usecase will give you empty values
// To stop default submission of form

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = `Please give a valid height,${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}, You are Under Weight</span>`;
    }
    if (bmi > 18.6 && bmi < 22.3) {
      results.innerHTML = `<span>${bmi}, You are in Normal Range</span>`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}, You are Over Weight</span>`;
    }
  }
});
```

## project3 solution

```javascript

const clock = document.getElementById('clock');
let date = new Date();

setInterval(function () {
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 500);```

## project 4 solution
```javascript

let random_num = parseInt(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultPars');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // it will validate if value is btw 1-100 and integer
  if (guess === '' || guess < 0 || isNaN(guess) || guess > 100) {
    alert('Please enter a valid number');
    // console.log('enter valid guess between 1 and 100');
    // lowOrHi.innerHTML = 'enter valid guess between 1 and 100';
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random_num}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // if value is equal , low or hi to random number
  if (guess === random_num) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random_num) {
    displayMessage(`Nmber is too Low`);
  } else if (guess > random_num) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  // it will empty value, update guess array
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;

  if (numGuess < 11) {
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;
  }
}

function displayMessage(message) {
  // dom manipulation willbe done here

  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //clear all inputs fields
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    random_num = parseInt(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```