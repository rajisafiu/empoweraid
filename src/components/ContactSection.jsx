import React, { useState } from "react";
import { FiMail, FiMessageSquare, FiClock, FiPhone } from "react-icons/fi";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    occupation: "",
    income: "",
    message: "", // Added message back to state
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    const FORMSPREE_URL = "https://formspree.io/f/xgoljnar";

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Thank you! Your application has been sent. We will get back to you shortly." });
        setFormData({ name: "", dob: "", phone: "", email: "", address: "", occupation: "", income: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus({ type: "error", message: "Oops! There was a problem. Please try again or text us." });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "16402867042"; 
    const message = encodeURIComponent("Hello! I would like to inquire about your grant programs.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 h-fit">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Application Form</h2>
          
          {status.message && (
            <div className={`mb-4 p-3 rounded text-sm font-medium ${
              status.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}>
              {status.message}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name & DOB */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all" />
              <div className="relative">
                <span className="absolute top-1 left-4 text-[10px] text-slate-400 uppercase font-bold">Date of Birth *</span>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full border border-slate-200 rounded-lg px-4 pt-5 pb-2 focus:ring-2 focus:ring-green-500 outline-none transition-all" />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all" />
              <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} required className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all" />
            </div>

            {/* Address */}
            <input type="text" name="address" placeholder="Full Home Address *" value={formData.address} onChange={handleChange} required className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all" />

            {/* Occupation & Monthly Income */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="occupation" placeholder="Occupation *" value={formData.occupation} onChange={handleChange} required className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all" />
              <input type="text" name="income" placeholder="Monthly Income *" value={formData.income} onChange={handleChange} required className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all" />
            </div>

            {/* Message Area - Added Back */}
            <textarea 
              name="message" 
              placeholder="Tell us how we can help you or provide additional details... *" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="w-full border border-slate-200 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-green-500 outline-none transition-all" 
            />

            <button type="submit" disabled={status.type === "loading"} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg active:scale-95 disabled:opacity-50">
              {status.type === "loading" ? "Processing..." : "Submit Application"}
            </button>
          </form>
        </div>

        {/* Right Panel (24/7 Support) */}
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm border border-green-100">
            <div className="flex items-center gap-3 mb-2">
              <FiClock size={22} className="text-green-600" />
              <h3 className="font-semibold text-slate-900 text-lg">Support Availability</h3>
            </div>
            <p className="text-slate-600 font-medium text-lg">Open 24 Hours / 7 Days a week</p>
          </div>

          <div className="space-y-4">
            <div onClick={openWhatsApp} className="flex items-center justify-between bg-white border border-slate-100 p-5 rounded-2xl hover:bg-green-50 transition cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <FiMessageSquare size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Chat on WhatsApp</p>
                  <p className="text-slate-500 text-sm">We are online 24/7</p>
                </div>
              </div>
              <span className="text-slate-300 text-xl group-hover:translate-x-1 group-hover:text-green-600 transition-all">→</span>
            </div>

            <a href="sms:+16402867042" className="flex items-center justify-between bg-white border border-slate-100 p-5 rounded-2xl hover:bg-blue-50 transition cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Text Us Directly</p>
                  <p className="text-slate-500 text-sm">+1 (640) 286-7042</p>
                </div>
              </div>
              <span className="text-slate-300 text-xl group-hover:translate-x-1 group-hover:text-blue-600 transition-all">→</span>
            </a>

            <a href="mailto:info@empoweraid.org" className="flex items-center justify-between bg-white border border-slate-100 p-5 rounded-2xl hover:bg-orange-50 transition cursor-pointer group shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Official Support Email</p>
                  <p className="text-slate-500 text-sm">info@empoweraid.org</p>
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