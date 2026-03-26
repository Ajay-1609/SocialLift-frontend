import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="SocialLift Logo" className="w-9 h-9 sm:w-10 sm:h-10" />
          <span className="text-[20px] sm:text-[22px] font-semibold">
            <span className="text-black">Social</span>
            <span className="text-primary">Lift</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold border-b-2 border-primary"
                  : "hover:text-primary transition"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Desktop */}
        <NavLink
          to="/contact"
          className="hidden md:block bg-primary text-black font-semibold px-5 py-2 rounded-xl"
        >
          Get Started
        </NavLink>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-5 text-center">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium"
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-primary text-black px-6 py-2 rounded-xl font-semibold"
          >
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;