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

        <meta
          name="description"
          content="SocialLift helps businesses grow with SEO, social media marketing, performance ads, branding and web development services."
        />

        <meta
          name="keywords"
          content="digital marketing agency, SEO services, social media marketing, paid ads agency, branding agency, web development"
        />

        <meta name="author" content="SocialLift" />

        {/* Open Graph (for WhatsApp, LinkedIn, Facebook preview) */}
        <meta property="og:title" content="SocialLift | Digital Marketing Agency" />
        <meta
          property="og:description"
          content="Grow your brand with SocialLift through data-driven digital marketing strategies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sociallift.com" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SocialLift | Digital Marketing Agency" />
        <meta
          name="twitter:description"
          content="Transform your digital presence with SocialLift marketing strategies."
        />
      </Helmet>

      <FadeInSection>
        <section className="bg-light min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm px-4 py-2 rounded-full mb-8">
                <span className="text-primary">✨</span>
                Digital Marketing Excellence
              </div>

              {/* Heading */}
              <h1 className="text-dark text-4xl md:text-6xl font-bold leading-tight mb-6">
                We Lift Your Brand to{" "}
                <span className="text-primary relative">
                  New Heights
                  <span className="absolute left-0 bottom-2 w-full h-3 bg-primary/20 -z-10 rounded"></span>
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-gray-500 text-lg max-w-xl mb-10">
                Transform your digital presence with data-driven strategies,
                creative campaigns, and innovative marketing solutions
                that deliver measurable results.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mb-12">
                <NavLink
                  to="/contact"
                  className="bg-primary text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
                >
                  Get Started →
                </NavLink>

                <NavLink
                  to="/services"
                  className="text-black border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-300"
                >
                  Our Services
                </NavLink>
              </div>

              {/* Stats */}
              <div className="flex gap-12 border-t border-gray-300 pt-8">
                <div>
                  <h2 className="text-2xl font-bold text-black">200+</h2>
                  <p className="text-gray-500">Happy Clients</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black">500+</h2>
                  <p className="text-gray-500">Projects Done</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black">98%</h2>
                  <p className="text-gray-500">Success Rate</p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE - Clean Animated Analytics */}
            <div className="relative hidden md:flex items-center justify-center">

              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 w-[520px]">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-dark">
                    Analytics
                  </h3>
                  <span className="text-primary font-semibold">
                    +84%
                  </span>
                </div>

                {/* Chart Background */}
                <div className="bg-gray-100 rounded-2xl p-6 flex items-end justify-between h-56">

                  {[45, 70, 55, 85, 60, 95, 75].map((value, index) => (
                    <div
                      key={index}
                      className="w-10 bg-primary rounded-t-xl animate-grow"
                      style={{
                        height: `${value}%`,
                        animationDelay: `${index * 0.12}s`
                      }}
                    ></div>
                  ))}

                </div>

                {/* Days */}
                <div className="flex justify-between text-gray-500 text-sm mt-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

              </div>

              {/* Engagement Badge */}
              <div className="absolute -bottom-8 -right-8 bg-black text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-sm text-gray-400">Engagement</p>
                <p className="text-xl font-bold text-primary">+89%</p>
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