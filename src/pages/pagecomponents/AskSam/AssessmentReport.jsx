import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Download,
  CalendarCheck,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const strengthLabel = (score) => {
  if (score >= 85)
    return { label: "Strong", color: "text-green-600 dark:text-green-400" };
  if (score >= 70)
    return { label: "Good", color: "text-emerald-600 dark:text-emerald-400" };
  if (score >= 50)
    return { label: "Fair", color: "text-yellow-600 dark:text-yellow-400" };
  return {
    label: "Needs Improvement",
    color: "text-red-600 dark:text-red-400",
  };
};

const Section = ({ title, items, bulletColor }) => (
  <div className="mb-6">
    <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
      {title}
    </h3>
    <div className="space-y-2">
      {items.map((text, idx) => (
        <div key={idx} className="flex items-start gap-2 text-sm">
          <span
            className={`mt-0.5 inline-flex h-2 w-2 rounded-full ${bulletColor}`}
          />
          <span className="text-slate-700 dark:text-slate-300">{text}</span>
        </div>
      ))}
    </div>
  </div>
);

const Card = ({ title, value, subtitle }) => (
  <div className="flex-1 p-4 bg-white border rounded-lg shadow-sm dark:bg-slate-900 border-slate-200 dark:border-slate-800">
    <div className="text-xs text-slate-500 dark:text-slate-400">{title}</div>
    <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
      {value}
    </div>
    {subtitle && (
      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {subtitle}
      </div>
    )}
  </div>
);

const AssessmentReport = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const category = state?.category || "Performance & KPIs";
  const reportName = state?.reportName || `${category} Assessment`;
  const score = Number(state?.score ?? 85);
  // email is present in state but not currently used in this view

  const strength = strengthLabel(score);

  // Example content arrays; can be made category-specific later
  const diagnosis = [
    "Excellent performance management with clear KPIs, robust data, and a strong performance culture. Your measurement approach drives continuous improvement.",
  ];
  const rootCauses = [
    "Well-defined KPI framework aligned to objectives",
    "Reliable data collection and analysis capabilities",
    "Strong performance culture with clear accountability",
  ];
  const quickWins = [
    "Create weekly KPI snapshot for top metrics",
    "Implement traffic-light dashboard for key SLAs",
    "Establish weekly performance review cadence",
    "Set up automated data collection for key metrics",
    "Deploy simple improvement tracker spreadsheet",
  ];
  const priorityActions = [
    "Define comprehensive KPI framework within 4 weeks",
    "Conduct data quality audit and address gaps",
    "Implement structured performance review process",
    "Cascade KPIs to team and individual level",
    "Develop KPI performance reporting pack",
  ];
  const keyImprovements = [
    "Build integrated performance dashboard platform",
    "Develop analytics capability for predictive insights",
    "Create balanced scorecard across all dimensions",
    "Implement continuous improvement programme",
    "Deploy performance management training for managers",
  ];
  const leadershipInsights = [
    "What gets measured gets managed — but measure what matters, not what is easy",
    "Lead with leading indicators — they give you time to act before problems become failures",
    "Performance improves only when actions are tracked — accountability is everything",
    "Your team will focus on what you focus on — celebrate improvements, not just achievements",
  ];

  const kpis = [
    { title: "SLA Compliance", value: "98%" },
    { title: "Data Accuracy", value: "99%+" },
    { title: "Improvement Actions", value: "90% on time" },
    { title: "Client Satisfaction", value: "85%+" },
  ];

  return (
    <div className="w-full min-h-screen my-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="px-4 py-4">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      <div className="max-w-3xl px-4 pb-12 mx-auto">
        <div className="p-4 mb-3 text-sm bg-white border rounded-t-lg dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span className="font-medium">Stability Report</span>
          </div>
        </div>

        <div className="p-6 bg-white border rounded-b-lg shadow-sm dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold">{reportName}</h1>
              <div className="flex items-center gap-3 mt-1 text-xs">
                <span className={`${strength.color} font-semibold`}>
                  {strength.label}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {category}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  Score: {score}%
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold">Diagnosis</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {diagnosis[0]}
            </p>
          </div>

          <div className="mt-6 space-y-6">
            <Section
              title="Root Causes"
              items={rootCauses}
              icon={AlertTriangle}
              bulletColor="bg-orange-400"
            />
            <Section
              title="Quick Wins"
              items={quickWins}
              icon={CheckCircle2}
              bulletColor="bg-yellow-400"
            />
            <Section
              title="Priority Actions"
              items={priorityActions}
              icon={CalendarCheck}
              bulletColor="bg-red-400"
            />
            <Section
              title="Key Improvements"
              items={keyImprovements}
              icon={BarChart3}
              bulletColor="bg-blue-400"
            />
            <Section
              title="Leadership Insights"
              items={leadershipInsights}
              icon={CheckCircle2}
              bulletColor="bg-violet-400"
            />
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold">
              Key Performance Indicators
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {kpis.map((k) => (
                <Card key={k.title} title={k.title} value={k.value} />
              ))}
            </div>
          </div>

          <div className="p-4 mt-6 border rounded-lg bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-medium">
                  Want to unpack this report?
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Book a free 30-minute session with one of our FM experts.
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="mailto:support@fmsolve.com"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-500"
                >
                  <Mail size={16} /> Email Report
                </a>
                <button className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white border rounded hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
                  <Download size={16} /> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentReport;
