import React from "react";
import icon1 from "../../../assets/icons/Frame 956.svg";
import icon2 from "../../../assets/icons/Frame 957.svg";
import icon3 from "../../../assets/icons/Frame 958.svg";
import icon4 from "../../../assets/icons/Frame 959.svg";

const ProcessSection = () => {
  const steps = [
    {
      title: "Rapid Diagnosis",
      description:
        "We assess the reality on the ground—no long discovery phases. We find the gap fast.",
      icon: <img src={icon1} alt="Rapid Diagnosis Icon" />,
      color: "border-red-900/50 bg-[#EA580C4D]",
      iconColor: "text-red-500",
    },
    {
      title: "Precision Deployment",
      description:
        "We deploy the exact senior expertise you need—no juniors learning on your time.",
      icon: <img src={icon2} alt="Precision Deployment Icon" />,
      color: "border-orange-900/50 bg-[#FFCC004D]",
      iconColor: "text-orange-500",
    },
    {
      title: "Action",
      description:
        "We execute. We focus on what works in practice, not what looks good on a slide.",
      icon: <img src={icon3} alt="Action Icon" />,
      color: "border-blue-900/50 bg-[#0050FC4D]",
      iconColor: "text-blue-500",
    },
    {
      title: "Impact",
      description:
        "We measure success by one thing: the tangible change delivered to your business.",
      icon: <img src={icon4} alt="Impact Icon" />,
      color: "border-green-900/50 bg-[#34C7594D]",
      iconColor: "text-green-500",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0a0e14] py-20 px-6 text-center">
      <div className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          Accessible. Solution-based. No fluff.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Our process focuses on speed and accuracy.
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-start text-left p-8 rounded-2xl border ${step.color} transition-transform hover:scale-105 dark:bg-transparent`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-black/0  `}
            >
              <span className="text-xl">{step.icon}</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
