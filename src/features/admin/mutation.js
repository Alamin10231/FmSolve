import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminKeys } from "./query";

export const useAdminMutation = (mutationFn, options = {}) => {
  const qc = useQueryClient();
  const { invalidate = [], onSuccess, ...rest } = options;

  return useMutation({
    mutationFn,
    onSuccess: (data, variables, context) => {
      invalidate.forEach((key) => {
        if (key) qc.invalidateQueries({ queryKey: key });
      });
      onSuccess?.(data, variables, context);
    },
    ...rest,
  });
};
// ekhano suru korinai korbo
// Convenience: invalidate admin brief after successful mutations
export const useAdminMutationInvalidateBrief = (mutationFn, options = {}) => {
  const invalidate = [adminKeys.brief, ...(options.invalidate || [])];
  return useAdminMutation(mutationFn, { ...options, invalidate });
};
