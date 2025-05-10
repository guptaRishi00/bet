import user_picture from '@/assets/user_picture.png';
import ellipses_icon from '@/assets/ellipses_icon.png';

export function TodayHotTipsCard() {
  return (
    <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] w-full h-[202px]">
      <div className="h-full w-full rounded-[11px] bg-[#19191d] text-white">
        {/* content actualtity */}
        <div className="w-full flex items-center justify-between pr-6">
          <div className="flex flex-row items-center gap-2 pt-4 ml-4 mt-1">
            <img src={user_picture} alt="user_picture" className="h-10 w-10 rounded-full -mt-6" />
            <div className="flex flex-col items-start">
              <p className="font-roboto_flex font-semibold text-[14px] leading-[24px] tracking-[0] text-white">
                James Rodriguez
              </p>
              <div className="flex items-center leading-[24px] tracking-[0] text-white gap-4">
                <p className="font-roboto_flex font-medium text-[12px] leading-[24px] text-[#CDCDCDBF]">
                  156 Tips
                </p>

                <p className="font-roboto_flex font-medium text-[12px] leading-[24px] text-white">
                  Avg Odds: 1.95
                </p>

                <p className="font-roboto_flex font-medium text-[12px] leading-[24px] text-[#61F308]">
                  78% Win Rate
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1px] mx-5 mt-1 " />
        {/*  */}
        <div className="w-full flex items-center justify-between mt-2 px-6">
          <p className="font-roboto_flex font-medium text-[14px] leading-[24px] tracking-[0]">
            Arsenal vs Chelsea
          </p>
          <div className="p-[1px] rounded-[8px] custom-border max-w-max">
            <div className="flex items-center gap-2 bg-[#1F2E24] rounded-[7.5px] w-[64px] border border-transparent">
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-center flex items-center justify-center w-full">
                Win
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full flex items-center justify-between pl-2">
          <div className="flex flex-row items-center gap-3 ml-4">
            <p className="text-[#CDCDCDBF] font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
              England Premiere League
            </p>
            <div className="flex items-center gap-2">
              <img src={ellipses_icon} alt="calendor_icon" className="h-1 w-1" />
              <p className="text-[#CDCDCDBF] font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
                Today&nbsp;|&nbsp;5:00pm
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full flex items-center justify-between mt-0.5 px-6">
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#61F308BF]">
            BTTS & Over 2.5
          </p>
          <div className="p-[1px] rounded-[8px] custom-border max-w-max">
            <div className="flex items-center gap-2 bg-[#1F2E24] rounded-[7.5px] w-[64px] border border-transparent">
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-center flex items-center justify-center w-full">
                1.95&nbsp;+
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-[1px] px-6">
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#fff]">
            Predicted Winner : <span className="text-[#61F308]">Arsenal</span>
          </p>
          <div className="p-[1px] rounded-[8px] custom-border max-w-max">
            <div className="flex items-center gap-2 bg-[#1F2E24] rounded-[7.5px] w-[64px] border border-transparent">
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-center flex items-center justify-center w-full">
                82%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
