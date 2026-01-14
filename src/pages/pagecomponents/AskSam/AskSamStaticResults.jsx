import React from "react";
import { Link } from "react-router-dom";

const fmAnswers = [
  {
    id: 1,
    title:
      "How do I optimise HVAC performance in a commercial building to reduce energy use and improve occupant comfort?",
    desc: "Optimise HVAC performance by tightening control (BMS settings, scheduling, setpoints), maintaining plant to SFG20 or better, improving...",
  },
  {
    id: 2,
    title:
      "How should FM teams handle unclear or nonsense maintenance requests or search terms?",
    desc: "Treat unclear or nonsense inputs as data quality issues. Put in place clear request templates, mandatory fields, basic validation rules, and...",
  },
  {
    id: 3,
    title:
      "What should facilities managers do when a user search term is unclear, meaningless, or does not match existing FM taxonomy?",
    desc: "When search terms are unclear or meaningless, the FM team should treat it as a signal to improve search design, guided prompts, and...",
  },
];

const stabilityReports = [
  {
    id: 1,
    title: "Staff feel unable to report mistakes, near misses",
    desc: "Staff feel unable to report mistakes, near misses, or concerns due to fear of blame or retaliation, limiting improvement and learning.",
  },
  {
    id: 2,
    title: "Pay Doesn't Match Mixed Abilities",
    desc: "Highly skilled or high performing engineers are paid similarly to low performers, undermining motivation and retention.",
  },
  {
    id: 3,
    title: "Workforce Demographic Risk",
    desc: "An ageing engineering workforce and lack of younger recruits create long-term risk to critical technical capability and knowledge retention.",
  },
];

const Card = ({ children }) => (
  <div className="bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-sm">
    {children}
  </div>
);

const AskSamStaticResults = () => {
  return (
    <div className="px-4 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto font-DmSans">
        <div className="text-center">
          <h1 className="text-2xl font-black sm:text-3xl text-slate-900 dark:text-white">
            I found what you need.
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Based on your issue, here are my recommendations.
          </p>
        </div>

        <div className="grid gap-6 mt-8 md:grid-cols-2">
          {/* FM Answers */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  FM Answers
                </p>
                <p className="text-[11px] text-slate-400">
                  Quick fixes & expert guidance
                </p>
              </div>
              <span className="text-[11px] rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                3 found
              </span>
            </div>

            <div className="space-y-3">
              {fmAnswers.map((a) => (
                <div
                  key={a.id}
                  className="p-3 border bg-slate-50 dark:bg-slate-900/40 rounded-xl border-slate-200 dark:border-slate-800"
                >
                  <h3 className="text-[13px] font-semibold text-slate-900 dark:text-white">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                    {a.desc}
                  </p>
                  <button className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                    View expert answer →
                  </button>
                </div>
              ))}
            </div>
          </Card>

          {/* Stability Reports */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Stability Reports
                </p>
                <p className="text-[11px] text-slate-400">
                  Deep diagnostics & action plans
                </p>
              </div>
              <span className="text-[11px] rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                3 found
              </span>
            </div>

            <div className="space-y-3">
              {stabilityReports.map((r) => (
                <div
                  key={r.id}
                  className="p-3 border bg-slate-50 dark:bg-slate-900/40 rounded-xl border-slate-200 dark:border-slate-800"
                >
                  <h3 className="text-[13px] font-semibold text-slate-900 dark:text-white">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                    {r.desc}
                  </p>
                  <button className="mt-2 text-xs text-orange-600">
                    Run diagnostic →
                  </button>
                </div>
              ))}
              <div className="p-3 border border-orange-200 bg-orange-50 dark:bg-orange-900/20 rounded-xl dark:border-orange-800/40">
                <p className="text-[12px] font-semibold text-orange-700 dark:text-orange-400">
                  Need something more tailored?
                </p>
                <p className="text-[11px] text-orange-700/80 dark:text-orange-400/80">
                  Create a Stability Report specific to your exact situation.
                </p>
                <button className="mt-2 text-xs text-white bg-orange-600 hover:bg-orange-700 px-2.5 py-1 rounded">
                  Custom Report
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer CTA */}
        <div className="flex items-center gap-3 p-3 mt-6 text-xs border bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 rounded-xl">
          <img
            src={"/favicon.ico"}
            alt="Sam"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-slate-600 dark:text-slate-300">
            Not quite right? Ask Sam for a tailored answer
          </span>
          <Link
            to="/ask-sam/answer"
            className="ml-auto text-xs bg-blue-600 text-white px-2.5 py-1 rounded"
          >
            Ask Sam
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AskSamStaticResults;
