import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const bets = [
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '50',
    potentialWin: '$105',
    status: 'Pending',
    statusColor: 'bg-yellow-600 text-yellow-100 border-yellow-600',
  },
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '50',
    potentialWin: '$105',
    status: 'Lost',
    statusColor: 'bg-red-600 text-red-100 border-red-600',
  },
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '50',
    potentialWin: '$105',
    status: 'Won',
    statusColor: 'bg-green-600 text-green-100 border-green-600',
  },
];

export default function RecentBets() {
  const navigate = useNavigate();
  return (
    <div className="lg:col-span-2 bg-[#1C1D21] p-10 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Recent Bets</h2>
      </div>

      <div className="space-y-6">
        {bets.map((bet, index) => (
          <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0">
            {/* Header with match name and status */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">{bet.match}</h3>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium border ${bet.statusColor}`}
              >
                {bet.status}
              </div>
            </div>

            {/* Bet details grid */}
            <div className="grid grid-cols-4 gap-8 mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Prediction</p>
                <p className="text-white font-medium">{bet.prediction}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Odds</p>
                <p className="text-white font-medium">{bet.odds}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Stake</p>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-white font-medium">{bet.stake}</span>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Potential Win</p>
                <p className="text-white font-medium">{bet.potentialWin}</p>
              </div>
            </div>

            {/* Date and time */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Today</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>04:00</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show all bets button */}
      <div className="mt-6 flex justify-end">
        <div className="bg-gradient-to-b from-[#61F308] to-[#15B54B] p-[1px] rounded-2xl">
          <button
            onClick={() => navigate('/my-tips')}
            className=" bg-[#1C1D21] text-green-400 hover:bg-[#61F308] hover:text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 transition-colors w-full h-full"
          >
            Show All Saved Tips
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
