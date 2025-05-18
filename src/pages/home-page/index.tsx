import { SecondTopbarHeaderBreadcrumb } from '@/customComponents/SecondTopbarHeaderBreadcrumb';
import { TopbarHeader } from '@/customComponents/TopbarHeader';
import { GradientBackgroundButton } from '@/customComponents/GradientBackgroundButton';
import { PreviousTipsCard } from '@/customComponents/PreviousTipsCard';
import { HeroImageComponent } from '@/pages/home-page/components/HeroImageComponent';
import { SearchBar } from '@/customComponents/SearchBar';
import { TopEvents } from '@/customComponents/TopEvents';
import { cn } from '@/lib/utils';

import football_arsenal from '@/assets/football_arsenal.png';
import football_barcelona from '@/assets/football_barcelona.png';
import football_bayern_munchen from '@/assets/football_bayern_munchen.png';
import football_real_madrid from '@/assets/football_real_madrid.png';
import { AITipsCard } from '@/customComponents/AITipsCard';

import profile_image_1 from '@/assets/profile_image_1.png';
import profile_image_2 from '@/assets/profile_image_2.png';
import profile_image_3 from '@/assets/profile_image_3.png';
import { FeaturedTipsters } from '@/customComponents/FeaturedTipsters';

import icon_why_ai_powered from '@/assets/icon_why_ai_powered.png';
import icon_why_community_insights from '@/assets/icon_why_community_insights.png';
import icon_why_exclusive from '@/assets/icon_why_exclusive.png';
import icon_why_proven_roi from '@/assets/icon_why_proven_roi.png';
import icon_why_real_time_updates from '@/assets/icon_why_real_time_updates.png';
import icon_why_transparent_win from '@/assets/icon_why_transparent_win.png';
import icon_why_verified_tipster_live from '@/assets/icon_why_verified_tipster_live.png';
import { WhyBettingatorCard, WhyBettingatorCardSmall } from '@/customComponents/WhyBettingatorCard';

