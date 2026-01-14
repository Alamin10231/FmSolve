import { ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Assesment = () => {
  return (
    <div className="w-full lg:w-[450px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl transition-colors ">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-3 text-xs font-medium text-slate-500">
          <span>FmSolve</span>
          <span>|</span>
          <span className="text-blue-600 dark:text-blue-400">
            Stability Reportd
          </span>
        </div>
        <div className="flex items-center gap-2 text-right">
          <CheckCircle2 className="text-emerald-500" size={18} />
          <div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">
              Action Complete
            </p>
            <p className="text-slate-500 text-[10px]">
              Workflow mapping completed
            </p>
          </div>
        </div>
      </div>

      <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
        Operational Efficiency Assessment
      </h2>

      <div className="flex gap-2 mb-6">
        <span className="bg-orange-500/20 text-orange-500 dark:text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded border border-orange-500/30">
          High Risk
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Operational Delivery
        </span>
      </div>

      <div className="mb-8 space-y-4">
        <div>
          <p className="text-blue-600 dark:text-blue-500 text-[10px] font-bold uppercase tracking-wider mb-1">
            Diagnosis
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Site operations showing 18% efficiency gap against benchmarks.
            Process bottlenecks identified in daily task allocation.
          </p>
        </div>

        <div>
          <p className="text-blue-600 dark:text-blue-500 text-[10px] font-bold uppercase tracking-wider mb-2">
            Immediate Actions
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm line-through text-slate-500">
              <div className="flex items-center justify-center w-4 h-4 rounded bg-emerald-500">
                <CheckCircle2 size={12} className="text-white" />
              </div>
              Map current operational workflows
            </div>
            <div className="flex items-center gap-2 text-sm line-through text-slate-500">
              <div className="flex items-center justify-center w-4 h-4 rounded bg-emerald-500">
                <CheckCircle2 size={12} className="text-white" />
              </div>
              Implement daily briefing process
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="w-4 h-4 border rounded border-slate-400 dark:border-slate-600"></div>
              Deploy mobile task management
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="p-3 text-center border rounded-lg bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            72%
          </p>
          <p className="text-slate-500 text-[13px] mb-1 leading-tight">
            Task Completion
          </p>
          <p className="text-emerald-500 text-[13px]">↑ improving</p>
        </div>
        <div className="p-3 text-center border rounded-lg bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            65%
          </p>
          <p className="text-slate-500 text-[13px] mb-1 leading-tight">
            Team Utilisation
          </p>
          <p className="text-emerald-500 text-[13px]">↑ improving</p>
        </div>
        <div className="p-3 text-center border rounded-lg bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            2.4hrs
          </p>
          <p className="text-slate-500 text-[13px] mb-1 leading-tight">
            Response Time
          </p>
          <p className="text-rose-500 text-[13px]">↓ improving</p>
        </div>
      </div>

      <Link to="/ask-sam/stability-reports">
      <button className="flex items-center justify-center w-full gap-2 py-3 font-bold text-white transition-all bg-orange-600 rounded-lg hover:bg-orange-700">
        Get Your Report <ArrowRight size={18} />
       
      </button>
      </Link>
    </div>
  );
};

export default Assesment;
