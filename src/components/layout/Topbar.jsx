import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import manimg from "../../assets/images/image 18.png";
import {
  MdDashboard,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

import logo from "../../assets/logo.png";
// import logo from "../../assets/images/FmSolve.png"
import { AuthContext } from "../../context/AuthProvider";
import { Button } from "../ui/button";
import { useTheme } from "@/context/ThemeContext";

const menuItems = [
  {
    label: "Services",
    children: [
      { name: "Operational Delivery", path: "/services/operational-delivery" },
      { name: "Commercial Strategy", path: "/services/commercial-strategy" },
      { name: "Supply Chain", path: "/services/supply-chain" },
      { name: "Operational HR", path: "/services/operational-hr" },
      { name: "Performance & KPIs", path: "/services/performance-kpis" },
      { name: "Data & Technology", path: "/services/data-technology" },
      { name: "Helpdesk", path: "/services/helpdesk" },
      { name: "Service Delivery", path: "/services/service-delivery" },
      { name: "Client Service", path: "/services/client-service" },
    ],
  },
  {
    label: "Ask Sam",
    children: [
      { name: "Ask Sam", path: "/ask-sam" },
      { name: "FM Answers", path: "/ask-sam/fm-answers" },
      { name: "Stability Reports", path: "/ask-sam/stability-reports" },
    ],
  },
];

const Topbar = () => {
  const { theme, toggleTheme, setServiceIndex } = useTheme();
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const displayName = user?.displayName || user?.email || "User";
  const initial = displayName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.error("Logout failed", e);
    }
  };

  const nameToIndex = {
    "Operational Delivery": 0,
    "Commercial Strategy": 1,
    "Supply Chain": 2,
    "Operational HR": 3,
    "Performance & KPIs": 4,
    "Data & Technology": 5,
    Helpdesk: 6,
    "Service Delivery": 7,
    "Client Service": 8,
  };

  return (
    <nav className="w-full bg-white dark:bg-[#0b0f1a] border-b border-gray-200 dark:border-gray-600 fixed top-0 z-50 transition-colors duration-300 ">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 ">
          <Link to="/" className="flex items-center gap-2 ">
            <img src={logo} alt="logo" className="h-10 bg-transparent " />
          </Link>

          <ul className="items-center hidden gap-6 text-gray-600 lg:flex dark:text-gray-300 text-md">
            {menuItems.map((menu) => (
              <li key={menu.label} className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 dark:hover:text-white">
                  <div className="flex items-center">
                    {
                      menu.label === "Ask Sam" ? (
                        
                        <img className="mr-2 w-9 h-9" src={manimg} alt="" />
                      ):""
                    }
                  </div>
                  {menu.label}
                  <FaChevronDown size={12} />
                </div>
                <ul className="absolute left-0 top-full mt-2 w-56 bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {menu.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        to={child.path}
                        onClick={() => {
                          if (
                            menu.label === "Services" &&
                            child.name in nameToIndex
                          ) {
                            setServiceIndex(nameToIndex[child.name]);
                          }
                        }}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link
                to="/meet-sam"
                className="hover:text-blue-500 dark:hover:text-white"
              >
                Meet Sam
              </Link>
            </li>
            <li>
              <Link
                to="/ourstory"
                className="hover:text-blue-500 dark:hover:text-white"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-blue-500 dark:hover:text-white"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/fmnews"
                className="hover:text-blue-500 dark:hover:text-white"
              >
                FM News
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-1 text-purple-500 hover:text-purple-400"
                >
                  <MdDashboard size={18} /> Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            <div
              className="p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <MdOutlineDarkMode className="text-xl text-gray-800 dark:text-white" />
              ) : (
                <MdOutlineLightMode className="text-xl text-white" />
              )}
            </div>

            <div className="items-center hidden gap-2 sm:flex">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="text-gray-800 dark:text-white px-4 py-1.5 hover:text-blue-500"
                  >
                    Login
                  </Link>
                  <Button className="bg-blue-500 text-white px-4 py-1.5 rounded">
                    Connected
                  </Button>
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen((prev) => !prev)}
                    className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={displayName}
                        className="object-cover w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 text-sm text-white bg-blue-500 rounded-full">
                        {initial}
                      </div>
                    )}
                    <span className="text-sm text-gray-800 dark:text-gray-100 max-w-[140px] truncate">
                      {displayName}
                    </span>
                    <FaChevronDown
                      size={12}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-[#11162a] border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        My Account
                      </Link>
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          handleLogout();
                        }}
                        className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle (3-line icon) */}
            <button
              className="p-2 text-gray-800 lg:hidden dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0b0f1a] border-t border-gray-200 dark:border-gray-800 h-screen overflow-y-auto pb-20">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 dark:text-gray-300">
            {menuItems.map((menu) => (
              <li
                key={menu.label}
                className="pb-2 border-b border-gray-100 dark:border-gray-800"
              >
                <p className="mb-2 text-xs font-bold tracking-widest text-blue-500 uppercase">
                  {menu.label}
                </p>
                <div className="flex flex-col gap-2 pl-2">
                  {menu.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-1 text-sm hover:text-blue-500"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
            <li>
              <Link
                to="/meet-sam"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2"
              >
                Meet Sam
              </Link>
            </li>
            <li>
              <Link
                to="/ourstory"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/fmnews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2"
              >
                FM News
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1 py-2 text-purple-500"
                >
                  <MdDashboard size={18} /> Dashboard
                </Link>
              </li>
            )}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              {!user ? (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-center text-white bg-blue-500 rounded"
                >
                  Login
                </Link>
              ) : (
                <div>
                  <img src={user.photoURL} alt={user.displayName} />
                  <span>{user.displayName}</span>
                  <select
                    className="w-full px-3 py-2 mt-2 text-sm bg-white border rounded dark:bg-[#11162a] dark:text-white"
                    onChange={(e) => {
                      if (e.target.value === "logout") {
                        handleLogout();
                      }
                      if (e.target.value === "account") {
                        navigate("/account");
                      }
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Account Options
                    </option>
                    <option value="account">My Account</option>
                    <option value="logout">Logout</option>
                  </select>
                </div>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
