import { useAdminFsidById } from "@/features/admin/query";
import { useEffect } from "react"; // useEffect ইম্পোর্ট করুন
import { useNavigate, useParams } from "react-router";
import { FsIdDetail } from "../pagecomponents/Admin/FsIdDetail";

export const FsIdDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useAdminFsidById(id);

  // ১. সরাসরি দেখার জন্য (সবসময় রেন্ডারের সময় লগ হবে)
  console.log("Current ID from URL:", id);
  console.log("API Response Data:", data);

  // ২. শুধুমাত্র ডেটা পরিবর্তন হলে দেখার জন্য (Clean way)
  useEffect(() => {
    if (data) {
      console.log("Data received successfully:", data);
    }
    if (isError) {
      console.error("API Error occurred fetching data for ID:", id);
    }
  }, [data, isError, id]);

  if (isLoading) return <p className="p-10 text-center">Loading...</p>;
  if (isError) return <p className="p-10 text-center text-red-500">Error! Check console.</p>;

  const user = {
    name: data?.[0]?.user_name || "User Details", 
    uid: id
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-black sm:p-8">
      <FsIdDetail
        user={user}
        fsidData={data} 
        isModal={false}
        onClose={() => navigate(-1)}
      />
    </div>
  );
};