import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Key, LogOut } from 'lucide-react';

const SecuritySection = () => {
  const securityActions = [
    {
      title: 'Change password',
      icon: Key,
      description: 'Update your account password',
      buttonText: 'Change Password',
      variant: 'outline' as const,
    },
    {
      title: 'Enable Two-Factor Authentication',
      icon: Shield,
      description: 'Add an extra layer of security to your account',
      buttonText: 'Enable Two-Factor Authentication',
      variant: 'outline' as const,
    },
    {
      title: 'Sign Out',
      icon: LogOut,
      description: 'Sign out of your account on all devices',
      buttonText: 'Sign Out',
      variant: 'destructive' as const,
    },
  ];

  return (
    <div className="bg-[#1C1D21] rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Security</h2>

      <div className="space-y-3 sm:space-y-4">
        {securityActions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-[#1C1D21] rounded-lg border border-gray-700 hover:border-gray-600 transition-colors space-y-3 sm:space-y-0"
          >
            <div className="flex items-center space-x-3">
              <action.icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-medium text-sm sm:text-base">{action.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 break-words">{action.description}</p>
              </div>
            </div>
            <Button
              variant={action.variant}
              className={`${
                action.variant === 'destructive'
                  ? 'bg-red-600 hover:bg-red-700 border-red-600'
                  : action.variant === 'outline'
                  ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
                  : 'bg-green-500 hover:bg-green-600'
              } transition-all hover:scale-105 w-full sm:w-auto text-xs sm:text-sm whitespace-nowrap flex-shrink-0`}
            >
              <span className="sm:hidden">
                {action.buttonText === 'Enable Two-Factor Authentication'
                  ? 'Enable 2FA'
                  : action.buttonText}
              </span>
              <span className="hidden sm:inline">{action.buttonText}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySection;
