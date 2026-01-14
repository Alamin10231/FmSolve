import React from 'react'

const ZeroSurprise = () => {
  const benefits = [
    "No retainers",
    "No open-ended consultancy fees",
    "No hidden extras"
  ]

  return (
    <section className="w-full py-20 transition-colors duration-300 bg-white dark:bg-slate-900 font-DmSans">
      <div className="max-w-5xl px-6 mx-auto text-center">
        
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl text-slate-900 dark:text-white">
          Simple. Transparent. Zero Surprises.
        </h2>

        <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-600 dark:text-slate-400">
          Every organisation is different — size, structure, culture, and complexity vary dramatically. 
          That's why we use a transparent, task-based pricing model:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="px-6 py-2 text-sm font-semibold border rounded-full border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 md:text-base"
            >
              {benefit}
            </div>
          ))}
        </div>

        <p className="text-lg italic font-medium text-slate-500">
          You pay only for what you need, when you need it.
        </p>
      </div>
    </section>
  )
}

export default ZeroSurprise