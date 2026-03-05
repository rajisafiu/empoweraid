

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Added Link
import { FiShield, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Programs", id: "programs" },
  { name: "Testimonials", id: "testimonials" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const location = useLocation();
  const navigate = useNavigate();

  // Handle smooth scroll for the same page
  const scrollToSection = (id) => {
    // If we are NOT on the home page, go home first, then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const offset = -80;
          const y = section.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      // If we ARE on the home page, just scroll
      const section = document.getElementById(id);
      if (section) {
        const offset = -80;
        const y = section.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Only track active section if we are on the home page
      if (location.pathname === "/") {
        navLinks.forEach((link) => {
          const section = document.getElementById(link.id);
          if (!section) return;
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(link.id);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-300 px-6 py-4 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3 text-slate-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2 group"
        >
          <div className="bg-green-500 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-md">
            <FiShield size={24} />
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className={scrolled ? "text-slate-900" : "text-white"}>
              Empower
            </span>
            <span className="text-green-500 text-sm tracking-widest uppercase font-black">Aid.</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-sm font-bold transition-colors duration-300 hover:text-green-500 ${
                activeSection === link.id && location.pathname === "/" ? "text-green-500" : ""
              }`}
            >
              {link.name}
              {activeSection === link.id && location.pathname === "/" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-full" />
              )}
            </button>
          ))}

          {/* Apply Link for Desktop */}
          <Link
            to="/apply"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-200"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
            isOpen ? "bg-green-500 text-white rotate-90 shadow-lg" : "bg-transparent"
          }`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white text-slate-900 overflow-hidden transition-all duration-500 border-t border-slate-100 md:hidden ${
          isOpen ? "max-h-screen opacity-100 py-10 shadow-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-xl font-black text-slate-600 hover:text-green-600"
            >
              {link.name}
            </button>
          ))}
          {/* Apply Link for Mobile */}
          <Link
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="bg-green-600 text-white px-10 py-4 rounded-full font-black shadow-xl shadow-green-100"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;