import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import TipCard from './components/Tipcard';
import { Button } from '@/components/ui/button';

interface BettingTip {
  id: string;
  tipster: {
    name: string;
    avatar: string;
    totalTips: number;
    avgOdds: number;
    winRate: number;
  };
  match: {
    home: string;
    away: string;
    league: string;
    date: string;
    time: string;
  };
  prediction: {
    type: string;
    team: string;
    odds: number;
    confidence: number;
    risk: 'High' | 'Medium' | 'Low';
  };
}

const SavedTips = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showToday, setShowToday] = useState(true);

  // Diverse mock data
  const mockTips: BettingTip[] = [
    {
      id: 'tip-1',
      tipster: {
        name: 'Alex Thompson',
        avatar: '/lovable-uploads/9bbfa38c-135d-4154-a478-ae03ae44d019.png',
        totalTips: 156,
        avgOdds: 1.95,
        winRate: 78,
      },
      match: {
        home: 'Arsenal',
        away: 'Chelsea',
        league: 'England Premier League',
        date: 'Today',
        time: '5:00pm',
      },
      prediction: {
        type: 'BTTS & Over 2.5',
        team: 'Arsenal',
        odds: 1.95,
        confidence: 82,
        risk: 'High',
      },
    },
    {
      id: 'tip-2',
      tipster: {
        name: 'Maria Rodriguez',
        avatar: '/lovable-uploads/9bbfa38c-135d-4154-a478-ae03ae44d019.png',
        totalTips: 243,
        avgOdds: 2.15,
        winRate: 84,
      },
      match: {
        home: 'Barcelona',
        away: 'Real Madrid',
        league: 'Spain La Liga',
        date: 'Tomorrow',
        time: '8:00pm',
      },
      prediction: {
        type: '1X2 Win',
        team: 'Barcelona',
        odds: 2.3,
        confidence: 76,
        risk: 'Medium',
      },
    },
    {
      id: 'tip-3',
      tipster: {
        name: 'James Wilson',
        avatar: '/lovable-uploads/9bbfa38c-135d-4154-a478-ae03ae44d019.png',
        totalTips: 189,
        avgOdds: 1.85,
        winRate: 71,
      },
      match: {
        home: 'Bayern Munich',
        away: 'Dortmund',
        league: 'Germany Bundesliga',
        date: 'Today',
        time: '2:30pm',
      },
      prediction: {
        type: 'Over 2.5 Goals',
        team: 'Both Teams',
        odds: 1.75,
        confidence: 88,
        risk: 'Low',
      },
    },
    {
      id: 'tip-4',
      tipster: {
        name: 'Sarah Johnson',
        avatar: '/lovable-uploads/9bbfa38c-135d-4154-a478-ae03ae44d019.png',
        totalTips: 312,
        avgOdds: 2.45,
        winRate: 69,
      },
      match: {
        home: 'Liverpool',
        away: 'Manchester City',
        league: 'England Premier League',
        date: 'Sunday',
        time: '4:30pm',
      },
      prediction: {
        type: 'Draw No Bet',
        team: 'Liverpool',
        odds: 2.1,
        confidence: 73,
        risk: 'Medium',
      },
    },
    {
      id: 'tip-5',
      tipster: {
        name: 'Mike Chen',
        avatar: '/lovable-uploads/9bbfa38c-135d-4154-a478-ae03ae44d019.png',
        totalTips: 95,
        avgOdds: 3.25,
        winRate: 62,
      },
      match: {
        home: 'AC Milan',
        away: 'Inter Milan',
        league: 'Italy Serie A',
        date: 'Today',
        time: '7:45pm',
      },
      prediction: {
        type: 'Correct Score',
        team: 'AC Milan',
        odds: 8.5,
        confidence: 45,
        risk: 'High',
      },
    },
    {
      id: 'tip-6',
      tipster: {
        name: 'Emma Davis',
        avatar: '/lovable-uploads/9bbfa38c-135d-4154-a478-ae03ae44d019.png',
        totalTips: 267,
        avgOdds: 1.65,
        winRate: 81,
      },
      match: {
        home: 'PSG',
        away: 'Marseille',
        league: 'France Ligue 1',
        date: 'Tomorrow',
        time: '9:00pm',
      },
      prediction: {
        type: 'Both Teams to Score',
        team: 'Both Teams',
        odds: 1.55,
        confidence: 91,
        risk: 'Low',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <div className="flex items-center gap-2 p-4 text-sm text-gray-400">
        <span className="cursor-pointer hover:text-white transition-colors">← Profile</span>
        <span>〉</span>
        <span className="cursor-pointer hover:text-white transition-colors">Overview</span>
        <span>〉</span>
        <span className="text-white">Saved Tips</span>
      </div>

      {/* Search and Filters */}
      <div className="px-4 pb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Matches"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border border-green-500 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-green-500 transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-green-500 transition-colors"
              onClick={() => setShowToday(!showToday)}
            >
              Today
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockTips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center pb-8">
        <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-3 rounded-full font-semibold transition-colors">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default SavedTips;
