import React from "react";
import { FiMail, FiMapPin, FiClock, FiMessageSquare, FiCopy } from "react-icons/fi";

function ContactSection() {
  const contactDetails = [
    {
      icon: <FiMessageSquare size={22} />,
      title: "Phone Number",
      value: "+234 800 000 0000",
    },
    {
      icon: <FiMail size={22} />,
      title: "Email Address",
      value: "info@empoweraid.org",
    },

    // {
    //   icon: <FiClock size={22} />,
    //   title: "Working Hours",
    //   value: "Mon –  | 9:00 AM – 5:00 PM",
    // },
  ];

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Contact Us
        </h2>
        <p className="text-slate-600 mb-12">
          Reach out using any of the details below. Click to copy.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex items-start gap-4 group relative"
            >
              {/* Icon */}
              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
                <p className="text-slate-600 mt-1 break-words">{item.value}</p>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => copyText(item.value)}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition"
              >
                <FiCopy size={18} className="text-slate-400 hover:text-green-600" />
              </button>
            </div>
          ))}
        </div>

        {/* Extra Note */}
        <p className="text-sm text-slate-500 mt-12">
          We typically respond within 24 hours.
        </p>
      </div>
    </section>
  );
}

export default ContactSection;