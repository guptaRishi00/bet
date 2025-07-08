import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ProfileSection = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [bio, setBio] = useState(
    'Sports enthusiast and betting expert with a passion for football and basketball.',
  );

  const avatarOptions = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face',
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(0);

  return (
    <div className="bg-[#1C1D21] rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Avatar Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <img
              src={avatarOptions[selectedAvatar]}
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
            />
            <button className="absolute bottom-0 right-0 bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors">
              <Upload className="w-4 h-4" />
            </button>
          </div>

          <div className="flex space-x-2">
            {avatarOptions.map((avatar, index) => (
              <button
                key={index}
                onClick={() => setSelectedAvatar(index)}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                  selectedAvatar === index
                    ? 'border-green-400 scale-110'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                <img
                  src={avatar}
                  alt={`Avatar option ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <span className="text-sm text-gray-400 flex items-center cursor-pointer hover:text-green-400 transition-colors">
            <Upload className="w-4 h-4 mr-1" />
            Upload Avatar
          </span>
        </div>

        {/* Form Fields */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-black  rounded-full border border-green-400 focus:border-green-400 text-white"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">User Name</label>
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="bg-black  rounded-full border border-green-400 focus:border-green-400 text-white"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black  rounded-full border border-green-400 focus:border-green-400 text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Contact</label>
            <Input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="bg-black  rounded-full border border-green-400 focus:border-green-400 text-white"
              placeholder="Enter your contact"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-black border-green-400 rounded-full p-7 focus:border-green-400 text-white h-[50px]"
              placeholder="Tell us about yourself"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button className="bg-gradient-to-b from-[#61F308] to-[#15B54B] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-colors">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
