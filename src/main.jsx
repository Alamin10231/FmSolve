import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider } from "react-router/dom";
// import { Router } from './routes/Router.jsx';
import { BrowserRouter, Route } from "react-router";
import { Router } from "./routes/Router.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter Router={Router}></BrowserRouter> */}

    <AuthProvider>
      <Router></Router>
    </AuthProvider>
  </StrictMode>
);
