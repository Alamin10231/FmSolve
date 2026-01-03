import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import Topbar from "./Topbar";

export const LandingLayout = () => {
  return (
    <div className="">
      <Topbar></Topbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
