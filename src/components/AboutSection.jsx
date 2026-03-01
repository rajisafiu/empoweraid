import React from "react";

const stats = [
  { label: "Grants Awarded", value: "500+" },
  { label: "People Helped", value: "12,000+" },
  { label: "Communities Supported", value: "85+" },
];

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white px-6" id="about">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            About Us
          </h2>
           <div className="h-2 w-24 bg-green-500  mb-8 rounded-full"></div>
          <p className="text-slate-600 text-base mb-6">
            Our foundation has been bridging financial gaps for individuals and communities
            for over a decade. Through transparent grants and strategic support, we ensure
            every investment creates real impact and long-term empowerment.
          </p>
          <p className="text-slate-600 text-base">
            Our unique approach combines community insight, financial expertise, and mentorship
            to transform opportunities into sustainable growth.
          </p>
        </div>

        {/* Right: Impact Stats */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-extrabold text-green-600 mb-2">{stat.value}</h3>
              <p className="text-slate-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;