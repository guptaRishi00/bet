import bettingator_logo from '@/assets/bettingator_logo.png';
import email_icon from '@/assets/email_icon.png';
import lock_icon from '@/assets/lock_icon.png';
import eye_icon from '@/assets/eye_icon.png';
import { LoaderCircle } from 'lucide-react'; // used for loading sign in button

import apple_icon from '@/assets/apple_icon.png';
import facebook_icon from '@/assets/facebook_icon.png';
import google_icon from '@/assets/google_icon.png';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/routes';
import { useState } from 'react';
// import { setCookies } from '@/lib/cookies';
// import { COOKIE } from '@/constants/common';

import { toast } from 'sonner';
import { COOKIE } from '@/constants/common';
import { setCookies } from '@/lib/cookies';

export default function SignIn() {
  console.log('SignIn');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignIn = async () => {
    try {
      console.log('Sign-in button clicked');
      console.log('email:', email);
      setIsLoading(true);
      // Perform sign-in logic here
      // After successful sign-in, navigate to the desired page
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation

      // toast.error('Sign-in failed'); // Simulate error

      // set cookies to remember user based on the rememberMe state
      // if rememberMe is true, set a cookie with a 30-day expiration
      // if rememberMe is false, set a session cookie

      setCookies([
        {
          key: COOKIE.ACCESS_TOKEN,
          value: 'sampleAccess',
          isSession: !rememberMe,
          expires: rememberMe ? 30 : undefined, // 30 days
        },
        {
          key: COOKIE.EMAIL,
          value: email,
          isSession: !rememberMe,
          expires: rememberMe ? 30 : undefined, // 30 days
        },
        {
          key: COOKIE.USER_ID,
          value: 'sampleUserId',
          isSession: !rememberMe,
          expires: rememberMe ? 30 : undefined, // 30 days
        },
      ]);
      console.log('Cookies set successfully');
      navigate(PATH.HOME_PAGE);
      toast.success('Sign-in successful');
    } catch (error) {
      console.error('Sign-in error:', error);
    } finally {
      setIsLoading(false);
    }
  };
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

      {/* text - welcome back */}
      <div className="font-roboto_flex mt-8">
        <p className="text-white font-semibold text-[18px] leading-[24px] tracking-[0] text-center align-middle">
          Welcome back
        </p>
      </div>

      {/* sign in into your account to continue */}
      <div className="font-roboto_flex mt-2">
        <p className="text-white font-medium text-[16px] leading-[24px] tracking-[0] text-center align-middle">
          Sign in to your account to continue
        </p>
      </div>

      {/* actual sign in block with black bg and shadow etc */}
      <div className="rounded-[16px] bg-[#1C1D2199] px-12 py-12 w-[44%] min-w-[380px]">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* password input field */}
        <div className="w-full mt-4">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-white font-roboto_flex">
              Password
            </label>
            <p
              onClick={() => {
                navigate(PATH.FORGOT_PASSWORD);
              }}
              className="cursor-pointer text-[#61F308BF] font-poppins font-normal text-[14px] leading-[14px] tracking-[0]"
            >
              Forgot password?
            </p>
          </div>
          <div className="mt-2  inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
            <div className="w-full flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px]">
              <img src={lock_icon} alt="lock_icon" className="h-4 mr-3" />
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-inherit outline-none text-white font-poppins placeholder:font-poppins"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="relative h-4 w-4 ml-3 cursor-pointer"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              >
                <img src={eye_icon} alt="eye_icon" className="h-4 w-4" />
                {isPasswordVisible && (
                  <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                    <div className="w-[2px] h-[120%]  bg-white/50 rotate-45 absolute top-[-10%] left-1/2 transform -translate-x-1/2" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* remeber me 30 days */}
        <div className="flex items-center space-x-2 text-white ml-1 mt-4">
          <div className="relative select-none">
            <input
              id="remember"
              type="checkbox"
              className="cursor-pointer appearance-none w-4 h-4 bg-[#19191d] border border-white rounded-[4px] checked:bg-[#15b54b] checked:border-[#15b54b] focus:outline-none peer"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
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
          <label
            htmlFor="remember"
            className="text-[14px] mb-1 font-poppins cursor-pointer select-none"
          >
            Remember me for 30 days
          </label>
        </div>

        {/* sign in button  */}
        <div className="w-full flex items-center justify-center mt-4">
          <div className="rounded-[25px] text-white px-4 py-2 font-poppins text-[14px] font-medium bg-[linear-gradient(90deg,_#61F308_0%,_#15B54B_100%)] max-w-min whitespace-nowrap">
            {!isLoading && (
              <button
                onClick={handleSignIn}
                disabled={isLoading}
                className="w-[194px] h-[28px] font-poppins font-semibold text-[16px] leading-[24px] tracking-[0]"
              >
                Sign In
              </button>
            )}
            {isLoading && (
              <div className="w-[194px] h-[28px] flex items-center justify-center">
                <LoaderCircle className="animate-spin w-4 h-4 text-white" />
              </div>
            )}
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
            Don't have an account?&nbsp;
            <span
              onClick={() => {
                navigate(PATH.SIGN_UP);
              }}
              className="cursor-pointer text-[#61F308BF] underline underline-offset-[2px] decoration-[0%] decoration-solid "
            >
              Sign up
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
