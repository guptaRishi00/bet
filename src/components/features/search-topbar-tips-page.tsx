import { SearchInput } from '@/components/inputs';
import { Button } from '@/components/buttons';
import icon_tips_page_calendar from '@/assets/icon_tips_page_calendar.png';
import icon_tips_page_filter from '@/assets/icon_tips_page_filter.png';
import icon_tips_page_arrow_down from '@/assets/icon_tips_page_arrow_down.png';

export function SearchTopbarTipsPage({ buttonName }: { buttonName: string }) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center md:items-center justify-center gap-6 md:gap-8 px-4">
      {/* Search Input */}
      <div className="w-full md:flex-grow flex justify-center md:justify-start">
        <div className="w-full mx-auto max-w-[400px]">
          <SearchInput />
        </div>
      </div>

      {/* Button Group */}
      <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-8">
          <Button
            variant="gradientOutline"
            size="lg"
            className="w-full md:w-[141px] h-[48px] flex items-center justify-around"
            rounded="default"
          >
            <img src={icon_tips_page_calendar} className="h-[24px] w-[24px]" />
            <span>Filter</span>
            <img src={icon_tips_page_arrow_down} className="h-[20px] w-[20px]" />
          </Button>
          <Button
            variant="gradientOutline"
            size="lg"
            className="w-full md:w-[141px] h-[48px] flex items-center justify-around"
            rounded="default"
          >
            <img src={icon_tips_page_filter} className="h-[24px] w-[24px]" />
            <span>Today</span>
            <img src={icon_tips_page_arrow_down} className="h-[20px] w-[20px]" />
          </Button>
        </div>
        <Button
          variant="gradient"
          size="lg"
          rounded="full"
          className="mx-auto md:w-[164px] h-[48px]"
        >
          {buttonName}
        </Button>
      </div>
    </div>
  );
}
