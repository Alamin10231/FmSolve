import React from 'react'

const WePrice = () => {
  const reasons = [
    {
      title: "Accuracy",
      desc: "We diagnose before we quote",
      icon: "✔️"
    },
    {
      title: "Control",
      desc: "You decide whether to proceed",
      icon: "✔️"
    },
    {
      title: "Predictability",
      desc: "Fixed cost for each task",
      icon: "✔️"
    },
    {
      title: "Speed",
      desc: "No lengthy contracts",
      icon: "✔️"
    },
    {
      title: "Impact-focused",
      desc: "Problem → Solution → Exit",
      icon: "✔️"
    }
  ]

  return (
    <section className="w-full py-20 transition-colors duration-300 bg-white dark:bg-slate-950">
      <div className="px-6 mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-slate-900 dark:text-white">
            Why We Price This Way
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            This model ensures you get:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-8 text-center transition-all border rounded-2xl bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 hover:border-blue-500 group"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 font-bold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                {item.icon}
              </div>
              
              <h4 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h4>
              
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WePrice