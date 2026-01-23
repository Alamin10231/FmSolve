

/** Format common Axios error shapes to a readable message */
export function formatAxiosError(error) {
  const status = error?.response?.status;
  const data = error?.response?.data;
  const msg =
    data?.message || data?.error || error?.message || "Unexpected error";
  return status ? `[${status}] ${msg}` : msg;
}


export function handleQueryError(error) {
  const message = formatAxiosError(error);
  // TODO: Plug in your toast/alert system here
  console.error("Query error:", message);
}


export function handleMutationError(error, variables) {
  const message = formatAxiosError(error);
  // TODO: Plug in your toast/alert system here
  console.error("Mutation error:", message, { variables });
}
