import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      title: "Book a Clarity Call",
      desc: "We understand your challenges and confirm if we can help.",
      icon: "📞"
    },
    {
      title: "Diagnostic & Scoping",
      desc: "A short assessment identifies the exact issue and required actions.",
      icon: "📋"
    },
    {
      title: "Receive a Fixed-Price Quote",
      desc: "You'll know the cost, deliverables, and timeline upfront.",
      icon: "📄"
    },
    {
      title: "We Deliver the Task",
      desc: "Fast, senior, and focused on real outcomes.",
      icon: "⚡"
    }
  ]

  return (
    <section className="w-full py-20 transition-colors duration-300 bg-white dark:bg-slate-950">
      <div className="px-6 mx-auto text-center max-w-7xl">
        
        <h2 className="mb-20 text-4xl font-bold md:text-5xl text-slate-900 dark:text-white">
          How It Works
        </h2>

        <div className="relative flex flex-col items-center justify-between gap-12 md:flex-row md:gap-4">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center max-w-[280px]">
              
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-24 h-24 mb-6 text-3xl text-white bg-blue-600 rounded-full shadow-lg shadow-blue-500/20">
                {step.icon}
              </div>

              {/* Step Content */}
              <h4 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {step.title}
              </h4>
              
              <p className="px-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default HowItWorks