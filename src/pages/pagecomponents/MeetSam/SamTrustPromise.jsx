import { LucideCheckCircle2, LucideXCircle } from "lucide-react";
import React from "react";
import { LuHeart } from "react-icons/lu";

const SamTrustPromise = () => {
  const whatSamIsnt = [
    "Not a generic chatbot",
    "Not replacing humans",
    "Not guessing AI answers",
    "Not theoretical consultant jargon",
  ];

  const samsPromise = [
    "No judgement",
    "No jargon",
    "No hard sell",
    "Just clarity",
    "Practical help — instantly",
    "Always friendly",
    "Always professional",
  ];

  return (
    <section className="bg-white dark:bg-[#080C16] py-20 px-6 font-inter transition-colors duration-300">
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        <div className="bg-slate-50 dark:bg-[#0d121f] border border-slate-200 dark:border-white/5 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              What Sam Isn't
            </h2>
            <p className="mb-8 text-sm text-slate-500 dark:text-white/40">
              To keep trust transparent:
            </p>
            <ul className="space-y-5">
              {whatSamIsnt.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-slate-700 dark:text-white/80"
                >
                  <LucideXCircle className="flex-shrink-0 text-xl text-red-500" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 mt-12 border-t border-slate-200 dark:border-white/10">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-white/60">
              Sam's core intelligence comes from humans, not AI. <br />
              AI only helps when your challenge isn't yet in the library.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-[#0d121f] border border-slate-200 dark:border-white/5 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LuHeart className="text-red-500 fill-red-500" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Sam's Promise to You
              </h2>
            </div>
            <ul className="space-y-5">
              {samsPromise.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-slate-700 dark:text-white/80"
                >
                  <LucideCheckCircle2 className="flex-shrink-0 text-xl text-emerald-500" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 mt-12 border-t border-slate-200 dark:border-white/10">
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
              Sam exists to make your FM life easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamTrustPromise;
