import { GradientBorderButton } from '@/customComponents/GradientBorderButton';

export function PredictMatchesCard() {
  return (
    <div
      style={{
        boxShadow: '0px 4px 333px 0px #00000040',
      }}
      className="w-full bg-[#1C1D21] mt-9 rounded-[16px] min-h-[112px] max-h-[112px] h-[112px] flex flex-row items-center justify-between text-white"
    >
      <div className="w-[200px]">
        <p className="-mt-10 font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0] ml-6">
          English Premier League
        </p>
      </div>
      <div className="w-[350px] flex flex-row items-center justify-between">
        <div className="flex flex-col justify-center items-center">
          <p className="font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0]">
            Arsenal
          </p>
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
            2.10
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0]">
            Arsenal
          </p>
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
            2.10
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0]">
            Arsenal
          </p>
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0]">
            2.10
          </p>
        </div>
      </div>
      <div className="w-[200px] h-full mr-8">
        <div className="flex flex-col items-end justify-between w-full h-full">
          <p className="font-roboto_flex font-medium text-[12px] leading-[24px] tracking-[0] w-[85px] h-[24px] mt-4">
            Today | 5:00pm
          </p>

          <div className="mb-4">
            <GradientBorderButton className="w-full">Make Prediction</GradientBorderButton>
          </div>
        </div>
      </div>
    </div>
  );
}
