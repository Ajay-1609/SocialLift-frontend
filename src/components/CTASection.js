import { NavLink } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

function CTASection() {
  return (
    <FadeInSection>
      <section className="relative bg-black text-white py-32 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-3xl opacity-40"></div>

        <div className="relative max-w-5xl mx-auto px-8 text-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Ready to <span className="text-primary">Elevate</span> Your Brand
            <br />
            and Create <span className="text-primary">Impact</span>?
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Let’s craft powerful strategies, stunning visuals, and
            marketing campaigns that make your brand unforgettable.
          </p>

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="inline-block bg-primary text-black font-bold text-lg px-10 py-4 rounded-2xl 
                       shadow-[0_0_40px_rgba(234,179,8,0.25)] 
                       hover:shadow-[0_0_60px_rgba(234,179,8,0.45)] 
                       hover:scale-110 
                       transition-all duration-300"
          >
            Start Your Project →
          </NavLink>

        </div>

      </section>
    </FadeInSection>
  );
}

export default CTASection;