// src/context/AuthProvider.jsx

import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
// import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
   
    return signOut(auth);
  };

  const forgetpassword = (email)=>{
    return sendPasswordResetEmail(auth, email);
  }
  const authInfo = {
    user,
    loading,
    signup,
    login,
    logout,
    forgetpassword
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
