import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.nomics.com/v1",
});
