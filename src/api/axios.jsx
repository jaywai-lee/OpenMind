import Axios from "axios";

const api = Axios.create({
  baseURL: "https://openmind-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = (url, config) =>
  api.get(url, config).then((res) => res.data);

export const post = (url, data, config) =>
  api.post(url, data, config).then((res) => res.data);
