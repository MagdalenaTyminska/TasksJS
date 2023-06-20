const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const incrementButton = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrementButton = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

buttonPlus.addEventListener("click", incrementButton);
buttonMinus.addEventListener("click", decrementButton);
