// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // optional

const firebaseConfig = {
  apiKey: "AIzaSyCbisAmACy9ZzCeJnv6fz5l0iFpgHPEhVA",
  authDomain: "fmsolve-ee6cc.firebaseapp.com",
  projectId: "fmsolve-ee6cc",
  storageBucket: "fmsolve-ee6cc.firebasestorage.app",
  messagingSenderId: "785118257198",
  appId: "1:785118257198:web:481054e96b9bff3babffbf",
  measurementId: "G-DWMX2PH74R",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth
export const auth = getAuth(app);

// (Optional) Analytics – only works on production + https
// export const analytics = getAnalytics(app);

export default app;
