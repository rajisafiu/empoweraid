// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FiShield, FiMenu, FiX } from "react-icons/fi";

// const navLinks = [
//   { name: "Home", id: "home" },
//   { name: "Programs", id: "programs" },
//   { name: "Testimonials", id: "testimonials" },
//   { name: "About", id: "about" },
//   { name: "Contact", id: "contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
  
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Force solid style if scrolled OR if on any page other than Home
//   const isSolid = scrolled || location.pathname !== "/";

//   const scrollToSection = (id) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         const section = document.getElementById(id);
//         if (section) {
//           const y = section.getBoundingClientRect().top + window.scrollY - 80;
//           window.scrollTo({ top: y, behavior: "smooth" });
//         }
//       }, 150);
//     } else {
//       const section = document.getElementById(id);
//       if (section) {
//         const y = section.getBoundingClientRect().top + window.scrollY - 80;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
      
//       if (location.pathname === "/") {
//         navLinks.forEach((link) => {
//           const section = document.getElementById(link.id);
//           if (!section) return;
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 120 && rect.bottom >= 120) {
//             setActiveSection(link.id);
//           }
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location.pathname]);

//   return (
//     <nav
//       className={`fixed w-full top-0 z-[100] transition-all duration-300 px-6 py-4 ${
//         isSolid
//           ? "bg-white/95 backdrop-blur-md shadow-sm py-3 text-slate-900"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <button
//           onClick={() => scrollToSection("home")}
//           className="text-2xl font-bold tracking-tighter flex items-center gap-2 group"
//         >
//           <div className="bg-green-500 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-md">
//             <FiShield size={24} />
//           </div>
//           <div className="flex flex-col leading-none text-left">
//             <span className={`font-black ${isSolid ? "text-slate-900" : "text-white"}`}>
//               Empower
//             </span>
//             <span className="text-green-500 text-xs tracking-[0.2em] uppercase font-black">
//               Aid.
//             </span>
//           </div>
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-10">
//           {navLinks.map((link) => (
//             <button
//               key={link.name}
//               onClick={() => scrollToSection(link.id)}
//               className={`relative text-sm font-bold transition-colors duration-300 hover:text-green-500 ${
//                 activeSection === link.id && location.pathname === "/" 
//                   ? "text-green-500" 
//                   : isSolid ? "text-slate-700" : "text-white/90"
//               }`}
//             >
//               {link.name}
//               {activeSection === link.id && location.pathname === "/" && (
//                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-full" />
//               )}
//             </button>
//           ))}

//           <Link
//             to="/apply"
//             className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-black transition-all transform hover:scale-105 shadow-lg shadow-green-200"
//           >
//             Apply Now
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button 
//           className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
//             isOpen ? "bg-green-500 text-white rotate-90" : isSolid ? "text-slate-900" : "text-white"
//           }`} 
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`absolute top-full left-0 w-full bg-white text-slate-900 overflow-hidden transition-all duration-500 border-t border-slate-100 md:hidden ${
//           isOpen ? "max-h-[500px] opacity-100 py-10 shadow-2xl" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-8">
//           {navLinks.map((link) => (
//             <button
//               key={link.name}
//               onClick={() => scrollToSection(link.id)}
//               className="text-xl font-bold text-slate-600 hover:text-green-600"
//             >
//               {link.name}
//             </button>
//           ))}
//           <Link
//             to="/apply"
//             onClick={() => setIsOpen(false)}
//             className="bg-green-600 text-white px-12 py-4 rounded-full font-black shadow-xl"
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Removed FiShield
// 1. Import your logo here (adjust path/extension as needed)
import logoImg from "/emp1.png"; 

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

  const isSolid = scrolled || location.pathname !== "/";

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const y = section.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else {
      const section = document.getElementById(id);
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        isSolid
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 text-slate-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* --- LOGO SECTION --- */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 group"
        >
          {/* logo image replacing FiShield */}
          <img 
            src={logoImg} 
            alt="EmpowerAid Logo" 
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
          <div className="flex flex-col leading-none text-left">
            <span className={`text-xl font-black tracking-tighter ${isSolid ? "text-slate-900" : "text-white"}`}>
              Empower
            </span>
            <span className="text-green-500 text-xs tracking-[0.2em] uppercase font-black">
              Aid.
            </span>
          </div>
        </button>
        {/* --- END LOGO SECTION --- */}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-sm font-bold transition-colors duration-300 hover:text-green-500 ${
                activeSection === link.id && location.pathname === "/" 
                  ? "text-green-500" 
                  : isSolid ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.name}
              {activeSection === link.id && location.pathname === "/" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-full" />
              )}
            </button>
          ))}

          <Link
            to="/apply"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-black transition-all transform hover:scale-105 shadow-lg shadow-green-200"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
            isOpen ? "bg-green-500 text-white rotate-90" : isSolid ? "text-slate-900" : "text-white"
          }`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white text-slate-900 overflow-hidden transition-all duration-500 border-t border-slate-100 md:hidden ${
          isOpen ? "max-h-[500px] opacity-100 py-10 shadow-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-xl font-bold text-slate-600 hover:text-green-600"
            >
              {link.name}
            </button>
          ))}
          <Link
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="bg-green-600 text-white px-12 py-4 rounded-full font-black shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;