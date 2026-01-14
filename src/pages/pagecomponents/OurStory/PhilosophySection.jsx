import React from "react";
import { User, ShieldCheck, TrendingUp } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section
      className="
        w-full py-20
        bg-gray-100 text-gray-900
        dark:bg-[#111827] dark:text-white
      "
    >
      <div className="max-w-6xl px-4 mx-auto text-center">

        {/* Badge */}
        <span
          className="inline-block px-4 py-1 mb-6 text-sm text-gray-600 border border-gray-400 rounded-full  dark:border-gray-600 dark:text-gray-300"
        >
          3. Our Philosophy
        </span>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Operators, not observers.
        </h2>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          We are not traditional consultants. We don’t sell theory. We don’t hide
          behind jargon. We are operators who understand the pressure of the real
          world.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div
            className="
              p-6 rounded-xl
              bg-white shadow
              dark:bg-[#0b1220]
            "
          >
            <User className="mx-auto mb-4 text-blue-500" />
            <h3 className="mb-2 font-semibold">
              We step in
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We integrate with your team immediately. No lengthy onboarding,
              no waiting around.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              p-6 rounded-xl
              bg-white shadow
              dark:bg-[#0b1220]
            "
          >
            <ShieldCheck className="mx-auto mb-4 text-blue-500" />
            <h3 className="mb-2 font-semibold">
              We take ownership
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We don’t just identify problems—we take responsibility for fixing
              them.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              p-6 rounded-xl
              bg-white shadow
              dark:bg-[#0b1220]
            "
          >
            <TrendingUp className="mx-auto mb-4 text-blue-500" />
            <h3 className="mb-2 font-semibold">
              We leave you stronger
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We fix the bottleneck, build the capability, and hand the reins
              back to you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
