import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./routes/Router.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
// import { ThemeProvider } from "./context/ThemeContext";
import GlobalLoader from "./components/Loading/GlobalLoader";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <GlobalLoader />
        <Router></Router>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
