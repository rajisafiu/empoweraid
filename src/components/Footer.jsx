import React from 'react'

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            EmpowerAid Foundation
          </h3>
          <p className="text-sm leading-relaxed">
            Supporting individuals, business owners, and retirees with
            financial assistance to strengthen the economy and reduce poverty.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact Us
          </h3>
          <p className="text-sm mb-2">
            📞 Phone: +1 800 123 4567
          </p>
          <p className="text-sm mb-2">
            📧 Email: support@empoweraid.org
          </p>
          <p className="text-sm">
            Text us directly for application assistance and inquiries.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EmpowerAid Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;