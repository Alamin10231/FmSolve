import { publicAxios } from "@/api/axios";

// Admin dashboard brief metrics
export const getAdminBrief = async () => {
  const res = await publicAxios.get("/superadmin/brief/");
  return res.data;
};
export const getAdminGraphData = async (params = {}) => {
  // Use axios params config so days and other filters are applied
  const res = await publicAxios.get("superadmin/graph/", { params });
  return res.data;
};
export const getAdminFsidStats = async () => {
  const res = await publicAxios.get("superadmin/fsviewViaUser/", {
    params: { uid: "YIJef8jW2WQ1uiIS5tagKjtQM372" },
  });
  return res.data;
};
