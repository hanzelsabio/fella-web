import React from "react";
import { BsInstagram, BsThreads, BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";

function Socials() {
  const socials = [
    {
      icon: <FiFacebook className="w-6 h-6" />,
      url: "https://facebook.com",
      title: "Facebook",
      text: "@fellascreenprints",
    },
    {
      icon: <BsInstagram className="w-5 h-5" />,
      url: "https://instagram.com",
      title: "Instagram",
      text: "@fellascreenprints",
    },
    {
      icon: <BsThreads className="w-5 h-5" />,
      url: "https://instagram.com",
      title: "Theads",
      text: "@fellascreenprints",
    },
    {
      icon: <PiTiktokLogo className="w-6 h-6" />,
      url: "https://instagram.com",
      title: "TikTok",
      text: "@fellascreenprints",
    },
  ];

  return (
    <section id="social_media_accounts" className="">
      <h1 className="text-center text-xl font-semibold py-5">
        Social Accounts
      </h1>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 py-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-8 md:gap-6 hover:text-green-500 transition"
          >
            <div className="w-15 h-15 md:w-15 md:h-15 flex items-center justify-center rounded-full border-4 hover:border-gray-200 border-gray-300 text-black hover:text-white bg-white hover:bg-gray-300">
              {social.icon}
            </div>
            <div>
              <h3 className="font-bold">{social.title}</h3>
              <p>{social.text}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Socials;
