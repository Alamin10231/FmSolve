import React from 'react';
import sideimage from "../../../assets/images/image 26.svg";
import search from "../../../assets/icons/ic_round-search.svg";
import questionline from "../../../assets/icons/ri_question-line.svg";
import lightbulb from "../../../assets/icons/heroicons_light-bulb.svg";
import exitbroken from "../../../assets/icons/solar_exit-broken.svg";
const HeroSection = () => {
  const features = [
    {
      title: "fmsolve Discovery",
      desc: "Book a discovery call to understand your operational challenges",
      icon: search,
      bgColor: "bg-blue-600",
    },
    {
      title: "fmsolve Problem",
      desc: "Diagnose what's broken across your FM operations",
      icon: questionline,
      bgColor: "bg-pink-600",
    },
    {
      title: "fmsolve Solution",
      desc: "Senior FM professionals step in with fixes and actions",
      icon: lightbulb,
      bgColor: "bg-blue-500",
    },
    {
      title: "fmsolve Exit",
      desc: "Hand back control. Your team runs it from here",
      icon: exitbroken,
      bgColor: "bg-green-500",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0a0e14] min-h-screen text-gray-900 dark:text-white p-6 md:p-16">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col items-start justify-between gap-8 mb-16 md:flex-row">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Problem. Solution. Exit. <br />
              <span className="text-blue-500">The FmSolve Way</span>
            </h1>
          </div>
          
          <div className="max-w-sm">
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              A proven process that gets your operations back on track, then hands back control to your team.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#f15a22] hover:bg-[#d84e1a] px-6 py-3 rounded-lg font-semibold flex items-center transition-all">
                See How it Work <span className="ml-2">→</span>
              </button>
              <button className="px-6 py-3 font-semibold transition-all border border-gray-700 rounded-lg dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                Book a Clarity Call
              </button>
            </div>
          </div>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 transition-all border bg-gray-100/5 dark:bg-gray-900 border-gray-300/10 dark:border-gray-800 rounded-2xl hover:border-gray-400 dark:hover:border-gray-600 group"
              >
                <div className={`${item.bgColor} w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-xl"><img src={item.icon} alt={item.title} /></span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
                <button className="text-sm font-semibold hover:underline decoration-blue-500">
                  Learn more
                </button>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden shadow-2xl rounded-3xl">
            <img
              src={sideimage}
              alt="Office Environment"
              className="w-full h-[500px] object-cover opacity-80"
            />

            <div className="absolute inset-0 p-8">
               <span className="absolute px-4 py-1 text-xs font-bold bg-blue-600 rounded-full shadow-lg top-10 left-1/4">Operations</span>
               <span className="absolute px-4 py-1 text-xs font-bold bg-purple-600 rounded-full shadow-lg top-20 right-10">Commercial</span>
               <span className="absolute px-4 py-1 text-xs font-bold bg-orange-500 rounded-full shadow-lg bottom-1/2 left-10">Supply Chain</span>
               <span className="absolute px-4 py-1 text-xs font-bold bg-pink-600 rounded-full shadow-lg bottom-1/3 right-4">Operational HR</span>
               <span className="absolute px-4 py-1 text-xs font-bold bg-green-500 rounded-full shadow-lg bottom-20 left-1/3">Performance</span>
               <span className="absolute px-4 py-1 text-xs font-bold rounded-full shadow-lg bottom-10 right-1/4 bg-cyan-500">Technology</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
