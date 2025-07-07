import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

const bets = [
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '$50',
    potentialWin: '$105',
    status: 'Pending',
    statusColor: 'bg-yellow-500',
    date: 'Today',
    time: '04:00',
  },
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '$50',
    potentialWin: '$105',
    status: 'Lost',
    statusColor: 'bg-red-500',
    date: 'Yesterday',
    time: '01:00',
  },
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '$50',
    potentialWin: '$105',
    status: 'Won',
    statusColor: 'bg-green-500',
    date: '2 days ago',
    time: '04:00',
  },
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '$50',
    potentialWin: '$105',
    status: 'Won',
    statusColor: 'bg-green-500',
    date: 'Apr 26, 2025',
    time: '04:00',
  },
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '$50',
    potentialWin: '$105',
    status: 'Won',
    statusColor: 'bg-green-500',
    date: 'Apr 26, 2025',
    time: '04:00',
  },
  {
    match: 'Arsenal vs Chelsea',
    prediction: 'Arsenal to win',
    odds: '2.10',
    stake: '$50',
    potentialWin: '$105',
    status: 'Won',
    statusColor: 'bg-green-500',
    date: 'Apr 24, 2025',
    time: '04:00',
  },
];

export default function MyTips() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#101212] to-[#3B3E40] text-white">
      {/* Header */}
      <div className="flex items-center mb-4 sm:mb-6">
        <button className="flex bg-[#1C1D21] py-3 sm:py-4 lg:py-5 px-4 sm:px-8 lg:px-10 w-full items-center justify-center sm:justify-start text-gray-300 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 rotate-180" />
          <span className="font-bold text-sm sm:text-base">Profile {'>'} My Tips</span>
        </button>
      </div>

      <div className="p-6">
        <h1 className="text-xl font-semibold mb-6">Recent Bets</h1>

        <div className="space-y-4">
          {bets.map((bet, index) => (
            <div key={index} className="bg-[#1C1D21] rounded-lg p-4 border border-gray-700">
              {/* Match name and status */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">{bet.match}</h3>
                <div className={`${bet.statusColor} text-white text-xs px-2 py-1 rounded-xl`}>
                  {bet.status}
                </div>
              </div>

              {/* Stats grid - all in one line */}
              <div className="grid grid-cols-4 gap-6 mb-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Prediction</p>
                  <p className="text-white font-medium">{bet.prediction}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Odds</p>
                  <p className="text-white font-semibold">{bet.odds}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Stake</p>
                  <p className="text-white font-semibold">{bet.stake}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Potential Win</p>
                  <p className="text-white font-semibold">{bet.potentialWin}</p>
                </div>
              </div>

              {/* Date and time */}
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {bet.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {bet.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More button */}
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-b from-[#61F308] to-[#15B54B] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
