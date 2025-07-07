import { SearchTopbarTipsPage } from '@/components/features/search-topbar-tips-page';
import { SecondTopbarHeaderBreadcrumb } from '@/components/layout/second-topbar-header-breadcrumb';
import { TopbarHeader } from '@/components/layout/topbar-header';

import icons_tips_page_back_arrow from '@/assets/icons_tips_page_back_arrow.png';
import { useNavigate } from 'react-router-dom';
import { AiTipsCardTipsPage } from '@/components/cards/ai-tips-card';

import football_real_madrid from '@/assets/football_real_madrid.png';
import football_barcelona from '@/assets/football_barcelona.png';
import { GradientBackgroundButton } from '@/components/buttons';
import { Footer } from '@/components/layout/footer';

export default function TipsPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex justify-center items-start bg-[#171919] overflow-y-auto recent-creation-horizontal-scrollbar">
      <div className="w-full [background:linear-gradient(180deg,_#101212_0%,_#3B3E40_99.99%)] flex flex-col items-start">
        {/* overall padding for all both x side */}
        <div className="w-full flex flex-row items-center bg-[#1C1D21] h-[56px] mt-2 justify-start pl-10">
          <img
            src={icons_tips_page_back_arrow}
            className="h-[28px] w-[28px] cursor-pointer"
            onClick={() => {
              navigate(-1); // Navigate back to the previous page
            }}
          />
          <span className="font-poppins font-medium text-[20px] leading-[20px] tracking-[0] text-white pl-3">
            Tips
          </span>
        </div>
        <div className="w-full px-12 flex flex-col items-start mt-10">
          <SearchTopbarTipsPage buttonName="Bet Slip" />
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 w-full">
            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />
            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />
            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />

            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />
            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />
            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />

            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />
            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />
            <AiTipsCardTipsPage
              football_1_logo={football_barcelona}
              football_1_name="Barcelona"
              football_2_logo={football_real_madrid}
              football_2_name="Real Madrid"
            />
          </div>
          <div className="w-full flex items-center justify-center mt-8 mb-10">
            <GradientBackgroundButton className="w-[194px] h-[48px]">
              Load More Tips
            </GradientBackgroundButton>
          </div>
          <div className="w-full px-4">
            <div className="bg-[#1C1D2199] flex flex-col md:flex-row items-center justify-between rounded-[16px] p-6 md:p-0">
              <div className="flex flex-col md:pt-8 md:pl-14 text-center md:text-left">
                <p className="font-poppins font-semibold text-[20px] md:text-[24px] leading-[24px] text-white">
                  Unlock Premium Tips
                </p>
                <p className="font-poppins font-semibold text-[14px] leading-[24px] text-[#FFFFFFBF] mt-2">
                  Get access to all premium tips, detailed analysis, and exclusive features.
                </p>

                <div className="mt-4 mb-6 md:mb-9 text-white">
                  <ul className="list-disc pl-6 md:pl-5 text-left">
                    <li>Access to all premium tips</li>
                    <li>Detailed statistical analysis</li>
                    <li>Expert insights and predictions</li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-4 md:mr-10">
                <div className="flex flex-row items-end justify-center text-white">
                  <p className="font-poppins font-semibold text-[24px] leading-[24px]">$21.99</p>
                  <span className="font-poppins font-semibold text-[16px] leading-[24px] ml-1">
                    /month
                  </span>
                </div>
                <GradientBackgroundButton className="h-[48px] w-full md:w-[194px]">
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
