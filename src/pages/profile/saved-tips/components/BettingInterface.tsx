import Header from './Header';
import BettingCard from './BettingCard';
import { ArrowRight } from 'lucide-react';

const BettingInterface = () => {
  // ... keep existing code (bettingData array)
  const bettingData = [
    {
      userName: 'Alex Thompson',
      tips: '156',
      avgOdds: '1.95',
      winRate: '78%',
      match: 'Arsenal vs Chelsea',
      league: 'England Premiere League',
      time: 'Today | 5:00pm',
      betType: 'BTTS & Over 2.5',
      predictedWinner: 'Arsenal',
      odds: '1.95',
      percentage: '82%',
    },
    {
      userName: 'Alex Thompson',
      tips: '156',
      avgOdds: '1.95',
      winRate: '78%',
      match: 'Arsenal vs Chelsea',
      league: 'England Premiere League',
      time: 'Today | 5:00pm',
      betType: 'BTTS & Over 2.5',
      predictedWinner: 'Arsenal',
      odds: '1.95',
      percentage: '82%',
    },
    {
      userName: 'Alex Thompson',
      tips: '156',
      avgOdds: '1.95',
      winRate: '78%',
      match: 'Arsenal vs Chelsea',
      league: 'England Premiere League',
      time: 'Today | 5:00pm',
      betType: 'BTTS & Over 2.5',
      predictedWinner: 'Arsenal',
      odds: '1.95',
      percentage: '82%',
    },
    {
      userName: 'Alex Thompson',
      tips: '156',
      avgOdds: '1.95',
      winRate: '78%',
      match: 'Arsenal vs Chelsea',
      league: 'England Premiere League',
      time: 'Today | 5:00pm',
      betType: 'BTTS & Over 2.5',
      predictedWinner: 'Arsenal',
      odds: '1.95',
      percentage: '82%',
    },
    {
      userName: 'Alex Thompson',
      tips: '156',
      avgOdds: '1.95',
      winRate: '78%',
      match: 'Arsenal vs Chelsea',
      league: 'England Premiere League',
      time: 'Today | 5:00pm',
      betType: 'BTTS & Over 2.5',
      predictedWinner: 'Arsenal',
      odds: '1.95',
      percentage: '82%',
    },
    {
      userName: 'Alex Thompson',
      tips: '156',
      avgOdds: '1.95',
      winRate: '78%',
      match: 'Arsenal vs Chelsea',
      league: 'England Premiere League',
      time: 'Today | 5:00pm',
      betType: 'BTTS & Over 2.5',
      predictedWinner: 'Arsenal',
      odds: '1.95',
      percentage: '82%',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#101212] to-[#3B3E40] text-white">
      <div className="flex items-center mb-4 sm:mb-6">
        <button className="flex bg-[#1C1D21] py-3 sm:py-4 lg:py-5 px-4 sm:px-8 lg:px-28 w-full items-center justify-center sm:justify-start text-gray-300 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 rotate-180" />
          <span className="font-bold text-sm sm:text-base">Profile {'>'} Wallet</span>
        </button>
      </div>
      <Header />

      <div className="w-full px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {bettingData.map((data, index) => (
            <BettingCard key={index} {...data} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-b from-[#61F308] to-[#15B54B] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BettingInterface;
