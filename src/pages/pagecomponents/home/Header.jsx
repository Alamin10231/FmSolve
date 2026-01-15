import { Button } from "@/components/ui/button";
import React from "react";
import { Link, useParams } from "react-router";

const HEADER_CONTENT = {
  "operational-delivery": {
    description:
      "A virtual bench of proven SMT professionals. No Contracts. Real Impact. Senior Firepower On Demand.",
  },
  "commercial-strategy": {
    description:
      "Elite senior leadership expertise delivered exactly when you need it—without long-term commitments.",
  },
  "supply-chain": {
    description:
      "On-demand strategic minds helping founders solve critical challenges and scale with confidence.",
  },
  "operational-hr": {
    description:
      "Experienced operators who step in fast, fix what matters, and drive measurable outcomes.",
  },
  "performance-kpis": {
    description:
      "A flexible leadership model designed for startups that need results, not overhead.",
  },
  "data-technology": {
    description:
 "Real-world leadership, real impact—available exactly when your business needs it.",
  },
};

const Header = () => {
  const { id } = useParams();

  // fallback to first item if route doesn't match
  const headerdata =
    HEADER_CONTENT[id] ||
    Object.values(HEADER_CONTENT)[0];

  return (
    <div className="w-full px-4 pt-24 dark:bg-[#0b0f1a] transition-colors duration-300">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-7xl">
          Problem. Solution. Exit.
        </h1>

        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-700 dark:text-slate-200">
          {headerdata.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-3">
          <Button className="w-full px-6 py-2 text-black duration-300 border rounded dark:text-white bg-secondary sm:w-auto hover:bg-transparent hover:text-blue-600 dark:hover:text-white dark:hover:border-white">
            Book a Clarity Call
          </Button>

          <Link to="/contact">
            <Button className="w-full px-6 py-2 text-black duration-300 border-blue-600 rounded dark:text-white bg-secondaryborder sm:w-auto hover:bg-transparent hover:text-blue-600 dark:hover:text-white dark:hover:border-white">
              Contact the Team →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
