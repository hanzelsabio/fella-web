import React from "react";

import Hero from "../../components/layout/Hero/Hero";
import Banner from "../../components/layout/Banner/Banner";
// import ContactForm from "../Contact/Contact";
import About from "../About/About";

import Services from "../Services/Services";
import OurWorks from "../OurWorks/OurWorks";
import Reviews from "../Reviews/ReviewsSection";

import FAQ from "../../components/layout/FAQ/FAQ";

function HomePage() {
  return (
    <section className="bg-white text-center">
      <Hero />
      <Services />
      <About />
      <OurWorks />
      <FAQ />
      <Reviews />
      {/* <ContactForm /> */}
    </section>
  );
}

export default HomePage;
