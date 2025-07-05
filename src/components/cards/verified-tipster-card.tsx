import { GradientBackgroundButton } from '@/components/buttons';

export function VerifiedTipsterCard() {
  return (
    <div className="w-full mt-[72px]">
      <div className="bg-[#1C1D2199] flex flex-row items-center justify-between rounded-[16px]">
        <div className="flex flex-col pt-8 pl-14">
          <p className="font-poppins font-semibold text-[24px] leading-[24px] tracking-[0] text-white">
            Become a Verified Tipster
          </p>
          <p className="font-poppins font-semibold text-[14px] leading-[24px] tracking-[0] text-[#FFFFFFBF]">
            Share your expertise, build your following, and earn from your successful predictions.
          </p>

          <div className="mt-4 mb-9 ml-[18px] text-white">
            <ul className="list-disc pl-5">
              <li>Build your reputation and following</li>
              <li>Earn commission from premium subscribers</li>
              <li>Access to advanced analytics tools</li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="mr-10">
          <GradientBackgroundButton className="h-[48px] w-[194px]">
            Apply Now
          </GradientBackgroundButton>
        </div>
      </div>
    </div>
  );
}
