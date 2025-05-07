import { SecondTopbarHeaderBreadcrumb } from '@/customComponents/SecondTopbarHeaderBreadcrumb';
import { TopbarHeader } from '@/customComponents/TopbarHeader';
import search_icon from '@/assets/search_icon.png';
import hero_image from '@/assets/hero_image.jpg';
import user_picture from '@/assets/user_picture.png';
import win_tick_icon from '@/assets/win_tick_icon.png';
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
          <div className="w-full">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${hero_image})`,
              }}
              className="bg-cover bg-center h-[608px] rounded-[25px] w-full flex items-start justify-center"
            >
              <div className="flex flex-row w-full">
                {/* Left side (placeholder or image) */}
                <div className="w-1/2"></div>

                {/* Right side content */}
                <div className="w-1/2 flex flex-col items-start justify-start text-white mt-24 ml-32">
                  <div className="font-poppins font-light text-[40px] leading-[48px] tracking-[0] text-left">
                    <p>“Get Smarter. Win Bigger.</p>
                    <p>Bet Better With Bettingator”</p>
                  </div>
                  <div className="mt-10">
                    <p className="font-roboto_flex font-light text-[20px] leading-[24px] tracking-[0] text-white text-left">
                      Data-backed tips and expert predictions at your fingertips.
                    </p>
                    <p className="font-roboto_flex font-light text-[20px] leading-[24px] tracking-[0] text-white text-left">
                      Bet smart, win big.
                    </p>
                  </div>
                  {/* the two buttons */}
                  <div className="flex flex-row items-center mt-12 gap-16">
                    <GradientBackgroundButton className="px-11">
                      Today's Tips
                    </GradientBackgroundButton>
                    <GradientBackgroundButton className="px-11">AI Tips</GradientBackgroundButton>
                  </div>

                  {/* quick stats */}
                  <div className="flex flex-row items-center mt-40 -ml-12 gap-7 text-center text-white font-lexend font-light text-[20px] leading-[24px] tracking-[0] align-middle">
                    <p className="flex items-center">
                      <span className="text-[#61F308] font-lexend font-light text-[20px] leading-[24px] tracking-[0] align-middle">
                        +89%&nbsp;
                      </span>
                      ROI this week
                    </p>
                    <p className="flex items-center">
                      <span className="text-[#61F308] font-lexend font-light text-[20px] leading-[24px] tracking-[0] align-middle">
                        245&nbsp;
                      </span>
                      Winning Tips
                    </p>
                    <p className="flex items-center">
                      <span className="text-[#61F308] font-lexend font-light text-[20px] leading-[24px] tracking-[0] align-middle">
                        78&nbsp;
                      </span>
                      Tipsters Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* previous tips */}
          <div
            style={{
              boxShadow: '0px 4px 333px 0px #00000040',
            }}
            className="w-full bg-[#1C1D21] mt-9 rounded-[16px]"
          >
            <p className="ml-8 mt-6 text-white font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
              Previous Tips
            </p>

            <div className="mt-6 flex flex-row items-center justify-start gap-4">
              {/* brick one */}
              <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] w-[420px] h-[178px]">
                <div className="h-full w-full rounded-[11px] bg-[#19191d]">
                  {/* content actualtity */}
                  <div className="w-full flex items-center justify-between pr-6">
                    <div className="flex flex-row items-center gap-2 pt-4 ml-4">
                      <img
                        src={user_picture}
                        alt="user_picture"
                        className="h-10 w-10 rounded-full"
                      />
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
                </div>
              </div>
            </div>
          </div>
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
