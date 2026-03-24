import FadeInSection from "../components/FadeInSection";
import { NavLink } from "react-router-dom";
import {
  FaShareAlt,
  FaChartBar,
  FaPalette,
  FaSearch,
  FaCode,
  FaBullhorn,
} from "react-icons/fa";

function AboutPreview() {
  return (
    <FadeInSection>
      <section className="bg-gray-100 py-24 border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-8 text-center">

          {/* Section Label */}
          <p className="text-primary font-semibold tracking-widest text-sm mb-4">
            OUR SERVICES
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Everything You Need to{" "}
            <span className="text-primary">Grow Online</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            From strategy to execution, we provide comprehensive digital marketing
            solutions tailored to your business goals.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-10 text-left">

            {/* 1 */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition duration-300">
                <FaShareAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                Social Media Management
              </h3>
              <p className="text-gray-500">
                Build and engage your community across all major platforms with strategic content.
              </p>
            </div>

            {/* 2 */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition duration-300">
                <FaChartBar className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                Performance Marketing
              </h3>
              <p className="text-gray-500">
                Data-driven campaigns that maximize ROI and drive conversions.
              </p>
            </div>

            {/* 3 */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition duration-300">
                <FaPalette className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                Branding & Design
              </h3>
              <p className="text-gray-500">
                Create a memorable brand identity that resonates with your audience.
              </p>
            </div>

            {/* 4 */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition duration-300">
                <FaSearch className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                SEO Optimization
              </h3>
              <p className="text-gray-500">
                Improve your search rankings and drive organic traffic growth.
              </p>
            </div>

            {/* 5 */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition duration-300">
                <FaCode className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                Website Development
              </h3>
              <p className="text-gray-500">
                Beautiful, high-converting websites that represent your brand.
              </p>
            </div>

            {/* 6 */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition duration-300">
                <FaBullhorn className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                Paid Ads & Retargeting
              </h3>
              <p className="text-gray-500">
                Strategic ad campaigns that reach the right audience at the right time.
              </p>
            </div>

          </div>

          {/* View All Button */}
          <div className="mt-16">
            <NavLink
              to="/services"
              className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Services →
            </NavLink>
          </div>

        </div>

      </section>
    </FadeInSection>
  );
}

export default AboutPreview;