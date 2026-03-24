import React from 'react'
import { Link } from "react-router-dom";

const Hero = ({ backgroundImage }) => {

  // Helper function to ensure the user starts at the top of the contact page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
  <section
      className="relative h-[85vh] md:h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("${backgroundImage}")`,
      }}
    >
      
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
          to="/apply"
          onClick={scrollToTop} // Added smooth scroll logic here
          className="inline-block bg-green-600 hover:bg-green-700 transition duration-300 px-8 py-4 rounded-lg text-white font-semibold shadow-lg"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;