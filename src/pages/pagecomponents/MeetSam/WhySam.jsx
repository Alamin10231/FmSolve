import { LucideBarChart } from "lucide-react";
import React from "react";
import { 
  LuZap, 
  LuShieldCheck, 
  LuTarget, 
  
  LuUsers, 
  LuClock 
} from "react-icons/lu";

const WhySam = () => {
  const reasons = [
    { icon: <LuZap className="text-yellow-500" />, text: "Immediate clarity" },
    { icon: <LuShieldCheck className="text-blue-500" />, text: "Zero jargon" },
    { icon: <LuTarget className="text-orange-500" />, text: "Real solutions" },
    { icon: <LucideBarChart className="text-purple-500" />, text: "Industry benchmarks" },
    { icon: <LuUsers className="text-emerald-500" />, text: "Human, not robotic" },
    { icon: <LuClock className="text-cyan-500" />, text: "Fast & effective" },
  ];

  return (
    <section className="bg-white dark:bg-[#080C16] py-24 px-6 font-inter transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        
      
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Why We Created Sam
        </h2>

   
        <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-slate-600 dark:text-white/50">
          The FM world is full of noise — long meetings, slow responses, 
          outdated processes, and unnecessary complexity.
        </p>

  
        <h3 className="mb-16 text-xl font-bold text-slate-900 dark:text-white">
          We built Sam to change that.
        </h3>

       
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 md:grid-cols-3">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center gap-3 transition-transform group hover:scale-105"
            >
              {/* Icon Container */}
              <div className="text-xl transition-transform md:text-2xl group-hover:rotate-12">
                {item.icon}
              </div>
              
          
              <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-white/80 md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhySam;