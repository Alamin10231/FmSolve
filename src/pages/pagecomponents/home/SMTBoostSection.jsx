import React from 'react';

const SMTBoostSection = () => {
  return (
    <section className="bg-white dark:bg-[#0a0e14] py-20 flex flex-col items-center">
      <div className="px-6 mb-16 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Only when you need them.
        </h3>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
          When Your Team Needs an SMT Boost.
        </h2>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 px-6 mb-24 md:grid-cols-12">
        <div className="md:col-span-3 h-32 bg-[#122b24] rounded-2xl flex items-center justify-center border border-emerald-900/30">
          <div className="w-12 h-12 bg-[#10b981] rounded-full flex items-center justify-center text-black text-2xl">
            ✓
          </div>
        </div>

        <div className="md:col-span-4 h-32 bg-[#10b981] rounded-2xl p-6 flex flex-col justify-center">
          <h4 className="text-lg font-bold text-white">Senior Expertise</h4>
          <p className="text-sm font-medium text-white/80">Senior Expertise</p>
        </div>

        <div className="md:col-span-5 h-32 bg-gray-100 dark:bg-[#1a1f2e] rounded-2xl p-6 flex items-center border border-gray-300 dark:border-gray-800">
          <p className="text-sm leading-relaxed text-black dark:text-gray-400">
            Access seasoned FM professionals with decades of experience, without the overhead of full-time hires.
          </p>
        </div>

        <div className="md:col-span-6 min-h-[160px] bg-[#6366f1] rounded-2xl p-8 flex flex-col justify-center">
          <h4 className="mb-2 text-2xl font-bold text-white">Actionable Insights</h4>
          <p className="text-sm font-medium leading-relaxed text-white/90">
            Get clear diagnostics and practical fixes your team can implement immediately.
          </p>
        </div>

        <div className="md:col-span-6 min-h-[160px] bg-gray-100 dark:bg-[#1a1f2e] rounded-2xl flex items-center justify-center border border-gray-300 dark:border-gray-800">
          <div className="text-[#818cf8] text-6xl">
            ♥
          </div>
        </div>

        <div className="md:col-span-3 h-32 bg-[#2d1f24] rounded-2xl flex items-center justify-center border border-red-900/30">
          <div className="text-[#f87171] text-4xl">
            🌍
          </div>
        </div>

        <div className="md:col-span-4 h-32 bg-[#f87171] rounded-2xl p-6 flex flex-col justify-center">
          <h4 className="text-lg font-bold text-white">Fast Results</h4>
          <p className="text-sm font-medium text-white/80">Value from day one</p>
        </div>

        <div className="md:col-span-5 h-32 bg-gray-100 dark:bg-[#1a1f2e] rounded-2xl p-6 flex items-center border border-gray-300 dark:border-gray-800">
          <p className="text-sm leading-relaxed text-black dark:text-gray-400">
            No lengthy onboarding. Our associates understand FM operations and deliver impact immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SMTBoostSection;
