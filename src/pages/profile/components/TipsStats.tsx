import React from 'react';

const sports = [
  { name: 'Football', winRate: '75% Win Rate', percentage: 75 },
  { name: 'Basketball', winRate: '40% Win Rate', percentage: 40 },
  { name: 'Tennis', winRate: '68% Win Rate', percentage: 68 },
  { name: 'Cricket', winRate: '72% Win Rate', percentage: 72 },
];

const overallStats = [
  { label: 'Total Tips', value: '87' },
  { label: 'Win', value: '54' },
  { label: 'Loss', value: '33' },
  { label: 'Average Odds', value: '4.2' },
  { label: 'Win Rate', value: '62%' },
  { label: 'Profit', value: '215', isProfit: true },
];

export default function TipsStats() {
  return (
    <div className="bg-[#1C1D21] text-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Tips Stats</h2>

      <div className="space-y-6">
        {sports.map((sport, index) => (
          <div key={index}>
            <div className="mb-2">
              <span className="text-white font-medium">{sport.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-[#0F3102] rounded-full h-1">
                <div
                  className="bg-[#61F308BF] h-1 rounded-full transition-all duration-300"
                  style={{ width: `${sport.percentage}%` }}
                ></div>
              </div>
              <span className="text-gray-400 text-sm">{sport.winRate}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-600 my-6"></div>

      <div className="space-y-4">
        {overallStats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-400">{stat.label}</span>
            <span
              className={`font-bold ${
                stat.isProfit ? 'text-white flex items-center gap-2' : 'text-white'
              }`}
            >
              {stat.isProfit && <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>}
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
