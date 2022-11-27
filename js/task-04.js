const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const incrementBtn = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrementBtn = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnMinus.addEventListener("click", decrementBtn);
btnPlus.addEventListener("click", incrementBtn);
