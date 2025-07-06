import { GradientBackgroundButton } from '@/components/buttons';
import hero_image from '@/assets/hero_image.jpg';

export function HeroImageComponent() {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${hero_image})`,
        }}
        className="bg-cover bg-center h-[608px] rounded-[25px] w-full flex items-start justify-center"
      >
        <div className="flex flex-row justify-center w-full">
          {/* Left side (placeholder or image) */}
          <div className="w-1/2 hidden md:block"></div>

          {/* Right side content */}
          <div className="flex-grow flex flex-col items-start justify-start text-white mt-10 sm:mt-14 md:ml-32">
            <div className="w-full font-poppins font-light text-[25px] sm:text-[30px] md:text-[40px] leading-[48px] tracking-[0] text-left p-2">
              <p>“Get Smarter. Win Bigger.</p>
              <p>Bet Better With Bettingator”</p>
            </div>
            <div className="mt-10 w-full">
              <p className="font-roboto_flex font-light text-[20px] leading-[24px] tracking-[0] text-white text-left sm:text-center p-2">
                Data-backed tips and expert predictions at your fingertips.
              </p>
              <p className="font-roboto_flex font-light text-[20px] leading-[24px] tracking-[0] text-white text-left sm:text-center p-2">
                Bet smart, win big.
              </p>
            </div>
            <div className="w-full flex flex-row sm:flex-col items-center justify-around sm:justify-center">
              {/* the two buttons */}
              <div className="w-full flex flex-col sm:flex-row items-center justify-around mt-12 gap-x-16 gap-y-2">
                <GradientBackgroundButton className="px-5 sm:px-11 mx-auto sm:mx-0">
                  Today's Tips
                </GradientBackgroundButton>
                <GradientBackgroundButton className="px-5 sm:px-11 mx-auto sm:mx-0">
                  AI Tips
                </GradientBackgroundButton>
              </div>

              {/* quick stats */}
              <div className="w-[90%] flex flex-col items-center justify-around sm:flex-row mt-5 gap-x-7 gap-y-2 text-center text-white font-lexend font-light text-sm sm:text-[20px] leading-[24px] tracking-[0] align-middle md:px-10">
                <p className="flex flex-col sm:flex-row items-center">
                  <span className="text-[#61F308] font-lexend font-light text-[20px] leading-[24px] tracking-[0] align-middle">
                    +89%&nbsp;
                  </span>
                  ROI this week
                </p>
                <p className="flex flex-col sm:flex-row items-center">
                  <span className="text-[#61F308] font-lexend font-light text-[20px] leading-[24px] tracking-[0] align-middle">
                    245&nbsp;
                  </span>
                  Winning Tips
                </p>
                <p className="flex flex-col sm:flex-row items-center">
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
    </div>
  );
}
