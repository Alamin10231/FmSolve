import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { AuthContext } from "@/context/AuthProvider";
import logo from "@/assets/logo.png";

// Gmail-style full-screen splash loader shown during app/auth init
export const GlobalLoader = () => {
  const { loading } = useContext(AuthContext);
  const [visible, setVisible] = useState(loading);
  const [fadingIn, setFadingIn] = useState(loading);

  useEffect(() => {
    if (loading) {
      setVisible(true);
      setFadingIn(true);
    } else {
      // Smooth fade-out before removing from DOM
      setFadingIn(false);
      const t = setTimeout(() => setVisible(false), 250);
      return () => clearTimeout(t);
    }
  }, [loading]);

  if (!visible) return null;

  return (
    <div
      className={
        `fixed inset-0 z-50 flex items-center justify-center ` +
        `${
          fadingIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ` +
        `bg-[#0b0f1a]`
      }
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <img src={logo} alt="FmSolve" className="h-10" />
        <Spinner className="text-white size-6" aria-label="Loading" />
      </div>
    </div>
  );
};

export default GlobalLoader;
