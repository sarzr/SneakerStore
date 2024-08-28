import { signup } from "../../apis/services/auth.service";
import { errorHandler } from "../libs/error-handler";
import { toast } from "../libs/toast";

const signupForm = document.getElementById("signup-form");
// const usernameInput = document.getElementById("inputEnvelope");
// const passwordInput = document.getElementById("inputPassword");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // let usernameValue = usernameInput.value;
  // let passwordValue = passwordInput.value;
  // console.log(usernameValue);
  // console.log(passwordValue);
  const formData = new FormData(e.target);
  const usernameValue = formData.get("username");
  const passwordValue = formData.get("password");

  try {
    const response = await signup({
      username: usernameValue,
      password: passwordValue,
    });
    // console.log(response);
    // console.log(response.data);
    // console.log("Token:", response.token);
    toast("Signed in", "success");
    setSessionToken(response.token);
    setTimeout(() => {
      window.location.href = "/home";
    }, 3000);
  } catch (error) {
    // console.log(error);
    errorHandler(error);
  }
});
