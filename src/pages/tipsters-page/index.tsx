import { SearchTopbarTipsPage } from '@/customComponents/SearchTopbarTipsPage';

import icons_tips_page_back_arrow from '@/assets/icons_tips_page_back_arrow.png';
import { useNavigate } from 'react-router-dom';

import { GradientBackgroundButton } from '@/customComponents/GradientBackgroundButton';
import { Footer } from '@/customComponents/Footer';
import { TipstersCardTipstersPage } from '@/customComponents/TipstersCardTipstersPage';
import { VerifiedTipsterCard } from '@/customComponents/VerifiedTipsterCard';

export default function AiTipsterPage() {
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
            Tipsters
          </span>
        </div>
        <div className="w-full px-12 flex flex-col items-start mt-10">
          <SearchTopbarTipsPage buttonName="Bet Slip" />
          {/*  */}
          <div className="flex w-full flex-row items-start justify-between mt-[42px]">
            <TipstersCardTipstersPage />
            <TipstersCardTipstersPage />
          </div>
          <div className="flex w-full flex-row items-start justify-between mt-[42px]">
            <TipstersCardTipstersPage />
            <TipstersCardTipstersPage />
          </div>
          <div className="flex w-full flex-row items-start justify-between mt-[42px]">
            <TipstersCardTipstersPage />
            <TipstersCardTipstersPage />
          </div>
          <div className="w-full flex items-center justify-center mt-8 mb-10">
            <GradientBackgroundButton className="w-[194px] h-[48px]">
              Load More Tips
            </GradientBackgroundButton>
          </div>
          <VerifiedTipsterCard />
          <Footer />
        </div>
      </div>
    </div>
  );
}
