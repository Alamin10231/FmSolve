import React from "react";
import { Outlet } from "react-router-dom";
import AdminTopbar from "@/pages/admin/AdminTopbar";
import AdminSidebar from "@/pages/admin/AdminSidebar";
import { useTheme } from "@/context/ThemeContext";

export const AdminLayout = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`flex w-full h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Topbar */}
        <div className="flex-shrink-0">
          <AdminTopbar />
        </div>

        {/* Routed content */}
        <main className={`flex-1 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
