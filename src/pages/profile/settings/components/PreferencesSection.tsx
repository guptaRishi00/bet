import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const PreferencesSection = () => {
  const [timezone, setTimezone] = useState('Eastern Time (UTC-5)');
  const [currency, setCurrency] = useState('USD ($)');

  return (
    <div className="bg-[#1C1D21] rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Preferences</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
          <Select value={timezone} onValueChange={setTimezone}>
            <SelectTrigger className="bg-black border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-700">
              <SelectItem value="Eastern Time (UTC-5)">Eastern Time (UTC-5)</SelectItem>
              <SelectItem value="Central Time (UTC-6)">Central Time (UTC-6)</SelectItem>
              <SelectItem value="Mountain Time (UTC-7)">Mountain Time (UTC-7)</SelectItem>
              <SelectItem value="Pacific Time (UTC-8)">Pacific Time (UTC-8)</SelectItem>
              <SelectItem value="GMT (UTC+0)">GMT (UTC+0)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="bg-black border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-700">
              <SelectItem value="USD ($)">USD ($)</SelectItem>
              <SelectItem value="EUR (€)">EUR (€)</SelectItem>
              <SelectItem value="GBP (£)">GBP (£)</SelectItem>
              <SelectItem value="CAD (C$)">CAD (C$)</SelectItem>
              <SelectItem value="AUD (A$)">AUD (A$)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all hover:scale-105">
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
