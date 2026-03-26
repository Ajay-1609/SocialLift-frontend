import { NavLink } from "react-router-dom";
// import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">
            Social<span className="text-primary">Lift</span>
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Elevating brands with data-driven marketing strategies,
            creative execution, and measurable growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><NavLink to="/" className="hover:text-primary transition">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-primary transition">About</NavLink></li>
            <li><NavLink to="/services" className="hover:text-primary transition">Services</NavLink></li>
            <li><NavLink to="/testimonials" className="hover:text-primary transition">Testimonials</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-primary transition">Contact</NavLink></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-3">
            <li className="hover:text-primary transition cursor-pointer">Social Media Marketing</li>
            <li className="hover:text-primary transition cursor-pointer">Performance Marketing</li>
            <li className="hover:text-primary transition cursor-pointer">Branding & Design</li>
            <li className="hover:text-primary transition cursor-pointer">SEO Optimization</li>
            <li className="hover:text-primary transition cursor-pointer">Web Development</li>
            <li className="hover:text-primary transition cursor-pointer">Paid Ads & Retargeting</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="mb-3">teamsocialliftco@gmail.com</p>
          <p className="mb-6">+91 9021737975</p>

          <div className="flex gap-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_sociallift.co?igsh=Ym9wZXl2NTd1ZHYz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-black transition cursor-pointer"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} SocialLift. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;