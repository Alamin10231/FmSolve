import React from 'react'

const Exampletask = () => {
  const tasks = [
    "Stabilising a helpdesk",
    "Implementing a briefing process",
    "Reducing commercial leakage",
    "Improving contractor performance",
    "Fixing response times",
    "Resource allocation redesign",
    "KPI / dashboard build",
    "Operational efficiency uplift"
  ]

  return (
    <section className="w-full py-20 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-5xl px-6 mx-auto text-center">
        
        <h2 className="mb-4 text-4xl font-bold md:text-5xl text-slate-900 dark:text-white">
          Example Task Types
        </h2>
        
        <p className="mb-12 text-lg text-slate-500 dark:text-slate-400">
          Pricing provided after diagnostic:
        </p>

        <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto md:grid-cols-2">
          {tasks.map((task, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 text-left transition-all border rounded-xl bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 hover:border-blue-500"
            >
              <div className="flex items-center justify-center w-6 h-6 text-xs font-bold text-blue-500 border-2 border-blue-500 rounded-full">
                ✓
              </div>
              <span className="text-base font-semibold text-slate-800 dark:text-slate-200">
                {task}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Exampletask