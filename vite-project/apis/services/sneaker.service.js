import { httpClient } from "../client";
import { urls } from "../urls";

export async function getSneakers(params) {
  const response = await httpClient().get(urls.sneaker.list, {
    params: {
      page: params.page,
      limit: params.limit,
    },
  });
  // console.log(response);
  // console.log(response.data);
  return response.data;
}
