import React from "react";
import GoogleMap from "../../components/layout/GoogleMap/GoogleMap";
import Socials from "../../components/layout/Socials/Socials";
import Banner from "../../components/layout/Banner/Banner";

import ContactForm from "./Contact";

function ContactPage() {
  return (
    <>
      <div
        id="contact_page_section"
        className="bg-white flex justify-center items-center min-h-[40vh]"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 py-10 px-8">
          {/* Socials: takes 1/3 on desktop */}
          <div className="md:w-1/3">
            <Socials />
          </div>

          {/* Map: takes 2/3 on desktop */}
          <div className="md:w-2/3">
            <GoogleMap />
          </div>
        </div>
      </div>
      <Banner />
      <ContactForm />
    </>
  );
}

export default ContactPage;
