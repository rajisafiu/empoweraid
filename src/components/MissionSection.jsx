import React from "react";
import { HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineLightBulb } from "react-icons/hi";

const ValueCard = ({ icon, title, description }) => (
  <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="mb-5 flex items-center justify-center w-14 h-14 mx-auto rounded-2xl bg-slate-50 text-green-600 text-3xl transition-all duration-300 group-hover:bg-black group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const GrantMission = () => {
  const values = [
    {
      icon: <HiOutlineSparkles />,
      title: "Focused Purpose",
      description: "Targeted grants for entrepreneurs in underserved communities.",
    },
    {
      icon: <HiOutlineShieldCheck />,
      title: "Secure Process",
      description: "Fully transparent workflows ensuring trust and accountability.",
    },
    {
      icon: <HiOutlineUserGroup />,
      title: "Community Growth",
      description: "Investing locally to create sustainable economic impact.",
    },
    {
      icon: <HiOutlineLightBulb />,
      title: "Future Stability",
      description: "Helping recipients achieve long-term financial independence.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-3xl text-black uppercase tracking-tighter mb-6">
            Our Mission.
          </h1>
          <div className="h-2 w-24 bg-green-500 mx-auto mb-8 rounded-full"></div>
          
          <h2 className="max-w-3xl mx-auto text-2xl md:text-3xl font-medium text-slate-900 leading-tight mb-6">
            Supporting Grants. <span className="text-slate-400">Empowering People.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-500 text-lg italic border-l-4 border-slate-200 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            "Our foundation bridges financial gaps with absolute transparency, 
            ensuring every dollar empowers real lives."
          </p>
        </div>

        {/* 🛠️ The Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrantMission;