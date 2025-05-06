import bettingator_logo from '@/assets/bettingator_logo.png';
import email_icon from '@/assets/email_icon.png';
import lock_icon from '@/assets/lock_icon.png';
// import { LoaderCircle } from 'lucide-react'; // used for loading sign in button

import apple_icon from '@/assets/apple_icon.png';
import facebook_icon from '@/assets/facebook_icon.png';
import google_icon from '@/assets/google_icon.png';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/routes';

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-screen flex items-center justify-center flex-col"
      style={{
        background: 'linear-gradient(180deg, #101212 0%, #3B3E40 99.99%)',
      }}
    >
      {/* image */}
      <div className="w-auto h-[30px]">
        <img
          src={bettingator_logo}
          alt="bettingator_logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* text - Create an account */}
      <div className="font-roboto_flex mt-8">
        <p className="text-white font-semibold text-[18px] leading-[24px] tracking-[0] text-center align-middle">
          Create an account
        </p>
      </div>

      {/* Sign up to get started with Bettingator */}
      <div className="font-roboto_flex mt-2">
        <p className="text-white font-medium text-[16px] leading-[24px] tracking-[0] text-center align-middle">
          Sign up to get started with Bettingator
        </p>
      </div>

      {/* actual sign in block with black bg and shadow etc */}
      <div className="rounded-[16px] bg-[#1C1D2199] px-12 py-12 w-[67%] min-w-[580px]">
        <div className="flex items-center justify-between gap-4">
          {/* username  */}
          <div className="w-full ">
            <label htmlFor="username" className="text-white font-roboto_flex">
              Username
            </label>
            <div className="mt-2  inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
              <div className="w-full flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px]">
                <img src={email_icon} alt="email_icon" className="h-4 mr-3" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full bg-inherit outline-none text-white font-poppins placeholder:font-poppins"
                />
              </div>
            </div>
          </div>
          {/* email complex input */}
          <div className="w-full ">
            <label htmlFor="email" className="text-white font-roboto_flex">
              Email
            </label>
            <div className="mt-2  inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
              <div className="w-full flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px]">
                <img src={email_icon} alt="email_icon" className="h-4 mr-3" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-inherit outline-none text-white font-poppins placeholder:font-poppins"
                />
              </div>
            </div>
          </div>
        </div>
        {/* password input field */}
        <div className="flex items-center justify-between gap-4">
          <div className="w-full mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-white font-roboto_flex">
                Password
              </label>
            </div>
            <div className="mt-2  inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
              <div className="w-full flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px]">
                <img src={lock_icon} alt="lock_icon" className="h-4 mr-3" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full bg-inherit outline-none text-white font-poppins placeholder:font-poppins"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="confirm-password" className="text-white font-roboto_flex">
                Confirm Password
              </label>
            </div>
            <div className="mt-2  inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
              <div className="w-full flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px]">
                <img src={lock_icon} alt="lock_icon" className="h-4 mr-3" />
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm your password"
                  className="w-full bg-inherit outline-none text-white font-poppins placeholder:font-poppins"
                />
              </div>
            </div>
          </div>
        </div>
        {/* remeber me 30 days */}
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center space-x-2 text-white mt-4">
            <div className="relative select-none">
              <input
                id="terms"
                type="checkbox"
                className="cursor-pointer appearance-none w-4 h-4 bg-[#19191d] border border-white rounded-[4px] checked:bg-[#15b54b] checked:border-[#15b54b] focus:outline-none peer"
              />
              <svg
                className="absolute top-[4px] left-[2px] w-3 h-3 text-white pointer-events-none hidden peer-checked:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <label className="font-poppins text-[12px] leading-[100%] tracking-[0] mb-1 select-none">
              I agree to the&nbsp;
              <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0] text-[#61F308BF] underline underline-offset-[2px] cursor-pointer decoration-solid decoration-[0]">
                Terms of Service
              </span>
              &nbsp;and&nbsp;
              <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0] text-[#61F308BF] underline underline-offset-[2px] cursor-pointer decoration-solid decoration-[0]">
                Privacy Policy
              </span>
            </label>
          </div>
        </div>
        {/* sign in button  */}
        <div className="w-full flex items-center justify-center mt-4">
          <div className="rounded-[25px] text-white px-4 py-2 font-poppins text-[14px] font-medium bg-[linear-gradient(90deg,_#61F308_0%,_#15B54B_100%)] max-w-min whitespace-nowrap">
            <button className="w-[194px] h-[28px] font-poppins font-semibold text-[16px] leading-[24px] tracking-[0]">
              Sign In
            </button>
            {/* <div className="w-[194px] h-[28px] flex items-center justify-center">
            <LoaderCircle className="animate-spin w-4 h-4 text-white" />
            </div> */}
          </div>
        </div>

        {/* horizontal line  OR */}
        <div className="flex items-center gap-4 mt-4">
          <hr className="w-full border-[#FFFFFF29]" />
          <p className="text-white font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0]">
            OR
          </p>

          <hr className="w-full border-[#FFFFFF29]" />
        </div>
        {/* google , facebook, apple */}
        <div className="flex items-center justify-center gap-20 mt-4">
          <div className="max-w-max inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
            <div className="max-w-max flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px] cursor-pointer">
              <img src={google_icon} alt="google_icon" className="h-5" />
            </div>
          </div>
          <div className="max-w-max inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
            <div className="max-w-max flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px] cursor-pointer">
              <img src={facebook_icon} alt="facebook_icon" className="h-5" />
            </div>
          </div>
          <div className="max-w-max inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
            <div className="max-w-max flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px] cursor-pointer">
              <img src={apple_icon} alt="apple_icon" className="h-5" />
            </div>
          </div>
        </div>
        {/* dont have account - sign up */}
        <div className="text-white w-full flex items-center justify-center mt-4">
          <p className="font-poppins  text-[14px] leading-[24px] tracking-[0]">
            Already have an account?&nbsp;
            <span
              onClick={() => {
                navigate(PATH.SIGN_IN);
              }}
              className="cursor-pointer text-[#61F308BF] underline underline-offset-[2px] decoration-[0%] decoration-solid "
            >
              Sign in
            </span>
          </p>
        </div>

        {/* copy right notice */}
        <div className="text-white w-full flex items-center justify-center mt-4">
          <p className="font-poppins  text-[10px] leading-[24px] tracking-[0] text-[#FFFFFFBF]">
            © 2025 Bettingator. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
