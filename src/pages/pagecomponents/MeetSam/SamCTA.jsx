import React from "react";
import manimage from "../../../assets/images/Sam.svg";

const SamCTA = () => {
  return (
    <section className="w-full py-16 bg-slate-50 dark:bg-[#0b1220] font-inter">
      <div className="max-w-xl px-6 mx-auto text-center">
        <div className="flex items-center justify-center mx-auto mb-4 overflow-hidden ">
          <img src={manimage} alt="Sam" className="object-contain " />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Start Using Sam
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Describe your FM challenge — Sam will handle the rest.
        </p>

        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-orange-600 rounded-lg shadow hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-[#0b1220]"
          >
            Ask Sam a Question
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SamCTA;
