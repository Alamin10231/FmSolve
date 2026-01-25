import React, { useEffect, useState, useRef } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { fetchFullAnswerAuthed } from "@/services/asksam.service";

const Chip = ({ children }) => (
  <span className="text-[11px] px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
    {children}
  </span>
);

const Section = ({ title, children }) => (
  <div className="mt-5 p-4 sm:p-6 bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-2xl">
    <h2 className="mb-3 text-sm font-semibold sm:text-base text-slate-900 dark:text-white">
      {title}
    </h2>
    <div className="text-[13px] sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
      {children}
    </div>
  </div>
);

const AskSamFullAnswer = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answerData, setAnswerData] = useState(null);

  // State fallback from navigation
  const stateQuestion = location.state?.question;
  const stateShortAnswer = location.state?.quick_answer;
  const stateTags = location.state?.tags;

  const lastFetchedFsId = useRef(null);
  useEffect(() => {
    let fsid =
      searchParams.get("fsid") || sessionStorage.getItem("pending_fsid");
    const question = searchParams.get("question") || stateQuestion;

    const storedPermanent = sessionStorage.getItem("current_fsid");
    if (storedPermanent && !searchParams.get("fsid")) {
      fsid = storedPermanent;
      sessionStorage.removeItem("pending_fsid");
    }

    // Ensure fsid is a valid number
    const validFsid = Number(fsid);
    if (!validFsid || isNaN(validFsid)) {
      setLoading(false);
      setError("No valid answer ID found. Please try again from Ask Sam.");
      return;
    }

    // Prevent duplicate fetch for the same fsid
    if (lastFetchedFsId.current === String(validFsid)) {
      return;
    }
    lastFetchedFsId.current = String(validFsid);

    setLoading(true);
    setError(null);

    fetchFullAnswerAuthed(validFsid, question)
      .then((data) => {
        setAnswerData(data);
        if (data?.fs_id) {
          try {
            sessionStorage.setItem("current_fsid", String(data.fs_id));
          } catch (e) {
            console.warn("Failed to persist current_fsid", e);
          }
        }
        sessionStorage.removeItem("pending_fsid");
        console.log(
          "AskSam full data fetched. Used fsid:",
          validFsid,
          "Permanent fs_id:",
          data?.fs_id,
        );
      })
      .catch((err) => {
        console.error("Failed to fetch full answer", err);
        const msg = err?.data?.error || err?.message || "Failed to load answer";
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, [searchParams]);

  if (loading) {
    return (
      <div className="px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-300">
            Loading full answer...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <Link
            to="/ask-sam"
            className="inline-block mt-4 text-sm text-blue-600 hover:underline"
          >
            ← Back to Ask Sam
          </Link>
        </div>
      </div>
    );
  }

  const tags =
    answerData?.["level 1"]?.tags || answerData?.tags || stateTags || [];
  const question =
    answerData?.["level 1"]?.question ||
    answerData?.question ||
    stateQuestion ||
    "Your Question";
  const shortAnswer =
    answerData?.["level 1"]?.shortAnswer || stateShortAnswer || "";
  const valueToFM = answerData?.["level 1"]?.valueToFM || "";
  const whenToUse = answerData?.["level 1"]?.whenToUse || "";
  const detailedAnswer = answerData?.["level 1"]?.detailedAnswer || "";
  const relatedQuestions = answerData?.["level 1"]?.relatedQuestions || [];
  const permanentFsId = answerData?.fs_id;

  if (!answerData && (shortAnswer || question)) {
    // If backend did not return, but we have state data, show fallback
    return (
      <div className="px-4 py-8 sm:py-24">
        <div className="max-w-4xl mx-auto font-DmSans">
          {/* Back */}
          <div className="flex items-center gap-2 mb-3">
            <Link
              to="/ask-sam/answer"
              className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400"
            >
              ← Back to quick answer
            </Link>
          </div>

          {/* Breadcrumb chips */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, idx) => (
                <Chip key={idx}>{tag}</Chip>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-xl font-bold leading-snug sm:text-2xl md:text-3xl text-slate-900 dark:text-white">
            {question}
          </h1>

          {shortAnswer && <Section title="Quick Answer">{shortAnswer}</Section>}

          <div className="flex items-center gap-3 p-4 mt-6 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <img
              src="/favicon.ico"
              alt="Sam"
              className="w-5 h-5 rounded-full"
            />
            <span className="text-xs text-slate-600 dark:text-slate-300">
              Want a diagnostic tailored to your site?
            </span>
            <Link
              to="/ask-sam/stability-reports"
              className="ml-auto text-xs bg-orange-600 hover:bg-orange-700 text-white px-2.5 py-1 rounded"
            >
              Run Stability Report
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 sm:py-24">
      <div className="max-w-4xl mx-auto font-DmSans">
        {/* Back */}
        <div className="flex items-center gap-2 mb-3">
          <Link
            to="/ask-sam/answer"
            className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400"
          >
            ← Back to quick answer
          </Link>
        </div>

        {/* Breadcrumb chips */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, idx) => (
              <Chip key={idx}>{tag}</Chip>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-xl font-bold leading-snug sm:text-2xl md:text-3xl text-slate-900 dark:text-white">
          {question}
        </h1>

        {shortAnswer && <Section title="Quick Answer">{shortAnswer}</Section>}

        {valueToFM && <Section title="Value to FM">{valueToFM}</Section>}

        {whenToUse && <Section title="When to Use">{whenToUse}</Section>}

        {detailedAnswer && (
          <Section title="Detailed Answer">
            <div className="whitespace-pre-line">{detailedAnswer}</div>
          </Section>
        )}

        {relatedQuestions.length > 0 && (
          <div className="mt-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
              Related Questions
            </h2>
            <div className="space-y-2">
              {relatedQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3 text-sm bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/40 transition"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
        )}

        {permanentFsId && (
          <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Answer ID: {permanentFsId}
          </div>
        )}

        <div className="flex items-center gap-3 p-4 mt-6 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
          <img src="/favicon.ico" alt="Sam" className="w-5 h-5 rounded-full" />
          <span className="text-xs text-slate-600 dark:text-slate-300">
            Want a diagnostic tailored to your site?
          </span>
          <Link
            to="/ask-sam/stability-reports"
            className="ml-auto text-xs bg-orange-600 hover:bg-orange-700 text-white px-2.5 py-1 rounded"
          >
            Run Stability Report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AskSamFullAnswer;
