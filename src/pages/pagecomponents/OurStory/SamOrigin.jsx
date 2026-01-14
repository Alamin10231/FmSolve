import { LucideUsers2 } from "lucide-react";
import React from "react";
import {
  LuScale,
  LuTimer,
  LuSearch,
  LuTarget,
  LuPlay,
  LuTrendingUp,
  LuSparkles,
  LuCompass,
  LuShieldCheck,
  LuActivity,
  LuRocket,
} from "react-icons/lu";

const FMSolveAbout = () => {
  const painPoints = [
    {
      icon: <LuScale className="text-[#f24e1e] w-8 h-8" />,
      text: "Expensive consultants who add theory rather than traction",
    },
    {
      icon: <LuTimer className="text-[#f24e1e] w-8 h-8" />,
      text: "Slow agencies that overcomplicate simple needs",
    },
    {
      icon: <LucideUsers2 className="text-[#f24e1e] w-8 h-8" />,
      text: "Overloaded internal teams trying to do too much with too little",
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: "Rapid Diagnosis",
      desc: "We assess the reality on the ground—no lengthy discovery phases. We find the gap fast.",
      icon: <LuSearch className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Precision Deployment",
      desc: "We deploy the exact senior expertise you need—no juniors learning on your time.",
      icon: <LuTarget className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 3,
      title: "Action",
      desc: "We execute. We focus on what works in practice, not what looks good on a slide.",
      icon: <LuPlay className="w-6 h-6 text-green-500" />,
    },
    {
      id: 4,
      title: "Impact",
      desc: "We measure success by one thing: the tangible change delivered to your business.",
      icon: <LuTrendingUp className="w-6 h-6 text-purple-500" />,
    },
  ];

  const coreValues = [
    {
      title: "Clarity Over Complexity",
      desc: "We strip away the noise to focus on what actually moves the needle for your operations.",
      icon: <LuSparkles className="text-blue-500" />,
    },
    {
      title: "Decisions Backed by Reality",
      desc: "Every recommendation is grounded in real-world operational experience — not theory or guesswork.",
      icon: <LuCompass className="text-blue-500" />,
    },
    {
      title: "Fix the Root, Not the Symptoms",
      desc: 'We go deeper than "quick wins." Identify the cause, then eliminate it.',
      icon: <LuTarget className="text-blue-500" />,
    },
    {
      title: "Consistency Beats Intensity",
      desc: "Small, correct actions done repeatedly outperform chaotic bursts of effort.",
      icon: <LuTrendingUp className="text-blue-500" />,
    },
    {
      title: "Ownership at Every Level",
      desc: "No hiding places. If it's in your lane, it's your responsibility.",
      icon: <LuShieldCheck className="text-blue-500" />,
    },
    {
      title: "Measure, Learn, Improve",
      desc: "Data isn't for dashboards — it's for decisions. We use it to tighten performance.",
      icon: <LuActivity className="text-blue-500" />,
    },
  ];

  return (
    <div className="font-['DM_Sans',sans-serif] transition-colors duration-300 bg-white dark:bg-[#080C16] text-slate-900 dark:text-white">
      {/* 1. THE ORIGIN */}
      <section className="px-6 py-24 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-10 text-[10px] font-bold tracking-widest uppercase border rounded-full border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-white/40">
            1. The Origin
          </span>
          <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl">
            Real experience. Real frustration. <br /> A better way.
          </h2>
          <p className="max-w-4xl mx-auto mb-12 text-lg leading-relaxed text-slate-600 dark:text-white/70">
            After 30 years of leading operational teams, I realised a simple
            truth: most businesses don't struggle because they lack talent. They
            struggle because they lack access to the right support at the right
            time.
          </p>

          <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-3">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="p-10 rounded-2xl bg-slate-50 dark:bg-[#1a1216] border border-slate-200 dark:border-[#3d1a1d] flex flex-col items-center gap-6"
              >
                {point.icon}
                <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-white/80">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-blue-600 dark:text-blue-500">
            That's why FM Solve exists.
          </p>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0f1d]">
        <div className="mx-auto text-center max-w-7xl">
          <span className="inline-block px-4 py-1 mb-10 text-[10px] font-bold tracking-widest uppercase border rounded-full border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-500 dark:text-white/40">
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
              <div
                key={step.id}
                className="relative p-8 rounded-2xl bg-white dark:bg-[#131929] border border-slate-200 dark:border-white/5 flex flex-col items-center gap-6"
              >
                <div className="absolute -top-3 left-4 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-[#1a2333] text-[10px] font-black">
                  {step.id}
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-white/40">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="px-6 py-24">
        <div className="mx-auto text-center max-w-7xl">
          <span className="inline-block px-4 py-1 mb-10 text-[10px] font-bold tracking-widest uppercase border rounded-full border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-white/40">
            5. Our Core Values
          </span>
          <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-5xl">
            The code we work by.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="p-10 rounded-2xl bg-slate-50 dark:bg-[#131929] border border-slate-200 dark:border-white/5 flex flex-col items-center gap-6"
              >
                <div className="p-3 rounded-lg bg-white dark:bg-[#1a2333] text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-sm text-slate-500 dark:text-white/40">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE PROMISE */}
      <section className="py-24 px-6 bg-white dark:bg-[#0a0f1d] text-slate-900 dark:text-white transition-colors duration-300">
  <div className="max-w-5xl mx-auto text-center">
    <span className="inline-block px-4 py-1 mb-10 text-[10px] font-bold tracking-widest uppercase border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-white/40">
      6. The Promise
    </span>
    <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
      Relief. Clarity. Momentum.
    </h2>
    <p className="mb-16 font-medium text-blue-600 dark:text-blue-400">
      When you work with FM Solve, you get more than advice. You get a
      partner who has been there before.
    </p>

    <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-3">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 text-3xl text-green-500 rounded-full bg-green-500/10">
          <LuSparkles />
        </div>
        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Relief</h4>
        <p className="text-sm text-slate-500 dark:text-white/40">
          Knowing the problem is in safe hands
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 text-3xl text-blue-500 rounded-full bg-blue-500/10">
          <LuCompass />
        </div>
        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Clarity</h4>
        <p className="text-sm text-slate-500 dark:text-white/40">
          A simple plan that makes sense
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 text-3xl text-purple-500 rounded-full bg-purple-500/10">
          <LuRocket />
        </div>
        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Momentum</h4>
        <p className="text-sm text-slate-500 dark:text-white/40">
          The drive to grow and move forward
        </p>
      </div>
    </div>
    <p className="text-2xl italic font-bold text-slate-900 dark:text-white">
      Real impact. No fluff.
    </p>
  </div>
</section>

    </div>
  );
};

export default FMSolveAbout;
