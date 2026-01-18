import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {  LogOut, Menu, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";

import logoSrc from "@/assets/images/FmSolve.png";

// Sidebar icons (semantic names)
import dashboardIcon from "@/assets/icons/ic_round-dashboard.svg";
import usersIcon from "@/assets/icons/gridicons_user-add.svg";
import paymentIcon from "@/assets/icons/Vector (4).svg";
import fmsolveIdIcon from "@/assets/icons/hugeicons_id.svg";
import analyticsIcon from "@/assets/icons/tdesign_chart-analytics.svg";
import securityIcon from "@/assets/icons/ic_baseline-security.svg";
import profileIcon from "@/assets/icons/gridicons_user-add.svg";
import themeIcon from "@/assets/icons/material-symbols-light_light-mode.svg";

const AdminSidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainMenu = [
    { label: "Dashboard", icon: dashboardIcon, to: "/admin/dashboard" },
    { label: "User Management", icon: usersIcon, to: "/admin/usermanagment" },
    { label: "Payment M.", icon: paymentIcon, to: "/admin/payment" },
    { label: "FM Solve ID", icon: fmsolveIdIcon, to: "/admin/fmsolveid" },
  ];

  const secondaryMenu = [
    { label: "Profile", icon: profileIcon, to: "/admin/profile" },
    { label: "Analytics", icon: analyticsIcon, to: "/admin/analystics" },
    { label: "Security", icon: securityIcon, to: "/admin/security" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  const MenuItem = ({ to, label, icon }) => (
    <NavLink
      to={to}
      onClick={() => setIsMobileMenuOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm ${
          isActive
            ? "bg-white text-slate-900"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className="flex items-center justify-center w-5 h-5">
            <img
              src={icon}
              alt={label}
              className={`w-5 h-5 filter ${
                isActive ? "brightness-0" : "text-white"
              }`}
            />
          </span>
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0b1220] text-white rounded-md"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 h-screen bg-[#0b1220] text-white flex flex-col justify-between p-4 overflow-y-auto z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
      {/* Top */}
      <div className="space-y-6">
        <div className="flex items-center h-12">
          <img src={logoSrc} alt="FmSolve" className="h-8" />
        </div>

        <nav className={`space-y-2 `}>
          {mainMenu.map((item) => (
            <MenuItem
              key={item.label}
              to={item.to}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className="space-y-4">
        <nav className="space-y-2 ">
          {secondaryMenu.map((item) => (
            <MenuItem
              key={item.label}
              to={item.to}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>

        {/* Theme switch */}
        <div className="flex items-center justify-between px-3 py-2 rounded-md">
          <span className="flex items-center gap-2 text-sm text-slate-300">
            <img src={themeIcon} alt="Theme" className="w-5 h-5" />
            Theme
          </span>
          <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 text-sm rounded-md text-slate-300 hover:text-white hover:bg-white/10 w-full"
        >
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
