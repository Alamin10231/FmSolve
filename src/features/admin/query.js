import { useQuery } from "@tanstack/react-query";
import {
  getAdminBrief,
  getadminfsid,
  getAdminFsidStats,
  getAdminFsidStatsById,
  getAdminGraphData,
  getadminwithoutuid,
} from "@/services/admin.service";
import { adminKeys } from "../keys";

export const useAdminBrief = (options = {}) =>
  useQuery({ queryKey: adminKeys.brief, queryFn: getAdminBrief, ...options });
export const useAdminGraphData = (params = {}, options = {}) =>
  useQuery({
    queryKey: [...adminKeys.graph, params],
    queryFn: () => getAdminGraphData(params),
    ...options,
  });

export const useAdminFsidStats = (uid, options = {}) =>
  useQuery({
    queryKey: adminKeys.fsidstatus(uid),
    queryFn: () => getAdminFsidStats(uid),
    enabled: !!uid,
    ...options,
  });

export const useAdminFsidStatsWithoutUid = (options = {}) => {
  return useQuery({
    queryKey: adminKeys.fswithoutid,
    queryFn: () => getadminwithoutuid(),
    ...options,
  });
};
export const useAdminFsid = (options = {}) => {
  return useQuery({
    queryKey: adminKeys.fsids,
    queryFn: () => getadminfsid(),
    ...options,
  });
};
export const useAdminFsidById = (id, options = {}) => {
  return useQuery({
    queryKey: adminKeys.fsid(id),
    queryFn: () => getAdminFsidStatsById(id),
    enabled: !!id,
    ...options,
  });
};
