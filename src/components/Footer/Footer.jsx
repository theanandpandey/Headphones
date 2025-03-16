import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
                ratione quidem libero, praesentium ab atque? Quidem maxime,
                numquam dolores.
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  <a href="tel:+917217767355" className="hover:underline">
                    +91 7217767355
                  </a>
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation />
                  <span>Faridabad, Haryana</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <ul className="space-y-2">
                <li className="cursor-pointer hover:text-gray-300">Home</li>
                <li className="cursor-pointer hover:text-gray-300">About</li>
                <li className="cursor-pointer hover:text-gray-300">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-gray-300">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl cursor-pointer hover:text-blue-500 transition-transform transform hover:scale-110 duration-300" />
                <FaInstagram className="text-3xl cursor-pointer hover:text-pink-500 transition-transform transform hover:scale-110 duration-300" />
                <FaTelegram className="text-3xl cursor-pointer hover:text-blue-400 transition-transform transform hover:scale-110 duration-300" />
                <FaGoogle className="text-3xl cursor-pointer hover:text-red-500 transition-transform transform hover:scale-110 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={Cards} alt="Payment Methods" className="w-[80%]" />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center mt-8 border-t-2 pt-8">
            © 2024. All Rights Reserved || Anand Pandey
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
