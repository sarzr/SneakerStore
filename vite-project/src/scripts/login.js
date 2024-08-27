import { login } from "../../apis/services/auth.service";

const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("inputEnvelope");
const passwordInput = document.getElementById("inputPassword");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let usernameValue = usernameInput.value;
  let passwordValue = passwordInput.value;
  // console.log(usernameValue);
  // console.log(passwordValue);
  login({
    username: usernameValue,
    password: passwordValue,
  });
});
