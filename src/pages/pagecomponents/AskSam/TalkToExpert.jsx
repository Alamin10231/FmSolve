import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const TalkToExpert = () => {
  return (
    <div className="w-full font-sans bg-white text-slate-900 dark:bg-[#0b0f1a] dark:text-white">
      
      {/* Help Finding Issue Section */}
      <section className="px-6 py-20 text-center border-b border-slate-300 dark:border-slate-800">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Need Help Finding Your Issue?
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-slate-600 dark:text-slate-400">
          Our team can help identify the right diagnostic for your situation.
        </p>

        <Link to="/contact">
          <Button className="flex items-center gap-2 px-8 py-6 mx-auto font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700">
            Talk to an Expert <ArrowRight size={18} />
          </Button>
        </Link>
      </section>

    </div>
  );
};

export default TalkToExpert;
