import React from "react";
import { FsIdDetail } from "@/pages/pagecomponents/Admin/FsIdDetail";

const UserManagment = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <FsIdDetail user={{ name: "User Management" }} isModal={false} />
    </div>
  );
};

export default UserManagment;
