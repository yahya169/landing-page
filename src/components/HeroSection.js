// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-navy dark:bg-almost-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Generate <span className="text-gradient">Synthetic Data</span>
          <br className="hidden sm:inline" /> in Seconds
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-light-gray dark:text-gray-400">
          Upload your CSV, configure columns, train your model, and download privacy-preserving synthetic data effortlessly.
        </p>
        <div className="mt-10">
          <a
            href="#get-started" // Link to your app or a specific section
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-custom-gradient rounded-lg shadow-xl hover:opacity-90 transform hover:scale-105 transition-all duration-300 hover:shadow-gradient-glow"
          >
            Try It Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;