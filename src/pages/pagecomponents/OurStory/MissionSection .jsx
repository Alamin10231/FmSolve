import React from "react";

const MissionSection = () => {
  return (
    <section
      className="
        w-full py-20
        bg-gray-100 text-gray-900
        dark:bg-gradient-to-b dark:from-[#0b1220] dark:to-[#070b14]
        dark:text-white
      "
    >
      <div className="max-w-5xl px-4 mx-auto text-center">
        
        {/* Badge */}
        <span
          className="inline-block px-4 py-1 mb-6 text-sm text-gray-600 border border-gray-400 rounded-full  dark:border-gray-600 dark:text-gray-300"
        >
          2. The Mission
        </span>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Senior capacity. On demand.
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
          We created a virtual bench of proven SMT professionals—experienced
          operators who step in, individually or as a team, only when needed.
        </p>

        {/* Highlight Box */}
        <div
          className="
            max-w-4xl mx-auto mb-8 p-6 md:p-8 rounded-xl
            bg-white shadow
            dark:bg-[#111827]
          "
        >
          <p className="text-gray-800 dark:text-gray-200">
            Our mission is straightforward: to provide on-demand senior support
            that improves performance, increases capacity, and delivers real
            impact.
          </p>
        </div>

        {/* Footer Line */}
        <p className="text-gray-600 dark:text-gray-400">
          We don’t want to move in. We want to help you stay in control and keep
          moving forward.
        </p>

      </div>
    </section>
  );
};

export default MissionSection;
