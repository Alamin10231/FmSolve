import React from "react";
import { Scale, Gauge, Users } from "lucide-react";

const SamStatsSection = () => {
  return (
    <section className="
      w-full 
      bg-gray-100 text-gray-900 
      dark:bg-gradient-to-b dark:from-[#0b1220] dark:to-[#0a1020] dark:text-white 
      py-20
    ">
      <div className="max-w-6xl px-4 mx-auto text-center">
        
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-6 text-sm text-gray-600 border border-gray-400 rounded-full  dark:border-gray-600 dark:text-gray-300">
          1. The Origin
        </span>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Real experience. Real frustration. A better way.
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mb-6 text-gray-700  dark:text-gray-300">
          After 30 years of leading operational teams, I realised a simple truth:
          most businesses don’t struggle because they lack talent. They struggle
          because they lack access to the right support at the right time.
        </p>

        <p className="mb-10 text-gray-600 dark:text-gray-400">
          When pressure hits, most teams are left choosing between limited options:
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
          
          <div className="
            rounded-xl p-6 
            bg-white shadow
            dark:bg-[#3a1b25]
          ">
            <Scale className="mx-auto mb-4 text-red-500" />
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Expensive consultants who add theory rather than traction
            </p>
          </div>

          <div className="
            rounded-xl p-6 
            bg-white shadow
            dark:bg-[#3a1b25]
          ">
            <Gauge className="mx-auto mb-4 text-red-500" />
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Slow agencies that overcomplicate simple needs
            </p>
          </div>

          <div className="
            rounded-xl p-6 
            bg-white shadow
            dark:bg-[#3a1b25]
          ">
            <Users className="mx-auto mb-4 text-red-500" />
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Overloaded internal teams trying to do too much with too little
            </p>
          </div>

        </div>

        {/* Footer text */}
        <p className="max-w-4xl mx-auto mb-4 text-gray-700  dark:text-gray-300">
          None of these options give organisations what they genuinely need: fast,
          practical, senior-level support from people who have run operations and
          understand the realities on the ground.
        </p>

        <p className="font-medium text-blue-600 dark:text-blue-500">
          That’s why FM Solve exists.
        </p>

      </div>
    </section>
  );
};

export default SamStatsSection;
