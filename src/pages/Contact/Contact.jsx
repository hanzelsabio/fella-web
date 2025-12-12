import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./contact.css";

function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const options = ["Package 1", "Package 2", "Package 3"];

  const handleSelect = (val) => {
    onChange({ target: { name: "service", value: val } });
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Display Box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-500 px-8 py-3.5 cursor-pointer flex justify-between items-center"
      >
        <span className={value ? "text-gray-500" : "text-gray-500"}>
          {value || "Select a Service"}
        </span>

        <ChevronDown
          size={20}
          className={`text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 bg-gray-200 border border-gray-500 mt-1 shadow-lg z-20">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => handleSelect(opt)}
              className="px-8 py-3.5 hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setSubmitted(true);

    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);

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

  return (
    <section
      id="contact-section"
      className="contact_section text-center py-12 min-h-[50vh]"
    >
      <div className="brand-contact max-w-2xl mx-auto p-8">
        <h2 className="contact-title text-2xl font-bold uppercase mb-8">
          Service Inquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="text-sm text-left space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                placeholder="First Name"
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                placeholder="Last Name"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                placeholder="Contact Number"
              />
            </div>

            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
                placeholder="Company (Optional)"
              />
            </div>

            <CustomSelect value={formData.service} onChange={handleChange} />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-500 px-8 py-3.5 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3.5 hover:bg-gray-800 transition duration-300"
              style={{ cursor: "pointer" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity">
          <div className="bg-white px-8 py-6 shadow-lg max-w-sm text-center relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-500 text-xl hover:text-black"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
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
    </section>
  );
}

export default ContactForm;
