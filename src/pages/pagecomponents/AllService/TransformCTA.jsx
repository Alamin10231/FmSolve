import { Button } from '@/components/ui/button';
import React from 'react';
import { LuPhone, LuArrowRight } from "react-icons/lu";
import { Link } from 'react-router';

const TransformCTA = () => {
  return (
    <div className="
      py-24 px-4 font-dmSans border-t
      bg-white text-gray-900 border-gray-200
      dark:bg-[#05080d] dark:text-white dark:border-white/5
    ">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Ready to transform your FM operations?
        </h2>
        
        {/* Subtext */}
        <p className="mb-12 text-lg font-medium text-gray-600 dark:text-slate-400 md:text-xl">
          Join hundreds of FM leaders who've streamlined their operations with FmSolve.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="
            w-full sm:w-auto
            bg-[#e65100] hover:bg-[#ff6d00]
            text-white
            px-10 py-6 rounded-xl font-bold
            flex items-center justify-center gap-2
            transition-all shadow-xl shadow-orange-950/20
            active:scale-95
          ">
            <LuPhone className="text-lg" />
            Book a Clarity Call
          </Button>
          
          <Link to="/contact">
          
          <Button className="flex items-center justify-center w-full gap-2 px-10 py-6 font-bold text-gray-900 transition-all bg-transparent border border-gray-300 sm:w-auto dark:text-white dark:border-slate-800 hover:border-gray-500 dark:hover:border-slate-600 rounded-xl active:scale-95 group">
            Contact the Team 
            <LuArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TransformCTA;
