import React from "react";
import { Button } from "@/components/ui/button";
import manimage from "../../../assets/images/Sam - Your FM Digital Advisor.svg";
import icon1 from "../../../assets/icons/Component 1.svg"
import icon2 from "../../../assets/icons/Component 1 (1).svg"
import icon3 from "../../../assets/icons/Component 1 (2).svg"
import icon4 from "../../../assets/icons/Component 1 (3).svg"
import icon5 from "../../../assets/icons/Component 1 (4).svg"

const SamSection = () => {
  const stats = [
    { value: "25+", label: "Years FM Knowledge" },
    { value: "10,000+", label: "Expert Answers" },
    { value: "5,000+", label: "Diagnostic Scenarios" },
  ];

  const features = [
    {
      title: "Instant FM Problem Diagnosis",
      desc: "Describe any challenge — staffing, contractors, SLAs, compliance, productivity, workflows — and Sam will identify root causes and offer clear solutions.",
      icon: <img src={icon1} alt="Instant FM Problem Diagnosis" />,
    },
    {
      title: "FM Answers",
      desc: "Access thousands of expert-written answers based on real industry standards and proven operational models.",
      icon: <img src={icon2} alt="FM Answers" />,
    },
    {
      title: "Stability Reports",
      desc: "Sam converts complex challenges into structured reports: What's happening, Why it's happening, Risks, Priority actions, and KPIs & benchmarks.",
      icon: <img src={icon3} alt="Stability Reports" />,
    },
    {
      title: "On-Site Support & Guidance",
      desc: "Need help navigating the platform? Sam will guide you to the right tool, answer, report, or action.",
      icon: <img src={icon4} alt="On-Site Support & Guidance" />,
    },
    {
      title: "Live Chat Assistance",
      desc: "Message Sam directly anytime — get quick answers or escalate when needed.",
      icon: <img src={icon5} alt="Live Chat Assistance" />,
    }
  ];

  return (
    <div className="font-inter selection:bg-blue-500/30 bg-white dark:bg-[#080C16] text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      
      {/* --- Section 1: Hero --- */}
      {/* FIXED: Removed inline style and replaced with Tailwind arbitrary gradient classes */}
      <section className="relative flex items-center w-full min-h-screen pt-20 pb-10 overflow-hidden 
        bg-slate-50 
        dark:bg-[linear-gradient(180deg,#061733_5%,#080C16_100%)]">
        
        <div className="container grid items-center grid-cols-1 gap-12 px-6 mx-auto lg:grid-cols-2">
          <div className="z-10 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/10 dark:bg-white/10 backdrop-blur-md border border-slate-900/10 dark:border-white/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
              </span>
              Meet Sam
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
              Your Always <br /> Available FM <br /> Sidekick
            </h1>

            <p className="max-w-md mx-auto text-lg font-medium leading-relaxed lg:mx-0 text-slate-600 dark:text-white/60">
              Here to simplify facility management. <br />
              Ready to help. Day or night.
            </p>

            <div className="pt-6">
              <Button className="bg-[#f25e1c] hover:bg-[#ff6d2e] text-white px-10 py-8 text-lg font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-600/30 uppercase tracking-wider">
                <span className="mr-3 text-2xl">🧔</span> Ask Sam a Question →
              </Button>
            </div>
          </div>

          <div className="relative flex items-end justify-center h-full lg:justify-end">
            <img
              src={manimage}
              alt="Sam FM Sidekick"
              className="relative z-10 w-full max-w-[400px] md:max-w-[550px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* --- Section 2: Who Is Sam? --- */}
      <section className="bg-slate-100 dark:bg-[#131929] py-32 px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Who Is Sam?</h2>
          <p className="max-w-3xl mx-auto mb-20 text-lg font-medium leading-relaxed text-slate-600 dark:text-white/50">
            Sam is your virtual FM advisor — a friendly, human-centred guide built from decades of real-world FM experience.
          </p>

          <div className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-3">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0e121a] p-5 border border-slate-200 dark:border-white/5 transition-all hover:bg-slate-50 dark:hover:bg-white/[0.03] group rounded-xl">
                <h3 className="mb-2 text-3xl font-black tracking-tighter text-blue-600 transition-transform dark:text-blue-500 group-hover:scale-110">
                  {item.value}
                </h3>
                <p className="text-slate-500 dark:text-white/40 text-[11px] font-black uppercase tracking-[0.2em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Sam isn't just a chatbot.</h4>
            <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-white/50">
              He's the digital version of a senior FM specialist — available instantly, without meetings, emails, or delays.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: What Sam Can Help With --- */}
      <section className="bg-white dark:bg-[#080C16] py-32 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-20 text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-white md:text-5xl">
            What Sam Can Help You With
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-50 dark:bg-[#131929] border border-slate-200 dark:border-white/5 p-10 rounded-xl flex flex-col gap-6 hover:border-blue-500/30 dark:hover:border-white/20 transition-all group">
                <div className="flex items-center justify-center w-16 h-16 transition-transform rounded-2xl group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-white/40">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SamSection;