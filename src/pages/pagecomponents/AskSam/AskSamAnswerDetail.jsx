import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "@/context/AuthProvider";
import { requestAskPrelogin } from "@/services/asksam.service";

const Chip = ({ children }) => (
  <span className="text-[11px] px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
    {children}
  </span>
);

const AskSamAnswerDetail = ({ answerData }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [searchParams] = useSearchParams();

  // State for API data if routed
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let fsid, question, quick_answer, tags, breadcrumbs;
  if (answerData) {
    ({
      fsid,
      question,
      quick_answer,
      tags = [],
      breadcrumbs = [],
    } = answerData);
  } else {
    question = searchParams.get("question") || "";
    fsid = apiData?.temp_fsid;
    quick_answer = apiData?.quick_answer;
    tags = [];
    breadcrumbs = [];
  }

  useEffect(() => {
    if (!answerData && question) {
      setLoading(true);
      setError(null);
      requestAskPrelogin({ question })
        .then((res) => {
          setApiData(res);
        })
        .catch((err) => {
          setError("Failed to load answer.", err);
        })
        .finally(() => setLoading(false));
    }
    
  }, [answerData, question]);

  const handleGenerateFullAnswer = () => {
    if (!fsid) return;
    sessionStorage.setItem("pending_fsid", fsid);
    if (!user) {
      navigate(
        `/login?fsid=${encodeURIComponent(fsid)}&question=${encodeURIComponent(question || "")}`,
      );
      return;
    }
    navigate(
      `/ask-sam/answer/full?fsid=${encodeURIComponent(fsid)}&question=${encodeURIComponent(question || "")}`,
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-slate-500 dark:text-slate-300">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="px-4 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto font-DmSans">
        {/* Back */}
        <div className="mb-3">
          <Link
            to="/ask-sam"
            className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400"
          >
            ← Back
          </Link>
        </div>

        {/* Breadcrumb chips */}
        {breadcrumbs?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {breadcrumbs.map((bc, idx) => (
              <Chip key={idx}>{bc}</Chip>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-xl font-bold leading-snug sm:text-2xl md:text-3xl text-slate-900 dark:text-white">
          {question || "Your question"}
        </h1>

        {/* Quick Answer Card */}
        <div className="mt-5 p-4 sm:p-6 bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-2xl">
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2">
            <span>FSID</span>
            <span className="font-mono">{fsid || "(not returned)"}</span>
          </div>
          <p className="text-[13px] sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {quick_answer || "We generated a quick answer for you."}
          </p>

          {/* Generate Full Answer box */}
          <div className="p-4 mt-4 border sm:mt-6 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <div className="text-center">
              <p className="text-[12px] text-slate-600 dark:text-slate-300 mb-3">
                Ready to Generate Your Answer
              </p>
              <button
                onClick={handleGenerateFullAnswer}
                disabled={!fsid}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs text-white bg-blue-600 rounded sm:text-sm hover:bg-blue-700"
              >
                ✨ Generate Full Answer
              </button>
              <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400">
                Answers are saved to your account for future reference.
              </p>
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, idx) => (
                <Chip key={idx}>{tag}</Chip>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AskSamAnswerDetail;
