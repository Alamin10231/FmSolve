import React from 'react';
import { LuBot } from "react-icons/lu";
import { Button } from '../ui/button';

const Automation = () => {
  return (
    <div className="flex flex-col items-center justify-center 
      bg-white dark:bg-[#05080d] font-dmSans">

      {/* Handwritten Top Text */}
      <div className="relative mb-2">
        <p
          className="text-gray-500 dark:text-[#94a3b8] text-xl font-medium tracking-wide"
          style={{ fontFamily: 'cursive', transform: 'rotate(-2deg)' }}
        >
          Work Smarter, Not Harder
        </p>

        {/* Hand-drawn arrow */}
        <div className="flex justify-center mt-1">
          <svg
            width="20"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-gray-400 dark:text-[#475569]"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 2c0 0-2 8 0 12" />
            <path d="M8 10l4 4 4-4" />
          </svg>
        </div>
      </div>

      {/* Main Card */}
      <div className="
        w-[380px] 
        bg-white dark:bg-[#0a0f18] 
        border border-gray-200 dark:border-gray-800 
        p-10 py-20 
        flex flex-col items-center text-center 
        shadow-2xl
      ">
        
        {/* Robot Icon */}
        <div className="flex items-center justify-center w-20 h-20 mb-8 bg-transparent border-2 rounded-full border-cyan-400">
          <LuBot className="text-3xl text-cyan-400" />
        </div>

        {/* Text Content */}
        <h3 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Explore AI Automation
        </h3>

        <p className="text-gray-600 dark:text-slate-400 
          text-[13px] leading-relaxed mb-10 font-medium">
          Streamline operations with intelligent automation. Reduce manual tasks and boost team productivity.
        </p>

        {/* CTA */}
        <Button className="
          w-full relative top-16 
          bg-[#e65100] hover:bg-[#ff6d00] 
          text-white py-4 mb-2 
          rounded-2xl font-bold text-[15px] 
          flex items-center justify-center gap-2 
          transition-all active:scale-95 group
        ">
          Learn more
          <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
        </Button>
      </div>
    </div>
  );
};

export default Automation;
