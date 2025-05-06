import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const GradientBackgroundButton = React.forwardRef<
  HTMLButtonElement,
  GradientBackgroundButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        'bg-gradient-to-r from-[#61F308] to-[#15B54B] text-white px-4 py-2 rounded-[25px] font-poppins font-semibold text-[16px] leading-[24px] tracking-[0] whitespace-nowrap',
        className,
      )}
    >
      {children}
    </button>
  );
});

GradientBackgroundButton.displayName = 'GradientBackgroundButton';
