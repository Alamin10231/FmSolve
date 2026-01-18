import React from "react";
import { Outlet } from "react-router-dom";
import AdminTopbar from "@/pages/admin/AdminTopbar";
import AdminSidebar from "@/pages/admin/AdminSidebar";

export const AdminLayout = () => {
  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Sidebar */}
      <div className="border-r border-gray-200">
        <AdminSidebar />
      </div>

     
      <div className="flex flex-col flex-1 min-w-0">
        
        <div className="border-b border-gray-200">
          <AdminTopbar />
        </div>

        {/* Routed content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
