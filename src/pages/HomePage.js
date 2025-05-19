/*
File: src/pages/HomePage.jsx
Description: Public landing page with various sections
*/
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesOverview from '../components/FeaturesOverview';
import HowItWorks from '../components/HowItWorks';
import DemoSection from '../components/DemoSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function HomePage({ toggleDarkMode, darkMode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesOverview />
        <HowItWorks />
        <DemoSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}