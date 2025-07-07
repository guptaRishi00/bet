export function WhyBettingatorCard({
  icon,
  heading,
  details,
}: {
  icon: string;
  heading: string;
  details: string;
}) {
  return (
    <div className="w-full p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] min-h-[248px]">
      <div className="w-full h-full rounded-[11px] bg-[#1A1B1E] text-white flex flex-col overflow-clip py-5 px-7 gap-5">
        {/* content actualtity start */}
        <img src={icon} className="w-[36px] h-[36px] object-contain" />
        <p className="font-roboto_flex font-semibold text-[14px] leading-[24px] tracking-[0]">
          {heading}
        </p>
        <p className="font-roboto_flex font-medium text-[14px] leading-[20px] tracking-[0.04em] text-[#FFFFFFBF]">
          {details}
        </p>
        {/* content actualtity end */}
      </div>
    </div>
  );
}

export function WhyBettingatorCardSmall({
  icon,
  heading,
  details,
}: {
  icon: string;
  heading: string;
  details: string;
}) {
  return (
    <div className="w-full mx-auto p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] max-w-[384px] min-h-[116px] self-stretch">
      <div className="w-full h-full rounded-[11px] bg-[#1A1B1E] text-white flex flex-col overflow-clip py-5 px-7 gap-5">
        {/* content actualtity start */}
        <div className="flex flex-row items-center gap-2">
          <img src={icon} className="w-[36px] h-[36px] object-contain" />
          <p className="font-roboto_flex font-semibold text-[14px] leading-[24px] tracking-[0]">
            {heading}
          </p>
        </div>
        <p className="font-roboto_flex font-medium text-[14px] leading-[20px] tracking-[0.04em] text-[#FFFFFFBF]">
          {details}
        </p>
        {/* content actualtity end */}
      </div>
    </div>
  );
}
