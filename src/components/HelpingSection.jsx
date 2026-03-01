import React from "react";
import { HiOutlineBriefcase, HiOutlineUser, HiOutlineLightBulb } from "react-icons/hi";

const HelpCard = ({ icon, title, description, image }) => (
  <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
    {/* Card Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Card Content */}
    <div className="p-6 text-center">
      <div className="mb-4 flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-green-100 text-green-600 text-2xl transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const HelpingSection = () => {
  const services = [
    {
      icon: <HiOutlineBriefcase />,
      title: "Business Grants",
      description:
        "Funding and capital support to help entrepreneurs grow and expand their businesses.",
      image: "https://townsquare.media/site/675/files/2024/11/attachment-local.jpg?w=780&q=75",
    },
    {
      icon: <HiOutlineUser />,
      title: "Personal Aid",
      description:
        "Financial assistance for individuals and retirees to support daily living and stability.",
      image: "https://plus.unsplash.com/premium_photo-1722686522033-c00f4800aef5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxkZXJseSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      icon: <HiOutlineLightBulb />,
      title: "Youth Empowerment",
      description:
        "Empowering young innovators with startup funds and mentorship opportunities.",
      image: "https://t4.ftcdn.net/jpg/03/70/58/05/360_F_370580513_XcUgp2my5nFne4FeSsNosxQzSHN92ZEQ.jpg",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 px-6">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Helping You Succeed
        </h2>
         <div className="h-2 w-24 bg-green-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-slate-600 text-base">
          We provide structured financial support to empower businesses, individuals, 
          and young innovators across the country.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <HelpCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default HelpingSection;