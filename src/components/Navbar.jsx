import { useState, useEffect } from "react";

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

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offset = -80; // navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        offset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <span className={scrolled ? "text-blue-900" : "text-white"}>
            Empower
          </span>
          <span className="text-green-500">Aid.</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-sm font-semibold transition-colors duration-300 hover:text-green-500 ${
                activeSection === link.id ? "text-green-500" : ""
              }`}
            >
              {link.name}

              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-full" />
              )}
            </button>
          ))}

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white text-slate-900 overflow-hidden transition-all duration-300 border-t border-slate-100 md:hidden ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-lg font-medium hover:text-green-600"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;