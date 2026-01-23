import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { handleQueryError, handleMutationError } from "../lib/errors";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      onError: handleQueryError,
      staleTime: 60 * 1000, // sensible default for list/detail
    },
    mutations: {
      onError: handleMutationError,
    },
  },
});

export default function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
