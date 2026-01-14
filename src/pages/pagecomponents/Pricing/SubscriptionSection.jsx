import { Button } from '@/components/ui/button';
import React from 'react';

const SubscriptionSection = () => {
  const plans = [
    {
      title: "Diagnostic & Scoping",
      desc: "Understand the problem, confirm scope, and define the right solution.",
      priceNote: "Fixed diagnostic fee or included depending on task size.",
      label: "DELIVERABLES",
      items: ["Clear diagnosis", "Defined scope of work", "Recommended fix", "Fixed-price quote for delivery"],
      color: "border-blue-500",
      icon: "🔍",
      iconBg: "bg-blue-900/30"
    },
    {
      title: "Remote Consulting (Hourly)",
      desc: "On-demand senior expertise for strategy, reviews, or guidance.",
      priceNote: "Hourly rate, charged per session.",
      label: "USE CASES",
      items: ["Commercial reviews", "Ops strategy sessions", "HR/people issues", "Workflow or document reviews"],
      color: "border-emerald-500",
      icon: "🕒",
      iconBg: "bg-emerald-900/30"
    },
    {
      title: "On-Site Support (Day Rate)",
      desc: "When operational visibility or workshops are required.",
      priceNote: "Simple all-inclusive day rate.",
      label: "USE CASES",
      items: ["Site assessments", "Workshops", "Process observations", "Team performance reviews"],
      color: "border-orange-500",
      icon: "📅",
      iconBg: "bg-orange-900/30"
    },
    {
      title: "Fixed-Price Task Delivery",
      desc: "The core of the service — Problem → Solution → Exit.",
      priceNote: "Agreed fixed price once scope is confirmed.",
      label: "USE CASES",
      items: ["Helpdesk improvements", "Workflow mapping", "KPI framework build", "Contractor optimisation", "Team structure fixes", "Any operational task"],
      color: "border-purple-500",
      icon: "🎯",
      iconBg: "bg-purple-900/30"
    }
  ];

  return (
    <div className="w-full transition-colors duration-300 bg-white dark:bg-slate-950">
      
      {/* 3. SUBSCRIPTION CARDS GRID */}
      <section className="px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div key={index} className={`flex flex-col border-t-4 ${plan.color} bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm`}>
              <div className="flex-grow p-8">
                {/* Icon */}
                <div className={`w-12 h-12 ${plan.iconBg} rounded-lg flex items-center justify-center text-2xl mb-6`}>
                  {plan.icon}
                </div>
                
                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{plan.title}</h3>
                <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">{plan.desc}</p>
                
                {/* Price Note Box */}
                <div className="p-4 mb-8 text-sm font-medium rounded-lg bg-slate-200/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200">
                  {plan.priceNote}
                </div>

         
                <p className="mb-4 text-xs font-bold tracking-widest uppercase text-slate-400">{plan.label}</p>
                <ul className="space-y-3">
                  {plan.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="mt-1 text-blue-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

             
              <div className="p-6 pt-0">
                <Button className="w-full py-4 font-bold text-white transition-colors bg-blue-600 rounded-xl hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SubscriptionSection;