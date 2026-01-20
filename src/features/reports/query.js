import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getReports,
  getReport,
  createReport,
  updateReport,
  deleteReport,
} from "../../services/report.service";

/**
 * Reports: minimal keys + hooks.
 * No try/catch in components—errors are handled globally via QueryClient.
 */
export const reportKeys = {
  list: ["reports"],
  detail: (id) => ["reports", String(id)],
};

// Queries
export const useReports = (params = {}) =>
  useQuery({ queryKey: reportKeys.list, queryFn: () => getReports(params) });

export const useReport = (id, options = {}) =>
  useQuery({
    queryKey: reportKeys.detail(id),
    queryFn: () => getReport(id),
    enabled: !!id,
    ...options,
  });

// Mutations
export const useCreateReport = (options = {}) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data) => createReport(data),
    onSuccess: (created) => {
      qc.invalidateQueries({ queryKey: reportKeys.list });
      if (created?.id) qc.setQueryData(reportKeys.detail(created.id), created);
      options.onSuccess?.(created);
    },
    ...options,
  });
};

export const useUpdateReport = (options = {}) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => updateReport(id, data),
    onSuccess: (updated) => {
      qc.invalidateQueries({ queryKey: reportKeys.list });
      if (updated?.id) qc.setQueryData(reportKeys.detail(updated.id), updated);
      options.onSuccess?.(updated);
    },
    ...options,
  });
};

export const useDeleteReport = (options = {}) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteReport(id),
    onSuccess: (_, id) => {
      qc.invalidateQueries({ queryKey: reportKeys.list });
      qc.removeQueries({ queryKey: reportKeys.detail(id) });
      options.onSuccess?.(_, id);
    },
    ...options,
  });
};
