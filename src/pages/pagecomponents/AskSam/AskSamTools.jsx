import React from "react";
import { Button } from "@/components/ui/button";
import {
  Book,
  BarChart3,
  Zap,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Bullet = ({ icon: Icon, text }) => (
  <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
    <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
    <span>{text}</span>
  </li>
);

const AskSamTools = () => {
  return (
    <section className="w-full py-20 bg-white text-slate-900 dark:bg-[#0b0f1a] dark:text-white">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-3 text-3xl font-black tracking-tight text-center">
          Two Powerful Tools. One Search.
        </h2>

        <p className="max-w-2xl mx-auto mb-12 text-center text-slate-600 dark:text-slate-300">
          We've built the most comprehensive FM knowledge system in the
          industry. Tell us your problem — we'll find the right solution.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* FM Answers */}
          <div className="p-8 border border-blue-200 rounded-2xl bg-blue-50 dark:bg-blue-900/10 dark:border-blue-800/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-lg bg-blue-600/15 dark:text-blue-400">
                <Book className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">FM Answers</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Fast Fixes & Expert Guidance
                </p>
              </div>
            </div>

            <p className="mb-4 text-3xl font-black text-blue-600 dark:text-blue-400">
              10,000+
            </p>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              curated answers
            </p>

            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Immediate answers to operational questions. Best practices, quick
              fixes, and actionable guidance — researched and written by FM
              experts.
            </p>

            <ul className="mb-8 space-y-2">
              <Bullet icon={Zap} text="Instant answers to common problems" />
              <Bullet icon={Lightbulb} text="Level 4 deep–dive insights" />
              <Bullet icon={CheckCircle2} text="Industry best practices" />
            </ul>

            <Link to="/ask-sam/fm-answers">
              <Button
                variant="outline"
                className="w-full gap-2 text-slate-900 border-slate-300 hover:bg-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Browse FM Answers
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Stability Reports */}
          <div className="p-8 border border-orange-200 rounded-2xl bg-orange-50 dark:bg-orange-900/10 dark:border-orange-800/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 text-orange-600 rounded-lg bg-orange-600/15 dark:text-orange-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Stability Reports</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Deep Diagnostics & Action Plans
                </p>
              </div>
            </div>

            <p className="mb-4 text-3xl font-black text-orange-600 dark:text-orange-400">
              5,000+
            </p>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              diagnostic scenarios
            </p>

            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Comprehensive diagnostic reports for complex challenges. Risk
              assessments, root cause analysis, and structured action plans.
            </p>

            <ul className="mb-8 space-y-2">
              <Bullet icon={AlertTriangle} text="Risk level assessment" />
              <Bullet icon={Zap} text="Immediate action priorities" />
              <Bullet icon={LineChart} text="KPIs and benchmarks" />
            </ul>

            <Link to="/ask-sam/stability-reports">
              <Button
                variant="outline"
                className="w-full gap-2 text-slate-900 border-slate-300 hover:bg-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Explore Stability Reports
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 mt-10 text-center border rounded-2xl bg-slate-100 border-slate-300 dark:bg-slate-900/20 dark:border-slate-700/30">
          <p className="mb-2 font-semibold text-slate-900 dark:text-white">
            Can't find what you need?
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            If your specific issue isn't in our curated library, we'll
            synthesise a custom answer or generate a tailored Stability Report.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AskSamTools;
