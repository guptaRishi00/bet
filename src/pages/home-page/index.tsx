import { SecondTopbarHeaderBreadcrumb } from '@/customComponents/SecondTopbarHeaderBreadcrumb';
import { TopbarHeader } from '@/customComponents/TopbarHeader';
import search_icon from '@/assets/search_icon.png';
import { GradientBackgroundButton } from '@/customComponents/GradientBackgroundButton';

export default function HomePage() {
  console.log('HomePage');
  return (
    <div className="h-screen w-screen flex justify-center items-start bg-[#171919] overflow-y-auto recent-creation-horizontal-scrollbar">
      <div className="w-full [background:linear-gradient(180deg,_#101212_0%,_#3B3E40_99.99%)] flex flex-col items-start">
        {/* topbar */}
        <TopbarHeader />
        {/* second top bar */}
        <SecondTopbarHeaderBreadcrumb />
        {/* overall padding for all both x side */}
        <div className="w-full px-12 flex flex-col items-start">
          {/* search bar  */}
          <div className="w-full flex items-center py-4">
            {/* Centered Search Bar */}
            <div className="flex-grow flex justify-center">
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

          {/* hero image section */}
          <div></div>
          {/* previous tips */}
          <div></div>
          {/* top events */}
          <div></div>
          {/* all tips */}
          <div></div>
          {/* featured tipsters */}
          <div></div>
          {/* why bettingator */}
          <div></div>
          {/* latest blogs */}
          <div></div>
          {/* testimonials */}
          <div></div>
          {/* subscribe newsletters */}
          <div></div>
          {/* footer */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
