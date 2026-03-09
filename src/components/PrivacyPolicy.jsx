import React from 'react';
import { Link } from 'react-router-dom'; // Added this import

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-slate-500 mb-8 font-medium italic">Last Updated: March 2024</p>

        <section className="space-y-8 text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p className="mb-4">
              When you use our website or apply for our programs, we may collect personal information that identifies you, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Data:</strong> Name, email address, phone number, and mailing address.</li>
              <li><strong>Verification Data:</strong> Age or date of birth (to confirm eligibility for Senior or Youth programs).</li>
              <li><strong>Financial Data:</strong> Information required to process grant applications and facilitate fund transfers.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Process and evaluate your grant applications.</li>
              <li>Communicate with you regarding your status via email, whatsaap or SMS.</li>
              <li>Improve our website functionality and user experience.</li>
              <li>Prevent fraudulent activity and ensure the security of our community.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Sharing and Disclosure</h2>
            <p>
              We do <strong>not</strong> sell, trade, or rent your personal identification information to others. We may share information with trusted third-party service providers (such as payment processors or verification services) solely to help us operate our business and provide services to you.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures, including <strong>SSL encryption</strong>, to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete your personal data. If you wish to exercise these rights, please contact us at the email provided below.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="font-bold">EmpowerAid Support Team</p>
              <p>Email: privacy@empoweraid.site</p>
              <p>Phone: +1 618 681 7034</p>
            </div>
          </div>
        </section>

        {/* Added Back to Home Button */}
        <div className="mt-12 text-center border-t border-slate-100 pt-8">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;