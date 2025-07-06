import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[#1F2E24] text-white',
        success: 'bg-green-900/20 text-green-400',
        warning: 'bg-yellow-900/20 text-yellow-400',
        danger: 'bg-red-900/20 text-red-400',
        outline: 'border border-[#61F308BF] bg-transparent text-[#61F308]',
        gradient: 'relative',
      },
      size: {
        sm: 'text-[10px] px-2 py-0.5 rounded-[4px]',
        md: 'text-[12px] px-3 py-1 rounded-[6px]',
        lg: 'text-[14px] px-4 py-1.5 rounded-[8px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    if (variant === 'gradient') {
      return (
        <div
          ref={ref}
          className={cn(
            'p-[1px] rounded-[8px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF] inline-block',
            className
          )}
          {...props}
        >
          <div className={cn(badgeVariants({ size }), 'bg-[#1F2E24] rounded-[7.5px]')}>
            {children}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };