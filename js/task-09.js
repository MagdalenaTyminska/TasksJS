const body = document.querySelector("body");
const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");
span.textContent = "#FFFFFF";

const changeColor = () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
};

button.addEventListener("click", changeColor);

// lub

// const body = document.querySelector("body");
// const button = document.querySelector("button");
// const span = document.querySelector("span");
// span.textContent = "#FFFFFF";

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const changeColor = () => {
//   const color = getRandomHexColor();
//   span.innerHTML = color;
//   body.style.backgroundColor = color;
// };

// button.addEventListener("click", changeColor);
