import { signup } from "../../apis/services/auth.service";

const lsignupForm = document.getElementById("signup-form");
const usernameInput = document.getElementById("inputEnvelope");
const passwordInput = document.getElementById("inputPassword");

lsignupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let usernameValue = usernameInput.value;
  let passwordValue = passwordInput.value;
  // console.log(usernameValue);
  // console.log(passwordValue);
  signup({
    username: usernameValue,
    password: passwordValue,
  });
});
