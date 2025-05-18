import icon_green_star from '@/assets/icon_green_star.png';

export function TestimonialCard({ content, personName }: { content: string; personName: string }) {
  return (
    <div className="w-full p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] max-w-[402px] min-h-[224px] self-stretch">
      <div className="w-full h-full rounded-[11px] bg-[#1A1B1E] text-white flex flex-col overflow-clip py-5 px-7">
        {/* content actualtity start */}
        <div className="flex flex-row items-center justify-start gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <img key={item} src={icon_green_star} className="w-[16px] h-[16px] object-contain" />
          ))}
        </div>
        <p className="font-roboto_flex font-medium text-[16px] leading-[20px] tracking-wider mt-7">
          "{content}"
        </p>
        <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#61F308BF] mt-7">
          ~ {personName}
        </p>

        {/* content actualtity end */}
      </div>
    </div>
  );
}
