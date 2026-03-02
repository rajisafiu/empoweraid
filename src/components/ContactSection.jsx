import React, { useState } from "react";
import { FiMail, FiMessageSquare, FiClock, FiPhone } from "react-icons/fi";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    try {
      // Replace with your actual endpoint
      const response = await fetch("https://your-backend-api.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send. Please try again." });
    }
  };

  // Helper for External Links
  const openWhatsApp = () => {
    const phoneNumber = "+16402867042"; // Replace with your digits only
    const message = encodeURIComponent("Hello! I would like to inquire about your grant programs.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Send Us a Message</h2>
          {status.message && (
            <div className={`mb-4 p-3 rounded text-sm ${status.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
              {status.message}
            </div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
            <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
            <textarea name="message" placeholder="Tell us how we can help you... *" value={formData.message} onChange={handleChange} required className="w-full border border-slate-300 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-green-500 outline-none" />
            <button type="submit" disabled={status.type === "loading"} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50">
              {status.type === "loading" ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Right: Info Panel */}
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <FiClock size={22} className="text-green-600" />
              <h3 className="font-semibold text-slate-900 text-lg">Working Hours</h3>
            </div>
            <p className="text-slate-600">Everyday : 8:00 AM - 9:00 PM</p>
          </div>

          <div className="space-y-4">
            {/* WhatsApp Card */}
            <div 
              onClick={openWhatsApp}
              className="flex items-center justify-between bg-green-50 p-4 rounded-2xl hover:bg-green-100 transition cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <FiMessageSquare size={20} className="text-green-600" />
                <div>
                  <p className="font-medium text-slate-900">Chat on WhatsApp</p>
                  <p className="text-slate-600 text-sm">Get instant response</p>
                </div>
              </div>
              <span className="text-green-600 text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>

            {/* SMS Card */}
            <a 
              href="sms:+16402867042" 
              className="flex items-center justify-between bg-blue-50 p-4 rounded-2xl hover:bg-blue-100 transition cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <FiPhone size={20} className="text-blue-600" />
                <div>
                  <p className="font-medium text-slate-900">Text Us</p>
                  <p className="text-slate-600 text-sm">+16402867042</p>
                </div>
              </div>
              <span className="text-blue-600 text-xl group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:info@empoweraid.org" 
              className="flex items-center justify-between bg-orange-50 p-4 rounded-2xl hover:bg-orange-100 transition cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <FiMail size={20} className="text-orange-600" />
                <div>
                  <p className="font-medium text-slate-900">Email Us</p>
                  <p className="text-slate-600 text-sm">info@empoweraid.org</p>
                </div>
              </div>
              <span className="text-orange-600 text-xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;