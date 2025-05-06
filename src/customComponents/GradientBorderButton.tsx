import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  wrapperClassName?: string;
}

export const GradientBorderButton = React.forwardRef<HTMLButtonElement, GradientBorderButtonProps>(
  ({ children, className, wrapperClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          'rounded-[25px] bg-gradient-to-r from-[#61F308] to-[#15B54B] p-[1.5px] inline-block',
          wrapperClassName,
        )}
      >
        <button
          ref={ref}
          {...props}
          className={cn(
            'px-4 py-1 font-poppins font-semibold text-[16px] leading-[24px] tracking-[0] text-white bg-[#19191d] rounded-[25px]',
            className,
          )}
        >
          {children}
        </button>
      </div>
    );
  },
);

GradientBorderButton.displayName = 'GradientBorderButton';
