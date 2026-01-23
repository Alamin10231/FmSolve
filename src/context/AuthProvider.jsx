import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------------------------- */
  /* Listen to Firebase Auth State       */
  /* ---------------------------------- */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  /* ---------------------------------- */
  /* Signup                             */
  /* ---------------------------------- */
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (credential) => {
        try {
          const token = await credential.user.getIdToken();
          console.log("[Auth] ID token (signup):", token);
        } catch (err) {
          console.warn("[Auth] Failed to retrieve ID token after signup", err);
        }
        return credential;
      })
      .finally(() => setLoading(false));
  };

  /* ---------------------------------- */
  /* Login                              */
  /* ---------------------------------- */
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (credential) => {
        try {
          const token = await credential.user.getIdToken();
          console.log("[Auth] ID token (login):", token);
        } catch (err) {
          console.warn("[Auth] Failed to retrieve ID token after login", err);
        }
        return credential;
      })
      .finally(() => setLoading(false));
  };

  /* ---------------------------------- */
  /* Logout                             */
  /* ---------------------------------- */
  const logout = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth).finally(() => setLoading(false));
  };

  /* ---------------------------------- */
  /* Forgot Password                    */
  /* ---------------------------------- */
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  /* ---------------------------------- */
  /* Context Value                      */
  /* ---------------------------------- */
  const authInfo = {
    user,
    loading,
    signup,
    login,
    logout,
    forgetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
