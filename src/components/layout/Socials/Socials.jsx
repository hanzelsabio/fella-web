import React from "react";
import { BsInstagram, BsThreads, BsTwitterX } from "react-icons/bs";

function Socials() {
  const socials = [
    { icon: <BsInstagram className="w-5 h-5" />, url: "https://instagram.com" },
    { icon: <BsThreads className="w-5 h-5" />, url: "https://instagram.com" },
    { icon: <BsTwitterX className="w-5 h-5" />, url: "https://instagram.com" },
    { icon: <BsTwitterX className="w-5 h-5" />, url: "https://instagram.com" },
  ];

  return (
    <section id="social_media_accounts">
      <h1 className="text-center text-xl font-semibold py-5">
        Social Accounts
      </h1>

      {/* 2-column layout */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6 py-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-4 md:gap-6 hover:text-green-500 transition"
          >
            <div className="w-12 h-12 md:w-15 md:h-15 flex items-center justify-center rounded-full border-4 hover:border-gray-200 border-gray-300 text-black hover:text-white bg-white hover:bg-gray-300">
              {social.icon}
            </div>
            <span className="text-md">@fellascreenprints</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Socials;
