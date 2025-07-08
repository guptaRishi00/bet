import React from 'react';
import { ArrowRight } from 'lucide-react';
import UserProfile from './components/UserProfile';

import RecentBets from './components/RecentBets';
import TipsStats from './components/TipsStats';
import SavedTips from './components/SavedTips';
import { TopbarHeader } from '@/customComponents/TopbarHeader';

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#101212] to-[#3B3E40] text-white">
      <TopbarHeader />
      <div className="flex items-center mb-4 sm:mb-6">
        <button className="flex bg-[#1C1D21] py-3 sm:py-4 lg:py-5 px-4 sm:px-8 lg:px-28 w-full items-center justify-center sm:justify-start text-gray-300 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 rotate-180" />
          <span className="font-bold text-sm sm:text-base">Profile {'>'} Overview</span>
        </button>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        <UserProfile />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 ">
            <h1 className="lg:text-2xl font-medium">Overview</h1>
            <RecentBets />
          </div>
          <TipsStats />
        </div>

        <SavedTips />
      </div>
    </div>
  );
}
