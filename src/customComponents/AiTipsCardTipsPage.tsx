import football_vs_logo from '@/assets/football_vs_logo.png';
import icons_save_list from '@/assets/icons_save_list.png';

export function AiTipsCardTipsPage({
  football_1_logo,
  football_1_name,
  football_2_logo,
  football_2_name,
}: {
  football_1_logo: string;
  football_1_name: string;
  football_2_logo: string;
  football_2_name: string;
}) {
  return (
    <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] w-[420px] h-[322px]">
      <div className="h-full w-full rounded-[11px] bg-[#161818] text-white flex flex-col overflow-clip">
        {/* content actualtity */}
        <div className="w-full  pb-1 pl-[27px] flex flex-row items-center justify-between pt-6">
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#CDCDCDBF]">
            England Premiere League
          </p>
          <div className="flex items-center justify-center cursor-pointer pr-6">
            <img src={icons_save_list} className="h-[24px] w-[24px]" />
          </div>
        </div>

        {/*  */}

        <div className="w-full  py-1 pl-[27px] flex flex-row items-center justify-between">
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#CDCDCDBF]">
            Today | 5:00pm
          </p>
        </div>

        {/*  */}

        <div className="w-full flex flex-row gap-[40px] items-center justify-center mt-6">
          <div className="flex flex-col items-center justify-center">
            <img src={football_1_logo} className="w-[40px] h-[40px] object-contain" />
            <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-white">
              {football_1_name}
            </p>
          </div>

          <img src={football_vs_logo} className="w-[40px] h-[40px] object-contain" />

          <div className="flex flex-col items-center justify-center">
            <img src={football_2_logo} className="w-[40px] h-[40px] object-contain" />
            <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-white">
              {football_2_name}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mx-auto gap-3 mt-6">
          {/*  */}
          <div className="p-[1px] rounded-[8px] custom-border w-[116px] h-[24px]">
            <div className="flex items-center justify-between px-1.5 bg-[#1F2E24] rounded-[7.5px] border border-transparent h-full">
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
                1
              </p>
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
                4.8
              </p>
            </div>
          </div>
          <div className="p-[1px] rounded-[8px] custom-border w-[116px] h-[24px]">
            <div className="flex items-center justify-between px-1.5 gap-2 bg-[#1F2E24] rounded-[7.5px] border border-transparent h-full">
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] ">
                1
              </p>
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] ">
                4.8
              </p>
            </div>
          </div>
          <div className="p-[1px] rounded-[8px] custom-border w-[116px] h-[24px]">
            <div className="flex items-center justify-between px-1.5 gap-2 bg-[#1F2E24] rounded-[7.5px] border border-transparent h-full">
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
                1
              </p>
              <p className="text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
                4.8
              </p>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div className="mx-6 mt-5">
          <div className="p-[1px] rounded-[25px] custom-border w-full h-[40px] mr-4">
            <div className="flex items-center justify-between gap-2 bg-[#1F2E24] rounded-[24px] border border-transparent h-full">
              <p className="text-white font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0] h-full flex items-center justify-center px-4 w-full">
                Add to Tip Slip +
              </p>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
}
