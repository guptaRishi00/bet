
import React from 'react';
import { Search, Filter, ArrowRight, ChevronDown } from 'lucide-react';

const SearchFilters = () => {
  return (
    <div className="py-4 sm:py-6">
      <div className="mx-auto">
        {/* Back Button */}
        <div className="flex items-center mb-4 sm:mb-6">
          <button className="flex bg-[#1C1D21] py-3 sm:py-4 lg:py-5 px-4 sm:px-8 lg:px-28 w-full items-center justify-center sm:justify-start text-gray-300 hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 rotate-180" />
            <span className="font-bold text-sm sm:text-base">Match Results</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="px-3 sm:px-6 md:px-12 lg:px-28">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-full sm:max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Matches"
                className="w-full bg-[#101212] border border-green-500 rounded-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 sm:gap-3 flex-shrink-0">
              <div className="p-[1px] rounded-full bg-gradient-to-b from-[#61F308] to-[#15B54B] flex-1 sm:flex-none">
                <button className="flex items-center justify-center bg-[#101212] text-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-gray-700 transition-colors w-full text-sm sm:text-base">
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="xs:inline">Filters</span>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </button>
              </div>
              <div className="p-[1px] rounded-full bg-gradient-to-b from-[#61F308] to-[#15B54B] flex-1 sm:flex-none">
                <button className="flex items-center justify-center bg-[#101212] text-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-gray-700 transition-colors w-full text-sm sm:text-base">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/>
                  </svg>
                  <span className="xs:inline">Sort</span>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
