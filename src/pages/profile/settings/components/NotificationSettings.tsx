import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [betSettlementAlerts, setBetSettlementAlerts] = useState(true);

  const settings = [
    {
      title: 'Email Notifications',
      description: 'Receive emails about your account activity',
      enabled: emailNotifications,
      onChange: setEmailNotifications,
    },
    {
      title: 'Push Notifications',
      description: 'Receive push notifications on your device',
      enabled: pushNotifications,
      onChange: setPushNotifications,
    },
    {
      title: 'Bet Settlement Alerts',
      description: 'Get notified when your bets are settled',
      enabled: betSettlementAlerts,
      onChange: setBetSettlementAlerts,
    },
  ];

  return (
    <div className="bg-[#1C1D21] rounded-lg p-6 border-2 border-[#1C1D21] h-full">
      <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>

      <div className="space-y-6 flex-1">
        {settings.map((setting, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-white font-medium">{setting.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{setting.description}</p>
            </div>
            <Switch
              checked={setting.enabled}
              onCheckedChange={setting.onChange}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
