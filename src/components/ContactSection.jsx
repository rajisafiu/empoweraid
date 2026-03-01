// import React from "react";
// import { FiMail, FiMapPin, FiClock, FiMessageSquare, FiCopy } from "react-icons/fi";

// function ContactSection() {
//   const contactDetails = [
//     {
//       icon: <FiMessageSquare size={22} />,
//       title: "Phone Number",
//       value: "+234 800 000 0000",
//     },
//     {
//       icon: <FiMail size={22} />,
//       title: "Email Address",
//       value: "info@empoweraid.org",
//     },

//     // {
//     //   icon: <FiClock size={22} />,
//     //   title: "Working Hours",
//     //   value: "Mon –  | 9:00 AM – 5:00 PM",
//     // },
//   ];

//   const copyText = (text) => {
//     navigator.clipboard.writeText(text);
//     alert("Copied!");
//   };

//   return (
//     <section id="contact" className="min-h-screen bg-slate-50 py-20 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-slate-900 mb-4">
//           Contact Us
//         </h2>
//         <p className="text-slate-600 mb-12">
//           Reach out using any of the details below. Click to copy.
//         </p>

//         {/* Contact Cards */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {contactDetails.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex items-start gap-4 group relative"
//             >
//               {/* Icon */}
//               <div className="bg-green-100 text-green-600 p-3 rounded-xl">
//                 {item.icon}
//               </div>

//               {/* Content */}
//               <div className="flex-1 text-left">
//                 <h3 className="font-semibold text-slate-800">{item.title}</h3>
//                 <p className="text-slate-600 mt-1 break-words">{item.value}</p>
//               </div>

//               {/* Copy Button */}
//               <button
//                 onClick={() => copyText(item.value)}
//                 className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition"
//               >
//                 <FiCopy size={18} className="text-slate-400 hover:text-green-600" />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Extra Note */}
//         <p className="text-sm text-slate-500 mt-12">
//           We typically respond within 24 hours.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default ContactSection;


import React from "react";
import { FiMail, FiMessageSquare, FiClock } from "react-icons/fi";

function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Message Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Send Us a Message
          </h2>
          <p className="text-slate-600 mb-6">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Your Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email Address *</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="mt-1 w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone Number *</label>
              <input
                type="text"
                placeholder="+1 800 000 0000"
                className="mt-1 w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>

            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Your Message *</label>
              <textarea
                placeholder="Tell us how we can help you..."
                className="mt-1 w-full border border-slate-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Info Panel */}
        <div className="space-y-6">
          {/* Working Hours */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <FiClock size={22} className="text-green-600" />
              <h3 className="font-semibold text-slate-900 text-lg">Working Hours</h3>
            </div>
            <p className="text-slate-600">Everyday : 8:00 AM - 9:00 PM</p>
           
          </div>

          {/* Quick Help Cards */}
          <div className="space-y-4">
            {/* WhatsApp */}
            <div className="flex items-center justify-between bg-green-50 p-4 rounded-2xl hover:bg-green-100 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <FiMessageSquare size={20} className="text-green-600" />
                <div>
                  <p className="font-medium text-slate-900">Chat on WhatsApp</p>
                  <p className="text-slate-600 text-sm">Get instant response</p>
                </div>
              </div>
              <span className="text-green-600 text-xl">→</span>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between bg-blue-50 p-4 rounded-2xl hover:bg-blue-100 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <FiMessageSquare size={20} className="text-blue-600" />
                <div>
                  <p className="font-medium text-slate-900">Text Us</p>
                  <p className="text-slate-600 text-sm">+1 800 000 0000</p>
                </div>
              </div>
              <span className="text-blue-600 text-xl">→</span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between bg-orange-50 p-4 rounded-2xl hover:bg-orange-100 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <FiMail size={20} className="text-orange-600" />
                <div>
                  <p className="font-medium text-slate-900">Email Us</p>
                  <p className="text-slate-600 text-sm">info@empoweraid.org</p>
                </div>
              </div>
              <span className="text-orange-600 text-xl">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;