import { Button } from "@/components/ui/button";
import React from "react";
import { useParams } from "react-router-dom";

const TeamLead = () => {
  const { id } = useParams();

  const TEAM_LEADS = {
    "operational-delivery": {
      name: "David Taylor",
      role: "Operational Delivery Lead",
      tag: "Operational Delivery",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "David is a seasoned operator with 19 years of experience ensuring operational stability, compliance, and risk reduction across large, multi-site contracts. His specialisms include operational governance, risk, mobilisation, FM auditing, and contract management.",
      ringClass: "border-blue-700",
      chipClass:
        "bg-blue-700/40 border-blue-700 text-blue-300 dark:bg-blue-700/40",
      cardBg: "bg-slate-100 dark:bg-[#293655]",
    },
    "commercial-strategy": {
      name: "Sarah Mitchell",
      role: "Commercial Strategy Lead",
      tag: "Commercial Strategy",
      image:
        "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&q=80&w=400",
      bio: "Sarah specialises in pricing, contract optimisation and margin recovery. She has led commercial turnarounds across complex national contracts.",
      ringClass: "border-purple-700",
      chipClass:
        "bg-purple-700/30 border-purple-700 text-purple-300 dark:bg-purple-700/40",
      cardBg: "bg-slate-100 dark:bg-[#2b2640]",
    },
    "supply-chain": {
      name: "Liam Carter",
      role: "Supply Chain Lead",
      tag: "Supply Chain",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400",
      bio: "Liam drives contractor performance through structured SLAs, compliance audits and fixed-price scopes that boost accountability and speed.",
      ringClass: "border-orange-600",
      chipClass:
        "bg-orange-600/30 border-orange-600 text-orange-300 dark:bg-orange-600/30",
      cardBg: "bg-slate-100 dark:bg-[#3a2d22]",
    },
    "operational-hr": {
      name: "Emma Wilson",
      role: "HR & People Lead",
      tag: "HR & People",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=400",
      bio: "Emma resolves skills gaps and turnover issues with workforce diagnostics, leadership development and targeted retention plans.",
      ringClass: "border-rose-600",
      chipClass:
        "bg-rose-600/30 border-rose-600 text-rose-300 dark:bg-rose-600/30",
      cardBg: "bg-slate-100 dark:bg-[#3a2430]",
    },
    "performance-kpis": {
      name: "James Khan",
      role: "Performance & KPIs Lead",
      tag: "Performance & KPIs",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
      bio: "James builds KPI dashboards and early-warning systems that give real-time visibility and drive faster, data-led decisions.",
      ringClass: "border-emerald-600",
      chipClass:
        "bg-emerald-600/30 border-emerald-600 text-emerald-300 dark:bg-emerald-600/30",
      cardBg: "bg-slate-100 dark:bg-[#1c2f29]",
    },
    "data-technology": {
      name: "Aisha Patel",
      role: "Data & Technology Lead",
      tag: "Data & Technology",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      bio: "Aisha aligns systems, integrations and data quality so your tech stack supports people and processes without friction.",
      ringClass: "border-cyan-600",
      chipClass:
        "bg-cyan-600/30 border-cyan-600 text-cyan-300 dark:bg-cyan-600/30",
      cardBg: "bg-slate-100 dark:bg-[#18333a]",
    },
  };

  const lead = TEAM_LEADS[id] || TEAM_LEADS["operational-delivery"];

  return (
    <div className="bg-slate-50 dark:bg-[#05080d] py-24 px-4 font-dmSans text-slate-900 dark:text-white transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Your {lead.tag} Lead
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {lead.name} leads our {lead.tag} team
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto ${lead.cardBg} border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 text-left shadow-2xl transition-colors`}
        >
          <div className="relative flex-shrink-0">
            <div
              className={`w-48 h-48 rounded-full border-[6px] ${lead.ringClass} overflow-hidden`}
            >
              <img
                src={lead.image}
                alt={lead.name}
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-2 text-3xl font-bold ">{lead.name}</h3>

            <div
              className={`inline-block px-4 py-1.5 rounded-lg  ${lead.chipClass} text-xs text-blue-100
                 font-bold mb-6 border`}
            >
              {lead.tag}
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] mb-8 font-medium">
              {lead.bio}
            </p>

            <Button className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-slate-400 dark:border-slate-700 hover:border-black dark:hover:border-white transition-all text-sm font-bold group">
              Book a Clarity Call
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <p className="mb-6 font-bold text-slate-700 dark:text-white/80">
            Ready to transform your FM operations?
          </p>
          <Button className="bg-[#e65100] hover:bg-[#ff6d00] text-white px-10 py-6 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-950/20 active:scale-95 transition-all">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamLead;
