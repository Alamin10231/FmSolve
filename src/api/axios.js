// import axios from "axios";

// /* ---------------------------------- */
// /* Base URL                           */
// /* ---------------------------------- */
// export const baseUrl =
//   import.meta.env.VITE_API_BASE_URL ??
//   import.meta.env.VITE_API_URL ??
//   "http://localhost:3001";

// /* ---------------------------------- */
// /* Base Axios Config                  */
// /* ---------------------------------- */
// const baseConfig = {
//   baseURL: baseUrl,
//   timeout: 30000,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// };

// /* ---------------------------------- */
// /* Axios Instances                    */
// /* ---------------------------------- */
// export const publicAxios = axios.create(baseConfig);
// export const userAxios = axios.create(baseConfig);

// /* ---------------------------------- */
// /* Attach Auth + Lang                 */
// /* ---------------------------------- */
// const attachAuthToken = (instance) => {
//   instance.interceptors.request.use(
//     (config) => {
//       const token =
//         localStorage.getItem("accessToken") ?? localStorage.getItem("token");

//       const lang = (localStorage.getItem("app_lang") || "EN").toLowerCase();

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }

//       config.params = { ...(config.params || {}), lang };
//       return config;
//     },
//     (error) => Promise.reject(error),
//   );
// };

// attachAuthToken(userAxios);

// /* ---------------------------------- */
// /* Normalize Error                    */
// /* ---------------------------------- */
// const normalizeError = (error) => {
//   const status = error?.response?.status;
//   const data = error?.response?.data;

//   if (status === 401 || status === 403) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("accessToken");

//     const role =
//       localStorage.getItem("role") ?? localStorage.getItem("user_role");

//     window.location.href = role === "admin" ? "/admin/login" : "/login";
//   }

//   return Promise.reject({
//     status,
//     message: data?.message || data?.error || error?.message || "Request failed",
//     data,
//     raw: error,
//   });
// };

// /* ---------------------------------- */
// /* Response Interceptors              */
// /* ---------------------------------- */
// publicAxios.interceptors.response.use((res) => res, normalizeError);

// userAxios.interceptors.response.use((res) => res, normalizeError);

// /* ---------------------------------- */
// /* Default export (public)            */
// /* ---------------------------------- */
// export default publicAxios;
import axios from "axios";
import { getAuth } from "firebase/auth";

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
  withCredentials: true,
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
/* Firebase Token Helper              */
/* ---------------------------------- */
const getFirebaseToken = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) return null;

  // Automatically refreshes if expired
  return await user.getIdToken();
};

/* ---------------------------------- */
/* Attach Auth + Lang                 */
/* ---------------------------------- */
const attachAuthToken = (instance) => {
  instance.interceptors.request.use(
    async (config) => {
      config.headers = config.headers || {};
      const token = await getFirebaseToken();
      const lang = (localStorage.getItem("app_lang") || "EN").toLowerCase();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      config.params = {
        ...(config.params || {}),
        lang,
      };

      return config;
    },
    (error) => Promise.reject(error),
  );
};

attachAuthToken(userAxios);

/* ---------------------------------- */
/* Attach Lang for Public             */
/* ---------------------------------- */
publicAxios.interceptors.request.use(
  (config) => {
    const lang = (localStorage.getItem("app_lang") || "EN").toLowerCase();
    config.params = {
      ...(config.params || {}),
      lang,
    };
    return config;
  },
  (error) => Promise.reject(error),
);

/* ---------------------------------- */
/* Normalize Error                    */
/* ---------------------------------- */
const normalizeError = (error) => {
  const status = error?.response?.status;
  const data = error?.response?.data;

  if (status === 401 || status === 403) {
    // Firebase handles auth state; just clear app data
    localStorage.removeItem("role");
    localStorage.removeItem("user_role");

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
