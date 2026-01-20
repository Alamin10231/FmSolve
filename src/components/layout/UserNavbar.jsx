import { AuthContext } from "@/context/AuthProvider";
import { User } from "lucide-react";
import React, { useContext, useState } from "react";
import { FiGlobe, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
const UserNavbar = () => {
  const [open, setOpen] = useState(false);
  const user = useContext(AuthContext);
  const displayName = user?.displayName || user?.email || "User";
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
         <Link to="/" className="flex items-center gap-2 ">
                     <img src={logo} alt="logo" className="h-10 bg-transparent " />
                   </Link>
        </div>

        {/* Right: Actions */}
        <div className="relative flex items-center gap-4">
          {/* Website Button */}
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md text-gray-700 hover:bg-gray-100">
            <FiGlobe />
            Website
          </button>

          {/* Profile */}
          <div className="relative">
            <img
              src={user?.photoURL || "/assets/images/user-avatar.png"}
              alt={displayName}
              className="border rounded-full cursor-pointer w-9 h-9"
              onClick={() => setOpen(!open)}
            />

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 z-50 w-64 mt-3 bg-white border border-gray-200 rounded-md shadow-lg">
                {/* User Info */}
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-semibold text-gray-900">
                    {displayName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user?.email || "No email provided"}
                  </p>
                </div>

                {/* Menu */}
                <div className="py-1">
                  <Link to="/dashboard">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <FiUser className="mr-2" /> Profile
                    </button>
                  </Link>

                  <Link to="/setting">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <FiSettings className="mr-2" /> Settings
                    </button>
                  </Link>

                  <Link to="/login">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <FiLogOut className="mr-2" /> Log Out
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserNavbar;
