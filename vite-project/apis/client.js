import axios from "axios";

export const httpClient = () => {
  return axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000,
  });
};
