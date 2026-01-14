import React from "react";
import { Link } from "react-router-dom";

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
        <div className="flex flex-wrap gap-2 mb-3">
          <Chip>Data & Tech</Chip>
          <Chip>Performance</Chip>
          <Chip>Operational</Chip>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-slate-900 dark:text-white">
          Full Answer: Handling unclear or nonsense maintenance requests or
          search terms in CAFM/helpdesk systems
        </h1>

        <Section title="Executive Summary">
          Treat unclear or nonsense inputs as a data quality and search design
          problem. Standardise request forms, add minimal validation, and triage
          unclear inputs before work is raised. Train teams to use consistent FM
          terminology and continuously improve keywords, categories, and prompts
          based on failed searches and repeated issues.
        </Section>

        <Section title="Key Actions">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Clarify intent: Is it reactive, compliance, soft/hard FM, or
              commercial?
            </li>
            <li>
              Use guided request forms with examples and required fields to
              reduce ambiguity.
            </li>
            <li>
              Validate inputs lightly (e.g., block random strings, require
              asset/location where relevant).
            </li>
            <li>
              Introduce a quick operator triage/check-back loop before approving
              unclear requests.
            </li>
            <li>
              Maintain a living FM taxonomy and search synonyms in your CAFM.
            </li>
            <li>
              Log failed searches to improve prompts, keywords, and training.
            </li>
          </ul>
        </Section>

        <Section title="Why It Matters">
          Precise language cuts rework, improves compliance evidence, and speeds
          up problem resolution. Organisations that standardise terminology and
          structure see faster answers, fewer handoffs, and better reporting
          quality.
        </Section>

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
