

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { FiSend, FiCheckCircle, FiHome, FiAlertCircle, FiX } from "react-icons/fi";

function ApplicationPage() {
  const [formData, setFormData] = useState({
    name: "", dob: "", phone: "", email: "", address: "", occupation: "", income: "", message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (status.message && status.type !== "loading") {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 8000); // Increased to 8 seconds so users have time to read the longer message
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Processing..." });

    try {
      const response = await fetch("https://formspree.io/f/mbdzaqrq", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ 
          type: "success", 
          message: "Application submitted successfully! Our representative will get back to you shortly through text or WhatsApp." 
        });
        setFormData({ name: "", dob: "", phone: "", email: "", address: "", occupation: "", income: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus({ type: "error", message: "Submission failed. Please try again.", err });
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 pt-32 pb-16 px-6">
      <style>{`
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        @keyframes drain { from { width: 100%; } to { width: 0%; } }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
        .animate-drain { animation: drain 8s linear forwards; }
      `}</style>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Grant Application Form
          </h1>
          <p className="text-slate-600 text-lg">
            Please fill in the details accurately for verification.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your full name"
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Date of Birth *</label>
                <input 
                  type="date" 
                  name="dob" 
                  value={formData.dob} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="name@example.com"
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+1 (000) 000-0000"
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1">Home Address *</label>
              <input 
                type="text" 
                name="address" 
                placeholder="Street, City, State, ZIP Code"
                value={formData.address} 
                onChange={handleChange} 
                required 
                className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all bg-slate-50/50" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Occupation *</label>
                <input 
                  type="text" 
                  name="occupation" 
                  placeholder="Your current job"
                  value={formData.occupation} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Monthly Income *</label>
                <input 
                  type="text" 
                  name="income" 
                  placeholder="e.g. $2,500"
                  value={formData.income} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-1">How can this grant help you? *</label>
              <textarea 
                name="message" 
                placeholder="Tell us how we can help you..."
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full border border-slate-200 rounded-xl px-4 py-3.5 h-32 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all bg-slate-50/50 resize-none" 
              />
            </div>

            {/* Submit Button & Success/Error Overlay */}
            <div className="relative mt-4">
              <button 
                type="submit" 
                disabled={status.type === "loading"} 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-green-200 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status.type === "loading" ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <><FiSend /> Submit Application</>
                )}
              </button>

              {status.message && status.type !== "loading" && (
                <div className={`absolute left-0 right-0 top-0 min-h-full z-10 flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-2xl p-6 transition-all ${status.type === "error" ? "bg-red-600 text-white animate-shake" : "bg-green-700 text-white"}`}>
                  <div className="flex flex-col items-center gap-3 font-bold text-center leading-relaxed max-w-md mx-auto">
                    {status.type === "success" ? (
                      <FiCheckCircle size={32} className="shrink-0" />
                    ) : (
                      <FiAlertCircle size={32} className="shrink-0" />
                    )}
                    <p className="text-sm md:text-base">
                      {status.message}
                    </p>
                  </div>
                  
                  <button 
                    type="button" 
                    onClick={() => setStatus({type: "", message: ""})} 
                    className="absolute right-2 top-2 p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <FiX size={20} />
                  </button>
                  
                  <div className="absolute bottom-0 left-0 h-1.5 bg-white/30 animate-drain" />
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="flex flex-col items-center mt-12 gap-4">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-green-600 font-bold transition-all group">
            <FiHome size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            <span>Return to Homepage</span>
          </Link>
          <p className="text-slate-300 text-xs uppercase tracking-widest font-black">EmpowerAid © 2026</p>
        </div>
      </div>
    </section>
  );
}

export default ApplicationPage;