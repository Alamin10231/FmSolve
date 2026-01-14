import React from "react";

const Scrollinlogo = () => {
  return (
    <div>
      <div>
        <div className="pt-10 text-center ">
          <p className="text-xl md:text-2xl text-slate-700 dark:text-white">
            Do You Manage <span className="font-bold">Multiple</span> Sites
            Across These Sectors?
          </p>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex px-5 py-10 space-x-7 animate-loop-scroll whitespace-nowrap">
            {[
              "Hospitality",
              "Healthcare",
              "Education",
              "Local Authority",
              "Social Housing",
              "Transport",
              "Logistics & Distribution",
              "Manufacturing",
              "Corporate Offices",
              "Commercial Real Estate",
              "Leisure & Fitness",
            ].map((sector, idx) => (
              <p
                key={idx}
                className="inline px-4 py-2 border-2 rounded-md text-slate-900 dark:text-white border-slate-900 dark:border-white"
              >
                {sector}
              </p>
            ))}
          </div>

          {/* Duplicate for seamless scroll */}
          <div className="flex px-5 py-10 space-x-7 animate-loop-scroll whitespace-nowrap">
            {[
              "Hospitality",
              "Healthcare",
              "Education",
              "Local Authority",
              "Social Housing",
              "Transport",
              "Logistics & Distribution",
              "Manufacturing",
              "Corporate Offices",
              "Commercial Real Estate",
              "Leisure & Fitness",
            ].map((sector, idx) => (
              <p
                key={idx}
                className="inline px-4 py-2 border-2 rounded-md text-slate-900 dark:text-white border-slate-900 dark:border-white"
              >
                {sector}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollinlogo;
