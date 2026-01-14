import React from "react";
import { Link } from "react-router-dom";

const Chip = ({ children }) => (
  <span className="text-[11px] px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
    {children}
  </span>
);

const RelatedItem = ({ children }) => (
  <button className="w-full text-left p-3 sm:p-4 bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/40 transition">
    <div className="text-[12px] sm:text-[13px] text-slate-800 dark:text-slate-100">
      {children}
    </div>
  </button>
);

const AskSamAnswerDetail = () => {
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
        <div className="flex flex-wrap gap-2 mb-3">
          <Chip>Data & Tech</Chip>
          <Chip>Performance</Chip>
          <Chip>Operational</Chip>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold leading-snug sm:text-2xl md:text-3xl text-slate-900 dark:text-white">
          How should FM teams handle unclear or nonsense maintenance requests or
          search terms (e.g. 'safsd') in their CAFM or helpdesk system?
        </h1>

        {/* Quick Answer Card */}
        <div className="mt-5 p-4 sm:p-6 bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-2xl">
          <p className="text-[13px] sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            Treat unclear or nonsense inputs as data quality issues. Put in
            place clear request templates, mandatory fields, basic validation
            rules, and a short triage/check-back process so operatives never act
            on unclear requests without clarification and the CAFM data remains
            reliable.
          </p>

          {/* Generate Full Answer box */}
          <div className="p-4 mt-4 border sm:mt-6 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <div className="text-center">
              <p className="text-[12px] text-slate-600 dark:text-slate-300 mb-3">
                Ready to Generate Your Answer
              </p>
              <Link
                to="/ask-sam/answer/full"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs text-white bg-blue-600 rounded sm:text-sm hover:bg-blue-700"
              >
                ✨ Generate Full Answer
              </Link>
              <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400">
                Answers are saved to your account for future reference.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <Chip>CAFM</Chip>
            <Chip>helpdesk</Chip>
            <Chip>data quality</Chip>
            <Chip>reactive maintenance</Chip>
            <Chip>FM processes</Chip>
          </div>
        </div>

        {/* Related Questions */}
        <h2 className="mt-8 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Related Questions
        </h2>
        <div className="space-y-2">
          <RelatedItem>
            How should an FM team handle unclear, incomplete or 'nonsense'
            maintenance requests or search queries from building users (e.g.
            cryptic text like “frtgg”)?
          </RelatedItem>
          <RelatedItem>
            How should an FM team handle unclear, incomplete, or nonsensical
            maintenance requests submitted by building users?
          </RelatedItem>
          <RelatedItem>
            How should facilities teams handle vague, unclear, or incorrect
            maintenance requests or search terms (e.g. 'frtgg') within CAFM and
            helpdesk systems?
          </RelatedItem>
          <RelatedItem>
            What should Facilities Managers do when a user submits an unclear or
            garbled request (e.g. 'frtgg') in the helpdesk or CAFM system?
          </RelatedItem>
          <RelatedItem>
            How should Facilities Management teams handle user queries or CAFM
            search terms that are unclear, misspelt or contain random characters
            so that people still get the help they need?
          </RelatedItem>
        </div>
      </div>
    </div>
  );
};

export default AskSamAnswerDetail;
