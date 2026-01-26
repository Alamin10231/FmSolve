import { fetchAnswerByFsId } from "@/services/asksam.service";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ children }) => (
  <div className="bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-sm">
    {children}
  </div>
);

export const ShowAIResults = ({ payload }) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResults = async () => {
      try {
        const data = await fetchAnswerByFsId();
        setAnswers(data);
      } catch (error) {
        console.error("Error fetching answers:", error);
      } finally {
        setLoading(false);
      }
    };
    getResults();
  }, []);

  const navigate = useNavigate();

  if (!payload) return null;

  const { suggestions = [] } = payload;

  const handleViewDetail = (item) => {
    navigate("/ask-sam/answer-detail", {
      state: {
        fsid: item.id,
        question: item.question,
        quick_answer: item.answer,
        tags: 1,
      },
    });
  };

  return (
    <div className="px-4 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto font-DmSans">
        <div className="text-center">
          <h1 className="text-2xl font-black sm:text-3xl text-slate-900 dark:text-white">
            I found what you need.
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Based on your recent history and queries.
          </p>
        </div>

        <div className="grid gap-6 mt-8 md:grid-cols-2">
          {/* FM Answers Section */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  FM Live Insights
                </p>
                <p className="text-[11px] text-slate-400">
                  Real-time responses from Sam
                </p>
              </div>
              <span className="text-[11px] rounded bg-blue-100 text-blue-700 dark:bg-slate-800 dark:text-blue-400 px-2 py-0.5">
                {suggestions.length} found
              </span>
            </div>

            <div className="space-y-3">
              {loading ? (
                <div className="py-10 text-xs text-center text-slate-400">
                  Loading insights...
                </div>
              ) : (
                suggestions.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="p-3 border bg-slate-50 dark:bg-slate-900/40 rounded-xl border-slate-200 dark:border-slate-800"
                  >
                    <h3 className="text-[13px] font-semibold text-slate-900 dark:text-white line-clamp-2">
                      {item.question}
                    </h3>
                    <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                      {item.answer}
                    </p>
                    <button
                      onClick={() => handleViewDetail(item)}
                      className="inline-block mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View expert answer →
                    </button>
                  </div>
                ))
              )}
            </div>
                <div className="relative flex items-center gap-3 p-3 mt-6 text-xs border md:top-52 bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 rounded-xl">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
            S
          </div>
          <span className="text-slate-600 dark:text-slate-300">
            Not quite right? Ask Sam for a tailored answer
          </span>
          <button
            onClick={() => {
              navigate(
                `/ask-sam/answer-detail?question=${encodeURIComponent(payload.question || "")}`,
              );
            }}
            className="ml-auto text-xs bg-blue-600 text-white px-2.5 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            Ask Sam
          </button>
        </div>
          </Card>

          {/* Stability Reports Section (Same to Same) */}
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
              <div className="p-3 border bg-slate-50 dark:bg-slate-900/40 rounded-xl border-slate-200 dark:border-slate-800">
                <h3 className="text-[13px] font-semibold text-slate-900 dark:text-white">
                  Staff feel unable to report mistakes
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                  Staff feel unable to report mistakes, near misses, or
                  concerns...
                </p>
                <button className="mt-2 text-xs text-orange-600">
                  Run diagnostic →
                </button>
              </div>
              <div className="p-3 border bg-slate-50 dark:bg-slate-900/40 rounded-xl border-slate-200 dark:border-slate-800">
                <h3 className="text-[13px] font-semibold text-slate-900 dark:text-white">
                  Pay Doesn't Match Mixed Abilities
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                  Highly skilled or high performing engineers are paid
                  similarly...
                </p>
                <button className="mt-2 text-xs text-orange-600">
                  Run diagnostic →
                </button>
              </div>
              <div className="p-3 border bg-slate-50 dark:bg-slate-900/40 rounded-xl border-slate-200 dark:border-slate-800">
                <h3 className="text-[13px] font-semibold text-slate-900 dark:text-white">
                  Workforce Demographic Risk
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                  An ageing engineering workforce and lack of younger
                  recruits...
                </p>
                <button className="mt-2 text-xs text-orange-600">
                  Run diagnostic →
                </button>
              </div>
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
    
      </div>
    </div>
  );
};
