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
export const getadminwithoutuid = async () => {
  const res = await publicAxios.get("superadmin/fmsolve/");
  return res.data;
};
export const getadminfsid = async () => {
  const res = await publicAxios.get("superadmin/fsids/");
  return res.data;
};
export const getAdminFsidStatsById = async (id) => {
  const res = await publicAxios.get("superadmin/fsviewViaUser/", {
    params: { uid: id },
  });
  return res.data;
}

export const getAdminUserList = async (uid) => {
  // Passing uid as an object property so Axios converts it to ?uid=value
  const res = await publicAxios.get("superadmin/fsviewViaUser/", { 
    params: { uid } 
  });
  return res.data;
}

