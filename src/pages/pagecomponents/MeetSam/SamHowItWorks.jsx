import React from "react";

const SamHowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "You Describe the Issue",
      desc: "Type your FM challenge into Ask Sam.",
    },
    {
      id: 2,
      title: "Sam Searches the Knowledge System",
      desc: "He checks 10,000+ answers, 5,000+ diagnostics and human-curated insights.",
    },
    {
      id: 3,
      title: "You Get Instant Clarity",
      desc: "Sam delivers practical actions, insights, and fixes — not theory, fluff, or consultant-speak.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#080C16] py-24 px-6 font-inter transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="mb-16 text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white md:text-5xl">
          How Sam Works
        </h2>

        {/* Steps Container */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group bg-slate-50 dark:bg-[#131929] border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-[1.5rem] flex items-start gap-6 transition-all hover:border-blue-500/30 dark:hover:border-white/10"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg shadow-[0_0_20px_rgba(59,130,246,0.2)] dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                {step.id}
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-white/40 md:text-base">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SamHowItWorks;