import React from "react";
import { Button } from "@/components/ui/button";
import manimage from "../../../assets/images/Sam - Your FM Digital Advisor.svg";

const SamHero = () => {
  return (
    <section className=" items-center w-full min-h-screen pt-20 pb-10 overflow-hidden transition-colors duration-300 bg-slate-50 dark:bg-[#080C16]">
      
      <div className="container flex flex-col items-center gap-12 px-6 mx-auto">
        <div className="flex items-end justify-center h-full mb-8">
          <img
            src={manimage}
            alt="Sam FM Sidekick"
            className="z-10 w-full max-w-[400px] md:max-w-[250px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105 "
          />
        </div>
        <div className="z-10 space-y-8 text-center lg:text-left">
          

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Your Always <br /> Available FM <br /> Sidekick
          </h1>

          <p className="max-w-md mx-auto text-lg font-medium leading-relaxed lg:mx-0 text-slate-600 dark:text-white/60">
            Here to simplify facility management. <br />
            Ready to help. Day or night.
          </p>

          <div className="pt-4">
            <Button className="bg-[#f25e1c] hover:bg-[#ff6d2e] text-white px-10 py-8 text-lg font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-600/30 uppercase tracking-wider">
              <span className="mr-3 text-2xl">🧔</span> Ask Sam a Question →
            </Button>
          </div>
        </div>

       
      </div>
      
    </section>
  );
};

export default SamHero;