// src/components/HowItWorks.js
import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Upload Your File',
    description: 'Drag and drop or select your CSV file to begin the process.',
  },
  {
    number: '2',
    title: 'Configure & Train',
    description: 'Specify categorical columns and let our AI train a custom model.',
  },
  {
    number: '3',
    title: 'Download Your Synthetic Dataset',
    description: 'Receive a new dataset that mimics your original, ready for use.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-navy dark:bg-almost-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-4 text-lg text-light-gray dark:text-gray-400">A simple three-step process to your synthetic data.</p>
        </div>
        <div className="relative">
          {/* Connecting line (visible on larger screens) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2">
             <div className="h-full w-2/3 mx-auto bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-custom-gradient flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  {/* Circle outline for desktop connecting line effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gradient-start transition-all"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-light-gray dark:text-gray-400 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;