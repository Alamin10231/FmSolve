import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";

// import { Authcontext } from "../context/AuthProvider";
// import { auth } from "../firebase";

import { MdDashboard } from "react-icons/md";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";

const menuItems = [
  {
    label: "Services",
    children: [
      { name: "Web Development", path: "/services/web" },
      { name: "App Development", path: "/services/app" },
      { name: "UI/UX Design", path: "/services/ui-ux" },
      { name: "AI Solutions", path: "/services/ai" },
      { name: "Cloud Services", path: "/services/cloud" },
      { name: "Consulting", path: "/services/consulting" },
    ],
  },
  {
    label: "Ask Sam",
    children: [
      { name: "Finance Help", path: "/ask-sam/finance" },
      { name: "Business Help", path: "/ask-sam/business" },
    ],
  },
];

const Topbar = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };

  if (loading) return null;

  return (
    <nav className="w-full bg-[#0b0f1a] border-b border-purple-600">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8" />
          
          </Link>

          {/* Menu */}
          <ul className="flex items-center gap-6 text-sm text-gray-300">

            {/* Dynamic dropdown menus */}
            {menuItems.map((menu) => (
              <li key={menu.label} className="relative group">
                <div className="flex items-center gap-1 cursor-pointer hover:text-white">
                  {menu.label}
                  <FaChevronDown size={12} />
                </div>

                {/* Dropdown */}
                <ul className="absolute left-0 top-full mt-2 w-56 
                  bg-[#11162a] border border-purple-600 rounded shadow-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200">

                  {menu.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        to={child.path}
                        className="block px-4 py-2 hover:bg-purple-600 hover:text-white"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li>
              <Link to="/meet-sam" className="hover:text-white">
                Meet Sam
              </Link>
            </li>

            <li>
              <Link to="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>

            {/* Dashboard */}
            {user && (
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300"
                >
                  <MdDashboard size={18} />
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {!user ? (
              <Link
                to="/login"
                className="flex items-center gap-1 bg-purple-600 text-white px-4 py-1.5 rounded"
              >
                <FiLogIn />
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-red-600 text-white px-4 py-1.5 rounded"
              >
                <FiLogOut />
                Logout
              </button>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Topbar;
