// src/components/Header.js
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// IMPORTANT: Replace "SynthPro" with your actual brand name below
const BRAND_NAME = "INFIVALE";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Docs", href: "#docs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy/80 dark:bg-almost-black/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Text */}
          <a href="#home" className="flex-shrink-0">
            {/* MODIFIED LINE BELOW - Replaced img with text */}
            <span className="text-2xl font-bold text-white">{BRAND_NAME}</span>
          </a>

          {/* Desktop Navigation (rest of the component remains the same) */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover-gradient-underline"
              >
                {link.name}
              </a>
            ))}
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <a
              href="#get-started"
              className="ml-4 inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-custom-gradient hover:opacity-90 shadow-md hover:shadow-gradient-glow transition-all duration-300"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button (rest of the component remains the same) */}
          <div className="md:hidden flex items-center">
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gradient-start"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (rest of the component remains the same) */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <a
                href="#get-started"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-custom-gradient hover:opacity-90 shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;