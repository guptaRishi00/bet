import { User, Calendar, Trophy } from 'lucide-react';
import { IoWalletOutline } from 'react-icons/io5';
import { HiOutlineBolt } from 'react-icons/hi2';
import { MdOutlineMenu } from 'react-icons/md';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const navigate = useNavigate();

  return (
    <div className="mb-8 bg-[#1C1D21] p-4 sm:p-6 lg:p-10 w-full">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4 w-full">
          <div className="w-16 h-16 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#61F308] to-[#15B54B] flex items-center justify-center flex-shrink-0">
            <User className="w-8 h-8 sm:w-20 sm:h-20 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-white">John Doe</h1>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Member since January 2023
            </p>
            <Badge className="mt-3 sm:mt-5 bg-[#FFE75C14] rounded-lg border-[#FEE300] text-xs">
              Top 10% Tipster
            </Badge>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 sm:mt-5 w-full">
              {/* CARD START */}
              <div
                className="rounded-lg bg-gradient-to-r from-[#61F308] to-[#15B54B] p-[1px] overflow-hidden h-full cursor-pointer"
                onClick={() => navigate('/wallet')}
              >
                <Card className="bg-[#1C1D21] border-none rounded-lg w-full h-full">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded flex items-center justify-center">
                          <IoWalletOutline className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-gray-400 text-xs">Balance</p>
                      </div>
                      <p className="text-white font-bold text-xl">•••••</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CARD 2 */}
              <div className="rounded-lg bg-gradient-to-r from-[#61F308] to-[#15B54B] p-[1px] overflow-hidden h-full">
                <Card className="bg-[#1C1D21] border-none rounded-lg w-full h-full">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div>
                          <Trophy className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-400 text-xs">Win Rate</p>
                      </div>
                      <p className="text-white font-bold text-lg">62%</p>
                      <p className="text-gray-500 text-xs">Last 30 days: 65%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CARD 3 */}
              <div className="rounded-lg bg-gradient-to-r from-[#61F308] to-[#15B54B] p-[1px] overflow-hidden h-full">
                <Card className="bg-[#1C1D21] border-none rounded-lg w-full h-full">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div>
                          <HiOutlineBolt className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-400 text-xs">Prediction Points</p>
                      </div>
                      <p className="text-white font-bold text-lg">875</p>
                      <p className="text-gray-500 text-xs">This Week</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <span
          className="text-white cursor-pointer hover:text-gray-300 transition-colors flex-shrink-0 ml-4"
          onClick={() => navigate('/profile-settings')}
        >
          <MdOutlineMenu size={20} />
        </span>
      </div>
    </div>
  );
}
