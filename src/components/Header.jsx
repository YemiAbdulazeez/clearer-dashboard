import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiGrid,
  FiUser,
  FiChevronDown,
  FiSettings,
} from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    "Dashboard",
    "Wallet",
    "Merchants",
    "Transactions",
    "Beneficiaries",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-4 lg:px-24 mb-[4.3rem]">
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 lg:px-24 transition-all duration-300 ${
          scrolled
            ? " backdrop-blur-md shadow-sm border border-gray-200"
            : "bg-[#F8F8F8]"
        }`}
      >
        <div className="flex items-center justify-between py-6 border-b border-gray-200">
          {/* Left: Logo & Nav */}
          <div className="flex items-center gap-6">
            <div className="text-black font-bold text-xl flex items-center">
              <span className="text-3xl font-bold leading-none">C</span>
              <span className="font-semibold text-xl">learerpay</span>
              <sup className="text-[10px] ml-0.5 font-medium">™</sup>
            </div>

            <nav className="hidden md:flex items-center gap-5 h-full relative">
              {navLinks.map((link, idx) => (
                <a
                  key={link}
                  href="#"
                  className={`text-sm font-normal transition relative flex items-center ${
                    idx === 0
                      ? "font-medium text-black after:content-[''] after:absolute after:bottom-[-31px] after:left-0 after:h-[3px] after:w-full after:bg-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {idx === 0 && (
                    <FiGrid size={16} className="mr-1 text-gray-500" />
                  )}
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 bg-[#4F4F4F] hover:bg-black text-white text-sm px-3 py-1.5 rounded-full shadow-sm">
              <FiUser size={16} />
              Personal account
              <FiChevronDown size={14} />
            </button>
            <button className="flex items-center text-[#4F4F4F] hover:text-black gap-2 text-sm">
              <FiSettings size={20} />
              <span>Settings</span>
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-[999] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <div className="text-black font-bold text-xl flex items-center">
              <span className="text-3xl font-bold text-black leading-none">
                C
              </span>
              <span className="font-semibold text-xl">learerpay</span>
              <sup className="text-[10px] ml-0.5 font-medium">™</sup>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Sidebar Nav */}
          <nav className="flex flex-col px-6 pt-6 gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={link}
                href="#"
                className={`text-base font-normal ${
                  idx === 0 ? "text-black font-medium" : "text-gray-600"
                }`}
              >
                {link}
              </a>
            ))}

            <button className="flex items-center gap-2 bg-[#4F4F4F] hover:bg-black text-white text-sm px-3 py-1.5 rounded-full shadow-sm">
              <FiUser size={16} />
              Personal account
              <FiChevronDown size={14} />
            </button>

            <div className="flex items-center gap-2 text-gray-700 pt-4 text-sm">
              <FiSettings size={20} />
              <span>Settings</span>
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          />
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[20px]" />
    </div>
  );
};

export default Header;
