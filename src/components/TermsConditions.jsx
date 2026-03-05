import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  // Helper function for smooth scrolling
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Terms and Conditions</h1>
        <p className="text-slate-500 mb-8 font-medium italic">Effective Date: March 2024</p>

        <section className="space-y-8 text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the EmpowerAid website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Eligibility</h2>
            <p className="mb-4">
              Our grant programs have specific eligibility requirements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Seniors:</strong> Must be aged 41 or older at the time of application.</li>
              <li><strong>Youth:</strong> Must be aged 18–40 at the time of application.</li>
              <li>Applicants must provide truthful and accurate documentation for verification.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Use of Information</h2>
            <p>
              Users agree that any information provided via our <Link to="/apply" onClick={scrollToTop} className="text-green-600 hover:underline">Application Form</Link> or application portals is accurate. Providing false or misleading information will result in immediate disqualification and possible legal action.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Limitation of Liability</h2>
            <p>
              EmpowerAid shall not be held liable for any damages arising out of the use or inability to use the materials on this website, or any delays in the processing of grant applications.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Modifications to Service</h2>
            <p>
              We reserve the right to change, modify, or discontinue any aspect of our grant programs or website at any time without prior notice.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact Information</h2>
            <p>
              For legal inquiries or questions regarding these terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="font-bold text-slate-900">EmpowerAid Legal Department</p>
              <p>Email: info@empoweraid.org</p>
              <p>Address: Washington, DC, USA</p>
            </div>
          </div>
        </section>

        {/* Updated Back to Home Button with Scroll Logic */}
        <div className="mt-12 text-center border-t border-slate-100 pt-8">
          <Link 
            to="/" 
            onClick={scrollToTop}
            className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-block"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;