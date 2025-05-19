// src/components/DemoSection.js
import React from 'react';

const DemoSection = () => {
  return (
    <section id="demo" className="py-16 md:py-24 bg-navy/95 dark:bg-almost-black/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">See It In Action</h2>
          <p className="mt-4 text-lg text-light-gray dark:text-gray-400">A glimpse into our intuitive data generation interface.</p>
        </div>
        <div className="p-1 bg-custom-gradient rounded-xl shadow-2xl max-w-4xl mx-auto">
          <div className="bg-navy dark:bg-almost-black p-8 rounded-lg">
            {/* Placeholder for UI Mockup */}
            <div className="aspect-video bg-slate-700 dark:bg-slate-800 rounded-md flex flex-col items-center justify-center text-light-gray">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 text-gradient-end">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-xl font-semibold">Application UI Mockup</p>
              <p className="text-sm mt-1"> (Upload -> Configure -> Train -> Download Flow) </p>
            </div>
             {/* You would replace the div above with an actual image or a more detailed SVG mockup */}
             {/* Example: <img src="/path/to/your/ui-mockup.png" alt="Application UI Mockup" className="rounded-md" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;