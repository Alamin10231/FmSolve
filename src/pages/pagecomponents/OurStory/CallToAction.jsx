import { Button } from '@/components/ui/button';
import React from 'react';

const CallToAction = () => {
  return (
    <section className="px-6 py-20 transition-colors duration-300 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="mb-6 text-3xl font-bold md:text-5xl text-slate-900 dark:text-white">
          Ready to solve your FM challenge?
        </h2>

        {/* Subtext */}
        <p className="mb-10 text-lg leading-relaxed md:text-xl text-slate-600 dark:text-slate-300">
          Start with a free Stability Diagnostic. In 48 hours, you'll have a clear 
          picture of the problem and an action plan to fix it.
        </p>

        {/* Button Container */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          {/* Primary Action Button */}
          <Button className="flex items-center justify-center w-full gap-2 px-8 py-5 font-semibold text-white transition-all bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 shadow-orange-500/30 sm:w-auto">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Book a Clarity Call
          </Button>

          {/* Secondary Action Button */}
          <Button className="flex items-center justify-center w-full gap-2 px-8 py-5 font-semibold transition-all rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white sm:w-auto">
            Run Free Diagnostic
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
          
        </div>
      </div>
    </section>
  );
};

export default CallToAction;