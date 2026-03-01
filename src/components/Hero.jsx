import React from 'react'

import { Link } from "react-router-dom";

const Hero = ({ backgroundImage }) => {
  return (
    <section
      className="relative h-[85vh] md:h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Empowering Your Future <br className="hidden md:block" />
          Supporting Your Dreams
        </h1>

        <p className="text-sm md:text-lg mb-8 text-gray-200">
          Providing financial assistance to business owners, individuals,
          and retirees to strengthen our economy and reduce poverty.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 transition duration-300 px-8 py-4 rounded-lg text-white font-semibold shadow-lg"
        >
          Click Here to Contact Us and Apply
        </Link>
      </div>
    </section>
  );
};

export default Hero;