import {
  getSneakerBrands,
  getSneakers,
} from "../../apis/services/sneaker.service";
import { getUser } from "../../apis/services/user.service";
import { errorHandler } from "../libs/error-handler";

const productsEl = document.getElementById("products");
const productBrands = document.getElementById("products-brand");
const username = document.getElementById("username");
const greeting = document.getElementById("greeting");
const pages = document.getElementById("page");
const nextPage = document.getElementById("next-page");
const prevPage = document.getElementById("prev-page");
let totalPages;
let curPage = 1;

async function get() {
  try {
    const user = await getUser();
    // console.log(user);
    username.innerText = user.username;
  } catch (error) {
    // console.log(error);
    errorHandler(error);
  }
}

get();

function updateGreeting() {
  const hour = new Date().getHours();

  let greetingTxt;

  if (hour >= 6 && hour < 12) {
    greetingTxt = "Good Morning 👋";
  } else if (hour >= 12 && hour < 17) {
    greetingTxt = "Good Afternoon 👋";
  } else if (hour >= 17 && hour < 20) {
    greetingTxt = "Good Evening 👋";
  } else {
    greetingTxt = "Good Night 👋";
  }
  greeting.innerText = greetingTxt;
}

updateGreeting();

async function getProducts(brand = null, page = 1) {
  try {
    const params = { page, limit: 6 };
    if (brand) {
      params.brands = brand;
    }

    const sneakersResponse = await getSneakers(params);

    console.log(sneakersResponse);

    const sneakers = sneakersResponse.data;

    totalPages = sneakersResponse.totalPages;

    productsEl.innerHTML = "";

    sneakers.forEach((sneaker) => {
      const product = document.createElement("div");
      product.innerHTML = `
        <img class="bg-[#F3F3F3] w-[182px] h-[182px] rounded-3xl" src="${sneaker.imageURL}" alt="${sneaker.name}" />
        <div class="mt-3">
          <h3 class="text-[20px] font-bold text-[#152536] font-Inter truncate">
            ${sneaker.name}
          </h3>
          <p class="text-[16px] font-semibold text-[#152536] font-Inter">
            $ ${sneaker.price}
          </p>
        </div>
      `;
      productsEl.append(product);
    });
    pagination(page, totalPages);
  } catch (error) {
    errorHandler(error);
  }
}

getProducts();

function brandClicked(selectedBrandEl) {
  const allBrandEls = productBrands.querySelectorAll("div");
  allBrandEls.forEach((brandEl) => {
    brandEl.classList.remove("bg-[#343A40]", "text-white");
    brandEl.classList.add("border-2", "border-[#343A40]", "text-[#343A40]");
  });

  selectedBrandEl.classList.add(
    "bg-[#343A40]",
    "text-white",
    "py-[4px]",
    "px-[18px]"
  );
  selectedBrandEl.classList.remove(
    "border-2",
    "border-[#343A40]",
    "text-[#343A40]"
  );
}

async function loadBrands() {
  try {
    const brands = await getSneakerBrands();
    // console.log(brands);

    const allBrandsEl = document.createElement("div");
    allBrandsEl.className =
      "bg-[#343A40] rounded-3xl text-white w-full text-[17px] py-[4px] px-[18px] flex justify-center items-center cursor-pointer";
    allBrandsEl.innerHTML = "All";
    allBrandsEl.addEventListener("click", () => {
      getProducts();
      brandClicked(allBrandsEl);
    });
    productBrands.append(allBrandsEl);

    brands.forEach((brand) => {
      const brandEl = document.createElement("div");
      brandEl.className =
        "py-[3px] px-[10px] w-full border-2 border-[#343A40] rounded-3xl flex justify-center items-center";
      brandEl.innerHTML = brand;
      brandEl.addEventListener("click", () => {
        getProducts(brand);
        brandClicked(brandEl);
      });
      productBrands.append(brandEl);
    });
  } catch (error) {
    errorHandler(error);
  }
}
loadBrands();

function pagination(page, totalPages) {
  pages.innerHTML = "";
  const maxPage = 3;

  let startPage = Math.floor((page - 1) / maxPage) * maxPage + 1;
  let endPage = Math.min(startPage + maxPage - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    const pageSpan = document.createElement("span");
    pageSpan.innerText = i;
    pageSpan.className = `px-3 py-1 ${
      i === page ? "bg-black text-white active" : "bg-gray-200"
    } rounded-md`;
    pageSpan.addEventListener("click", () => changePage(i));
    pages.append(pageSpan);
    prevPage.disabled = page <= 1 ? true : false;
    nextPage.disabled = page >= totalPages ? true : false;
  }
}
function changePage(page) {
  getProducts(null, page);
  pagination(page, totalPages);
}

prevPage.addEventListener("click", () => {
  if (curPage > 1) {
    curPage--;
    changePage(curPage);
  }
});
nextPage.addEventListener("click", () => {
  if (curPage < totalPages) {
    curPage++;
    changePage(curPage);
  }
});
