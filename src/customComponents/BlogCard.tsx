import icon_calendar from '@/assets/icon_calendar.png';
import icon_arrow_right from '@/assets/icon_arrow_right.png';

export function BlogCard({
  blog_pic,
  heading,
  content,
}: {
  blog_pic: string;
  heading: string;
  content: string;
}) {
  return (
    <div className="w-full p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] max-w-[394px] min-h-[474px] self-stretch">
      <div className="w-full h-full rounded-[11px] bg-[#1A1B1E] text-white flex flex-col overflow-clip">
        {/* content actualtity start */}
        <div className="px-6 pt-6">
          <img src={blog_pic} className="w-[346] h-[220px] object-cover rounded-[11px]" />
        </div>
        {/*  */}
        <div className="flex flex-row items-center justify-between mt-4 px-6">
          <button className="p-[1px] rounded-[8px] custom-border max-w-max mr-6">
            <div className="flex items-center gap-2 bg-[#1F2E24] rounded-[7.5px] border border-transparent">
              <p className="whitespace-nowrap px-3 text-white font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-center flex items-center justify-center w-full">
                View Profile
              </p>
            </div>
          </button>
          <div className="flex flex-row items-center justify-center gap-2">
            <img src={icon_calendar} className="w-[16px] h-[16px] object-contain" />
            <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#CDCDCDBF]">
              2 days ago
            </p>
          </div>
        </div>
        {/*  */}
        <p className="font-roboto_flex font-semibold text-[16px] leading-[24px] tracking-[0] ml-6 mt-4">
          {heading}
        </p>
        {/*  */}
        <p className="font-roboto_flex font-medium text-[14px] leading-[20px] px-6 mt-4 tracking-wide">
          {content}
        </p>
        {/* content actualtity end */}
        <div className="flex items-center justify-between mt-4 px-6">
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#FFFFFFBF]">
            8 min read
          </p>

          <div className="flex items-center gap-1">
            <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-[#61F308BF]">
              Read more
            </p>
            <img src={icon_arrow_right} className="w-[16px] h-[16px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
