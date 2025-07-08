import React from 'react';
import { Trash2, Plus, ArrowRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tipCards = [
  {
    author: 'Alex Thompson',
    stats: '156 Tips    Avg Odds : 1.95    78% Win Rate',
    match: 'Arsenal vs Chelsea',
    competition: 'England Premier League',
    time: 'Today | 5:00pm',
    prediction: 'BTTS & Over 2.5',
    winner: 'Arsenal',
    odds: '1.95',
    probability: '82%',
    avatarColor: 'from-green-400 to-green-600',
  },
  {
    author: 'Alex Thompson',
    stats: '156 Tips    Avg Odds : 1.95    78% Win Rate',
    match: 'Arsenal vs Chelsea',
    competition: 'England Premier League',
    time: 'Today | 5:00pm',
    prediction: 'BTTS & Over 2.5',
    winner: 'Arsenal',
    odds: '1.95',
    probability: '82%',
    avatarColor: 'from-green-400 to-green-600',
  },
  {
    author: 'Alex Thompson',
    stats: '156 Tips    Avg Odds : 1.95    78% Win Rate',
    match: 'Arsenal vs Chelsea',
    competition: 'England Premier League',
    time: 'Today | 5:00pm',
    prediction: 'BTTS & Over 2.5',
    winner: 'Arsenal',
    odds: '1.95',
    probability: '82%',
    avatarColor: 'from-green-400 to-green-600',
  },
];

export default function SavedTips() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1C1D21] text-white p-6 rounded-lg mt-12">
      <h2 className="text-2xl font-bold mb-6">Saved Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tipCards.map((tip, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#61F308] to-[#0e8d38] p-[1px] rounded-xl shadow-xl"
          >
            <div className="bg-[#1C1D21] rounded-xl p-4">
              {/* Header with avatar and author info */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{tip.author}</p>
                  <p className="w-full text-xs flex items-center gap-2">
                    <span className="text-gray-500">156 Tips</span>
                    <span className="">Avg Odds : 1.95</span>
                    <span className="text-[#61F308]">78% Win Rate</span>
                  </p>
                </div>
              </div>

              {/* Separator line */}
              <div className="border-t border-gray-600 mb-4"></div>

              {/* Match info and High badge */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-white font-medium mb-1">{tip.match}</h3>
                </div>
                <div className="bg-gradient-to-b from-[#61F308] to-[#15B54B] p-[1px] rounded-full inline-block">
                  <div className="bg-[#1F2E24] text-white px-3 py-1 rounded-full text-xs font-medium">
                    High
                  </div>
                </div>
              </div>

              {/* Competition and time */}
              <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                <span>{tip.competition}</span>
                <span>•</span>
                <span>{tip.time}</span>
              </div>

              {/* Prediction */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <p className="text-[#61F308BF] font-medium mb-2">{tip.prediction}</p>
                  <div className="bg-gradient-to-b from-[#61F308] to-[#15B54B] p-[1px] rounded-full inline-block">
                    <div className=" text-white px-3 py-1 rounded-full text-xs font-medium bg-[#1F2E24]">
                      {tip.probability}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400 text-xs">Predicted Winner :</p>
                      <p className="text-[#61F308BF] font-medium">{tip.winner}</p>
                    </div>
                    <div className="bg-gradient-to-b from-[#61F308] to-[#15B54B] p-[1px] rounded-full inline-block">
                      <div className="text-white px-3 py-1 rounded-full text-xs font-medium bg-[#1F2E24]">
                        {tip.odds} +
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2"></div>
                </div>
              </div>

              {/* Separator line */}
              <div className="border-t border-gray-600 mb-4"></div>

              {/* Bottom actions */}
              <div className="flex items-center justify-between">
                <button className="text-[#61F308BF] hover:text-green-600 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
                <div className="bg-gradient-to-b from-[#61F308] to-[#15B54B] p-[1px] rounded-full">
                  <button className="bg-[#1F2E24] text-green-400 hover:bg-[#61F308] hover:text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors w-full h-full">
                    Add to Bet Slip
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All button */}
      <div className="flex justify-end mt-6">
        <div className="bg-gradient-to-b from-[#61F308] to-[#15B54B] p-[1px] rounded-2xl">
          <button
            onClick={() => navigate('/saved-tips')}
            className=" bg-[#1C1D21] text-green-400 hover:bg-[#61F308] hover:text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 transition-colors w-full h-full"
          >
            View All Saved Tips
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