import blog_pic_1 from '@/assets/blog_pic_1.png';
import blog_pic_2 from '@/assets/blog_pic_2.png';
import blog_pic_3 from '@/assets/blog_pic_3.png';
import { BlogCard } from '@/customComponents/BlogCard';

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

            <div className="mt-6 flex flex-row items-center justify-center gap-4 px-4">
              {/* brick one */}
              <PreviousTipsCard />
              <PreviousTipsCard />
              <PreviousTipsCard />
            </div>
            <div className="w-full flex items-center justify-center mb-8">
              <GradientBackgroundButton className="px-16 mt-6 h-[48px]">
                View All
              </GradientBackgroundButton>
            </div>
          </div>
          {/* top events */}
          <TopEvents />
          {/* all tips */}
          <div
            style={{
              boxShadow: '0px 4px 333px 0px #00000040',
            }}
            className="w-full bg-[#1C1D21] mt-9 rounded-[16px]"
          >
            <div className="flex flex-row items-center justify-between mt-6">
              <p className="ml-8 text-white font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
                AI Tips
              </p>
              <div className="flex flex-row items-center justify-center gap-4 mr-8">
                <div
                  className={cn(
                    'rounded-[8px] h-[24px] bg-gradient-to-r from-[#61F308] to-[#15B54B] p-[1.5px] inline-block',
                  )}
                >
                  <button
                    className={cn(
                      'bg-[#1F2E24] h-full px-3 w-full flex items-center justify-center gap-2 font-poppins font-semibold text-[12px] leading-[24px] tracking-[0] text-white rounded-[7px]',
                    )}
                  >
                    83% Accuracy
                  </button>
                </div>
                <div
                  className={cn(
                    'rounded-[8px] h-[24px] bg-gradient-to-r from-[#61F308] to-[#15B54B] p-[1.5px] inline-block',
                  )}
                >
                  <button
                    className={cn(
                      'bg-[#1F2E24] h-full px-3 w-full flex items-center justify-center gap-2 font-poppins font-semibold text-[12px] leading-[24px] tracking-[0] text-white rounded-[7px]',
                    )}
                  >
                    +28% Average ROI
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-row items-center justify-center gap-4 px-4">
              {/* brick one */}

              <AITipsCard
                football_1_logo={football_barcelona}
                football_1_name="Barcelona"
                football_2_logo={football_real_madrid}
                football_2_name="Real Madrid"
              />
              <AITipsCard
                football_1_logo={football_barcelona}
                football_1_name="Barcelona"
                football_2_logo={football_real_madrid}
                football_2_name="Real Madrid"
              />
              <AITipsCard
                football_1_logo={football_bayern_munchen}
                football_1_name="Bayern"
                football_2_logo={football_arsenal}
                football_2_name="Arsenal"
              />
            </div>
            <div className="w-full flex items-center justify-center mb-8">
              <GradientBackgroundButton className="px-12 mt-6 h-[48px]">
                More AI Tips
              </GradientBackgroundButton>
            </div>
          </div>
          {/* featured tipsters */}
          <div
            style={{
              boxShadow: '0px 4px 333px 0px #00000040',
            }}
            className="w-full bg-[#1C1D21] mt-9 rounded-[16px] "
          >
            <div className="flex flex-row items-center justify-between mt-6">
              <p className="ml-8 text-white font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
                Featured Tipsters
              </p>
              <div className="flex flex-row items-center justify-center gap-4 mr-8">
                <div
                  className={cn(
                    'rounded-[8px] h-[24px] bg-gradient-to-r from-[#61F308] to-[#15B54B] p-[1px] inline-block',
                  )}
                >
                  <button
                    className={cn(
                      'bg-[#1F2E24] h-full px-3 w-full flex items-center justify-center gap-2 font-poppins font-semibold text-[12px] leading-[24px] tracking-[0] text-white rounded-[7px]',
                    )}
                  >
                    Top Performers
                  </button>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="w-full flex flex-col items-center justify-center gap-4 px-8 mt-6">
              {/*  */}
              <FeaturedTipsters profile_image={profile_image_1} displayName="James Rodriguez" />
              <FeaturedTipsters profile_image={profile_image_2} displayName="Alex Thompson" />
              <FeaturedTipsters profile_image={profile_image_3} displayName="Jacob Wilson" />
            </div>

            <div className="w-full flex items-center justify-center mb-8">
              <GradientBackgroundButton className="px-7 mt-6 h-[48px]">
                Show All Tipsters
              </GradientBackgroundButton>
            </div>
          </div>

          {/* why bettingator */}

          <div
            style={{
              boxShadow: '0px 4px 333px 0px #00000040',
            }}
            className="w-full bg-[#1C1D21] mt-9 rounded-[16px] "
          >
            <div className="flex flex-row items-center justify-between mt-6">
              <p className="ml-8 text-white font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
                Why Bettingator?
              </p>
            </div>

            {/*  */}
            <div className="flex flex-row items-start justify-center gap-4 px-8 mt-6">
              <WhyBettingatorCard
                icon={icon_why_verified_tipster_live}
                heading="Verified Tipsters with Live Stats"
                details="Every tipster is verified with real-time performance tracking. Follow their success rates, ROI, and betting history to make informed decisions."
              />
              <WhyBettingatorCard
                icon={icon_why_transparent_win}
                heading="Transparent Win Rates"
                details="Complete transparency with all statistics publicly available. We display both wins and losses so you can trust the data behind every prediction."
              />
              <WhyBettingatorCard
                icon={icon_why_ai_powered}
                heading="AI-Powered Predictions"
                details="Our advanced AI analyzes millions of data points from historical matches, player performance, and current form to generate high-confidence betting tips."
              />
              <WhyBettingatorCard
                icon={icon_why_exclusive}
                heading="Exclusive Insights for Subscribers"
                details="Premium members get access to VIP tips, in-depth analysis reports, and early access to high-value predictions before they're released to the public."
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-4 px-8 mt-9">
              <WhyBettingatorCardSmall
                icon={icon_why_community_insights}
                heading="Community Insights"
                details="Join thousands of bettors sharing strategies"
              />
              <WhyBettingatorCardSmall
                icon={icon_why_proven_roi}
                heading="Proven ROI"
                details="Average 89% ROI for premium members"
              />
              <WhyBettingatorCardSmall
                icon={icon_why_real_time_updates}
                heading="Real - Time Updates"
                details="Live odds and in-play betting recommendations"
              />
            </div>
            {/*  */}
            <div className="w-full flex items-center justify-center mb-8">
              <GradientBackgroundButton className="px-[14px] mt-6 h-[48px]">
                Start Winning Today
              </GradientBackgroundButton>
            </div>
          </div>
          {/* latest blogs */}
          <div
            style={{
              boxShadow: '0px 4px 333px 0px #00000040',
            }}
            className="w-full bg-[#1C1D21] mt-9 rounded-[16px] "
          >
            <div className="flex flex-row items-center justify-between mt-6">
              <p className="ml-8 text-white font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
                Latest Blogs
              </p>
            </div>

            {/*  */}
            <div className="flex flex-row items-start justify-center gap-6 mt-6">
              <BlogCard
                blog_pic={blog_pic_1}
                heading="5 Advanced Betting Strategies for Football"
                content="Learn how professional bettors analyze matches and make profitable decisions with these advanced strategies."
              />
              <BlogCard
                blog_pic={blog_pic_2}
                heading="5 Advanced Betting Strategies for Football"
                content="Learn how professional bettors analyze matches and make profitable decisions with these advanced strategies."
              />
              <BlogCard
                blog_pic={blog_pic_3}
                heading="5 Advanced Betting Strategies for Football"
                content="Learn how professional bettors analyze matches and make profitable decisions with these advanced strategies."
              />
            </div>
            <div className="w-full flex items-center justify-center mb-8">
              <GradientBackgroundButton className="px-[33px] mt-6 h-[48px]">
                View All Articles
              </GradientBackgroundButton>
            </div>

            {/*  */}
          </div>
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
