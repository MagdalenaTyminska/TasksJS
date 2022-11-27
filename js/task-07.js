const fontSizeCtrl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

textSize.style.fontSize = `${fontSizeCtrl.value}px`;

fontSizeCtrl.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  textSize.style.fontSize = `${inputValue}px`;
});
