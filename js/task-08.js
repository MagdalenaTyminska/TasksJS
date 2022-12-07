const form = document.querySelector(".login-form");

function handleLogin(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Uzupełnij wszystkie pola formularza!");
  }

  const userData = { email: email.value, password: password.value };
  console.log(userData);
  event.currentTarget.reset();
}

form.addEventListener("submit", handleLogin);
