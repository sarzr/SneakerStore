import { toast } from "./toast";

export const errorHandler = (error) => {
  console.log(error.response);

  const message = error.response?.data?.message;
  console.log(error.response?.data);
  console.log(error.response);

  if (typeof message === "string") {
    toast(message);
  } else if (Array.isArray(message)) {
    for (const msg of message) {
      toast(msg);
    }
  }
};
