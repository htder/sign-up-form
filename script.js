const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const errorSpan = document.querySelector(".error-message");

console.log(password, passwordConfirm);

passwordConfirm.addEventListener("input", (event) => {
  event.preventDefault();
  if (password.value === passwordConfirm.value) {
    password.classList.remove("error");
    passwordConfirm.classList.remove("error");
    errorSpan.textContent = "";
  }
})
