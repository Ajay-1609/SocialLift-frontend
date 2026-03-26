import FadeInSection from "../components/FadeInSection";
import CTASection from "../components/CTASection";
import { FaInstagram, FaStar, FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

function Testimonials() {

  const testimonials = [
    {
      text: "SocialLift managed our social media during the election campaign and helped us connect with voters effectively. Their digital strategy played a key role in our success, and I was elected as a Municipal Councilor.",
      name: "Adv. Swati Nitin Shinde",
      role: "Municipal Councilor",
      initials: "SS",
      instagram: "https://www.instagram.com/adv.swatishinde?igsh=MjFjamtxenZnNWc0"
    },
    {
      text: "The SocialLift team handled our digital presence during the election period. Their content strategy and campaign management helped us reach the right audience and contributed to our election victory as Municipal Councilor.",
      name: "Uday Belvalkar",
      role: "Municipal Councilor",
      initials: "UB",
      instagram: "https://www.instagram.com/uday_belvalkar?igsh=OXFqaWxydzNpb3h4"
    },
    {
      text: "SocialLift helped grow our brand visibility and boost our sales through strategic social media management and digital marketing campaigns. Their creative approach truly made a difference.",
      name: "Inside Stories",
      role: "Brand & Retail Business",
      initials: "IS",
      instagram: "https://www.instagram.com/inside_stories_sangli?igsh=Z3JmazB0ZHBwM3Rr"
    },

    // 🔥 NEW TESTIMONIALS

    {
      text: "SocialLift managed our social media marketing and lead generation effectively, helping us attract quality clients consistently.",
      name: "Shubharambh Lawn",
      role: "Event Lawn Business",
      initials: "SL",
      instagram: "https://www.instagram.com/shubharambh_lawn?igsh=MWdteTd5eDR0dzhyOQ=="
    },
    {
      text: "From video shoot to editing, social media marketing and Meta ads — SocialLift handled everything professionally and boosted our brand presence.",
      name: "Asmita Bhate Salon & Academy",
      role: "Salon & Training Institute",
      initials: "AB",
      instagram: "https://www.instagram.com/asmitabhatesalonandacademy?igsh=Z3Rja3R4eG1kcHV6"
    },
    {
      text: "SocialLift helped us with video production, SMM, and Meta ads lead generation, significantly increasing our bookings and overall sales.",
      name: "Muktachanda Events",
      role: "Event Management",
      initials: "ME",
      instagram: "https://www.instagram.com/muktachanda_events_sangli_?igsh=MWgyZ3V4ZWlybXE2"
    },
    {
      text: "Their creative post design, social media management and ad campaigns helped us reach more students and grow our institute.",
      name: "Shree Typing Institute",
      role: "Educational Institute",
      initials: "ST",
      instagram: "https://www.instagram.com/shreecomputerinstitute_?igsh=dzd1bGdocGRjaGQw"
    },
    {
      text: "SocialLift improved our brand visibility through creative content and Meta ads, leading to a noticeable increase in travel package sales.",
      name: "Bramhachaitnya Travels",
      role: "Travel Agency",
      initials: "BT",
      instagram: "https://www.instagram.com/bramhachaitnya._travels_?igsh=MTg2NjZqbTFvYnNicw=="
    },
    {
      text: "They delivered high-quality industrial shoots and professional product edits that elevated our brand presentation.",
      name: "Saroj Engineers",
      role: "Industrial Brand",
      initials: "SE",
      instagram: ""
    },
    {
      text: "SocialLift handled our complete brand creation — from logo design to business cards — giving us a strong professional identity.",
      name: "Lokhande Ovhal & Associates",
      role: "Business & Legal Services",
      initials: "LO",
      instagram: ""
    }
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials | SocialLift</title>

        <meta
          name="description"
          content="Read real testimonials from clients who trusted SocialLift for digital marketing, social media campaigns, and brand growth."
        />
      </Helmet>

      {/* HERO */}
      <FadeInSection>
        <section className="bg-light py-28">
          <div className="max-w-6xl mx-auto px-8 text-center">

            <p className="text-primary font-semibold tracking-widest text-sm mb-4">
              TESTIMONIALS
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
              What Our Clients <span className="text-primary">Say About Us</span>
            </h1>

            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              Real experiences from brands and leaders who trusted SocialLift
              to elevate their digital presence and achieve measurable success.
            </p>

          </div>
        </section>
      </FadeInSection>

      {/* TESTIMONIALS GRID */}
      <FadeInSection>
        <section className="py-28 bg-gray-100">
          <div className="max-w-6xl mx-auto px-8">

            <div className="grid md:grid-cols-3 gap-10">

              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 -z-10"></div>

                  {/* ⭐ Rating */}
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    "{item.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-4">

                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-black transition">
                      {item.initials}
                    </div>

                    <div>
                      <h4 className="font-semibold text-dark flex items-center gap-2 group-hover:text-primary transition">
                        {item.name}
                        <FaCheckCircle className="text-primary text-sm" />
                      </h4>

                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>

                  </div>

                  {/* Instagram (only if exists) */}
                  {item.instagram && (
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary hover:text-black transition"
                    >
                      <FaInstagram />
                      View Instagram Profile
                    </a>
                  )}

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

export default Testimonials;