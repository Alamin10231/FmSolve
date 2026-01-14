import { LucideUsers2 } from 'lucide-react';
import React from 'react';
import { LuScale, LuTimer,  LuSearch, LuTarget, LuPlay, LuTrendingUp } from "react-icons/lu";

const FMSolveAbout = () => {
  const painPoints = [
    {
      icon: <LuScale className="w-8 h-8 text-red-500" />,
      text: "Expensive consultants who add theory rather than traction"
    },
    {
      icon: <LuTimer className="w-8 h-8 text-red-500" />,
      text: "Slow agencies that overcomplicate simple needs"
    },
    {
      icon: <LucideUsers2 className="w-8 h-8 text-red-500" />,
      text: "Overloaded internal teams trying to do too much with too little"
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Rapid Diagnosis",
      desc: "We assess the reality on the ground—no lengthy discovery phases. We find the gap fast.",
      icon: <LuSearch className="w-6 h-6 text-blue-500" />
    },
    {
      id: 2,
      title: "Precision Deployment",
      desc: "We deploy the exact senior expertise you need—no juniors learning on your time.",
      icon: <LuTarget className="w-6 h-6 text-orange-500" />
    },
    {
      id: 3,
      title: "Action",
      desc: "We execute. We focus on what works in practice, not what looks good on a slide.",
      icon: <LuPlay className="w-6 h-6 text-green-500" />
    },
    {
      id: 4,
      title: "Impact",
      desc: "We measure success by one thing: the tangible change delivered to your business.",
      icon: <LuTrendingUp className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="font-['DM_Sans',sans-serif] transition-colors duration-300 bg-white dark:bg-[#080C16] text-slate-900 dark:text-white">
      
      {/* Section 1: The Origin */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-8 text-xs font-medium border rounded-full border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
            1. The Origin
          </span>
          <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Real experience. Real frustration. A better way.
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-slate-600 dark:text-white/70">
            After 30 years of leading operational teams, I realised a simple truth: most businesses don't struggle because they lack talent. They struggle because they lack access to the right support at the right time.
          </p>
          <p className="mb-12 font-medium text-slate-500 dark:text-white/50">
            When pressure hits, most teams are left choosing between limited options:
          </p>

          <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-3">
            {painPoints.map((point, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-8 text-center border border-red-100 rounded-2xl bg-red-50/50 dark:bg-red-500/5 dark:border-red-500/10">
                {point.icon}
                <p className="text-sm font-medium leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>

          <p className="max-w-4xl mx-auto text-xl font-medium leading-relaxed text-slate-700 dark:text-white/80">
            None of these options give organisations what they genuinely need: fast, practical, senior-level support from people who have run operations and understand the realities on the ground.
          </p>
          <p className="mt-8 text-xl font-bold text-blue-600 dark:text-blue-400">
            That's why FM Solve exists.
          </p>
        </div>
      </section>

      {/* Section 4: How We Work */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0f1d]">
        <div className="mx-auto text-center max-w-7xl">
          <span className="inline-block px-4 py-1 mb-8 text-xs font-medium bg-white border rounded-full border-slate-200 dark:border-white/10 dark:bg-white/5">
            4. How We Work
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Accessible. Solution-based. No fluff.
          </h2>
          <p className="mb-16 text-slate-500 dark:text-white/50">
            Our process focuses on speed and accuracy.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.id} className="relative group">
                <div className="absolute -top-3 left-4 z-20 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-[#1a2333] text-xs font-bold transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {step.id}
                </div>
                <div className="h-full p-8 rounded-2xl bg-white dark:bg-[#131929] border border-slate-200 dark:border-white/5 flex flex-col items-center text-center gap-6 transition-all hover:border-blue-500/30">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-white/40">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FMSolveAbout;