import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { LucideCheckCircle2 } from "lucide-react";
import React from "react";
import { LuPhone, LuMail, LuSearch, LuLightbulb } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const Operational = () => {
  const { serviceIndex } = useTheme();
  // Dynamic task lists per Topbar service selection (matches ServiceOverview order)
  const serviceTasks = [
    // 0 - Operational Delivery
    [
      "Escalation backlog cleardown",
      "PPM schedule rebuild",
      "Reactive work reduction",
      "Supervisor coaching",
      "Helpdesk triage fix",
      "Work order queue audit",
      "Contractor performance review",
      "Compliance gap closure",
      "Asset data cleanse",
      "Rota optimisation",
      "First-time fix improvement",
      "Resource rebalancing",
      "Quality inspection reset",
      "Subcontractor onboarding",
      "CAFM system cleanup",
      "KPI dashboard setup",
      "Handover documentation",
      "Permit-to-work reset",
      "SLA priority realignment",
    ],
    // 1 - Commercial Strategy
    [
      "Contract margin analysis",
      "Pricing model recalibration",
      "Bid pipeline cleanup",
      "Scope creep containment",
      "Change control reset",
      "Invoice validation sweep",
      "Dispute log triage",
      "Benchmarking refresh",
      "Savings tracker setup",
      "Supplier rebate audit",
      "Rate card optimisation",
      "Contract renewal playbook",
      "COGS breakdown review",
      "Commercial risk register",
      "Negotiation prep pack",
    ],
    // 2 - Supply Chain
    [
      "Supplier scorecard rebuild",
      "Compliance documentation gap closure",
      "Onboarding pack standardisation",
      "Contractor performance review",
      "SLA breach root-cause",
      "Preferred supplier refresh",
      "Escalation path definition",
      "Accreditation validation",
      "Work order acceptance rules",
      "Time-to-assign improvement",
      "Fail-to-attend reduction",
      "Warranty claim process",
      "Insurance evidence audit",
      "Service category rationalisation",
    ],
    // 3 - Operational HR
    [
      "Rota optimisation",
      "Skills matrix build",
      "Supervisor coaching",
      "Onboarding checklist reset",
      "Training cadence setup",
      "Performance review framework",
      "Absence hotspot analysis",
      "Shift coverage balancing",
      "Competency sign-off process",
      "Hiring pipeline visibility",
      "Retention risk flags",
    ],
    // 4 - Performance & KPIs
    [
      "KPI dashboard setup",
      "Data quality cleanse",
      "Early warning metrics",
      "SLA tiering review",
      "Trend analysis templates",
      "Backlog burn-down board",
      "Ops cadence rituals",
      "Executive scorecard",
      "Root-cause drilldowns",
      "Service line benchmarks",
      "MTTR reduction plan",
    ],
    // 5 - Data & Technology
    [
      "CAFM system cleanup",
      "Asset register normalisation",
      "Helpdesk triage automation",
      "Integration assessment",
      "UAT checklist definition",
      "Ticket taxonomy refresh",
      "Reporting pipeline stabilisation",
      "Single-source-of-truth setup",
      "Data dictionary build",
      "Access & roles hygiene",
      "API health checks",
    ],
    // 6 - Helpdesk
    [
      "Ticket triage rules",
      "Priority matrix reset",
      "Caller ID enrichment",
      "Knowledge base boot",
      "Auto-assign workflow",
      "Escalation SLA timers",
      "First-contact resolution playbook",
      "Queue hygiene audit",
      "Category taxonomy cleanup",
      "Template responses refresh",
      "IVR routing improvements",
      "Ops handover checklist",
    ],
    // 7 - Service Delivery
    [
      "Site visit cadence",
      "Handover documentation",
      "Work instruction standardisation",
      "Field comms toolkit",
      "PPE & tooling readiness",
      "Snag list burn-down",
      "Quality inspection reset",
      "Risk & method statements",
      "Client walkaround ritual",
      "Defect capture workflow",
      "SLA breach recovery steps",
    ],
    // 8 - Client Service
    [
      "Quarterly review pack",
      "Issue log transparency",
      "Comms cadence framework",
      "Stakeholder mapping",
      "Expectation alignment deck",
      "Feedback loop setup",
      "Red-amber-green tracker",
      "Executive summary template",
      "Escalation path clarity",
      "Success metrics agreement",
      "Action tracker hygiene",
    ],
  ];
  const safeIndex =
    Number.isInteger(serviceIndex) &&
    serviceIndex >= 0 &&
    serviceIndex < serviceTasks.length
      ? serviceIndex
      : 0;
  const activeTasks = serviceTasks[safeIndex];

  

  const steps = [
    {
      title: "Problem",
      desc: "Identify the root cause",
      subDesc: "with clarity and speed.",
      icon: <LuSearch />,
      color: "bg-[#ef4444]",
      shadow: "shadow-[0_0_20px_rgba(239,68,68,0.4)]",
      num: 1,
    },
    {
      title: "Solution",
      desc: "Define the fix",
      subDesc: "and align on the actions.",
      icon: <LuLightbulb />,
      color: "bg-[#f59e0b]",
      shadow: "shadow-[0_0_20px_rgba(245,158,11,0.4)]",
      num: 2,
    },
    {
      title: "Exit",
      desc: "Deliver the outcome",
      subDesc: "hand over cleanly, and move on.",
      icon: <LucideCheckCircle2 />,
      color: "bg-[#10b981]",
      shadow: "shadow-[0_0_20px_rgba(16,185,129,0.4)]",
      num: 3,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#05080d] min-h-screen text-gray-900 dark:text-white font-dmSans py-0 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-24">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">
            Operational Delivery
          </h1>
          <div className="relative max-w-4xl p-10 mx-auto border border-dashed border-blue-500/30">
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-[15px]">
              We scope the task, mobilise the fix, and hand it back. Every
              engagement has a defined problem, agreed solution, and clear exit.
              Our senior FM associates diagnose what's broken, execute the
              repair, transfer the knowledge, and move on. No rolling support.
              No embedded consultants. Just targeted expertise that solves your
              problem and gets out of the way.
            </p>
          </div>
        </div>

        {/* Trending Section */}
        <div className="mb-32">
          <div className="flex items-center justify-center gap-2 text-blue-500 mb-4 uppercase tracking-[0.3em] text-[10px] font-black">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            Trending
          </div>
          <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Top Task Fixes For Selected Service
          </h2>
          <div className="flex flex-wrap justify-center max-w-5xl gap-3 mx-auto mb-10">
            {activeTasks.map((task, index) => (
            <Link to="/contact" key={index}>
              <div
                key={index}
                className={cn(
                  "px-5 py-2.5 rounded-full text-[13px] font-semibold border transition-all",
                  index < 4
                    ? cn("bg-blue-600 text-white hover:bg-blue-600/90")
                    : "border-gray-200 dark:border-white/5"
                )}
              >
                {task}
              </div>
            
            </Link>
            ))}
          </div>
        </div>

        {/* HOW EVERY TASK WORKS SECTION */}
        <div className="py-20">
          <h2 className="mb-4 text-4xl font-bold">How Every Task Works</h2>
          <p className="mb-20 text-lg text-slate-400">
            Three steps. Clear deliverables. Clean exit.
          </p>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line Gradient */}
            <div className="absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-[#ef4444] via-[#f59e0b] to-[#10b981] hidden md:block"></div>

            <div className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-3">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`relative w-20 h-20 rounded-full ${step.color} ${step.shadow} flex items-center justify-center text-3xl mb-8`}
                  >
                    {step.icon}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#1a1f2e] border-2 border-slate-800 text-[10px] font-bold flex items-center justify-center text-white">
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 uppercase tracking-tight`}
                    style={{
                      color:
                        idx === 0
                          ? "#ef4444"
                          : idx === 1
                          ? "#f59e0b"
                          : "#10b981",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="mb-1 font-bold text-gray-900 dark:text-white">
                    {step.desc}
                  </p>
                  <p className="text-gray-600 dark:text-slate-500 text-[13px]">
                    {step.subDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 mt-24 md:flex-row">
            <Button className="bg-[#e65100] hover:bg-[#ff6d00] text-white px-8 py-6 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-900/20 active:scale-95">
              <LuPhone className="text-lg" />
              Book a Clarity Call
            </Button>
            <Link to="/contact">
             <Button className="bg-[#0a0f18] border border-slate-800 hover:border-slate-600 text-white px-8 py-6 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95">
              <LuMail className="text-lg" />
              Contact the Team
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operational;
