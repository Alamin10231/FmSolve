import React from "react";
import icon1 from "../../../assets/icons/Frame (1).svg";
import icon2 from "../../../assets/icons/Frame (2).svg";
import icon3 from "../../../assets/icons/Frame (3).svg";
import icon4 from "../../../assets/icons/Frame 955.svg";
import icon5 from "../../../assets/icons/Frame.svg";

const ContinuousImprovement = () => {
  const benefits = [
    {
      title: "Predict risks early",
      icon: icon1,
      color: "bg-orange-500",
    },
    {
      title: "Scale FM output",
      icon: icon5,
      color: "bg-purple-600",
    },
    {
      title: "Boost efficiency",
      icon: icon2,
      color: "bg-blue-600",
    },
    {
      title: "Resolve issues faster",
      icon: icon3,
      color: "bg-orange-600",
    },
    {
      title: "Drive quality outcomes",
      icon: icon4,
      color: "bg-cyan-500",
    },
  ];

  return (
    <section
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 
      bg-white dark:bg-[#0a0e14] transition-colors duration-300"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-purple-500/20">
          <span className="text-2xl text-white">✨</span>
        </div>

        <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Continuous Improvement?
        </h2>

        <h3 className="mb-6 text-4xl font-extrabold text-transparent sm:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
          Can We Teach an Old Dog New Tricks?
        </h3>

        <a
          href="#"
          className="text-sm text-gray-500 underline dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          Learn more about FmSolve&apos;s AI offering
        </a>
      </div>

      {/* Main Content */}
      <div className="grid items-center max-w-6xl gap-10 mx-auto lg:grid-cols-12">
        {/* Benefits */}
        <div className="flex flex-col gap-5 lg:col-span-4">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div
                className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center 
                shadow-lg transition-transform group-hover:scale-110`}
              >
                <img src={item.icon} alt={item.title} className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Card */}
        <div
          className="lg:col-span-8 rounded-3xl border 
          bg-gray-100 dark:bg-[#111827] 
          border-gray-200 dark:border-gray-800 p-1 shadow-xl"
        >
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#1a1f2e]">
            {/* Window Controls */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-2 text-xs tracking-widest text-gray-400 uppercase">
                Stability Report
              </span>
            </div>

            <h4 className="mb-5 text-sm font-bold tracking-wider text-gray-600 uppercase dark:text-gray-300">
              Operational Assessment
            </h4>

            {/* Progress */}
            <div className="mb-6">
              <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-800">
                <div className="h-full w-[75%] bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex justify-between mb-6">
              {["Critical", "Action"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-gray-600 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Notification */}
            <div
              className="mb-6 p-4 rounded-xl border 
              bg-gray-50 dark:bg-[#111827]/50 
              border-gray-200 dark:border-gray-800"
            >
              <span
                className="inline-block mb-3 px-2 py-1 text-[10px] rounded-md 
                bg-emerald-100 dark:bg-emerald-900/30 
                text-emerald-600 dark:text-emerald-400 
                border border-emerald-500/20"
              >
                AI generated contact
              </span>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Your contractor SLA is at risk. Recommend immediate review of
                response times...
              </p>
            </div>
            <button className="px-8 py-2 text-sm font-bold text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 shadow-blue-600/20">
              Update
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuousImprovement;
