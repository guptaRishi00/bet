import { SecondTopbarHeaderBreadcrumb } from '@/components/layout/second-topbar-header-breadcrumb';
import { TopbarHeader } from '@/components/layout/topbar-header';

import icons_tips_page_back_arrow from '@/assets/icons_tips_page_back_arrow.png';
import { useNavigate } from 'react-router-dom';
import { PredictMatchesCard } from '@/components/cards/predict-matches-card';
import { PredictMatchesSelect } from '@/components/features/predict-matches-select';
import { GradientBackgroundButton } from '@/components/buttons';
import { VerifiedTipsterCard } from '@/components/cards/verified-tipster-card';
import { Footer } from '@/components/layout/footer';

export default function PredictPage() {
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
            Predict
          </span>
        </div>
        <div className="w-full px-12 flex flex-col items-start mt-10">
          <p className="font-poppins font-semibold text-[20px] leading-[20px] tracking-[0] text-white px-3 py-4">
            Upcoming Matches
          </p>
          <div className="w-full flex flex-col items-start justify-between gap-y-10">
            <PredictMatchesCard />
            <PredictMatchesCard />
            <PredictMatchesCard />
            <PredictMatchesCard />
            <PredictMatchesCard />
            <PredictMatchesCard />
            <PredictMatchesCard />
          </div>
          <div
            style={{
              boxShadow: '0px 4px 333px 0px #00000040',
            }}
            className="w-full bg-[#1C1D21] mt-9 rounded-[16px] flex flex-col items-start justify-between text-white px-14"
          >
            <div className="mt-9">
              <p className="font-poppins font-semibold text-[20px] leading-[24px] tracking-[0]">
                Make Your Prediction
              </p>

              <p className="font-roboto_flex font-medium text-[14px] leading-[24px] tracking-[0]">
                Predict the outcome of Arsenal vs Liverpool
              </p>
            </div>
            {/*  */}
            <div className="mt-8" />
            <div className="w-full flex flex-col items-start justify-between gap-8">
              <PredictMatchesSelect
                label="Your Prediction"
                options={[
                  { value: 'win', label: 'Win' },
                  { value: 'draw', label: 'Draw' },
                  { value: 'lose', label: 'Lose' },
                ]}
              />
              <PredictMatchesSelect
                label="Confidence Level"
                options={[
                  { value: 'medium', label: 'Medium (4-7)' },
                  { value: 'high', label: 'High (8-10)' },
                  { value: 'low', label: 'Low (1-3)' },
                ]}
              />
              <PredictMatchesSelect
                label="Reasoning (Optional)"
                options={[
                  { value: 'medium', label: 'Medium (4-7)' },
                  { value: 'high', label: 'High (8-10)' },
                  { value: 'low', label: 'Low (1-3)' },
                ]}
              />
            </div>
            <div className="w-full flex items-center justify-center mt-10 mb-10">
              <GradientBackgroundButton className="h-[48px] w-[194px]">
                Submit
              </GradientBackgroundButton>
            </div>
          </div>
          {/*  */}
          <VerifiedTipsterCard />
          {/*  */}
          <div className="mt-9" />
          <Footer />
          {/*  */}
        </div>
      </div>
    </div>
  );
}
