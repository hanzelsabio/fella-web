import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section
      id="hero_section"
      className="relative text-white flex items-center justify-center shadow-md py-50 z-20 min-h-[90vh]"
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 text-white text-center px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Print Your Vision, Wear Your Style
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Fella Screen Prints delivers high-quality direct-to-film printing for
          apparel, merchandise, and brands — crafted with precision and passion.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-sm text-white px-8 py-3.5 font-medium transition"
          >
            Get a Quote
          </a>
          <a
            href="#our-work"
            className="text-sm text-white px-8 py-3.5 font-medium bg-black hover:bg-gray-800 hover:text-white transition"
          >
            View Our Work
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
