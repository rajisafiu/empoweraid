
import React from "react";
import { FiMail, FiMessageSquare, FiClock, FiPhone } from "react-icons/fi";

function ContactSection() {
  const whatsappNumber = "+16402867042";
  const whatsappMsg = encodeURIComponent("Hello! I would like to inquire about your grant programs.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600">Have questions? We are here to help you every step of the way.</p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          
          {/* 24/7 Availability - REVERTED TO ORIGINAL COLORS */}
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-2">
              <FiClock size={22} className="text-green-600" />
              <h3 className="font-bold text-slate-900 text-lg">Support Availability</h3>
            </div>
            <p className="text-slate-600 font-medium text-lg">Open 24 Hours / 7 Days a week</p>
          </div>

          {/* Contact Methods */}
          <div className="grid gap-4">
            {/* WhatsApp - Fixed Mouse Cursor */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-slate-100 p-5 rounded-2xl hover:bg-green-50 transition-all group shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <FiMessageSquare size={20} />
                </div>
                <div>
                  <p className="font-black text-slate-900">Chat on WhatsApp</p>
                  <p className="text-slate-500 text-sm">Online 24/7</p>
                </div>
              </div>
              <span className="text-slate-300 text-xl group-hover:translate-x-1 group-hover:text-green-600 transition-all">→</span>
            </a>

            {/* SMS */}
            <a 
              href="sms:+16402867042" 
              className="flex items-center justify-between bg-white border border-slate-100 p-5 rounded-2xl hover:bg-blue-50 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="font-black text-slate-900">Text Us Directly</p>
                  <p className="text-slate-500 text-sm">+16186817034</p>
                </div>
              </div>
              <span className="text-slate-300 text-xl group-hover:translate-x-1 group-hover:text-blue-600 transition-all">→</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@empoweraid.org" 
              className="flex items-center justify-between bg-white border border-slate-100 p-5 rounded-2xl hover:bg-orange-50 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="font-black text-slate-900">Official Support Email</p>
                  <p className="text-slate-500 text-sm">info@empoweraid.site</p>
                </div>
              </div>
              <span className="text-slate-300 text-xl group-hover:translate-x-1 group-hover:text-orange-600 transition-all">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;