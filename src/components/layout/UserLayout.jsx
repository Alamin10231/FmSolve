import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
import UserNavbar from "./UserNavbar";
// import { Footer } from "./Footer";

export const UserLayout = () => {
  return (
    <div>
    <UserNavbar></UserNavbar>

     
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
