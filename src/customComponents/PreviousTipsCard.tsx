import user_picture from '@/assets/user_picture.png';
import win_tick_icon from '@/assets/win_tick_icon.png';
import calendor_icon from '@/assets/calendor_icon.png';

export function PreviousTipsCard() {
  return (
    <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] w-[420px] h-[178px]">
      <div className="h-full w-full rounded-[11px] bg-[#19191d] text-white">
        {/* content actualtity */}
        <div className="w-full flex items-center justify-between pr-6">
          <div className="flex flex-row items-center gap-2 pt-4 ml-4">
            <img src={user_picture} alt="user_picture" className="h-10 w-10 rounded-full" />
            <p className="font-roboto_flex font-semibold text-[14px] leading-[24px] tracking-[0] text-white">
              James Rodriguez
            </p>
          </div>
          <div className="p-[1px] rounded-[8px] custom-border max-w-max mt-4">
            <div className="flex items-center gap-2 bg-[#1F2E24] rounded-[7.5px] px-2 border border-transparent">
              <img src={win_tick_icon} alt="win_tick_icon" className="h-4 w-4" />
              <p className="text-[#61F308BF] font-roboto_flex font-normal text-[14px] leading-[24px] tracking-[0]">
                Win
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full flex items-center justify-between pr-6 ml-4 mt-2">
          <p className="font-roboto_flex font-medium text-[14px] leading-[24px] tracking-[0]">
            Arsenal vs Chelsea
          </p>
        </div>
        {/*  */}
        <div className="w-full flex items-center justify-between pr-6">
          <div className="flex flex-row items-center gap-3 ml-4">
            <p className="text-[#CDCDCDBF] font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
              Series
            </p>
            <div className="flex items-center gap-2">
              <img src={calendor_icon} alt="calendor_icon" className="h-4 w-4" />
              <p className="text-[#CDCDCDBF] font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
                Yesterday
              </p>
            </div>
          </div>
          <div>
            <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
              2-2
            </p>
          </div>
        </div>
        {/*  */}
        <div className="w-full flex items-center justify-between pr-6 ml-4 mt-5">
          <div>BTTS & Over 2.5</div>
          <div className="p-[1px] rounded-[8px] custom-border max-w-max mr-4">
            <div className="flex items-center gap-2 bg-[#1F2E24] rounded-[7.5px] px-4 border border-transparent">
              <p className="text-white font-roboto_flex font-semibold text-[14px] leading-[24px] tracking-[0]">
                1.85
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
