import { SecondTopbarHeaderBreadcrumb } from '@/customComponents/SecondTopbarHeaderBreadcrumb';
import { TopbarHeader } from '@/customComponents/TopbarHeader';

export default function HomePage() {
  console.log('HomePage');
  return (
    <div className="h-screen w-screen flex justify-center items-start bg-[#171919] overflow-y-auto recent-creation-horizontal-scrollbar">
      <div className="w-full [background:linear-gradient(180deg,_#101212_0%,_#3B3E40_99.99%)] flex flex-col items-start">
        {/* topbar */}
        <TopbarHeader />
        {/* second top bar */}
        <SecondTopbarHeaderBreadcrumb />
        {/* search bar  */}
        <div></div>
        {/* hero image section */}
        <div></div>
        {/* previous tips */}
        <div></div>
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
  );
}
