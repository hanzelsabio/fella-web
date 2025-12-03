import React from "react";
import "./banner.css";

function GetStarted() {
  return (
    <section
      id="getstarted_section"
      className="relative text-black flex items-center justify-center h-[30vh]"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Ready to Print Your Designs?
          </h2>
          <p className="text-gray-700 text-xs max-w-md">
            Get high-quality screen printing for shirts and custom apparel. Fast
            turnaround, premium results, and designs that last. Your brand,
            business, or personal project — we print it with care.
          </p>
        </div>

        {/* RIGHT CONTENT (BUTTONS) */}
        <div className="md:w-1/2 flex flex-col flex-row items-center justify-center md:justify-end gap-6">
          <a
            href="#contact_section"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-medium transition text-sm md:text-base"
          >
            Get Started
          </a>

          <a
            href="#our-work"
            className="bg-black hover:bg-gray-700 text-white px-6 py-3 font-medium transition text-sm md:text-base"
          >
            View Our Works
          </a>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
