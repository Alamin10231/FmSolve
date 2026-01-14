import React from 'react'

const Designed = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-4xl px-6 mx-auto text-center">
        
        {/* Building Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 text-blue-500 rounded-xl bg-blue-500/10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-12 h-12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
              <line x1="9" y1="22" x2="9" y2="22"></line>
              <line x1="15" y1="22" x2="15" y2="22"></line>
              <line x1="8" y1="6" x2="8" y2="6"></line>
              <line x1="12" y1="6" x2="12" y2="6"></line>
              <line x1="16" y1="6" x2="16" y2="6"></line>
              <line x1="8" y1="10" x2="8" y2="10"></line>
              <line x1="12" y1="10" x2="12" y2="10"></line>
              <line x1="16" y1="10" x2="16" y2="10"></line>
              <line x1="8" y1="14" x2="8" y2="14"></line>
              <line x1="12" y1="14" x2="12" y2="14"></line>
              <line x1="16" y1="14" x2="16" y2="14"></line>
              <line x1="8" y1="18" x2="8" y2="18"></line>
              <line x1="12" y1="18" x2="12" y2="18"></line>
              <line x1="16" y1="18" x2="16" y2="18"></line>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold md:text-5xl text-slate-900 dark:text-white">
          Designed for Multi–Site Teams
        </h2>

        {/* Body Text */}
        <p className="max-w-2xl mx-auto text-lg leading-relaxed md:text-xl text-slate-600 dark:text-slate-400">
          Whether you manage 10, 50, or 500 locations, this pricing structure keeps everything simple and predictable.
        </p>

      </div>
    </section>
  )
}

export default Designed