export function PredictMatchesSelect({
  label,
  options,
}: {
  label: string;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <div className="relative w-full">
      <p className="font-roboto_flex font-medium text-[18px] leading-[24px] tracking-[0] mb-2">
        {label}
      </p>
      <select className="appearance-none w-full bg-[#000000] rounded-[16px] h-[56px] flex items-center border border-[#15B54B] px-6 text-white">
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-white">
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-6 top-1/2 transform translate-y-1/2">
        {/* Down arrow SVG */}
        <svg
          width="16"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
