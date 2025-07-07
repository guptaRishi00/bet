import { ArrowLeft } from 'lucide-react';
import ProfileSection from './components/ProfileSection';
import NotificationSettings from './components/NotificationSettings';
import PreferencesSection from './components/PreferencesSection';
import SecuritySection from './components/SecuritySection';

const ProfileSettings = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#101212] to-[#3B3E40] text-white">
      {/* Header */}
      <div className="flex items-center p-6 border-b bg-[#1C1D21] border-gray-800">
        <ArrowLeft className="w-5 h-5 mr-3 cursor-pointer hover:text-green-400 transition-colors" />
        <span className="text-gray-300 mr-2">Profile</span>
        <span className="text-gray-500 mr-2">›</span>
        <span className="text-white">Settings</span>
      </div>

      <div className="p-6 space-y-8">
        {/* Profile Section */}
        <ProfileSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notification Settings */}
          <NotificationSettings />

          {/* Preferences and Security */}
          <div className="space-y-8">
            <PreferencesSection />
            <SecuritySection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
