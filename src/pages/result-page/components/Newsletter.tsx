
import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#1C1D2199] max-w-7xl mx-auto rounded-xl sm:rounded-2xl py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500 via-transparent to-blue-500"></div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-green-500/25">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Get the latest betting tips, exclusive offers, and expert insights delivered straight to
            your inbox.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-xs sm:max-w-md mx-auto">
          <div className="flex-1 relative">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#61F308] to-[#15B54B]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 rounded-full px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#61F308] to-[#15B54B] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-sm sm:text-base whitespace-nowrap">
            Subscribe Now
          </button>
        </div>

        <div className="mt-4 sm:mt-6">
          <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
            company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
