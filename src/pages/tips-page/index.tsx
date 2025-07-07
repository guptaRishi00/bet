import { SearchTopbarTipsPage } from '@/customComponents/SearchTopbarTipsPage';

import icons_tips_page_back_arrow from '@/assets/icons_tips_page_back_arrow.png';
import { useNavigate } from 'react-router-dom';
import { AiTipsCardTipsPage } from '@/customComponents/AiTipsCardTipsPage';

import football_real_madrid from '@/assets/football_real_madrid.png';
import football_barcelona from '@/assets/football_barcelona.png';
import { GradientBackgroundButton } from '@/customComponents/GradientBackgroundButton';
import { Footer } from '@/customComponents/Footer';

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
          <div className="flex w-full flex-row items-start justify-between mt-[42px]">
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
          <div className="flex w-full flex-row items-start justify-between mt-[42px]">
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
          <div className="flex w-full flex-row items-start justify-between mt-[42px]">
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
          <div className="w-full">
            <div className="bg-[#1C1D2199] flex flex-row items-center justify-between rounded-[16px]">
              <div className="flex flex-col pt-8 pl-14">
                <p className="font-poppins font-semibold text-[24px] leading-[24px] tracking-[0] text-white">
                  Unlock Premium Tips
                </p>
                <p className="font-poppins font-semibold text-[14px] leading-[24px] tracking-[0] text-[#FFFFFFBF]">
                  Get access to all premium tips, detailed analysis, and exclusive features.
                </p>

                <div className="mt-4 mb-9 ml-[18px] text-white">
                  <ul className="list-disc pl-5">
                    <li>Access to all premium tips</li>
                    <li>Detailed statistical analysis</li>
                    <li>Expert insights and predictions</li>
                  </ul>
                </div>
              </div>
              {/*  */}
              <div className="mr-10">
                <div className="flex flex-row items-center justify-center mb-4 text-white">
                  <p className="font-poppins font-semibold text-[24px] leading-[24px] tracking-[0]">
                    $21.99
                  </p>
                  <span className="font-poppins font-semibold text-[16px] leading-[24px] tracking-[0]">
                    /month
                  </span>
                </div>
                <GradientBackgroundButton className="h-[48px] w-[194px]">
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
