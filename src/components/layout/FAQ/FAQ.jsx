import React, { useState } from "react";
import faqsData from "../../../data/faqs";

import "./faq.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq_section"
      className="bg-white text-center shadow-md z-15 py-12 min-h-[40vh]"
    >
      <div className="brand-faq max-w-5xl mx-auto p-8">
        <h2 className="faq-title text-black text-2xl font-bold uppercase mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-gray-200 border border-gray-300 sm:mx-10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question flex justify-between items-center w-full text-left text-md font-semibold focus:outline-none px-5 py-3"
                style={{ cursor: "pointer" }}
              >
                <span>{faq.question}</span>
                <span className="icon text-md">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer text-start bg-white text-gray-600 border-t border-gray-300 px-5 py-5 text-base">
                  {faq.answer.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
