import React from 'react';
import { LuBot } from "react-icons/lu";
import { Button } from '../ui/button';

const Automation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 transition-colors dark:bg-black">
      <h1 className="mb-8 font-serif text-2xl italic tracking-wide text-center text-slate-900 dark:text-white md:text-3xl">
        Work Smarter, Not Harder
      </h1>

      <div className="flex flex-col items-center w-full h-full max-w-[400px] p-6 text-center bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-slate-800 rounded-2xl md:p-8 transition-colors">
        
        {/* Robot Icon */}
        <div className="flex items-center justify-center w-20 h-20 mb-8 bg-transparent border-2 rounded-full border-cyan-400">
          <LuBot className="text-3xl text-cyan-400" />
        </div>

        {/* Text Content */}
        <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
          Explore AI Automation
        </h2>

        <p className="px-2 mb-10 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
          Streamline operations with intelligent automation. Reduce manual tasks and boost team productivity.
        </p>

        {/* CTA */}
        <Button className="flex items-center justify-center w-full px-6 py-5 mt-auto font-semibold text-white transition-all bg-secondary hover:bg-secondary rounded-xl group">
          Learn more
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </Button>
      </div>
    </div>
  );
};

export default Automation;
