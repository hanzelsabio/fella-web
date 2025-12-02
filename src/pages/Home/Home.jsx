import React from "react";

import Hero from "../../components/layout/Hero/Hero";
import Banner from "../../components/layout/Banner/Banner";
import GetStarted from "../../components/layout/Banner/GetStarted";
import ContactForm from "../Contact/Contact";

import Services from "../Services/Services";

function HomePage() {
  return (
    <section className="bg-white text-center">
      <Hero />
      <GetStarted />
      <Services />
      <Banner />
      <ContactForm />
    </section>
  );
}

export default HomePage;
