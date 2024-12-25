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
