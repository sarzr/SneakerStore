import { httpClient } from "../client";
import { urls } from "../urls";

export async function getSneakers(params) {
  const response = await httpClient().get(urls.sneaker.list, {
    params: {
      page: params.page,
      limit: params.limit,
      brands: params.brands,
    },
  });
  // console.log(response);
  // console.log(response.data);
  return response.data;
}

export async function getSneakerBrands() {
  const response = await httpClient().get(urls.sneaker.sneakerBrands);
  return response.data;
}

export async function getSneakerItems() {
  const response = await httpClient().get(urls.sneaker.sneakerItems);
  return response.data;
}
