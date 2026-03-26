import FadeInSection from "../components/FadeInSection";
import AboutPreview from "../components/AboutPreview";
import CTASection from "../components/CTASection";
import TestimonialsPreview from "../components/TestimonialsPreview";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>SocialLift | Digital Marketing Agency</title>
        <meta property="og:url" content="https://sociallift.co.in" />
      </Helmet>

      <FadeInSection>
        <section className="bg-light min-h-screen flex items-center pt-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs sm:text-sm px-4 py-2 rounded-full mb-6">
                <span className="text-primary">✨</span>
                Digital Marketing Excellence
              </div>

              {/* Heading */}
              <h1 className="text-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We Lift Your Brand to{" "}
                <span className="text-primary relative">
                  New Heights
                  <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-2 sm:h-3 bg-primary/20 -z-10 rounded"></span>
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mb-8">
                Transform your digital presence with data-driven strategies,
                creative campaigns, and innovative marketing solutions
                that deliver measurable results.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <NavLink
                  to="/contact"
                  className="bg-primary text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300 text-center"
                >
                  Get Started →
                </NavLink>

                <NavLink
                  to="/services"
                  className="text-black border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-300 text-center"
                >
                  Our Services
                </NavLink>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-gray-300 pt-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-black">200+</h2>
                  <p className="text-gray-500 text-sm">Happy Clients</p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-black">500+</h2>
                  <p className="text-gray-500 text-sm">Projects Done</p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-black">98%</h2>
                  <p className="text-gray-500 text-sm">Success Rate</p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative hidden md:flex items-center justify-center">

              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 lg:p-8 w-full max-w-[480px]">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-dark">
                    Analytics
                  </h3>
                  <span className="text-primary font-semibold">+84%</span>
                </div>

                {/* Chart */}
                <div className="bg-gray-100 rounded-2xl p-4 lg:p-6 flex items-end justify-between h-44 lg:h-56">

                  {[45, 70, 55, 85, 60, 95, 75].map((value, index) => (
                    <div
                      key={index}
                      className="w-6 sm:w-8 lg:w-10 bg-primary rounded-t-xl animate-grow"
                      style={{
                        height: `${value}%`,
                        animationDelay: `${index * 0.12}s`
                      }}
                    ></div>
                  ))}

                </div>

                {/* Days */}
                <div className="flex justify-between text-gray-500 text-xs sm:text-sm mt-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-black text-white px-4 py-3 rounded-2xl shadow-xl">
                <p className="text-xs text-gray-400">Engagement</p>
                <p className="text-lg font-bold text-primary">+89%</p>
              </div>

            </div>

          </div>
        </section>

        <AboutPreview />
        <TestimonialsPreview />
        <CTASection />

      </FadeInSection>
    </>
  );
}

export default Home;