import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-10">
        {/* Company → full width mobile */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-white font-bold text-xl mb-5">Computer Hub</h2>
          <p className="text-gray-400 text-[15px] md:text-xs lg:text-[17px] leading-6">
            Your ultimate destination for computer parts, accessories & tech
            gadgets. We deliver high-quality products for gamers, creators &
            professionals.
          </p>
        </div>

        {/* Quick Links → half width mobile (left) */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Categories → half width mobile (right) */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold text-lg mb-4">
            Top Categories
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Processors (CPU)
            </li>
            <li className="hover:text-white cursor-pointer">Graphic Cards</li>
            <li className="hover:text-white cursor-pointer">SSD / HDD</li>
            <li className="hover:text-white cursor-pointer">Gaming Monitors</li>
          </ul>
        </div>

        {/* Newsletter → full width mobile */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-white font-semibold text-lg mb-4">
            Join Newsletter
          </h3>
          <p className="text-gray-400 text-[15px] md:text-sm lg:text-[17px] mb-4">
            Stay updated with latest offers & product launches.
          </p>
          <div className="flex gap-2 w-max md:w-auto md:flex-col lg:flex-row">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* -------- Bottom Footer -------- */}
      <div className="border-t border-gray-700 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 lg:text-lg">
            © {new Date().getFullYear()} Computer Hub. All rights reserved.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <SiFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
