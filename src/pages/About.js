import FadeInSection from "../components/FadeInSection";
import CTASection from "../components/CTASection";
import { FaLightbulb, FaChartLine, FaBullseye, FaRocket } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

function About() {
    return (
        <>
            <Helmet>
                <title>About SocialLift | Digital Marketing Agency</title>

                <meta
                    name="description"
                    content="Learn about SocialLift, a digital marketing agency focused on innovation, growth strategies, performance marketing, and measurable results."
                />

                <meta
                    name="keywords"
                    content="about sociallift, digital marketing agency, marketing strategy, SEO agency, branding agency"
                />

                <meta name="author" content="SocialLift" />

                {/* Open Graph */}
                <meta property="og:title" content="About SocialLift | Digital Marketing Agency" />
                <meta
                    property="og:description"
                    content="Discover how SocialLift helps brands grow with innovative marketing strategies and data-driven campaigns."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sociallift.com/about" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About SocialLift | Digital Marketing Agency" />
                <meta
                    name="twitter:description"
                    content="Meet the team and mission behind SocialLift digital marketing agency."
                />
            </Helmet>

            {/* HERO SECTION */}
            <FadeInSection>
                <section className="bg-light py-28">
                    <div className="max-w-6xl mx-auto px-8 text-center">

                        <p className="text-primary font-semibold tracking-widest text-sm mb-4">
                            ABOUT US
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
                            We’re Your Partner in{" "}
                            <span className="text-primary">Digital Success</span>
                        </h1>

                        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                            At SocialLift, we combine strategy, creativity, and data-driven
                            execution to help brands grow faster and scale smarter.
                        </p>

                    </div>
                </section>
            </FadeInSection>

            {/* STORY SECTION */}
            <FadeInSection>
                <section className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-stretch">

                        {/* LEFT SIDE - Mission */}
                        <div className="relative group p-10 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                            <div className="absolute inset-0 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 -z-10"></div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 transition-colors duration-300 group-hover:text-primary">
                                Our Mission
                            </h2>

                            <p className="text-gray-600 mb-6 transition duration-300 group-hover:text-gray-700">
                                We believe every brand has the potential to dominate its
                                digital space. Our mission is to empower businesses with
                                cutting-edge marketing strategies that deliver measurable
                                growth.
                            </p>

                            <p className="text-gray-600 transition duration-300 group-hover:text-gray-700">
                                With years of experience across industries, we don’t just
                                follow trends — we set them.
                            </p>

                        </div>

                        {/* RIGHT SIDE - Why Choose */}
                        <div className="relative group bg-gray-100 rounded-3xl p-10 border border-gray-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-primary/40">

                            <div className="absolute inset-0 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 -z-10"></div>

                            <h3 className="text-xl font-semibold text-dark mb-6 transition-colors duration-300 group-hover:text-primary">
                                Why Choose SocialLift?
                            </h3>

                            <ul className="space-y-4 text-gray-600">
                                <li className="transition-all duration-300 group-hover:translate-x-1">
                                    ✔ Data-driven decision making
                                </li>
                                <li className="transition-all duration-300 group-hover:translate-x-1">
                                    ✔ ROI-focused campaigns
                                </li>
                                <li className="transition-all duration-300 group-hover:translate-x-1">
                                    ✔ Creative storytelling
                                </li>
                                <li className="transition-all duration-300 group-hover:translate-x-1">
                                    ✔ Transparent reporting
                                </li>
                            </ul>

                        </div>

                    </div>
                </section>
            </FadeInSection>

            {/* CORE VALUES */}
            <FadeInSection>
                <section className="py-28 bg-gray-100">
                    <div className="max-w-6xl mx-auto px-8 text-center">

                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-16">
                            Our Core Values
                        </h2>

                        <div className="grid md:grid-cols-4 gap-10">

                            {[
                                {
                                    icon: <FaLightbulb />,
                                    title: "Innovation",
                                    desc: "Cutting-edge strategies that keep you ahead of the curve."
                                },
                                {
                                    icon: <FaChartLine />,
                                    title: "Growth",
                                    desc: "Scalable marketing designed for long-term success."
                                },
                                {
                                    icon: <FaBullseye />,
                                    title: "Strategy",
                                    desc: "Tailored plans aligned with your business goals."
                                },
                                {
                                    icon: <FaRocket />,
                                    title: "Impact",
                                    desc: "Campaigns that create measurable results."
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                                >

                                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl font-semibold text-dark mb-4 transition-colors duration-300 group-hover:text-primary">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500">
                                        {item.desc}
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

export default About;