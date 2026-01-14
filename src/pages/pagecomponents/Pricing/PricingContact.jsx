import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const PricingContact = () => {
  return (
    <section className="w-full py-24 bg-slate-100 dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-4xl px-6 mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Ready to Get Started?
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-slate-700 dark:text-slate-400 md:text-xl">
          Book a Clarity Call to discuss your challenges and get a tailored
          solution.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="flex items-center w-full gap-2 px-8 py-6 font-bold text-white transition-all bg-blue-600 sm:w-auto hover:bg-blue-700 rounded-xl active:scale-95"
          >
            <Phone className="w-5 h-5" />
            Book a Clarity Call
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex items-center w-full gap-2 px-8 py-6 transition-all bg-transparent sm:w-auto border-slate-700 text-slate-700 dark:text-slate-300 dark:border-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded-xl active:scale-95"
          >
            <Mail className="w-5 h-5" />
            Contact the Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingContact;
