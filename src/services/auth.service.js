import { auth } from "@/firebase/firebase.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const TOKEN_KEY = "access_token";

async function getIdToken() {
  const user = auth.currentUser;
  if (!user) return null;
  return user.getIdToken();
}

async function saveTokenFromFirebase() {
  const token = await getIdToken();
  if (token) localStorage.setItem(TOKEN_KEY, token);
  return token;
}

function clearSavedToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export const authService = {
  loginWithEmail: async ({ email, password }) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    await saveTokenFromFirebase();
    return cred.user;
  },
  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);
    await saveTokenFromFirebase();
    return cred.user;
  },
  me: async () => {
    // Resolve current user or wait for auth state
    if (auth.currentUser) return auth.currentUser;
    return new Promise((resolve) => {
      const unsub = onAuthStateChanged(auth, (user) => {
        unsub();
        resolve(user ?? null);
      });
    });
  },
  getToken: getIdToken,
  logout: async () => {
    await signOut(auth);
    clearSavedToken();
    return true;
  },
};

export default authService;
