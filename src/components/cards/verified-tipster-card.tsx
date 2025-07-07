import { GradientBackgroundButton } from '@/components/buttons';

export function VerifiedTipsterCard() {
  return (
    <div className="w-full mt-[72px] px-4 sm:px-8">
      <div className="bg-[#1C1D2199] flex flex-col sm:flex-row items-center sm:items-start justify-between rounded-[16px] p-6 sm:p-0">
        <div className="flex flex-col sm:pt-8 sm:pl-14 text-center sm:text-left">
          <p className="font-poppins font-semibold text-[20px] sm:text-[24px] leading-[24px] tracking-[0] text-white">
            Become a Verified Tipster
          </p>
          <p className="font-poppins font-semibold text-[14px] leading-[20px] text-[#FFFFFFBF] mt-2">
            Share your expertise, build your following, and earn from your successful predictions.
          </p>

          <div className="mt-4 mb-6 sm:mb-9 text-white">
            <ul className="list-disc pl-6 sm:pl-5 text-left">
              <li>Build your reputation and following</li>
              <li>Earn commission from premium subscribers</li>
              <li>Access to advanced analytics tools</li>
            </ul>
          </div>
        </div>

        <div className="sm:mr-10 mb-2 sm:mb-0">
          <GradientBackgroundButton className="h-[48px] w-full sm:w-[194px]">
            Apply Now
          </GradientBackgroundButton>
        </div>
      </div>
    </div>
  );
}
