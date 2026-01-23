import apiDefault, { userAxios } from "../api/axios";

/**
 * Report Service: simple CRUD network calls.
 * Components should import hooks, not call these directly.
 */

/** Get list of reports (supports params like page, q) */
export const getReports = async (params = {}) => {
  const res = await userAxios.get("/reports/", { params });
  return res.data;
};

/** Get single report by id */
export const getReport = async (id) => {
  const res = await userAxios.get(`/reports/${id}`);
  return res.data;
};

/** Create new report */
export const createReport = async (data) => {
  const res = await userAxios.post("/reports/", data);
  return res.data;
};

/** Update report by id */
export const updateReport = async (id, data) => {
  const res = await userAxios.patch(`/reports/${id}`, data);
  return res.data;
};

/** Delete report by id */
export const deleteReport = async (id) => {
  await userAxios.delete(`/reports/${id}`);
};
