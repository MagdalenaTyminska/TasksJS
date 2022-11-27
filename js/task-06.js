const textInput = document.querySelector("#validation-input");
const maxInputLength = textInput.dataset.length;

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == maxInputLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
