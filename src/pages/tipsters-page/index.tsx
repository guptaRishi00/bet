import { SearchTopbarTipsPage } from '@/components/features/search-topbar-tips-page';
import { SecondTopbarHeaderBreadcrumb } from '@/components/layout/second-topbar-header-breadcrumb';
import { TopbarHeader } from '@/components/layout/topbar-header';

import icons_tips_page_back_arrow from '@/assets/icons_tips_page_back_arrow.png';
import { useNavigate } from 'react-router-dom';

import { GradientBackgroundButton } from '@/components/buttons';
import { Footer } from '@/components/layout/footer';
import { TipstersCardTipstersPage } from '@/components/cards/tipsters-card';
import { VerifiedTipsterCard } from '@/components/cards/verified-tipster-card';

export default function AiTipsterPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex justify-center items-start bg-[#171919] overflow-y-auto recent-creation-horizontal-scrollbar">
      <div className="w-full [background:linear-gradient(180deg,_#101212_0%,_#3B3E40_99.99%)] flex flex-col items-start">
        {/* topbar */}
        <TopbarHeader />
        {/* second top bar */}
        <SecondTopbarHeaderBreadcrumb />
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
            <TipstersCardTipstersPage />
            <TipstersCardTipstersPage />
            <TipstersCardTipstersPage />
            <TipstersCardTipstersPage />
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
