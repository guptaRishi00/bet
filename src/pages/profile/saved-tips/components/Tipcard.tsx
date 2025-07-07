import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface TipCardProps {
  tip: {
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
  };
}

const TipCard = ({ tip }: TipCardProps) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
      {/* Header with Tipster Info and Close Button */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {tip.tipster.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
          </div>
          <div>
            <h3 className="text-white font-semibold">{tip.tipster.name}</h3>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>{tip.tipster.totalTips} Tips</span>
              <span>Avg Odds: {tip.tipster.avgOdds}</span>
              <span className="text-green-400">{tip.tipster.winRate}% Win Rate</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors p-1">×</button>
      </div>

      {/* Separator before Match Info */}
      <Separator className="mb-4 bg-gray-700" />

      {/* Match Info */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-white font-semibold text-lg">
            {tip.match.home} vs {tip.match.away}
          </h4>
          <span
            className={`px-3 py-1 rounded-full text-xs border ${getRiskColor(tip.prediction.risk)}`}
          >
            {tip.prediction.risk}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{tip.match.league}</span>
          <span>•</span>
          <span>
            {tip.match.date} | {tip.match.time}
          </span>
        </div>
      </div>

      {/* Prediction Details */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300">{tip.prediction.type}</span>
          <div className="flex items-center gap-2">
            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">
              {tip.prediction.odds}s
            </span>
            <span className="text-green-400 text-sm">+</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">
            Predicted Winner: <span className="text-green-400">{tip.prediction.team}</span>
          </span>
          <span className="text-green-400">{tip.prediction.confidence}%</span>
        </div>
      </div>

      {/* Add to Bet Slip Button */}
      <Button className="w-full bg-transparent border border-green-500 text-green-400 hover:bg-green-500/10 hover:text-green-300 transition-colors rounded-lg py-3">
        Add to Bet Slip +
      </Button>
    </div>
  );
};

export default TipCard;
