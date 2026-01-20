// import { Link } from 'lucide-react';
import React from "react";
import { Link } from "react-router";
// Note: You can replace these with Lucide-React or Heroicons
const SparkleIcon = () => (
  <svg
    className="w-6 h-6 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const TargetIcon = () => (
  <svg
    className="w-6 h-6 text-orange-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Notmatchtext = () => {
  return (
    <div className="flex items-center justify-center p-6 transition-colors duration-300 bg-white font-DmSans dark:bg-slate-900">
      <div className="w-full max-w-2xl space-y-8 text-center">
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-24 h-24 mb-4 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            {/* Placeholder for Character Avatar */}
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white sm:text-4xl">
            This one's unique.
          </h1>
          <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
            Your issue isn't in our library — let me create something custom.
          </p>
          <button className="mt-6 text-sm font-medium underline text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 underline-offset-4">
            Search for something else
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid w-full max-w-lg gap-4 mx-auto">
          {/* Option 1: Synthesise */}
          <Link to="/ask-sam/answer">
            <button className="flex items-center w-full p-5 text-left transition-all border-2 border-blue-100 rounded-2xl dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 group">
              <div className="p-3 mr-4 transition-transform bg-blue-100 rounded-xl dark:bg-blue-900/40 group-hover:scale-110">
                <SparkleIcon />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  Synthesise Expert Answer
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Quick guidance for your specific question
                </p>
              </div>
            </button>
          </Link>

          {/* Option 2: Stability Report */}
    <Link to="/ask-sam/stability-reports">
    
          <button className="flex items-center w-full p-5 text-left transition-all border-2 border-orange-100 rounded-2xl dark:border-orange-900/30 bg-orange-50/50 dark:bg-orange-900/10 hover:bg-orange-50 dark:hover:bg-orange-900/20 group">
            <div className="p-3 mr-4 transition-transform bg-orange-100 rounded-xl dark:bg-orange-900/40 group-hover:scale-110">
              <TargetIcon />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Generate Stability Report
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Deep diagnostic with action plan
              </p>
            </div>
          </button>
    </Link>
        </div>
      </div>
    </div>
  );
};

export default Notmatchtext;
