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
});```

## project3 solution

```javascript

const clock = document.getElementById('clock');
let date = new Date();

setInterval(function () {
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 500);```