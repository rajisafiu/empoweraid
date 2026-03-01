import React from 'react'

const HelpingSection = () => {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Helping You Succeed
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide structured financial support to empower businesses,
          individuals, and young innovators across the country.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Business */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
          <img
            src="https://townsquare.media/site/675/files/2024/11/attachment-local.jpg?w=780&q=75"
            alt="Business Grants"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Business Grants</h3>
            <p className="text-gray-600">
              Funding and capital support to help entrepreneurs grow and
              expand their businesses.
            </p>
          </div>
        </div>

        {/* Personal Aid */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1722686522033-c00f4800aef5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxkZXJseSUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Personal Aid"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Personal Aid</h3>
            <p className="text-gray-600">
              Financial assistance for individuals and retirees to support
              daily living and stability.
            </p>
          </div>
        </div>

        {/* Youth */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
          <img
            src="https://t4.ftcdn.net/jpg/03/70/58/05/360_F_370580513_XcUgp2my5nFne4FeSsNosxQzSHN92ZEQ.jpg"
            alt="Youth Empowerment"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Youth Empowerment</h3>
            <p className="text-gray-600">
              Empowering young innovators with startup funds and mentorship
              opportunities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HelpingSection;