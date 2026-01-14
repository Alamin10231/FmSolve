import { Button } from "@/components/ui/button";
import React from "react";
import avatar1 from "../../../assets/images/image 33.svg";
import avatar2 from "../../../assets/images/image 32.svg";
import avatar3 from "../../../assets/images/image 31.svg";
import avatar4 from "../../../assets/images/image 30.svg";
import avatar5 from "../../../assets/images/image 29.svg";
import avatar6 from "../../../assets/images/image 34.svg";

const TeamSection = () => {
  const associates = [
    {
      name: "Sarah Mitchell",
      role: "Operations Director",
      desc: "20+ years leading FM teams. Crisis management specialist.",
      tag: "Operational Leadership",
      img: avatar1,
    },
    {
      name: "James Thompson",
      role: "Commercial Lead",
      desc: "Contract negotiation expert. Maximises value from every deal.",
      tag: "Commercial Strategy",
      img: avatar2,
    },
    {
      name: "Michael Roberts",
      role: "Procurement Director",
      desc: "Supply chain optimisation. Contractor management expert.",
      tag: "Supply Chain & Contractors",
      img: avatar3,
    },
    {
      name: "David Clarke",
      role: "HR Operations Lead",
      desc: "Team restructuring. Performance management specialist.",
      tag: "Operational HR",
      img: avatar4,
    },
    {
      name: "Lisa Chen",
      role: "Performance Analyst",
      desc: "KPI frameworks. Data-driven performance improvement.",
      tag: "Performance & KPIs",
      img: avatar5,
    },
    {
      name: "Emma Clarke",
      role: "Technology Director",
      desc: "CAFM systems. Digital transformation specialist.",
      tag: "Data & Technology",
      img: avatar1,
    },
  ];

  return (
    <section className=" bg-gray-50 dark:bg-[#0a0e14]">
      <div className="mx-auto text-center max-w-7xl">

        {/* Header */}
        <div className="mb-16">
          <span className="px-4 py-1 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 border border-blue-300 rounded-full dark:text-blue-400 dark:bg-blue-500/20 dark:border-blue-500/30">
            Our Team
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Meet Your FmResolve Associates
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-500">
            Your On-Demand FM Leadership Team
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {associates.map((person, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 flex flex-col items-center transition-all hover:shadow-xl"
            >
              <div className="w-32 h-32 mb-6 overflow-hidden border-4 border-gray-200 rounded-full dark:border-gray-800 grayscale group-hover:grayscale-0">
                <img src={person.img} alt={person.name} className="object-cover w-full h-full" />
              </div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {person.name}
              </h4>
              <p className="mt-1 mb-4 text-xs font-bold text-gray-500 uppercase">
                {person.role}
              </p>
              <p className="h-12 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {person.desc}
              </p>

              <div className="w-full mt-8">
                <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 py-2 rounded-lg text-[10px] font-bold border border-blue-200 dark:border-blue-500/10 mb-4">
                  {person.tag}
                </div>
                <button className="w-full bg-[#f15a22] hover:bg-[#d84e1a] text-white py-3 rounded-xl font-bold transition-all">
                  Book a Clarity Call
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mt-24">
          <p className="text-xl italic font-medium text-gray-700 dark:text-gray-300">
            "FmSolve gave us the senior FM expertise we needed without the six-month recruitment process."
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <img src={avatar6} className="w-10 h-10 border rounded-full" alt="Client" />
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                James Richardson
              </p>
              <p className="text-[10px] font-bold uppercase text-gray-500">
                Operations Director
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="w-full px-6 py-20 mt-10 text-center bg-blue-500">
        <h2 className="py-5 text-3xl font-bold text-white md:text-4xl">
          Ready to transform your FM operations?
        </h2>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#0a192f] hover:bg-[#060e1d] text-white px-8 py-4 rounded-xl">
            Get Started Free →
          </Button>
          <Button className="px-8 py-4 text-white bg-transparent border-white rounded-xl">
            Contact Sales
          </Button>
        </div>
      </section>
    </section>
  );
};

export default TeamSection;
