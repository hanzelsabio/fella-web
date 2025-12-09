import React from "react";
import GoogleMap from "../../components/layout/GoogleMap/GoogleMap";
import Socials from "../../components/layout/Socials/Socials";

import About from "../About/About";
import ContactForm from "./Contact";

const ContactPage = () => {
  return (
    <>
      <div
        id="contact-page-section"
        className="contact_page_section flex justify-center items-center"
      >
        <div className="max-w-7xl mx-auto w-full py-10 px-8">
          {/* GRID CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Socials (column 1) */}
            <div className="col-span-1 px-8">
              <Socials />
            </div>

            {/* Google Map (column 2 & 3) */}
            <div className="md:col-span-2">
              <GoogleMap />
            </div>

            {/* Additional Section (column 1) */}
            <div className="md:col-span-4 col-start-1 text-center py-10">
              <p>
                <span className="font-semibold">We are located at:</span> Upper
                Plaza 16-H A.Mabini St Makati City, West Rembo, Philippines
              </p>
            </div>

            {/* You can add more grid items here if needed */}
          </div>
        </div>
      </div>

      <About />
      <ContactForm />
    </>
  );
};

export default ContactPage;
