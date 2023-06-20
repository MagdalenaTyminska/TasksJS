const divBoxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const info = document.createElement("span");
let counterValue = info.textContent;
counterValue = 0;
const controls = document.querySelector("#controls");
controls.append(info);
const gap = 10;
controls.setAttribute("style", "margin-bottom:" + gap + "px");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  let size = 30;
  let inputValue = input.value;

  if (inputValue > 100) {
    info.textContent = "Maximum value is 100.";
    return;
  } else if (inputValue === "") {
    info.textContent = "No boxes to create.";
    return;
  } else {
    for (let i = 0; i < inputValue; i++) {
      const box = document.createElement("div");
      divBoxes.append(box);
      box.style.height = size + "px";
      box.style.width = size + "px";
      box.style.backgroundColor = `${getRandomHexColor()}`;
      box.style.marginBottom = gap + "px";
      size += 10;
      counterValue += 1;
      info.textContent = `You've created ${counterValue} square(s)`;
    }
  }
};

const destroyBoxes = () => {
  if (input.value === "") {
    info.textContent = `No boxes to destroy.`;
  }
  info.textContent = `NO! You've destroyed them:(`;
  divBoxes.innerHTML = "";
  input.value = "";
  counterValue = 0;
};

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

// lub

// const divBoxes = document.querySelector("#boxes");
// const buttonCreate = document.querySelector("[data-create]");
// const buttonDestroy = document.querySelector("[data-destroy]");
// const input = document.querySelector("input");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBoxes = () => {
//   divBoxes.innerHTML = "";
//   let size = 30;
//   let inputValue = input.value;

//   if (inputValue > 100) {
//     alert("Maximum value is 100.");
//     return;
//   } else if (inputValue === "") {
//     alert("No boxes to create.");
//     return;
//   } else {
//     for (let i = 0; i < inputValue; i++) {
//       const box = document.createElement("div");
//       divBoxes.append(box);
//       box.style.height = size + "px";
//       box.style.width = size + "px";
//       box.style.backgroundColor = `${getRandomHexColor()}`;
//       size += 10;
//     }
//   }
// };

// const destroyBoxes = () => {
//   if (divBoxes.innerHTML === "") {
//     alert("No boxes to destroy.");
//   }
//   divBoxes.innerHTML = "";
// };

// buttonCreate.addEventListener("click", createBoxes);
// buttonDestroy.addEventListener("click", destroyBoxes);
