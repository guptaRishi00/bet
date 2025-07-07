import icon_user_profile_tripster from '@/assets/icon_user_profile_tripster.png';

export function TipstersCardTipstersPage() {
  return (
    <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] w-full">
      <div className="h-full w-full rounded-[11px] bg-[#161818] text-white flex flex-col overflow-clip px-4 py-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={icon_user_profile_tripster}
              alt="Profile"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">Michael Johnson</h2>
                <span className="text-blue-500">🔵</span>
                <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md text-xs font-medium flex items-center gap-1">
                  ⭐ Premium
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-0.5">Premier League & La Liga Specialist</p>
              <div className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                <span>👥</span>
                <span>2450 followers</span>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold px-4 py-2 rounded-full text-sm flex items-center gap-1">
            <span>➕</span> Follow
          </button>
        </div>

        {/* Sports Tags */}
        <div className="flex gap-3 mt-5">
          {['Football', 'Tennis', 'Cricket'].map((sport) => (
            <span
              key={sport}
              className="border border-green-500 text-white px-3 py-1 rounded-full text-xs"
            >
              {sport}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5 text-center">
          <div className="bg-black bg-opacity-40 p-3 rounded-md">
            <p className="text-gray-400 text-sm">Win Rate</p>
            <p className="text-lime-400 text-xl font-semibold">62%</p>
          </div>
          <div className="bg-black bg-opacity-40 p-3 rounded-md">
            <p className="text-gray-400 text-sm">ROI</p>
            <p className="text-lime-400 text-xl font-semibold">125%</p>
          </div>
          <div className="bg-black bg-opacity-40 p-3 rounded-md">
            <p className="text-gray-400 text-sm">Tips</p>
            <p className="text-lime-400 text-xl font-semibold">152</p>
          </div>
        </div>
      </div>
    </div>
  );
}
