import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  score: string;
  league: string;
  prediction: string;
  tipster: string;
  odds: string;
  isWin: boolean;
}

const MatchCard = ({
  homeTeam,
  awayTeam,
  score,
  league,
  prediction,
  tipster,
  odds,
  isWin,
}: MatchCardProps) => {
  return (
    <div className="bg-[#1C1D21] rounded-2xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full border border-gray-700 gap-4 sm:gap-0">
      {/* Left: Teams and League */}
      <div className="flex flex-col min-w-0 sm:min-w-[200px]">
        <span className="text-white font-medium text-base mb-1 truncate sm:whitespace-normal">
          {homeTeam} vs {awayTeam}
        </span>
        <span className="text-gray-400 text-sm">{league}</span>
      </div>

      {/* Center: Score, Win Badge, Divider, and Tipster */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        {/* Score and Win Badge */}
        <div className="flex items-center sm:flex-col sm:items-center justify-start sm:justify-center gap-3 sm:gap-0 sm:min-w-[80px]">
          <span className="text-white text-lg font-semibold sm:mb-1">{score}</span>
          {isWin && (
            <span className="flex items-center gap-1 border bg-[#1F2E24] border-green-500 text-green-500 px-2 py-1 rounded-lg  text-xs font-medium">
              <CheckCircle2 className="w-3 h-3" /> Win
            </span>
          )}
        </div>

        {/* Vertical Divider - Hidden on mobile */}
        <div className="hidden sm:block h-12 w-px bg-gray-700" />

        {/* Tipster */}
        <div className="flex flex-col items-start min-w-0 sm:min-w-[160px]">
          <span className="text-green-400 font-semibold text-base mb-1 truncate sm:whitespace-normal">
            {prediction}
          </span>
          <span className="text-gray-400 text-sm truncate sm:whitespace-normal">
            Tipster : {tipster}
          </span>
        </div>
      </div>

      {/* Right: Odds and View Profile */}
      <div className="flex flex-col sm:items-end gap-2 sm:min-w-0">
        <span className="text-white font-medium text-base">Odds : {odds}</span>
        <div className="p-[1px] rounded-full bg-gradient-to-b from-[#61F308] to-[#15B54B] self-start sm:self-auto">
          <button className="flex items-center justify-center bg-[#1C1D21] text-gray-300 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors font-medium text-sm whitespace-nowrap w-full">
            View Profile
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default MatchCard;
