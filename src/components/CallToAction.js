// File: pagelanding/src/components/CallToAction.jsx
import React from 'react';

/**
 * CallToAction component
 * On click, navigates to the registration/authentication page.
 */
const CallToAction = () => {
  const handleGetStarted = () => {
    // Read the auth frontend URL from environment, with a local fallback on port 3000
    const authUrl = process.env.REACT_APP_AUTH_URL || 'http://localhost:3000';
    // Redirect the browser
    window.location.href = authUrl;
  };

  return (
    <section id="get-started" className="py-20 md:py-32 bg-custom-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready to Generate Your Own Synthetic Data?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-white/90">
          Start now and experience the power of privacy-enhanced data generation.
        </p>
        <div className="mt-10">
          <button
            onClick={handleGetStarted}
            className="inline-block px-10 py-4 text-lg font-semibold text-gradient-start bg-white rounded-lg shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

