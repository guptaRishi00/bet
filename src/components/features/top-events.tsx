import { EventBannersHomePage } from '@/components/features/event-banners';
import { TodayHotTipsCard } from '@/components/cards/today-hot-tips-card';

import logo_laliga_logo from '@/assets/logo_laliga_logo.png';
import logo_champions_league_logo from '@/assets/logo_champions_league_logo.png';
import logo_premiere_league_logo from '@/assets/logo_premiere_league_logo.png';
import logo_bundesliga_logo from '@/assets/logo_bundesliga_logo.png';
import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';

export function TopEvents() {
  return (
    <div
      style={{
        boxShadow: '0px 4px 333px 0px #00000040',
      }}
      className="w-full bg-[#1C1D21] mt-9 rounded-[16px] flex flex-col"
    >
      <div className="w-full flex">
        <div className="w-1/3 flex flex-col items-start justify-start">
          <div className="px-3 flex flex-col w-full">
            <p className="w-full mt-6 text-white font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
              Top Events
            </p>
            <div className="w-full flex flex-col items-start justify-start gap-2 mt-6">
              <EventBannersHomePage brandLogo={logo_laliga_logo} brandName="LaLiga" />
              <EventBannersHomePage
                brandLogo={logo_champions_league_logo}
                brandName="Champions League"
              />
              <EventBannersHomePage
                brandLogo={logo_premiere_league_logo}
                brandName="Premiere League"
              />
              <EventBannersHomePage brandLogo={logo_bundesliga_logo} brandName="Bundesliga" />
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="px-3 flex flex-col w-full">
            <p className="mt-6 text-white font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
              Today's hot Tips
            </p>
            <div className="w-full grid grid-cols-2 gap-y-2 gap-x-4 mt-6">
              <TodayHotTipsCard />
              <TodayHotTipsCard />
              <TodayHotTipsCard />
              <TodayHotTipsCard />
            </div>
          </div>
        </div>
      </div>
      {/* view all tips button */}
      <div className="self-end mr-3 mt-6 mb-8">
        <div
          className={cn(
            'rounded-[16px] h-[48px] w-[189px] bg-gradient-to-r from-[#61F308] to-[#15B54B] p-[1.5px] inline-block',
          )}
        >
          <button
            className={cn(
              'h-full w-full flex items-center justify-center gap-2 font-poppins font-semibold text-[16px] leading-[24px] tracking-[0] text-white bg-[#19191d] rounded-[15px]',
            )}
          >
            View All Tips
            <span>
              <MoveRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
