import React from 'react';
import { 
  LuSparkles, 
  LuCompass, 
  LuTarget, 
  LuTrendingUp, 
  LuShieldCheck, 
  LuActivity 
} from "react-icons/lu";

const SamCoreValues = () => {
  const values = [
    {
      title: "Clarity Over Complexity",
      desc: "We strip away the noise to focus on what actually moves the needle for your operations.",
      icon: <LuSparkles className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Decisions Backed by Reality",
      desc: "Every recommendation is grounded in real-world operational experience — not theory or guesswork.",
      icon: <LuCompass className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Fix the Root, Not the Symptoms",
      desc: "We go deeper than \"quick wins.\" Identify the cause, then eliminate it.",
      icon: <LuTarget className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Consistency Beats Intensity",
      desc: "Small, correct actions done repeatedly outperform chaotic bursts of effort.",
      icon: <LuTrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Ownership at Every Level",
      desc: "No hiding places. If it's in your lane, it's your responsibility — and you have the support to deliver.",
      icon: <LuShieldCheck className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Measure, Learn, Improve",
      desc: "Data isn't for dashboards — it's for decisions. We use it to tighten performance continuously.",
      icon: <LuActivity className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <section className="font-['DM_Sans',sans-serif] py-24 px-6 transition-colors duration-300 bg-white dark:bg-[#080C16]">
      <div className="mx-auto text-center max-w-7xl">
        
        {/* Label - */}
        <div className="flex justify-center mb-8">
          <span className="px-4 py-1 text-xs font-medium border rounded-full border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-white/40">
            5. Our Core Values
          </span>
        </div>

        {/* Heading - */}
        <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-5xl text-slate-900 dark:text-white">
          The code we work by.
        </h2>

        {/* Values Grid - */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-2xl bg-slate-50 dark:bg-[#131929] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center gap-6 transition-all hover:border-blue-500/30 dark:hover:border-white/10 hover:shadow-xl dark:hover:shadow-blue-900/10"
            >
              {/* Icon Container - */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#1a2333] shadow-sm group-hover:scale-110 transition-transform">
                {value.icon}
              </div>

              {/* Text Content - */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-white/40">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SamCoreValues;