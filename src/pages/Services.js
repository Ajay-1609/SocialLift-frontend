import FadeInSection from "../components/FadeInSection";
import CTASection from "../components/CTASection";
import {
  FaBullhorn,
  FaChartLine,
  FaPaintBrush,
  FaSearch,
  FaCode,
  FaAd
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

function Services() {

  const services = [
    {
      icon: <FaBullhorn />,
      title: "Social Media Marketing",
      desc: "Build powerful brand presence and engagement across all major social platforms."
    },
    {
      icon: <FaChartLine />,
      title: "Performance Marketing",
      desc: "Data-driven campaigns focused on maximizing ROI and scaling results."
    },
    {
      icon: <FaPaintBrush />,
      title: "Branding & Design",
      desc: "Creative visual identities that make your brand stand out and stay memorable."
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      desc: "Improve rankings, increase visibility, and drive organic traffic growth."
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Modern, responsive, high-performance websites tailored to your goals."
    },
    {
      icon: <FaAd />,
      title: "Paid Ads & Retargeting",
      desc: "Strategic paid campaigns that convert and bring customers back."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | SocialLift</title>

        <meta
          name="description"
          content="Explore SocialLift digital marketing services including SEO, social media marketing, performance marketing, branding, web development and paid advertising."
        />

        <meta
          name="keywords"
          content="digital marketing services, SEO services, social media marketing agency, performance marketing, paid ads management, branding agency, web development services"
        />

        <meta name="author" content="SocialLift" />

        {/* Open Graph */}
        <meta property="og:title" content="Digital Marketing Services | SocialLift" />
        <meta
          property="og:description"
          content="Discover SocialLift services designed to grow your brand through SEO, paid ads, social media marketing and modern web development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sociallift.co.in/services" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Services | SocialLift" />
        <meta
          name="twitter:description"
          content="Grow your business with SocialLift's professional digital marketing services."
        />
      </Helmet>

      {/* HERO */}
      <FadeInSection>
        <section className="bg-light py-28">
          <div className="max-w-6xl mx-auto px-8 text-center">

            <p className="text-primary font-semibold tracking-widest text-sm mb-4">
              OUR SERVICES
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
              Solutions That Drive{" "}
              <span className="text-primary">Growth</span>
            </h1>

            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We offer comprehensive digital marketing solutions designed
              to elevate your brand and deliver measurable success.
            </p>

          </div>
        </section>
      </FadeInSection>

      {/* SERVICES GRID */}
      <FadeInSection>
        <section className="py-28 bg-gray-100">
          <div className="max-w-6xl mx-auto px-8">

            <div className="grid md:grid-cols-3 gap-10">

              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 -z-10"></div>

                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-dark mb-4 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500">
                    {service.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <CTASection />
    </>
  );
}

export default Services;