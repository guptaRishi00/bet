import * as React from 'react';
import { cn } from '@/lib/utils';
import search_icon from '@/assets/search_icon.png';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  variant?: 'default' | 'glow';
  containerClassName?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, containerClassName, variant = 'default', onSearch, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };

    return (
      <div
        className={cn(
          "relative",
          variant === 'glow' && "p-[2px] rounded-[30px]",
          containerClassName
        )}
        style={variant === 'glow' ? {
          boxShadow: '0px 0px 60px 10px rgba(97, 243, 8, 0.25)',
        } : undefined}
      >
        <div className="w-full flex items-center bg-[#19191d] px-[18px] py-2 border-2 border-transparent p-4 rounded-[28px] pl-11">
          <img src={search_icon} alt="search" className="absolute left-6 h-4 w-4" />
          <input
            ref={ref}
            type="text"
            placeholder="Search Matches"
            className={cn(
              "w-full bg-inherit outline-none text-white font-poppins placeholder:font-poppins font-normal text-[16px] leading-[24px] tracking-[0] placeholder:text-[#A7A8AA] placeholder:opacity-100",
              className
            )}
            onKeyDown={handleKeyDown}
            {...props}
          />
        </div>
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

export { SearchInput };