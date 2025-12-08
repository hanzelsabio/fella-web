import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsThreads, BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { ImPinterest2 } from "react-icons/im";
import {
  Menu,
  Search,
  CircleUser,
  X,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import "./header.css";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="header_section shadow-md relative top-0 left-0 w-full z-50 bg-white">
      <nav className="header_navigation container mx-auto relative flex items-center justify-between py-12 lg:py-3 px-6">
        {/* Left Side (Desktop Nav + Mobile Menu) */}

        {/* Center logo */}
        <div className="hidden lg:flex">
          <Link to="/">
            <img
              src="/fella-screen-prints-logo.png"
              className="w-40"
              alt="Brand Logo"
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center gap-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex lg:hidden items-center text-gray-700 hover:text-green-500 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Center logo */}
        <div className="absolute lg:hidden left-1/2 -translate-x-1/2">
          <Link to="/">
            <img
              src="/fella-screen-prints-logo.png"
              className="w-40"
              alt="Brand Logo"
            />
          </Link>
        </div>

        {/* Right Side (Contact button - Desktop) */}
        <div className="hidden lg:flex items-center space-x-8 text-md text-black">
          <a href="#services" className="hover:text-green-500 transition">
            Services
          </a>
          <a href="#about-us" className="hover:text-green-500 transition">
            About Us
          </a>
          <a href="#our-works" className="hover:text-green-500 transition">
            Our Work
          </a>
          <a href="#reviews" className="hover:text-green-500 transition">
            Reviews
          </a>
          <a href="#faqs" className="hover:text-green-500 transition">
            FAQ
          </a>
          <Link to="/contact" className="hover:text-green-500 transition">
            Contact Us
          </Link>
          {/* Contact Button */}
          {/* <a
            href="#contact"
            className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition"
          >
            Get a Quote
          </a> */}
        </div>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="sidebar_overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar_body fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="sidebar_content flex justify-between items-center p-8">
          <h2 className="text-xl font-semibold text-red-600"></h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-600 hover:text-green-500 transition"
            style={{ cursor: "pointer" }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="sidebar_nav_links text-lg flex flex-col space-y-4 text-gray-700 px-8">
          <li>
            <a
              href="#services"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-green-500 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-green-500 transition"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#our-works"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-green-500 transition"
            >
              Our Work
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-green-500 transition"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-green-500 transition"
            >
              FAQs
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setSidebarOpen(false)}
              className="block hover:text-green-500 transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Social Media */}
        <div className="sidebar_socials absolute bottom-6 w-full flex gap-6 text-gray-600 px-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <BsInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FiFacebook className="w-5 h-5" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <PiTiktokLogo className="w-5 h-5" />
          </a>
          <a
            href="https://threads.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <BsThreads className="w-5 h-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <BsTwitterX className="w-5 h-5" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <ImPinterest2 className="w-5 h-5" />
          </a>
        </div>
      </aside>
    </header>
  );
}
