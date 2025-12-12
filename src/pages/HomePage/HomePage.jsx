import React from "react";

import Hero from "../../components/layout/Hero/Hero";
import Banner from "../../components/layout/Banner/Banner";
import FAQ from "../../components/layout/FAQ/FAQ";
import Products from "../Services/Products";

// import ContactForm from "../Contact/Contact";
import About from "../About/About";
// import Services from "../Services/Services";
import OurWorks from "../OurWorks/OurWorks";
import Reviews from "../Reviews/ReviewsSection";

import "../../assets/styles/globals.css";

function HomePage() {
  return (
    <section className="bg-white text-center">
      <Hero />
      {/* <Services /> */}
      <div className="main_background">
        <Products />
      </div>
      <About />
      <OurWorks />
      <div className="main_background">
        <FAQ />
        <Reviews />
        {/* <ContactForm /> */}
      </div>
    </section>
  );
}

export default HomePage;
