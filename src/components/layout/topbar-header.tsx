import { useState } from 'react';
import bettingator_logo from '@/assets/bettingator_logo.png';
import user_icon from '@/assets/user_icon.png';
import user_icon_green from '@/assets/user_icon_green.png';
import { PATH } from '@/constants/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // using lucide for clean icons

export function TopbarHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="top-0 sticky w-full h-[56px] bg-[#000000] flex justify-between items-center text-white z-[100] px-4 sm:px-3">
      {/* Logo */}
      <img
        onClick={() => navigate(PATH.HOME_PAGE)}
        src={bettingator_logo}
        alt="logo"
        className="w-auto h-10 p-2.5 cursor-pointer"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-9 items-center font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0]">
        {[
          { name: 'Tips', path: PATH.TIPS_PAGE },
          { name: 'AI Tips', path: PATH.AI_TIPS_PAGE },
          { name: 'Tipsters', path: PATH.TIPSTERS_PAGE },
          { name: 'Predict', path: PATH.PREDICT_PAGE },
          { name: 'Results', path: '#' },
        ].map((item, i) => (
          <li
            key={i}
            className={`cursor-pointer hover:text-[#61F308] ${
              currentPath === item.path ? 'text-[#61F308]' : ''
            }`}
            onClick={() => item.path !== '#' && navigate(item.path)}
          >
            {item.name}
          </li>
        ))}
        {/* Account Icon */}
        <li className="mr-6 cursor-pointer group relative w-6 h-6">
          <img
            src={user_icon_green}
            alt="user hover"
            className="w-full h-full rounded-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
          <img
            src={user_icon}
            alt="user"
            className="w-full h-full rounded-full transition-opacity duration-300"
          />
        </li>
      </ul>

      {/* Mobile Right Side */}
      <div className="md:hidden flex items-center gap-4">
        {/* Account Icon (always visible) */}
        <div className="w-6 h-6 relative group cursor-pointer">
          <img
            src={user_icon_green}
            alt="user hover"
            className="w-full h-full rounded-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
          <img
            src={user_icon}
            alt="user"
            className="w-full h-full rounded-full transition-opacity duration-300"
          />
        </div>

        {/* Hamburger / Close */}
        <button className="text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[56px] left-0 w-full bg-[#101010] z-[99] flex flex-col items-start px-6 py-4 gap-4 md:hidden">
          {[
            { name: 'Tips', path: PATH.TIPS_PAGE },
            { name: 'AI Tips', path: PATH.AI_TIPS_PAGE },
            { name: 'Tipsters', path: PATH.TIPSTERS_PAGE },
            { name: 'Predict', path: PATH.PREDICT_PAGE },
            { name: 'Results', path: '#' },
          ].map((item, i) => (
            <div
              key={i}
              className={`text-[16px] font-roboto_flex font-medium cursor-pointer hover:text-[#61F308] ${
                currentPath === item.path ? 'text-[#61F308]' : ''
              }`}
              onClick={() => item.path !== '#' && handleNavigate(item.path)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
