import React, { useState } from "react";
import {
  Search,
  LayoutGrid,
  Cog,
  DollarSign,
  Truck,
  Users,
  Activity,
  Database,
  Leaf,
  Lightbulb,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FMAnswer = () => {
  const categories = [
    { name: "All", count: 1292, icon: <LayoutGrid size={16} /> },
    { name: "Operations", count: 653, icon: <Cog size={16} /> },
    { name: "Commercial", count: 240, icon: <DollarSign size={16} /> },
    { name: "Supply Chain", count: 148, icon: <Truck size={16} /> },
    { name: "HR & People", count: 71, icon: <Users size={16} /> },
    { name: "Performance", count: 85, icon: <Activity size={16} /> },
    { name: "Technology", count: 85, icon: <Database size={16} /> },
    { name: "Sustainability", count: 91, icon: <Leaf size={16} /> },
    { name: "Innovation", count: 11, icon: <Lightbulb size={16} /> },
  ];

  const questionsData = [
    {
      title: "Operations",
      heading: "Fix your operational flow",
      description: "Move from reactive chaos to proactive control with diagnostics that pinpoint exactly where your site operations are leaking time and value.",
      details: ["Helpdesk stabilization", "Briefing process design", "Resource allocation uplift"],
      metricValue: "48-hour",
      metricLabel: "stabilization window",
    },
    {
      title: "Commercial",
      heading: "Stop commercial leakage",
      description: "Identify hidden costs in your contracts and recover margins through structured pricing analysis and leakage diagnostics.",
      details: ["Margin leakage audit", "Fixed-price modeling", "Contractual risk assessment"],
      metricValue: "22% recovery",
      metricLabel: "of lost contract margin",
    },
    {
      title: "Supply Chain",
      heading: "Master contractor output",
      description: "Diagnose why your supply chain isn't delivering and implement fixed-price tasks that ensure accountability and speed.",
      details: ["Contractor performance fix", "SLA compliance audit", "Supply chain streamlining"],
      metricValue: "Zero",
      metricLabel: "open-ended consultancy fees",
    },
    {
      title: "Performance",
      heading: "Visualise real performance",
      description: "Stop guessing your status. Build robust KPI dashboards and early-warning systems through performance diagnostics.",
      details: ["KPI / Dashboard build", "Early warning systems", "Reporting cycle fix"],
      metricValue: "Real-time",
      metricLabel: "visibility on all sites",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredQuestions = activeCategory === "All" 
    ? questionsData 
    : questionsData.filter((q) => q.title === activeCategory);

  return (
    <section className="w-full py-12 md:py-16 bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <div className="px-4 mx-auto md:px-6 max-w-7xl">
        <div className="p-4 mb-8 border md:p-6 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 rounded-2xl">
          <h2 className="mb-6 text-lg font-bold md:text-xl">Find answers in 3 simple steps</h2>
          <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs font-bold text-white bg-blue-600 rounded-full">1</span>
              <p className="text-slate-600 dark:text-slate-300"><span className="font-bold text-slate-900 dark:text-white">Describe issue</span> as you'd say it</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs font-bold text-white bg-blue-600 rounded-full">2</span>
              <p className="text-slate-600 dark:text-slate-300"><span className="font-bold text-slate-900 dark:text-white">Browse matches</span> from 1,292+ answers</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs font-bold text-white bg-blue-600 rounded-full">3</span>
              <p className="text-slate-600 dark:text-slate-300"><span className="font-bold text-slate-900 dark:text-white">Get guidance</span> with actions</p>
            </div>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400" size={20} />
          <Input
            placeholder="Search by keyword..."
            className="w-full py-6 pl-12 text-base bg-white md:text-lg dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex gap-2 pb-4 mb-10 overflow-x-auto flex-nowrap md:flex-wrap md:pb-0 scrollbar-hide">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all border rounded-lg whitespace-nowrap ${
                activeCategory === cat.name
                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-blue-500"
              }`}
            >
              {cat.icon} {cat.name} <span className="font-normal opacity-50">({cat.count})</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="order-2 space-y-4 lg:col-span-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
              <TrendingUp size={18} />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{activeCategory} Questions</h3>
            </div>

            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q, idx) => (
                <div key={idx} className="p-5 transition-all border md:p-6 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 hover:border-blue-600 dark:hover:border-blue-600">
                  <div className="flex flex-col justify-between gap-2 mb-3 sm:flex-row sm:items-center">
                    <span className="w-fit text-[10px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-500 bg-blue-100 dark:bg-blue-500/10 px-2 py-0.5 rounded">
                      {q.title}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {q.metricValue} {q.metricLabel}
                    </span>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{q.heading}</h4>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{q.description}</p>
                  <ul className="grid grid-cols-1 gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                    {q.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="p-10 text-center border border-dashed rounded-xl border-slate-300 dark:border-slate-800 text-slate-400 dark:text-slate-500">
                No questions found for this category yet.
              </div>
            )}
          </div>

          <div className="flex flex-col items-center order-1 p-6 text-center border lg:order-2 md:p-8 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 rounded-2xl h-fit">
            <div className="flex items-center justify-center w-20 h-20 mb-4 overflow-hidden border-2 rounded-full bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700">
              <div className="text-4xl">👨‍💼</div>
            </div>
            <div className="flex items-center gap-2 mb-2 text-xl font-bold text-slate-900 dark:text-white">
              <MessageSquare className="text-blue-600 dark:text-blue-500" size={20} />
              Hi, I'm Sam
            </div>
            <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">Your FM knowledge guide.</p>
            <div className="w-full p-4 mb-6 space-y-3 text-xs text-left bg-white border border-slate-200 dark:border-slate-800 dark:bg-slate-950/50 rounded-xl">
              <p className="font-bold tracking-tighter uppercase text-slate-400 dark:text-slate-500">Pro Tip</p>
              <p className="italic text-slate-600 dark:text-slate-300">"Try filtering by 'Commercial' to see how we fix margin leakage."</p>
            </div>
            <Button variant="outline" className="w-full bg-transparent text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
              Book a Clarity Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FMAnswer;