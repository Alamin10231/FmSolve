import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import { Footer } from "./Footer";

export const UserLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  );
};
