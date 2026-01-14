import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "@/context/ThemeContext";

const ServiceOverview = () => {
  const { serviceIndex, setServiceIndex } = useTheme();

  const serviceData = [
    {
      title: "Operations",
      heading: "Drive operational excellence",
      description:
        "Identify inefficiencies and optimise your FM operations with expert diagnostics and actionable insights.",
      details: [
        "Risk identification",
        "Process optimisation",
        "Resource management",
      ],
      bgGradient: "from-blue-600 to-blue-800",
      metricValue: "40% reduction",
      metricLabel: "in operational costs",
      testimonial:
        "FmSolve transformed how we identify and address operational challenges. The diagnostic approach is game-changing.",
      authorName: "D",
      authorRole: "Operations Director",
      authorCompany: "Property Group",
    },
    {
      title: "Commercial",
      heading: "Strengthen commercial performance",
      description:
        "Optimise pricing, contracts and commercial outcomes with structured strategic diagnostics.",
      details: ["Contract review", "Pricing analysis", "Margin optimisation"],
      bgGradient: "from-purple-600 to-indigo-700",
      metricValue: "15% improvement",
      metricLabel: "in contract margins",
      testimonial:
        "The commercial diagnostics helped us identify hidden margin leakage and renegotiate key contracts.",
      authorName: "CD",
      authorRole: "Commercial Director",
      authorCompany: "FM Partners",
    },
    {
      title: "Supply Chain",
      heading: "Manage contractors effectively",
      description:
        "Streamline your supply chain relationships with clear diagnostics for contractor performance and compliance.",
      details: [
        "Contractor performance",
        "Compliance monitoring",
        "SLA management",
      ],
      bgGradient: "from-orange-500 to-orange-700",
      metricValue: "25% improvement",
      metricLabel: "in contractor SLAs",
      testimonial:
        "The clarity we now have on contractor performance has helped us make better decisions and improve service delivery.",
      authorName: "PM",
      authorRole: "Procurement Manager",
      authorCompany: "FM Services Ltd",
    },
    {
      title: "HR & People",
      heading: "Build high-performing teams",
      description:
        "Address people challenges with structured diagnostics for training, retention, and workforce planning.",
      details: [
        "Skills gap analysis",
        "Retention diagnostics",
        "Workforce planning",
      ],
      bgGradient: "from-pink-500 to-rose-600",
      metricValue: "35% reduction",
      metricLabel: "in staff turnover",
      testimonial:
        "Understanding our people challenges through structured diagnostics has transformed our HR approach.",
      authorName: "HR",
      authorRole: "HR Director",
      authorCompany: "FM National",
    },
    {
      title: "Performance",
      heading: "Optimise KPIs & metrics",
      description:
        "Get clear visibility on what's working and what needs attention with structured performance diagnostics.",
      details: [
        "KPI gap analysis",
        "Benchmark comparisons",
        "Performance trending",
      ],
      bgGradient: "from-emerald-500 to-green-600",
      metricValue: "3x faster",
      metricLabel: "issue resolution",
      testimonial:
        "We can now identify performance gaps before they become problems. The early warning system is invaluable.",
      authorName: "HF",
      authorRole: "Head of FM",
      authorCompany: "Corporate Services",
    },
    {
      title: "Technology",
      heading: "Leverage technology effectively",
      description:
        "Diagnose your technology landscape and identify opportunities for digital transformation.",
      details: [
        "System gap analysis",
        "Integration assessment",
        "Digital roadmapping",
      ],
      bgGradient: "from-cyan-500 to-teal-600",
      metricValue: "50% faster",
      metricLabel: "reporting cycles",
      testimonial:
        "The technology diagnostics helped us see where our systems were letting us down and what to prioritise.",
      authorName: "IT",
      authorRole: "IT Manager",
      authorCompany: "Facilities Co",
    },
  ];

  const safeIndex =
    Number.isInteger(serviceIndex) &&
    serviceIndex >= 0 &&
    serviceIndex < serviceData.length
      ? serviceIndex
      : 0;
  const activeService = serviceData[safeIndex];

  return (
    <div className="bg-white dark:bg-[#05080d] min-h-screen py-16 font-DmSans selection:bg-black/10 dark:selection:bg-white/10 text-gray-900 dark:text-white">
      {/* Navigation Tabs */}
      <div className="container flex flex-wrap items-center justify-center gap-3 mx-auto mb-20">
        {serviceData.map((service, index) => (
          <Button
            key={service.title}
            onClick={() => setServiceIndex(index)}
            className={`rounded-full px-7 h-10 text-[12px] font-bold tracking-wider uppercase transition-all duration-300 font-DmSans ${
              safeIndex === index
                ? `bg-gradient-to-br ${service.bgGradient} text-white shadow-xl shadow-white/5 scale-105`
                : "bg-transparent border border-gray-300/10 text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-white hover:border-gray-400/30"
            }`}
          >
            {service.title}
          </Button>
        ))}
      </div>

      <div className="container px-4 mx-auto max-w-8xl">
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT SIDE: Main Card */}
          <div className="col-span-12 lg:col-span-8">
            <div
              className={`rounded-[2.5rem] p-10 md:p-12 bg-gradient-to-br ${activeService.bgGradient} flex flex-col md:flex-row gap-10 min-h-[520px] shadow-2xl relative overflow-hidden transition-all duration-500`}
            >
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center gap-2.5 mb-8 opacity-70">
                  <div className="p-1.5 rounded bg-white/20 dark:bg-gray-700/20">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase">
                    FmSolve
                  </span>
                </div>

                <h2 className="max-w-md mb-5 text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl">
                  {activeService.heading}
                </h2>

                <p className="mb-8 text-[15px] opacity-85 leading-relaxed max-w-[320px] font-medium">
                  {activeService.description}
                </p>

                <ul className="mb-10 space-y-3.5">
                  {activeService.details.map((detail, i) => (
                    <li
                      className="flex items-center gap-3 text-[13px] font-semibold tracking-wide"
                      key={i}
                    >
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-300/20 dark:bg-white/20 text-[9px] shadow-inner">
                        ✓
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button className="px-10 text-[12px] font-black tracking-widest uppercase text-black dark:text-white transition-all bg-white dark:bg-gray-800 rounded-full shadow-2xl h-12 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 active:scale-95">
                    Get Started <span className="ml-2">→</span>
                  </Button>
                </div>
              </div>

              {/* UI Mockup Card */}
              <div className="flex-1 bg-gray-100/5 dark:bg-[#192335] backdrop-blur-xl rounded-[2rem] border border-white/10 p-7 shadow-3xl self-center transform lg:translate-x-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  <span className="ml-2 text-[10px] text-white dark:text-gray-400 font-bold uppercase tracking-widest">
                    Stability Engine
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-[10px] text-white dark:text-gray-400 font-bold tracking-widest uppercase">
                      Operational Health
                    </p>
                    <div className="w-full h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 w-[85%] rounded-full shadow-[0_0_15px_rgba(52,211,153,0.3)]"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pt-4">
                    <div className="p-6 border rounded-2xl bg-white/[0.03] dark:bg-gray-800/20 border-white/10 backdrop-blur-md">
                      <p className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">
                        Diagnostic Analysis
                      </p>
                      <p className="text-[11px] text-white dark:text-gray-300 leading-relaxed mb-6">
                        Real-time benchmarks updated against 300+ FM stability
                        templates.
                      </p>
                      <div className="flex justify-end gap-3">
                        <button className="text-[11px] font-bold text-white dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors">
                          Cancel
                        </button>
                        <button className="px-5 py-2 bg-blue-600 rounded-lg text-[10px] font-black text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all uppercase">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Sidebar Cards */}
          <div className="flex flex-col col-span-12 gap-6 lg:col-span-4">
            {/* Metric Card */}
            <div className="p-10 rounded-[2.5rem] bg-gray-100/5 dark:bg-[#0a0f18] border border-white/5 flex flex-col justify-center min-h-[180px] shadow-2xl group hover:border-white/10 transition-colors">
              <div className="mb-5 opacity-30">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-black dark:text-white">
                  Efficiency Gap
                </span>
              </div>
              <h1 className="mb-2 text-4xl font-black tracking-tighter text-gray-900 dark:text-white md:text-5xl">
                {activeService.metricValue}
              </h1>
              <p className="text-[14px] font-bold text-cyan-500 tracking-wide uppercase">
                {activeService.metricLabel}
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="p-10 rounded-[2.5rem] bg-gray-100/5 dark:bg-[#0a0f18] border border-white/5 flex-grow flex flex-col shadow-2xl relative">
              <div className="absolute text-4xl italic pointer-events-none top-8 left-8 text-white/5">
                “
              </div>
              <p className="mb-10 text-[16px] italic leading-[1.7] text-gray-400 dark:text-gray-300 font-medium relative z-10">
                {activeService.testimonial}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="flex items-center justify-center w-12 h-12 text-xs font-black text-gray-400 bg-gray-900 border shadow-inner rounded-2xl dark:bg-gray-800 dark:text-gray-300 border-white/5">
                  {activeService.authorName}
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-gray-900 dark:text-white tracking-tight">
                    {activeService.authorRole}
                  </h4>
                  <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-0.5">
                    {activeService.authorCompany}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
