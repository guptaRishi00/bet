import { GradientBorderButton } from '@/customComponents/GradientBorderButton';

import search_icon from '@/assets/search_icon.png';

import icon_tips_page_calendar from '@/assets/icon_tips_page_calendar.png';
import icon_tips_page_filter from '@/assets/icon_tips_page_filter.png';
import icon_tips_page_arrow_down from '@/assets/icon_tips_page_arrow_down.png';
import { GradientBackgroundButton } from '@/customComponents/GradientBackgroundButton';

export function SearchTopbarTipsPage({ buttonName }: { buttonName: string }) {
  return (
    <div className="w-full flex items-center justify-center gap-8">
      {/* search input start */}
      <div className="flex-grow flex justify-center">
        <div className="w-full min-w-[400px]">
          <div className="inset-0 p-[2px] border-transparent rounded-[30px] custom-border">
            <div className="w-full flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[28px] pl-11">
              <img src={search_icon} alt="search_icon" className="h-4 mr-3" />
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search Matches"
                className="w-full bg-inherit outline-none text-white font-poppins placeholder:font-poppins font-normal text-[16px] leading-[24px] tracking-[0] placeholder:text-[#A7A8AA] placeholder:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* search input end */}
      {/* filter start */}
      <GradientBorderButton
        wrapperClassName="p-[0.5px] rounded-[16px]"
        className="w-[141px] h-[48px] rounded-[16px] flex items-center justify-around"
      >
        <img src={icon_tips_page_calendar} className="h-[24px] w-[24px]" />
        <span>Filter</span>
        <img src={icon_tips_page_arrow_down} className="h-[20px] w-[20px]" />
      </GradientBorderButton>
      <GradientBorderButton
        wrapperClassName="p-[0.5px] rounded-[16px]"
        className="w-[141px] h-[48px] rounded-[16px] flex items-center justify-around"
      >
        <img src={icon_tips_page_filter} className="h-[24px] w-[24px]" />
        <span>Today</span>
        <img src={icon_tips_page_arrow_down} className="h-[20px] w-[20px]" />
      </GradientBorderButton>
      {/* filter end */}
      <GradientBackgroundButton className="w-[164px] h-[48px]">
        {buttonName}
      </GradientBackgroundButton>
    </div>
  );
}
