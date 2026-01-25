import { useMutation } from "@tanstack/react-query";
import { userAxios } from "@/api/axios";

// Mutation to get full answer after login (post_login)
export const useAskSamFullAnswerMutation = () => {
  return useMutation({
    mutationFn: async ({ fs_id, question, tag }) => {
      const { data } = await userAxios.post("/asksam/ask/", {
        fs_id,
        question,
        tag,
      });
      return data;
    },
  });
};

// Example usage in a component:
// const mutation = useAskSamFullAnswerMutation();
// mutation.mutate({ fs_id: 10026, question: "osman", tag: 1 });
