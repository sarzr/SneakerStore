import "./style.css";

import Swiper from "swiper";
import "swiper/css";

const Next1 = document.getElementById("Next1");
const Next2 = document.getElementById("Next2");
const Next3 = document.getElementById("Next3");

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

Next1.addEventListener("click", () => swiper.slideNext());
Next2.addEventListener("click", () => swiper.slideNext());
