import { publicAxios, userAxios } from "@/api/axios";

/*
 * AskSam service
 * - requestAskPrelogin: starts an ask flow without auth; returns quick answer + temp_fsid, status ok, type prelogin
 * - fetchFullAnswerAuthed: fetches the full answer once the user is authenticated using the provided fsid
 */

// Pre-login ask endpoint (returns quick answer + fsid, status: ok, type: prelogin)
export const requestAskPrelogin = async (payload = {}) => {
  // Backend expects POST at /asksam/ask/
  const { data } = await publicAxios.post("/asksam/ask/", payload);
  return data;
};

export const fetchFullAnswerAuthed = async (fsid = null, question = null) => {
  const payload = {};
  
  // If fsid provided (from pre-login temp_fsid), include it
  if (fsid) payload.fs_id = parseInt(fsid, 10);
  
  // Always include question if available
  if (question) payload.question = question;
  
  // Backend uses Authorization header to identify user
  // If fs_id provided, backend matches temp question to this user
  const { data } = await userAxios.post("/asksam/ask/", payload);
  return data;
};

export default {
  requestAskPrelogin,
  fetchFullAnswerAuthed,
};
