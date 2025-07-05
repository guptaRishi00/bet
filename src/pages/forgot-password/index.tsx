import bettingator_logo from '@/assets/bettingator_logo.png';
import email_icon from '@/assets/email_icon.png';
import { PATH } from '@/constants/routes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoaderCircle } from 'lucide-react'; // used for loading sign in button

import { toast } from 'sonner';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPasswordhandler = async () => {
    try {
      console.log('Sign-in button clicked');
      console.log('email:', email);
      setIsLoading(true);
      // Perform sign-in logic here
      // After successful sign-in, navigate to the desired page
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation

      toast.error('Sign-in failed'); // Simulate error

      // set cookies to remember user based on the rememberMe state
      // if rememberMe is true, set a cookie with a 30-day expiration
      // if rememberMe is false, set a session cookie

      // setCookies([
      //   {
      //     key: COOKIE.ACCESS_TOKEN,
      //     value: 'sampleAccess',
      //     isSession: !rememberMe,
      //     expires: rememberMe ? 30 : undefined, // 30 days
      //   },
      //   {
      //     key: COOKIE.EMAIL,
      //     value: email,
      //     isSession: !rememberMe,
      //     expires: rememberMe ? 30 : undefined, // 30 days
      //   },
      //   {
      //     key: COOKIE.USER_ID,
      //     value: 'sampleUserId',
      //     isSession: !rememberMe,
      //     expires: rememberMe ? 30 : undefined, // 30 days
      //   },
      // ]);
      // console.log('Cookies set successfully');
      // navigate(PATH.HOME_PAGE);
      // toast.success('Sign-in successful');
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

      {/* text - Forgot Password */}
      <div className="font-roboto_flex mt-8">
        <p className="text-white font-semibold text-[18px] leading-[24px] tracking-[0] text-center align-middle">
          Forgot Password
        </p>
      </div>

      {/* Enter your email and we'll send you a link to reset your password */}
      <div className="font-roboto_flex mt-2">
        <p className="text-white font-medium text-[16px] leading-[24px] tracking-[0] text-center align-middle">
          Enter your email and we'll send you a link to reset your password
        </p>
      </div>

      {/* actual sign in block with black bg and shadow etc */}
      <div className="mt-8 rounded-[16px] bg-[#1C1D2199] px-12 py-8 w-[44%] min-w-[380px]">
        {/* email complex input */}
        <div className="w-full ">
          <label htmlFor="email" className="text-white font-roboto_flex">
            Email
          </label>
          <div className="mt-2 inset-0 p-[2px] border-transparent rounded-[16px] custom-border">
            <div className="w-full flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[14px]">
              <img src={email_icon} alt="email_icon" className="h-4 mr-3" />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-inherit outline-none text-white font-poppins placeholder:font-poppins"
              />
            </div>
          </div>
        </div>

        {/* remeber me 30 days */}

        {/* Send reset link button  */}
        <div className="w-full flex items-center justify-center mt-8">
          <div className="rounded-[25px] text-white px-4 py-2 font-poppins text-[14px] font-medium bg-[linear-gradient(90deg,_#61F308_0%,_#15B54B_100%)] max-w-min whitespace-nowrap">
            {!isLoading && (
              <button
                onClick={handleForgotPasswordhandler}
                className="w-[194px] h-[28px] font-poppins font-semibold text-[16px] leading-[24px] tracking-[0]"
              >
                Send reset link
              </button>
            )}
            {isLoading && (
              <div className="w-[194px] h-[28px] flex items-center justify-center">
                <LoaderCircle className="animate-spin w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Remember your password? Back to login */}
        <div className="text-white w-full flex items-center justify-center mt-8">
          <p className="font-poppins  text-[14px] leading-[24px] tracking-[0]">
            Remember your password?&nbsp;
            <span
              onClick={() => {
                navigate(PATH.SIGN_IN);
              }}
              className="cursor-pointer text-[#61F308BF] underline underline-offset-[2px] decoration-[0%] decoration-solid "
            >
              Back to login
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
