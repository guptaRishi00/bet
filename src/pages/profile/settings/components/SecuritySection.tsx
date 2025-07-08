import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Key, LogOut, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SecuritySection = () => {
  const securityActions = [
    {
      icon: Key,

      buttonText: 'Change Password',
      variant: 'outline' as const,
    },
    {
      icon: Shield,

      buttonText: 'Enable Two-Factor Authentication',
      variant: 'outline' as const,
    },
    {
      icon: LogOut,

      buttonText: 'Sign Out',
      variant: 'destructive' as const,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-[#1C1D21] rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Security</h2>

      <div className="space-y-3 sm:space-y-4">
        {securityActions.map((action, index) => (
          <div
            className="bg-gradient-to-b from-[#61F308] mx-auto w-[90%] to-[#15B54B] p-[1px] rounded-2xl"
            key={index}
          >
            <button
              onClick={() => navigate('/saved-tips')}
              className=" bg-[#1C1D21] text-green-400 hover:bg-[#61F308] justify-center hover:text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 transition-colors w-full h-full"
            >
              {action.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySection;
