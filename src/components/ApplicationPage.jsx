

import React, { useState } from "react";
import { FiSend, FiCheckCircle, FiHome } from "react-icons/fi";

function ApplicationPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    occupation: "",
    income: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Processing your application..." });

    const FORMSPREE_URL = "https://formspree.io/f/xgoljnar";

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your application has been sent. We will review it and get back to you shortly.",
        });
        setFormData({
          name: "", dob: "", phone: "", email: "", address: "", occupation: "", income: "", message: "",
        });
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Oops! There was a problem. Please try again or contact support.",
      });
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Grant Application Form
          </h1>
          <p className="text-slate-600 text-lg">
            Please fill in the details accurately to ensure a smooth verification process.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
          
          {/* Status Messages */}
          {status.message && (
            <div className={`mb-8 p-4 rounded-xl flex items-center gap-3 text-sm font-semibold transition-all ${
              status.type === "error" 
                ? "bg-red-50 text-red-700 border border-red-100" 
                : "bg-green-50 text-green-700 border border-green-100"
            }`}>
              {status.type === "success" && <FiCheckCircle size={20} />}
              {status.message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name *</label>
                <input 
                  type="text" name="name" placeholder="Enter your full name" 
                  value={formData.name} onChange={handleChange} required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Date of Birth *</label>
                <input 
                  type="date" name="dob" 
                  value={formData.dob} onChange={handleChange} required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address *</label>
                <input 
                  type="email" name="email" placeholder="name@example.com" 
                  value={formData.email} onChange={handleChange} required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number *</label>
                <input 
                  type="tel" name="phone" placeholder="+1 (000) 000-0000" 
                  value={formData.phone} onChange={handleChange} required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Home Address *</label>
              <input 
                type="text" name="address" placeholder="Street, City, State, ZIP Code" 
                value={formData.address} onChange={handleChange} required 
                className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 outline-none transition-all bg-slate-50/50" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Occupation *</label>
                <input 
                  type="text" name="occupation" placeholder="Your current job" 
                  value={formData.occupation} onChange={handleChange} required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Monthly Income *</label>
                <input 
                  type="text" name="income" placeholder="e.g. $2,500" 
                  value={formData.income} onChange={handleChange} required 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-green-500 outline-none transition-all bg-slate-50/50" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">How can this grant help you? *</label>
              <textarea 
                name="message" 
                placeholder="Tell us how we can help you or provide additional details..." 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full border border-slate-200 rounded-xl px-4 py-3.5 h-32 focus:ring-2 focus:ring-green-500 outline-none transition-all bg-slate-50/50 resize-none" 
              />
            </div>

            <button 
              type="submit" 
              disabled={status.type === "loading"} 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold py-4 rounded-xl transition-all shadow-lg shadow-green-200 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
            >
              {status.type === "loading" ? "Submitting..." : <><FiSend /> Submit Application</>}
            </button>
          </form>
        </div>

        {/* Back to Home Button - Placed below the form */}
        <div className="flex flex-col items-center mt-12 gap-4">
          <a 
            href="/" 
            className="flex items-center gap-2 text-slate-400 hover:text-green-600 font-bold transition-all group"
          >
            <FiHome size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            <span>Return to Homepage</span>
          </a>
          <p className="text-slate-300 text-xs uppercase tracking-widest font-bold">
            EmpowerAid © 2026
          </p>
        </div>

      </div>
    </section>
  );
}

export default ApplicationPage;