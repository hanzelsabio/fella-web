import React from "react";

import Hero from "../../components/layout/Hero/Hero";
import Banner from "../../components/layout/Banner/Banner";
import ContactForm from "../Contact/Contact";
import About from "../About/About";

import Services from "../Services/Services";

function HomePage() {
  return (
    <section className="bg-white text-center">
      <Hero />
      <Services />
      <Banner />
      <About />
      <Banner />
      <ContactForm />
    </section>
  );
}

export default HomePage;
