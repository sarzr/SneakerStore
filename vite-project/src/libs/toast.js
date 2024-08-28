import Toastify from "toastify-js";

export const toast = (text, mode = "error") => {
  Toastify({
    text,
    duration: 1000,
    close: true,
    style: {
      background: mode === "success" ? "green" : "red",
      // background: "#F9695A",
      borderRadius: "5px",
      fontWeight: "500",
      width: "100%",
    },
  }).showToast();
};
