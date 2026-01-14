import React from "react";
import { Button } from "@/components/ui/button";

const FMAnswers = () => {
  return (
    <section className="w-full py-16 bg-white text-slate-900 dark:bg-[#0b0f1a] dark:text-white min-h-[60vh]">
      <div className="px-6 mx-auto max-w-7xl">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl mb-2">
          FM Answers
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Fast fixes and expert guidance to common FM problems. (Page scaffold)
        </p>
        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Content coming soon.
          </p>
        </div>
        <div className="mt-8">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-slate-700 dark:text-white"
          >
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FMAnswers;
