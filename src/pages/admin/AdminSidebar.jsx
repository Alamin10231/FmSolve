import React from "react";
import { NavLink } from "react-router-dom";
import { LineChart, Shield, LogOut } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";

import logoSrc from "@/assets/images/FmSolve.png";

// Sidebar icons (semantic names)
import dashboardIcon from "@/assets/icons/ic_round-dashboard.svg";
import usersIcon from "@/assets/icons/gridicons_user-add.svg";
import paymentIcon from "@/assets/icons/Vector (4).svg";
import reportIcon from "@/assets/icons/tabler_report.svg";
import knowledgeIcon from "@/assets/icons/carbon_ibm-watson-knowledge-studio.svg";
import fmsolveIdIcon from "@/assets/icons/hugeicons_id.svg";
import analyticsIcon from "@/assets/icons/tdesign_chart-analytics.svg";
import securityIcon from "@/assets/icons/ic_baseline-security.svg";
import themeIcon from "@/assets/icons/material-symbols-light_light-mode.svg";

const AdminSidebar = () => {
  const { theme, toggleTheme } = useTheme();

  const mainMenu = [
    { label: "Dashboard", icon: dashboardIcon, to: "/admin/dashboard" },
    { label: "User Management", icon: usersIcon, to: "/admin/usermanagment" },
    { label: "Payment M.", icon: paymentIcon, to: "/admin/credits" },
    { label: "Knowledge Base", icon: knowledgeIcon, to: "/admin/knowledgeBase" },
    { label: "Report Manage.", icon: reportIcon, to: "/admin/reports" },
    { label: "FM Solve ID", icon: fmsolveIdIcon, to: "/admin/fmsolveid" },
  ];

  const secondaryMenu = [
    { label: "Analytics", icon: analyticsIcon, to: "/admin/analystics" },
    { label: "Security", icon: securityIcon, to: "/admin/security" },
  ];

  const MenuItem = ({ to, label, icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm ${
          isActive
            ? "bg-white text-slate-900"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      <span className="flex items-center justify-center w-5 h-5">
        <img src={icon} alt={label} className="w-5 h-5" />
      </span>
      <span>{label}</span>
    </NavLink>
  );

  return (
    <aside className="w-64 min-h-screen bg-[#0b1220] text-white flex flex-col justify-between p-4">
      {/* Top */}
      <div className="space-y-6">
        <div className="flex items-center h-12">
          <img src={logoSrc} alt="FmSolve" className="h-8" />
        </div>

        <nav className="space-y-2">
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
        <nav className="space-y-2">
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
        <button className="flex items-center gap-3 px-3 py-2 text-sm rounded-md text-slate-300 hover:text-white hover:bg-white/10">
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
