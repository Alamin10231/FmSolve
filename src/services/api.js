import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_BASE_URL ?? import.meta.env.VITE_API_URL;
console.log("baseurl", baseURL);

export const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const lang = localStorage.getItem("app_lang") || "EN";
  config.params = { ...(config.params || {}), lang: lang.toLowerCase() };
  return config;
});

export default api;
