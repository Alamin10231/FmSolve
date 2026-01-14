import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    { name: "David Taylor", role: "Operational Delivery", years: 19, color: "border-blue-500", img: "https://i.pravatar.cc/150?u=1" },
    { name: "James Cooper", role: "Commercial", years: 22, color: "border-emerald-500", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Sarah Mitchell", role: "HR", years: 18, color: "border-rose-500", img: "https://i.pravatar.cc/150?u=3" },
    { name: "Michael Thompson", role: "Technology", years: 20, color: "border-cyan-500", img: "https://i.pravatar.cc/150?u=4" },
    { name: "Lisa Chen", role: "Performance", years: 15, color: "border-purple-500", img: "https://i.pravatar.cc/150?u=5" },
    { name: "David Wright", role: "Helpdesk", years: 17, color: "border-indigo-500", img: "https://i.pravatar.cc/150?u=6" },
    { name: "Lisa Davis", role: "Service Delivery", years: 19, color: "border-orange-500", img: "https://i.pravatar.cc/150?u=7" },
    { name: "Sophie Bennett", role: "Client Services", years: 15, color: "border-teal-500", img: "https://i.pravatar.cc/150?u=8" },
    { name: "Kiran Das", role: "Supply Chain", years: 18, color: "border-amber-500", img: "https://i.pravatar.cc/150?u=9" },
  ];

  return (
    <section className="px-4 py-16 transition-colors duration-300 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium border rounded-full border-slate-300 dark:border-slate-700 dark:text-slate-300">
          Our Network
        </span>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl text-slate-800 dark:text-white">
          Senior operators. Real expertise.
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-slate-600 dark:text-slate-400">
          Every FM Solve associate has 15+ years of hands-on FM experience. 
          No juniors, no graduates, no "training on the job."
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Profile Image with Dynamic Border */}
              <div className={`w-24 h-24 rounded-full border-2 ${member.color} p-1 mb-4`}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="object-cover w-full h-full transition-all rounded-full grayscale hover:grayscale-0"
                />
              </div>
              
              {/* Name and Info */}
              <h4 className="font-bold text-slate-800 dark:text-white">
                {member.name}
              </h4>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                {member.role}
              </p>
              
              {/* Year Badge */}
              <span className="px-3 py-1 text-xs font-bold rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {member.years} years
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;