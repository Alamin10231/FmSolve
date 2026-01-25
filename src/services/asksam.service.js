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

// Normalize various fsid formats (e.g., 26, "26", "fs_id26")
const normalizeFsId = (fsid) => {
  if (fsid == null) return null;
  if (typeof fsid === "number" && Number.isFinite(fsid)) return fsid;
  const str = String(fsid);
  const match = str.match(/\d+/);
  if (!match) return null;
  const n = parseInt(match[0], 10);
  return Number.isFinite(n) ? n : null;
};

export const fetchFullAnswerAuthed = async (fsid = null, question = null) => {
  const payload = {};

  const normalized = normalizeFsId(fsid);
  if (normalized != null) payload.fs_id = normalized;

  if (question) payload.question = question;

  const { data } = await userAxios.post("/asksam/ask/", payload);
  return data;
};

export default {
  requestAskPrelogin,
  fetchFullAnswerAuthed,
};
