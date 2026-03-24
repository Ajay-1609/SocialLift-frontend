import FadeInSection from "../components/FadeInSection";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar, FaInstagram, FaCheckCircle } from "react-icons/fa";

function TestimonialsPreview() {

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
      <section className="bg-black text-white py-28 relative overflow-hidden">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <p className="text-primary font-semibold tracking-widest text-sm mb-4">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            What Our Clients Say
          </h2>

          {/* Slider */}
          <div className="relative bg-gray-900 rounded-3xl p-12 
                          border border-primary/40 
                          shadow-[0_0_40px_rgba(234,179,8,0.15)] 
                          hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
                          transition-all duration-500 
                          overflow-hidden">

            {/* Sliding Wrapper */}
            <div
              className="flex transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center justify-center min-h-[320px] px-6"
                >

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  {/* Text */}
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 text-center max-w-3xl">
                    "{item.text}"
                  </p>

                  {/* Client */}
                  <div className="flex items-center justify-center gap-4 mb-3">

                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center font-bold text-black">
                      {item.initials}
                    </div>

                    <div className="text-left">
                      <h4 className="font-semibold text-white flex items-center gap-2">
                        {item.name}
                        <FaCheckCircle className="text-primary text-sm" />
                      </h4>

                      <p className="text-gray-400 text-sm">
                        {item.role}
                      </p>
                    </div>

                  </div>

                  {/* Instagram */}
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline text-sm"
                  >
                    <FaInstagram />
                    View Instagram Profile
                  </a>

                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16">
            <NavLink
              to="/testimonials"
              className="inline-block bg-primary text-black font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
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