const iconLock = document.querySelector(".fa-lock");
const iconEnvelope = document.querySelector(".fa-envelope");
const inputEnvelope = document.getElementById("inputEnvelope");
const inputPassword = document.getElementById("inputPassword");

inputPassword.addEventListener("click", () => (iconLock.style.color = "#000"));
inputEnvelope.addEventListener(
  "click",
  () => (iconEnvelope.style.color = "#000")
);
