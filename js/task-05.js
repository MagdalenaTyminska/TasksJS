const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const update = (e) => {
  nameOutput.innerHTML = e.target.value;
  if (!e.target.value) {
    nameOutput.innerHTML = "Anonymous";
  }
};

nameInput.addEventListener("input", update);
