import { getSneakerItems } from "../../apis/services/sneaker.service";
import { errorHandler } from "../libs/error-handler";

const sneakerName = document.getElementById("sneaker-name");
const images = document.getElementById("images");
const sneakerPrice = document.getElementById("sneaker-price");
const sneakerColors = document.getElementById("sneaker-colors");
const sneakerSizes = document.getElementById("sneaker-sizes");

async function getSneaker(sneakerId) {
  try {
    const sneaker = await getSneakerItems(sneakerId);
    console.log(sneaker);

    if (sneaker && sneaker.id === parseInt(sneakerId)) {
      sneakerName.innerText = sneaker.name;
      images.innerHTML = `<img src="${sneaker.imageURL}" alt="sneaker-image" />`;
      sneakerPrice.innerText = `$${sneaker.price}.00`;

      const colors = sneaker.colors.split("|");
      sneakerColors.innerHTML = colors
        .map(
          (color) => `
        <div class="p-[20px] rounded-full" style="background-color: ${color};"></div>
      `
        )
        .join("");

      const sizes = sneaker.sizes.split("|");
      sneakerSizes.innerHTML = sizes
        .map(
          (size) => `
        <div class="border-2 border-[#717171] px-[12px] py-[9px] rounded-full">${size}</div>
      `
        )
        .join("");
    }
  } catch (error) {
    errorHandler(error);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const sneakerId = urlParams.get("id");

if (sneakerId) {
  getSneaker(sneakerId);
}
