```javascript
let counter = 0;

const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
  counterDisplay.textContent = counter;
  
  if (counter > 0) {
    counterDisplay.classList.add('positive');
    counterDisplay.classList.remove('negative', 'zero');
  } else if (counter < 0) {
    counterDisplay.classList.add('negative');
    counterDisplay.classList.remove('positive', 'zero');
  } else {
    counterDisplay.classList.add('zero');
    counterDisplay.classList.remove('positive', 'negative');
  }
}

function increment() {
  counter++;
  updateDisplay();
  animateButton(incrementBtn);
}

function decrement() {
  counter--;
  updateDisplay();
  animateButton(decrementBtn);
}

function reset() {
  counter = 0;
  updateDisplay();
  animateButton(resetBtn);
}

function animateButton(button) {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 200);
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' || event.key === '+') {
    increment();
  } else if (event.key === 'ArrowDown' || event.key === '-') {
    decrement();
  } else if (event.key === 'r' || event.key === 'R' || event.key === '0') {
    reset();
  }
});

updateDisplay();
```