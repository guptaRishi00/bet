import icon_green_star from '@/assets/icon_green_star.png';

export function FeaturedTipsters({
  profile_image,
  displayName,
}: {
  profile_image: string;
  displayName: string;
}) {
  return (
    <div className="w-full p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] max-w-[1290px]">
      <div className="w-full h-full rounded-[11px] bg-[#17181C] text-white flex flex-row overflow-clip items-center p-2">
        {/* content actualtity start */}
        <div className="pl-6">
          <img src={profile_image} className="w-[96px] h-[96px] object-contain" />
        </div>
        <div className="w-full flex flex-row items-center justify-between ml-5">
          <div className="w-full flex flex-col items-start">
            {/*  */}

            <div className="flex items-center gap-4">
              <p className="font-roboto_flex font-semibold text-[16px] leading-[24px] tracking-[0]">
                {displayName}
              </p>

              <div className="flex flex-row items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <img
                    key={item}
                    src={icon_green_star}
                    className="w-[16px] h-[16px] object-contain"
                  />
                ))}
              </div>
            </div>

            {/*  */}

            <div>
              <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#CDCDCDBF]">
                Statistical Analyst, All Sports
              </p>
            </div>

            {/*  */}

            <div className="flex flex-row gap-6 items-center">
              <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#61F308BF]">
                +125% ROI
              </p>

              <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#FFFFFFBF]">
                78% Win Rate
              </p>

              <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#CDCDCDBF]">
                156 Tips
              </p>
            </div>

            {/*  */}
          </div>
          <button className="p-[1px] rounded-[8px] custom-border max-w-max mr-6">
            <div className="flex items-center gap-2 bg-[#1F2E24] rounded-[7.5px] border border-transparent">
              <p className="whitespace-nowrap px-3 text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-center flex items-center justify-center w-full">
                View Profile
              </p>
            </div>
          </button>
        </div>
        {/* content actualtity end */}
      </div>
    </div>
  );
}
