import axios from "axios";
import { baseUrl } from "@/api/axios";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const lang = (localStorage.getItem("app_lang") || "EN").toLowerCase();
  config.params = { ...(config.params || {}), lang };
  return config;
});

export default api;
