import { httpClient } from "../client";
import { urls } from "../urls";

export async function login(data) {
  const response = await httpClient().post(urls.auth.login, data);
  console.log(response);
  console.log(response.data);

  return response.data;
}

export async function signup(data) {
  const response = await httpClient().post(urls.auth.signup, data);
  console.log(response);
  console.log(response.data);

  return response.data;
}
