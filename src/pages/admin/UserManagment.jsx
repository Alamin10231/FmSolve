import React from "react";
import { FsIdDetail } from "@/pages/pagecomponents/Admin/FsIdDetail";

const UserManagment = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900 sm:p-8">
      <FsIdDetail user={{ name: "User Management" }} isModal={false} />
    </div>
  );
};

export default UserManagment;
