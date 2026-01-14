import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
// import { Footer } from "./Footer";

export const AdminLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
};
