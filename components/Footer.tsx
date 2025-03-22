import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">🚗 Car Rental</h2>
            <p className="text-gray-400 mt-2">
              Rent the best cars at unbeatable prices. Luxury, comfort, and
              style in one place.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Browse Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Modify the values at href with the links to your social media*/}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Car Rental. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
