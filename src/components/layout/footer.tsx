import { PATH } from '@/constants/routes';
import bettingator_logo from '@/assets/bettingator_logo.png';
import footer_icon_facebook from '@/assets/footer_icon_facebook.png';
import footer_icon_instagram from '@/assets/footer_icon_instagram.png';
import footer_icon_x from '@/assets/footer_icon_x.png';

import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col mt-9 mb-14">
      <div className="flex flex-col md:flex-row md:items-center gap-y-5 justify-between w-full px-12">
        <div>
          <h4 className="text-[#FFFFFF] font-roboto_flex font-bold text-[16px] leading-[24px] tracking-[0]">
            Company
          </h4>

          <ul className="text-[#FFFFFFBF] font-roboto_flex text-[16px] leading-[24px] tracking-[0] mt-4">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        {/*  */}
        <div>
          <h4 className="text-[#FFFFFF] font-roboto_flex font-bold text-[16px] leading-[24px] tracking-[0]">
            Features
          </h4>
          <ul className="text-[#FFFFFFBF] font-roboto_flex text-[16px] leading-[24px] tracking-[0] mt-4">
            <li>AI Predictions</li>
            <li>Expert Tipsters</li>
            <li>Live Betting</li>
            <li>Statistics</li>
          </ul>
        </div>
        {/*  */}
        <div>
          <h4 className="text-[#FFFFFF] font-roboto_flex font-bold text-[16px] leading-[24px] tracking-[0]">
            Resources
          </h4>
          <ul className="text-[#FFFFFFBF] font-roboto_flex text-[16px] leading-[24px] tracking-[0] mt-4">
            <li>Blog</li>
            <li>Guides</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>
        {/*  */}
        <div>
          <h4 className="text-[#FFFFFF] font-roboto_flex font-bold text-[16px] leading-[24px] tracking-[0]">
            Legal
          </h4>
          <ul className="text-[#FFFFFFBF] font-roboto_flex text-[16px] leading-[24px] tracking-[0] mt-4">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Responsible Gambling</li>
          </ul>
        </div>
        {/*  */}
      </div>
      <hr className="my-6" />
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-y-5">
        <div className="flex flex-row items-center justify-center gap-3">
          <img
            onClick={() => {
              navigate(PATH.HOME_PAGE);
            }}
            src={bettingator_logo}
            alt="logo"
            className="w-auto h-[16px] cursor-pointer"
          />
          <p className="-mb-1 text-[#FFFFFFBF] font-roboto_flex font-semibold text-[16px] leading-[24px] tracking-[0]">
            © 2025 Bettingator. All Rights Reserved
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <p className="font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0] text-white">
            Follow us on
          </p>

          <img src={footer_icon_facebook} className="w-[24px] h-[24px] object-contain" />
          <img src={footer_icon_instagram} className="w-[24px] h-[24px] object-contain" />
          <img src={footer_icon_x} className="w-[24px] h-[24px] object-contain" />
        </div>
      </div>
    </div>
  );
}
