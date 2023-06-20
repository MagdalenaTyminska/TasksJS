const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    nameOutput.innerHTML = "Anonymous";
  }
});

// lub

// const update = (event) => {
//   nameOutput.innerHTML = event.target.value;
//   if (!event.target.value) {
//     nameOutput.innerHTML = "Anonymous";
//   }
// };

// nameInput.addEventListener("input", update);
