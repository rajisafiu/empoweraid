import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">EmpowerAid</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;