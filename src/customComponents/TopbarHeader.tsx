import bettingator_logo from '@/assets/bettingator_logo.png';
import user_icon from '@/assets/user_icon.png';
import user_icon_green from '@/assets/user_icon_green.png';
import { PATH } from '@/constants/routes';
import { useLocation, useNavigate } from 'react-router-dom';

export function TopbarHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="top-0 sticky w-full h-[56px] bg-[#000000] flex justify-between items-center text-white z-[100]">
      <div>
        <img
          onClick={() => {
            navigate(PATH.HOME_PAGE);
          }}
          src={bettingator_logo}
          alt="logo"
          className="w-auto h-10 p-2.5 pl-6 cursor-pointer"
        />
      </div>
      <div>
        <ul className="flex gap-9 items-center justify-center font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0]">
          <li
            className={`cursor-pointer hover:text-[#61F308] ${
              currentPath === PATH.TIPS_PAGE ? 'text-[#61F308]' : ''
            }`}
            onClick={() => {
              navigate(PATH.TIPS_PAGE);
            }}
          >
            Tips
          </li>
          <li className="cursor-pointer hover:text-[#61F308]">AI Tips</li>
          <li className="cursor-pointer hover:text-[#61F308]">Tipsters</li>
          <li className="cursor-pointer hover:text-[#61F308]">Predict</li>
          <li className="cursor-pointer hover:text-[#61F308]">Results</li>
          <li className="mr-6 cursor-pointer group relative w-6 h-6">
            {/* Green icon on top, hidden initially */}
            <img
              src={user_icon_green}
              alt="user hover"
              className="w-full h-full rounded-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />

            {/* White icon underneath */}
            <img
              src={user_icon}
              alt="user"
              className="w-full h-full rounded-full transition-opacity duration-300"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
