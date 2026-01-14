import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Clock,
  FileText,
  Target,
  Phone,
  ClipboardCheck,
  FileSearch,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProcessSection from "../home/ProcessSection";
import TalkToExpert from "./TalkToExpert";

const StabilityReports = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Operational Delivery",
      subtitle: "Task completion, response times, resource utilisation",
    },
    {
      id: 2,
      title: "Commercial Strategy",
      subtitle: "Pricing, margins, contract performance",
    },
    {
      id: 3,
      title: "Supply Chain & Contractors",
      subtitle: "Supplier management, procurement, contractor performance",
    },
    {
      id: 4,
      title: "Operational HR",
      subtitle: "Team capability, retention, training effectiveness",
    },
    {
      id: 5,
      title: "Performance & KPIs",
      subtitle: "Metrics, reporting, performance management",
    },
    {
      id: 6,
      title: "Data & Technology",
      subtitle: "Systems, data quality, digital maturity",
    },
    {
      id: 7,
      title: "Helpdesk",
      subtitle: "Request handling, resolution times, user satisfaction",
    },
    {
      id: 8,
      title: "Service Delivery",
      subtitle: "Service standards, quality assurance",
    },
  ];
  return (
    <div className="w-full font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
   
      <section className="px-6 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl dark:text-white">
           Problem. Solution. Exit.
          </h1>
          <p className="mb-8 text-lg leading-relaxed md:text-xl text-slate-600 dark:text-slate-400">
            A Stability Report quickly diagnoses what's holding your FM
            operation back — and shows you exactly how to fix it.
          </p>
          <p className="mb-10 text-lg font-medium">
            You have a challenge.{" "}
            <span className="text-blue-500 dark:text-blue-400">
              Identify the cause.
            </span>{" "}
            Get clear actions to{" "}
            <span className="font-bold">improve performance.</span>
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <Search
              className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400"
              size={20}
            />
            <Input
              placeholder="Search scenarios... e.g. 'contractor performance', 'staff retention', 'SLA issues'"
              className="w-full pl-12 bg-white border py-7 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-blue-500" /> 5 minutes to
              complete
            </div>
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-blue-500" /> Instant detailed
              report
            </div>
            <div className="flex items-center gap-2">
              <Target size={16} className="text-blue-500" /> Actionable
              recommendations
            </div>
          </div>
        </div>
      </section>
      {/* Browse by Category grid */}

      <section>
        <ProcessSection></ProcessSection>
      </section>
      <section className="px-6 pb-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/survey/${cat.id}`)}
                className="p-5 text-left transition bg-white border dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {cat.subtitle}
                    </p>
                  </div>
                  <span className="text-slate-400">›</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section>
        <TalkToExpert />
      </section>
    </div>
  );
};

export default StabilityReports;
