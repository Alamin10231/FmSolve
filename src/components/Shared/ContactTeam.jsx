import React from "react";
import teampic1 from "../../assets/images/image 21.svg";
import teampic2 from "../../assets/images/Mask group.svg";
import { Button } from "../ui/button";
import { Link } from "react-router";

const ContactTeam = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 py-8 transition-colors dark:bg-black md:justify-center">
      <h1 className="mb-8 font-serif text-2xl italic tracking-wide text-center text-slate-900 dark:text-white md:text-3xl">
        We've Got Your Back
      </h1>

      <div className="flex flex-col items-center w-full h-full max-w-[400px] p-6 text-center bg-white dark:bg-[#0d1b2a] border border-slate-200 dark:border-slate-800 rounded-2xl md:p-8 transition-colors">
        <div className="flex items-center mb-8">
          <div className="z-10 w-16 h-16 overflow-hidden border-2 border-orange-500 rounded-full ">
            <img
              src={teampic1}
              alt="Male Consultant"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="z-0 w-16 h-16 -ml-4 overflow-hidden border-2 border-blue-500 rounded-full">
            <img
              src={teampic2}
              alt="Female Consultant"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white md:text-2xl">
          SMT Support On-Demand
        </h2>

        <p className="px-2 mb-10 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
          Senior FM professionals ready to step in, solve the problem, and hand
          back control.
        </p>

        <Link to="/contact">
          <Button className="relative flex items-center justify-center w-full px-6 py-5 mt-auto font-semibold text-white transition-all top-40 bg-secondary hover:bg-secondary rounded-xl group">
            Contact the Team
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactTeam;
