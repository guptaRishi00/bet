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
    <div className="bg-[#1C1D21] rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Security</h2>

      <div className="space-y-4">
        {securityActions.map((action, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-[#1C1D21] rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <action.icon className="w-5 h-5 text-gray-400" />
              <div>
                <h3 className="text-white font-medium">{action.title}</h3>
                <p className="text-sm text-gray-400">{action.description}</p>
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
              } transition-all hover:scale-105`}
            >
              {action.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySection;
