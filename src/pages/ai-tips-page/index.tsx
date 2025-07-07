import { SearchTopbarTipsPage } from '@/components/features/search-topbar-tips-page';
import { SecondTopbarHeaderBreadcrumb } from '@/components/layout/second-topbar-header-breadcrumb';
import { TopbarHeader } from '@/components/layout/topbar-header';

import icons_tips_page_back_arrow from '@/assets/icons_tips_page_back_arrow.png';
import { useNavigate } from 'react-router-dom';

import football_real_madrid from '@/assets/football_real_madrid.png';
import football_barcelona from '@/assets/football_barcelona.png';
import { GradientBackgroundButton } from '@/components/buttons';
import { Footer } from '@/components/layout/footer';
import { AiTipsCardAitTipsPage } from '@/components/cards/ai-tips-card';

export default function AiTipsPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex justify-center items-start bg-[#171919] overflow-y-auto recent-creation-horizontal-scrollbar">
      <div className="w-full [background:linear-gradient(180deg,_#101212_0%,_#3B3E40_99.99%)] flex flex-col items-start">
        {/* topbar */}
        <TopbarHeader />
        {/* second top bar */}
        <SecondTopbarHeaderBreadcrumb />
        {/* header */}
        <div className="w-full flex flex-row items-center bg-[#1C1D21] h-[56px] mt-2 justify-start pl-10 md:pl-6 sm:pl-4 sm:h-[48px]">
          <img
            src={icons_tips_page_back_arrow}
            className="h-[28px] w-[28px] cursor-pointer sm:h-[24px] sm:w-[24px]"
            onClick={() => {
              navigate(-1);
            }}
          />
          <span className="font-poppins font-medium text-[20px] leading-[20px] tracking-[0] text-white pl-3 sm:text-[18px]">
            AI Tips
          </span>
        </div>

        {/* content */}
        <div className="w-full px-12 flex flex-col items-start mt-10 md:px-8 sm:px-4 sm:mt-6">
          <SearchTopbarTipsPage buttonName="Bet Slip" />

          {/* cards */}
          <div className="grid lg:grid-cols-3 gap-x-4 gap-y-10 w-full mt-[42px] sm:grid-cols-2 grid-cols-1 sm:gap-y-6">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <AiTipsCardAitTipsPage
                  key={i}
                  football_1_logo={football_barcelona}
                  football_1_name="Barcelona"
                  football_2_logo={football_real_madrid}
                  football_2_name="Real Madrid"
                />
              ))}
          </div>

          {/* load more */}
          <div className="w-full flex items-center justify-center mt-8 mb-10 sm:mt-6 sm:mb-6">
            <GradientBackgroundButton className="w-[194px] h-[48px] sm:w-full">
              Load More Tips
            </GradientBackgroundButton>
          </div>

          {/* premium section */}
          <div className="w-full">
            <div className="bg-[#1C1D2199] flex items-center justify-between rounded-[16px] px-8 py-8 gap-8 md:px-6 flex-col sm:items-start sm:gap-6 sm:px-4 sm:py-6">
              {/* Text Side */}
              <div className="flex flex-col flex-1 sm:w-full">
                <p className="font-poppins font-semibold text-[24px] leading-[24px] tracking-[0] text-white sm:text-[20px]">
                  Unlock Premium Tips
                </p>
                <p className="font-poppins font-semibold text-[14px] leading-[24px] tracking-[0] text-[#FFFFFFBF] sm:text-[13px] sm:mt-2">
                  Get access to all premium tips, detailed analysis, and exclusive features.
                </p>

                <div className="mt-4 text-white">
                  <ul className="list-disc pl-5 text-sm sm:text-[13px]">
                    <li>Access to all premium tips</li>
                    <li>Detailed statistical analysis</li>
                    <li>Expert insights and predictions</li>
                  </ul>
                </div>
              </div>

              {/* Pricing Side */}
              <div className="flex flex-col items-center justify-center mr-10 sm:mr-0 sm:w-full">
                <div className="flex flex-row items-center justify-center mb-4 text-white">
                  <p className="font-poppins font-semibold text-[24px] leading-[24px] tracking-[0] sm:text-[20px]">
                    $21.99
                  </p>
                  <span className="font-poppins font-semibold text-[16px] leading-[24px] tracking-[0] sm:text-[14px] ml-1">
                    /month
                  </span>
                </div>
                <GradientBackgroundButton className="h-[48px] w-[194px] sm:w-full">
                  Subscribe Now
                </GradientBackgroundButton>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
