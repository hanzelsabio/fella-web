import React from "react";
import { BsInstagram, BsThreads, BsTelephone } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";

function Socials() {
  const socials = [
    {
      icon: <FiFacebook className="w-6 h-6" />,
      link: "https://facebook.com",
      title: "Facebook",
      text: "@fellascreenprints",
    },
    {
      icon: <BsInstagram className="w-5 h-5" />,
      link: "https://instagram.com",
      title: "Instagram",
      text: "@fellascreenprints",
    },
    {
      icon: <PiTiktokLogo className="w-6 h-6" />,
      link: "https://instagram.com",
      title: "TikTok",
      text: "@fellascreenprints",
    },
    {
      icon: <BsTelephone className="w-6 h-6" />,
      link: "",
      title: "Mobile Number",
      text: "+639876543210",
    },
  ];

  return (
    <section id="social_media_accounts" className="">
      <h1 className="text-center text-lg font-semibold uppercase py-5">
        Connect with us
      </h1>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 py-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start gap-8 md:gap-6 hover:text-green-500 transition"
          >
            <div className="w-15 h-15 md:w-15 md:h-15 flex items-center justify-center rounded-full border-5 hover:border-white border-gray-300 text-white hover:text-white bg-black hover:bg-gray-800">
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
