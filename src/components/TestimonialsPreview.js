import FadeInSection from "../components/FadeInSection";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar, FaInstagram, FaCheckCircle } from "react-icons/fa";

function TestimonialsPreview() {

  const testimonials = [
    // 🔥 BEST RESULTS FIRST
    {
      text: "SocialLift helped us with video production, SMM, and Meta ads lead generation, significantly increasing our bookings and overall sales.",
      name: "Muktachanda Events",
      role: "Event Management",
      initials: "ME",
      instagram: "https://www.instagram.com/muktachanda_events_sangli_?igsh=MWgyZ3V4ZWlybXE2"
    },
    {
      text: "SocialLift improved our brand visibility through creative content and Meta ads, leading to a noticeable increase in travel package sales.",
      name: "Bramhachaitnya Travels",
      role: "Travel Agency",
      initials: "BT",
      instagram: "https://www.instagram.com/bramhachaitnya._travels_?igsh=MTg2NjZqbTFvYnNicw=="
    },

    // ✅ ORIGINAL ONES (KEPT)
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

    // 🔥 NEW ADDED ONES
    {
      text: "From video shoot to editing, social media marketing and Meta ads — SocialLift handled everything professionally and boosted our brand presence.",
      name: "Asmita Bhate Salon & Academy",
      role: "Salon & Training Institute",
      initials: "AB",
      instagram: "https://www.instagram.com/asmitabhatesalonandacademy?igsh=Z3Rja3R4eG1kcHV6"
    },
    {
      text: "SocialLift managed our social media marketing and lead generation effectively, helping us attract quality clients consistently.",
      name: "Shubharambh Lawn",
      role: "Event Lawn Business",
      initials: "SL",
      instagram: "https://www.instagram.com/shubharambh_lawn?igsh=MWdteTd5eDR0dzhyOQ=="
    },
    {
      text: "Their creative post design, social media management and ad campaigns helped us reach more students and grow our institute.",
      name: "Shree Typing Institute",
      role: "Educational Institute",
      initials: "ST",
      instagram: "https://www.instagram.com/shreecomputerinstitute_?igsh=dzd1bGdocGRjaGQw"
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

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <FadeInSection>
      <section className="bg-black text-white py-20 sm:py-28 relative overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">

          <p className="text-primary font-semibold tracking-widest text-sm mb-4">
            TESTIMONIALS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16">
            What Our Clients Say
          </h2>

          {/* Slider */}
          <div className="relative bg-gray-900 rounded-3xl p-8 sm:p-12 border border-primary/40 shadow-lg overflow-hidden">

            <div
              className="flex transition-all duration-700"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center justify-center min-h-[300px] px-4"
                >

                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>

                  <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
                    "{item.text}"
                  </p>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold">
                      {item.initials}
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2">
                        {item.name}
                        <FaCheckCircle className="text-primary text-xs" />
                      </h4>
                      <p className="text-gray-400 text-sm">{item.role}</p>
                    </div>
                  </div>

                  {item.instagram && (
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm flex items-center gap-2"
                    >
                      <FaInstagram /> View Instagram
                    </a>
                  )}

                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full ${
                    activeIndex === index
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-gray-500"
                  }`}
                />
              ))}
            </div>

          </div>

          <div className="mt-12">
            <NavLink
              to="/testimonials"
              className="bg-primary px-6 py-3 rounded-xl text-black font-semibold"
            >
              View All Testimonials →
            </NavLink>
          </div>

        </div>
      </section>
    </FadeInSection>
  );
}

export default TestimonialsPreview;