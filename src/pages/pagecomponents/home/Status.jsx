import React from "react";

const Status = () => {
  const stats = [
    { label: "Diagnostic scenarios", value: "500+" },
    { label: "FM knowledge articles", value: "1,000+" },
    { label: "Risk dimensions", value: "8" },
    { label: "AI-powered support", value: "24/7" },
  ];

  return (
    <div>
      <div className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0e14] py-16">
        <div className="grid max-w-6xl grid-cols-2 gap-8 px-6 mx-auto md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="mb-2 text-4xl font-bold text-blue-600 md:text-5xl">
                {stat.value}
              </span>
              <span className="text-xs font-semibold tracking-widest text-gray-700 uppercase dark:text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
