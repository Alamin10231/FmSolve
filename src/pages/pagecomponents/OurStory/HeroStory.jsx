import React from "react";
import manimage from "../../../assets/images/Steve Swan - Founder FmSolve.svg";
import { Button } from "@/components/ui/button";

const HeroStory = () => {
  return (
    <div>
      <>
        <section
          className="relative flex items-center w-full min-h-screen pt-20 pb-10 overflow-hidden 
                bg-slate-50 
                dark:bg-[linear-gradient(180deg,#061733_5%,#080C16_100%)] font-DmSans "
        >
          <div className="container grid items-center grid-cols-1 gap-12 px-6 mx-auto lg:grid-cols-2">
            <div className="z-10 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/10 dark:bg-white/10 backdrop-blur-md border border-slate-900/10 dark:border-white/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
                </span>
                Meet Sam
              </div>
              <div>
                <h1>The FM Solve Brand Story</h1>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                Imagine your team getting  senior-level answers in 
                seconds — not days.
              </h1>

              <p className="max-w-md mx-auto text-lg font-medium leading-relaxed lg:mx-0 text-slate-600 dark:text-white/60">
               Expertise on tap. Anytime.
              </p>
              <p className="max-w-md mx-auto text-2xl font-semibold leading-relaxed text-blue-600 font-2xl medium lg:mx-0 dark:text-blue-600">
              Well… now you do.
              </p>

              <div className="pt-6">
                <Button className="bg-secondary hover:bg-[#ff6d2e] text-white px-10 py-8 text-lg font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-600/30 uppercase tracking-wider">
                  <span className="mr-3 text-2xl">🧔</span> Ask Sam a Question →
                </Button>
              </div>
            </div>

            <div className="relative flex items-end justify-center h-full lg:justify-end">
              <img
                src={manimage}
                alt="Sam FM Sidekick"
                className="relative z-10 w-full max-w-[400px] md:max-w-[550px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default HeroStory;
