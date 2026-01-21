import axios from "axios";

/* ---------------------------------- */
/* Base URL                           */
/* ---------------------------------- */
export const baseUrl =
  import.meta.env.VITE_API_BASE_URL ??
  import.meta.env.VITE_API_URL ??
  "http://localhost:3001";

/* ---------------------------------- */
/* Base Axios Config                  */
/* ---------------------------------- */
const baseConfig = {
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

/* ---------------------------------- */
/* Axios Instances                    */
/* ---------------------------------- */
export const publicAxios = axios.create(baseConfig);
export const userAxios = axios.create(baseConfig);

/* ---------------------------------- */
/* Attach Auth + Lang                 */
/* ---------------------------------- */
const attachAuthToken = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token =
        localStorage.getItem("accessToken") ?? localStorage.getItem("token");

      const lang = (localStorage.getItem("app_lang") || "EN").toLowerCase();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      config.params = { ...(config.params || {}), lang };
      return config;
    },
    (error) => Promise.reject(error),
  );
};

attachAuthToken(userAxios);

/* ---------------------------------- */
/* Normalize Error                    */
/* ---------------------------------- */
const normalizeError = (error) => {
  const status = error?.response?.status;
  const data = error?.response?.data;

  if (status === 401 || status === 403) {
    localStorage.removeItem("token");
    localStorage.removeItem("accessToken");

    const role =
      localStorage.getItem("role") ?? localStorage.getItem("user_role");

    window.location.href = role === "admin" ? "/admin/login" : "/login";
  }

  return Promise.reject({
    status,
    message: data?.message || data?.error || error?.message || "Request failed",
    data,
    raw: error,
  });
};

/* ---------------------------------- */
/* Response Interceptors              */
/* ---------------------------------- */
publicAxios.interceptors.response.use((res) => res, normalizeError);

userAxios.interceptors.response.use((res) => res, normalizeError);

/* ---------------------------------- */
/* Default export (public)            */
/* ---------------------------------- */
export default publicAxios;
