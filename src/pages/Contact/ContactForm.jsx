import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "../../components/layout/Footer/Footer";

import "./contact.css";

function ContactForm() {
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    company: "",
    service: "",
    message: "",
  });

  const SESSION_KEY = "contactFormSubmitted";

  const [submitted, setSubmitted] = useState(() => {
    return sessionStorage.getItem(SESSION_KEY) === "true";
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // Save submission state in session
    sessionStorage.setItem(SESSION_KEY, "true");

    setSubmitted(true);
    setShowModal(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      company: "",
      service: "",
      message: "",
    });
  };

  useEffect(() => {
    if (state?.service) {
      setFormData((prev) => ({
        ...prev,
        service: state.service.title,
      }));
    }
  }, [state]);

  return (
    <section id="contact-section" className="contact_section text-center">
      <div className="max-w-2xl mx-auto px-8 py-30">
        {!submitted ? (
          <div className="">
            <h1 className="text-2xl font-bold uppercase mb-8">
              Service Inquiry Form
            </h1>

            <form
              onSubmit={handleSubmit}
              className="text-sm text-left space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Other fields */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Service Field */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Selected Service
                </label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  readOnly
                  className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your inquiry message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                  required
                  rows="5"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3.5 hover:bg-gray-800"
                  style={{ cursor: "pointer" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-40">
            <h2 className="text-xl font-semibold mb-10">Inquiry Sent</h2>
            <p className="max-w-xl text-gray-600">
              You have already submitted an inquiry during this session. If you
              want to send another inquiry, please{" "}
              <span className="font-medium text-black">
                close the current tab/window and reopen another.
              </span>
            </p>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed p-5 inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity">
          <div className="bg-white p-8 md:px-20 py-20 shadow-lg max-w-lg text-center relative animate-fadeIn">
            <button
              className="absolute top-3 right-5 text-gray-500 text-xl hover:text-black"
              onClick={() => setShowModal(false)}
              style={{ cursor: "pointer" }}
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-5">Message Sent!</h2>
            <p className="text-gray-700">
              Your inquiry has been successfully submitted.
            </p>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn .25s ease-out;
          }
        `}
      </style>

      <Footer />
    </section>
  );
}

export default ContactForm;
