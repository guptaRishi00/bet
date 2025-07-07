import { Target, TrendingUp, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card className="bg-[#1C1D21] border-gray-700">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Balance</p>
              <p className="text-white font-bold">•••••</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1C1D21] border-gray-700">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Win Rate</p>
              <p className="text-white font-bold">62%</p>
              <p className="text-gray-500 text-xs">Last 30 days</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1C1D21] border-gray-700">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <Trophy className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">Prediction Points</p>
              <p className="text-white font-bold">875</p>
              <p className="text-gray-500 text-xs">This Week</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
