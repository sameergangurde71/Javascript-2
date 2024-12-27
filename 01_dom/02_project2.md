# Projects Related to DOM

## Projects Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

```Javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```


#Project 2

```javascript

const form = document.querySelector('form');
//this usecase value is give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height , ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight , ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //results
    results.innerHTML = `<span>${bmi}<span>`;
    if (bmi < 18.6) {
      results.innerHTML =
        `You are a under weight and bmi is ${bmi}`
    } else if (bmi >= 18.6 || bmi < 24.9) {
      results.innerHTML = `You are a in Normal range and bmi is ${bmi}`;
    } else {
      results.innerHTML = `You are a Overweight ${bmi}`;
    }
  }
});
```

# project 3 solution

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

#project 4 solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please enter a valid number instead of ${guess}`);
  } else if (guess < 1) {
    alert(`please enter a valid number more than 1 instead of ${guess}`);
  } else if (guess > 100) {
    alert(`please enter a valid number less than 100 instead of ${guess}`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanUpGuess(guess);
      displayMessage(`Game over.Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guess it right');
    endGame();
    newGame();
  } else if (guess < randomNumber) {
    displayMessage('Your number is too low');
  } else if (guess > randomNumber) {
    displayMessage('Your number is too high');
  }
}
function cleanUpGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  playGame = false;
  startOver.appendChild(p);
}
function newGame() {
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
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
