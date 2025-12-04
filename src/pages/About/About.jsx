import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about-us" className="about_section bg-black">
      <div className="max-w-2xl mx-auto py-30 px-8">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-white text-2xl font-medium mb-10 text-center">
            About Us
          </h1>
          <p className="text-gray-300 text-lg font-small text-center">
            Fella Screen Prints is a full-service screen printing studio
            specializing in custom apparel and merchandise for individuals,
            small brands, events, and organizations. With a focus on quality,
            creativity, and reliability, we help you turn your designs into
            wearable art — whether you’re launching a clothing brand, organizing
            an event, creating uniforms for a team, or simply printing a few
            shirts for fun.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
