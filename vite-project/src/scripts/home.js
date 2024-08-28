import { getSneakers } from "../../apis/services/sneaker.service";
import { getUser } from "../../apis/services/user.service";
import { errorHandler } from "../libs/error-handler";

const productsEl = document.getElementById("products");

async function get() {
  try {
    await getUser();
  } catch (error) {
    // console.log(error);
    errorHandler(error);
  }
}

get();

async function getProducts() {
  try {
    const sneakersResponse = await getSneakers({ page: 1, limit: 6 });

    console.log(sneakersResponse);

    const sneakers = sneakersResponse.data;

    sneakers.forEach((sneaker) => {
      const product = document.createElement("div");
      product.innerHTML = `
        <img class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-3xl" src="${sneaker.imageURL}" alt="${sneaker.name}" />
        <div class="mt-3">
          <h3 class="text-[20px] font-bold text-[#152536] font-Inter">
            ${sneaker.name}
          </h3>
          <p class="text-[16px] font-semibold text-[#152536] font-Inter">
            $ ${sneaker.price}
          </p>
        </div>
      `;
      productsEl.append(product);
    });
  } catch (error) {
    errorHandler(error);
  }
}

getProducts();
