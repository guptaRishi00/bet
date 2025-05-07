import { GradientBackgroundButton } from '@/customComponents/GradientBackgroundButton';
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
              <GradientBackgroundButton className="px-11">Today's Tips</GradientBackgroundButton>
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
  );
}
