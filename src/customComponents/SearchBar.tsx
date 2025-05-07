import { GradientBackgroundButton } from '@/customComponents/GradientBackgroundButton';
import search_icon from '@/assets/search_icon.png';

export function SearchBar() {
  return (
    <div className="w-full flex items-center py-4">
      {/* Centered Search Bar */}
      <div className="flex-grow flex justify-center -mr-40">
        <div className="w-[60%] max-w-[860px] min-w-[400px]">
          <div
            style={{
              boxShadow: '0px 0px 60px 10px rgba(97, 243, 8, 0.25)',
            }}
            className="inset-0 p-[2px] border-transparent rounded-[30px] custom-border"
          >
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

      {/* Tip Slip Button aligned to right */}
      <div className="ml-auto">
        <GradientBackgroundButton className="h-full py-3 w-[164px]">
          Tip Slip
        </GradientBackgroundButton>
      </div>
    </div>
  );
}
