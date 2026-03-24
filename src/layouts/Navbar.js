import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="SocialLift Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-[22px] font-semibold tracking-[-0.3px]">
            <span className="text-black">Social</span>
            <span className="text-primary">Lift</span>
          </span>
        </NavLink>

        {/* Center Links */}
        <div className="hidden md:flex gap-10 text-gray-700 font-medium">

          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/testimonials", label: "Testimonials" },
            { path: "/contact", label: "Contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "relative text-black font-semibold after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-primary transition-all"
                  : "hover:text-primary transition-all duration-300"
              }
            >
              {item.label}
            </NavLink>
          ))}

        </div>

        {/* CTA Button */}
        <NavLink
          to="/contact"
          className="bg-primary text-black font-semibold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
        >
          Get Started
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;