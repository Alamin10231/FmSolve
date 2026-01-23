import { useQuery } from "@tanstack/react-query";
import {
  getAdminBrief,
  getAdminFsidStats,
  getAdminGraphData,
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
