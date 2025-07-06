export function SecondTopbarHeaderBreadcrumb() {
  return (
    <div className="top-[56px] sticky w-full h-[56px] bg-[#1C1D21] text-[#FDFDFD] flex justify-center items-center z-[90] px-4">
      <ul
        className="flex gap-10 items-center justify-center md:justify-around font-roboto_flex font-medium text-[16px] leading-[24px] tracking-[0] 
        overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-[#61F308] scrollbar-track-transparent
        sm:gap-8 sm:justify-start sm:w-full sm:px-1"
      >
        <li className="cursor-pointer hover:text-[#61F308]">Football</li>
        <li className="cursor-pointer hover:text-[#61F308]">Cricket</li>
        <li className="cursor-pointer hover:text-[#61F308]">Tennis</li>
        <li className="cursor-pointer hover:text-[#61F308]">Table Tennis</li>
        <li className="cursor-pointer hover:text-[#61F308]">Basketball</li>
        <li className="cursor-pointer hover:text-[#61F308]">Volleyball</li>
        <li className="cursor-pointer hover:text-[#61F308]">Horse Racing</li>
        <li className="cursor-pointer hover:text-[#61F308]">Ice Hockey</li>
      </ul>
    </div>
  );
}
