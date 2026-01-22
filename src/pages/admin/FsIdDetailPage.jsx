import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FsIdDetail } from "@/pages/pagecomponents/Admin/FsIdDetail";

export const FsIdDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Placeholder user info; in real app fetch by id
  const user = { id, name: "Alex Rivers" };

  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-black sm:p-8">
      <FsIdDetail
        user={user}
        isModal={false}
        onClose={() => navigate(-1)}
      />
    </div>
  );
};
