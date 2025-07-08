import { User, X } from 'lucide-react';

const BettingCard = () => {
  return (
    <div className="bg-[#00000029] rounded-2xl border border-green-500 p-6 relative w-full mx-auto">
      {/* Close button */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
        <X size={20} />
      </button>

      {/* Profile section */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#61F308] to-[#15B54B] rounded-full flex items-center justify-center overflow-hidden">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold">
            <User />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">Alex Thompson</h3>
          <div className="flex gap-4 text-sm text-gray-400">
            <span>156 Tips</span>
            <span>Avg Odds : 1.95</span>
            <span className="text-green-400 font-semibold">78% Win Rate</span>
          </div>
        </div>
      </div>

      {/* Partition line */}
      <div className="border-t border-gray-600 mb-4"></div>

      {/* Match info */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-white font-semibold text-xl mb-1">Arsenal vs Chelsea</h4>
          <p className="text-gray-400 text-sm">England Premier League • Today | 5:00pm</p>
        </div>
        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500">
          High
        </span>
      </div>

      {/* Bet details */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="text-green-400 font-semibold">BTTS & Over 2.5</div>
          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-bold border border-green-500">
            1.95 +
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white">
            <span className="text-gray-400">Predicted Winner :</span>{' '}
            <span className="text-green-400 font-semibold">Arsenal</span>
          </span>
          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-bold border border-green-500">
            82%
          </span>
        </div>
      </div>

      {/* Add to bet slip button */}
      <button
        className="w-full py-3 rounded-full font-semibold text-lg text-green-400 transition-all duration-300 cursor-pointer"
        style={{
          background: '#1F2E24',
          border: '2px solid transparent',
          backgroundImage:
            'linear-gradient(#1F2E24, #1F2E24), linear-gradient(to bottom, #61F308, #15B54B)',
          backgroundOrigin: 'padding-box, border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        Add to Bet Slip +
      </button>
    </div>
  );
};

export default BettingCard;
