import { Button } from "@/components/ui/button";
import React from "react";
import {
  LuUsers,
  LuBuilding2,
  LuWrench,
  LuTrendingUp,
  LuPhone,
  LuArrowRight,
} from "react-icons/lu";
import { Link } from "react-router";

const WhoWeWorkWith = () => {
  const partners = [
    {
      title: "Internal FM Teams",
      desc: "Need senior capacity to deliver more, faster — without adding headcount",
      icon: <LuUsers />,
      iconBg: "bg-blue-500",
    },
    {
      title: "FM Service Providers",
      desc: "Want specialist support to strengthen contract delivery and impress clients",
      icon: <LuWrench />,
      iconBg: "bg-emerald-500",
    },
    {
      title: "Property & Estates Teams",
      desc: "Looking for task-based expertise to stabilise and improve site operations",
      icon: <LuBuilding2 />,
      iconBg: "bg-amber-500",
    },
    {
      title: "Operations & Commercial Leaders",
      desc: "Need measurable improvements delivered cleanly, working alongside their teams",
      icon: <LuTrendingUp />,
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#05080d] py-20 px-4 font-dmSans">
      <div
        className="
          max-w-6xl mx-auto
          rounded-[2.5rem]
          p-12 md:p-20
          relative overflow-hidden
          bg-white dark:bg-[#0a0f18]/60
          border border-gray-200 dark:border-white/5
        "
      >
        {/* Subtle Background Glow (dark only) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 dark:bg-blue-600/5 blur-[100px] rounded-full"></div>

        <h2 className="mb-16 text-3xl font-bold text-center text-gray-900 dark:text-white md:text-4xl">
          Who We Work With
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 mb-20 md:grid-cols-2 gap-x-12 gap-y-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex gap-5 group">
              <div
                className={`
                  flex-shrink-0 w-12 h-12 rounded-2xl
                  ${partner.iconBg}
                  flex items-center justify-center
                  text-white text-xl shadow-lg
                  transition-transform duration-300
                  group-hover:scale-110
                `}
              >
                {partner.icon}
              </div>

              <div>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {partner.title}
                </h3>
                <p className="max-w-sm text-sm font-medium leading-relaxed text-gray-600 dark:text-slate-400">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="w-full sm:w-auto bg-[#e65100] hover:bg-[#ff6d00] text-white px-8 py-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-950/20 active:scale-95">
            <LuPhone className="text-lg" />
            Book a Clarity Call
          </Button>

          <Link to="/contact">
            <Button className="flex items-center justify-center w-full gap-2 px-8 py-6 font-bold text-gray-900 transition-all bg-transparent border border-gray-300 sm:w-auto dark:text-white dark:border-slate-800 hover:border-gray-500 dark:hover:border-slate-600 rounded-xl active:scale-95 group">
              Contact the Team
              <LuArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoWeWorkWith;
