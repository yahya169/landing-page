// src/components/FeaturesOverview.js
import React from 'react';
import { ArrowUpTrayIcon, CogIcon, CpuChipIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Upload CSV',
    description: 'Quickly upload your dataset in CSV format. Simple and straightforward.',
    icon: ArrowUpTrayIcon,
  },
  {
    name: 'Select Columns',
    description: 'Easily identify and select categorical columns for accurate model training.',
    icon: CogIcon,
  },
  {
    name: 'Train Model',
    description: 'Our powerful generative model learns the patterns in your data.',
    icon: CpuChipIcon,
  },
  {
    name: 'Download Data',
    description: 'Get your high-fidelity synthetic dataset, ready for use.',
    icon: ArrowDownTrayIcon,
  },
];

const FeaturesOverview = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-navy/90 dark:bg-almost-black/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Core Features</h2>
          <p className="mt-4 text-lg text-light-gray dark:text-gray-400">Everything you need to generate quality synthetic data.</p>
        </div>
        <div className="bg-navy/50 dark:bg-almost-black/50 p-8 md:p-12 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="text-center p-6 bg-navy dark:bg-almost-black rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <feature.icon className="h-12 w-12 text-white mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                <p className="mt-2 text-sm text-light-gray dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;