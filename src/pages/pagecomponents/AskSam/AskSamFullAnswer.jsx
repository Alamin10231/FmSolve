import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchFullAnswerAuthed } from "@/services/asksam.service";

const Chip = ({ children }) => (
  <span className="text-[11px] px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
    {children}
  </span>
);

const Section = ({ title, children }) => (
  <div className="mt-5 p-4 sm:p-6 bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-2xl">
    <h2 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-3">
      {title}
    </h2>
    <div className="text-[13px] sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
      {children}
    </div>
  </div>
);

const AskSamFullAnswer = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answerData, setAnswerData] = useState(null);

  useEffect(() => {
    const fsid = searchParams.get("fsid") || sessionStorage.getItem("pending_fsid");
    const question = searchParams.get("question");

    setLoading(true);
    setError(null);

    fetchFullAnswerAuthed(fsid, question)
      .then((data) => {
        setAnswerData(data);
        sessionStorage.removeItem("pending_fsid");
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
          <p className="text-slate-600 dark:text-slate-300">Loading full answer...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <Link to="/ask-sam" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
            ← Back to Ask Sam
          </Link>
        </div>
      </div>
    );
  }

  const tags = answerData?.["level 1"]?.tags || [];
  const question = answerData?.["level 1"]?.question || answerData?.question || "Your Question";
  const shortAnswer = answerData?.["level 1"]?.shortAnswer || "";
  const valueToFM = answerData?.["level 1"]?.valueToFM || "";
  const whenToUse = answerData?.["level 1"]?.whenToUse || "";
  const detailedAnswer = answerData?.["level 1"]?.detailedAnswer || "";
  const relatedQuestions = answerData?.["level 1"]?.relatedQuestions || [];
  const permanentFsId = answerData?.fs_id;

  return (
    <div className="px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl font-DmSans">
        {/* Back */}
        <div className="mb-3 flex items-center gap-2">
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
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-slate-900 dark:text-white">
          {question}
        </h1>

        {shortAnswer && (
          <Section title="Quick Answer">
            {shortAnswer}
          </Section>
        )}

        {valueToFM && (
          <Section title="Value to FM">
            {valueToFM}
          </Section>
        )}

        {whenToUse && (
          <Section title="When to Use">
            {whenToUse}
          </Section>
        )}

        {detailedAnswer && (
          <Section title="Detailed Answer">
            <div className="whitespace-pre-line">{detailedAnswer}</div>
          </Section>
        )}

        {relatedQuestions.length > 0 && (
          <div className="mt-5">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
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

        <div className="mt-6 p-4 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 rounded-xl flex items-center gap-3">
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
