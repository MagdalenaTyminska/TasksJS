const fontSizeControl = document.getElementById("font-size-control");
const textSize = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  textSize.setAttribute("style", "font-size:" + fontSizeControl.value + "px");
});

// lub

// const fontSizeControl = document.querySelector("#font-size-control");
// const textSize = document.querySelector("#text");

// fontSizeControl.addEventListener("input", (event) => {
//   const inputValue = event.currentTarget.value;
//   textSize.style.fontSize = `${inputValue}px`;
// });
