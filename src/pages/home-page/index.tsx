import { SecondTopbarHeaderBreadcrumb } from '@/customComponents/SecondTopbarHeaderBreadcrumb';
import { TopbarHeader } from '@/customComponents/TopbarHeader';
import { GradientBackgroundButton } from '@/customComponents/GradientBackgroundButton';
import { PreviousTipsCard } from '@/customComponents/PreviousTipsCard';
import { HeroImageComponent } from '@/pages/home-page/components/HeroImageComponent';
import { SearchBar } from '@/customComponents/SearchBar';

export default function HomePage() {
  console.log('HomePage');
  return (
    <div className="h-screen w-screen flex justify-center items-start bg-[#171919] overflow-y-auto recent-creation-horizontal-scrollbar">
      <div className="w-full [background:linear-gradient(180deg,_#101212_0%,_#3B3E40_99.99%)] flex flex-col items-start">
        {/* topbar */}
        <TopbarHeader />
        {/* second top bar */}
        <SecondTopbarHeaderBreadcrumb />
        {/* overall padding for all both x side */}
        <div className="w-full px-12 flex flex-col items-start">
          {/* search bar  */}
          <SearchBar />
          {/* hero image section */}
          <HeroImageComponent />
          {/* previous tips */}
          <div
            style={{
              boxShadow: '0px 4px 333px 0px #00000040',
            }}
            className="w-full bg-[#1C1D21] mt-9 rounded-[16px]"
          >
            <p className="ml-8 mt-6 text-white font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
              Previous Tips
            </p>

            <div className="mt-6 flex flex-row items-center justify-center gap-4">
              {/* brick one */}
              <PreviousTipsCard />
              <PreviousTipsCard />
              <PreviousTipsCard />
            </div>
            <div className="w-full flex items-center justify-center mb-8">
              <GradientBackgroundButton className="px-16 mt-6">View All</GradientBackgroundButton>
            </div>
          </div>
          {/* top events */}
          <div></div>
          {/* all tips */}
          <div></div>
          {/* featured tipsters */}
          <div></div>
          {/* why bettingator */}
          <div></div>
          {/* latest blogs */}
          <div></div>
          {/* testimonials */}
          <div></div>
          {/* subscribe newsletters */}
          <div></div>
          {/* footer */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
