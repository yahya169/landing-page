// src/components/Footer.js
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// IMPORTANT: Replace "SynthPro" with your actual brand name below
const BRAND_NAME = "INFIVALE";

const Footer = () => {
  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Documentation", href: "#docs" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-navy/70 dark:bg-almost-black/70 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Text & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              {/* MODIFIED LINE BELOW - Replaced img with text */}
              <span className="text-xl font-bold text-white mb-2">{BRAND_NAME}</span>
            </a>
            <p className="text-sm text-light-gray dark:text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </p>
          </div>

          {/* Footer Links (rest of the component remains the same) */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-medium-gray dark:text-gray-400 hover-gradient-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons (rest of the component remains the same) */}
          <div className="flex justify-center md:justify-end space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gradient-end transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;