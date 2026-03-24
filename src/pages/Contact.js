import { useState } from "react";
import axios from "axios";
import FadeInSection from "../components/FadeInSection";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";
    else if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10–15 digits";

    if (!formData.message.trim())
      newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        formData
      );

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else {
        alert("Server error. Please try again.");
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact SocialLift | Digital Marketing Agency</title>

        <meta
          name="description"
          content="Contact SocialLift digital marketing agency for social media marketing, SEO, paid ads, and branding services. Let's grow your business."
        />

        <meta
          name="keywords"
          content="contact sociallift, digital marketing agency contact, marketing consultation, SEO agency contact"
        />

        <meta name="author" content="SocialLift" />

        <meta property="og:title" content="Contact SocialLift | Digital Marketing Agency" />
        <meta
          property="og:description"
          content="Get in touch with SocialLift to grow your brand with professional digital marketing services."
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <FadeInSection>
        <section className="bg-light py-28 min-h-screen flex items-center relative">

          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16">

            {/* LEFT INFO */}
            <div>

              <p className="text-primary font-semibold tracking-widest text-sm mb-4">
                CONTACT US
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Let’s Build Something <span className="text-primary">Great</span>
              </h1>

              <p className="text-gray-500 mb-8">
                We respond within 24 hours. Let’s grow your brand.
              </p>

              <div className="space-y-6 text-gray-700">

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary text-lg" />
                  <span>teamsocialliftco@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-primary text-lg" />
                  <span>Sangli, Maharashtra, India</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhone className="text-primary text-lg" />
                  <span>+91 8007914562</span>
                </div>

                <a
                  href="https://www.instagram.com/_sociallift.co?igsh=Ym9wZXl2NTd1ZHYz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-primary transition"
                >
                  <FaInstagram className="text-primary text-lg" />
                  <span>Follow us on Instagram</span>
                </a>

              </div>

            </div>

            {/* FORM */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">

              <form onSubmit={handleSubmit} className="space-y-6">

                {["name", "email", "phone", "message"].map((field) => (
                  <div key={field}>

                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors[field] ? "border-red-400" : "border-gray-300"
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      />
                    ) : (
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.message ? "border-red-400" : "border-gray-300"
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
                      />
                    )}

                    {errors[field] && (
                      <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                    )}

                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-black font-semibold py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>

              </form>

            </div>

          </div>

          {/* Success Popup */}
          {showSuccess && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

              <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">

                <h2 className="text-2xl font-bold mb-4 text-primary">
                  Message Sent Successfully!
                </h2>

                <p className="text-gray-600 mb-6">
                  We’ll get back to you soon.
                </p>

                <button
                  onClick={() => setShowSuccess(false)}
                  className="bg-primary px-6 py-2 rounded-lg font-semibold text-black"
                >
                  Close
                </button>

              </div>

            </div>
          )}

        </section>
      </FadeInSection>
    </>
  );
}

export default Contact;