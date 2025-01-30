import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [langDropdown, setLangDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-500 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-white text-2xl font-bold cursor-pointer flex items-center">
            <span className="text-blue-300">ANY</span>TECH
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#" className="text-white hover:text-gray-300">
            Solutions
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <button
            className="text-white flex items-center space-x-1 border border-white px-3 py-2 rounded-md"
            onClick={() => setLangDropdown(!langDropdown)}
          >
            <FaGlobe />
            <span>EN</span>
          </button>
          {/* Language Dropdown */}
          <div className="relative">

            {langDropdown && (
              <div className="absolute right-0 mt-2 w-24 bg-white shadow-md rounded-md">
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
                  EN
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
                  FR
                </button>
              </div>
            )}
          </div>

        </div>
        {/* Language & Contact */}
        <div className="flex items-center space-x-4">


          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Contact Us →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
