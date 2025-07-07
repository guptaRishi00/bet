import { GradientBorderButton } from '@/components/buttons';

export function PredictMatchesCard() {
  return (
    <div
      style={{
        boxShadow: '0px 4px 333px 0px #00000040',
      }}
      className="w-full bg-[#1C1D21] py-4 px-6 rounded-[16px] flex flex-col md:flex-row gap-y-4 gap-x-2 items-center justify-between text-white"
    >
      <div className="">
        <p className="font-roboto_flex font-semibold text-[16px] leading-[24px] tracking-[0]">
          English Premier League
        </p>
      </div>
      <div className="flex flex-row items-center justify-between gap-x-6 sm:gap-x-12">
        <div className="flex flex-col justify-center items-center">
          <p className="font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0] text-center w-full">
            Arsenal
          </p>
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-center w-full">
            2.10
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0] text-center w-full">
            Arsenal
          </p>
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-center w-full">
            2.10
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0] text-center w-full">
            Arsenal
          </p>
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] text-center w-full">
            2.10
          </p>
        </div>
      </div>
      <div className="w-[200px] h-full mr-8">
        <div className="flex flex-col items-center md:items-end justify-between w-full h-full">
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] w-[85px] h-[24px] ">
            Today | 5:00pm
          </p>

          <div className="">
            <GradientBorderButton className="w-full">Make Prediction</GradientBorderButton>
          </div>
        </div>
      </div>
    </div>
  );
}
