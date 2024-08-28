import { httpClient } from "../client";
import { urls } from "../urls";

export async function getUser() {
  const response = await httpClient().get(urls.user);
  // console.log(response);
  return response.data;
}
