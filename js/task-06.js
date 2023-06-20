const inputLength = document.querySelector("input");

const check = () => {
  if (inputLength.value.length === 6) {
    inputLength.className = "valid";
  } else {
    inputLength.className = "invalid";
  }
};

inputLength.addEventListener("blur", check);

//lub

// const textInput = document.querySelector("#validation-input");
// const inputLength = textInput.dataset.length;

// textInput.addEventListener("blur", (event) => {
//   if (event.currentTarget.value.length == inputLength) {
//     textInput.classList.add("valid");
//     textInput.classList.remove("invalid");
//   } else {
//     textInput.classList.add("invalid");
//     textInput.classList.remove("valid");
//   }
// });
