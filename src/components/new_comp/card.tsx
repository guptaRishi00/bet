import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'bordered' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', rounded = 'md', children, ...props }, ref) => {
    const roundedClasses = {
      sm: 'rounded-[8px]',
      md: 'rounded-[12px]',
      lg: 'rounded-[16px]',
      xl: 'rounded-[20px]',
    };

    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };

    if (variant === 'gradient') {
      return (
        <div
          ref={ref}
          className={cn(
            'p-[1px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF]',
            roundedClasses[rounded],
            className
          )}
          {...props}
        >
          <div
            className={cn(
              'bg-[#1A1B1E] text-white h-full',
              roundedClasses[rounded],
              paddingClasses[padding]
            )}
          >
            {children}
          </div>
        </div>
      );
    }

    if (variant === 'bordered') {
      return (
        <div
          ref={ref}
          className={cn(
            'border border-[#2A2B2F] bg-[#19191d] text-white',
            roundedClasses[rounded],
            paddingClasses[padding],
            className
          )}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (variant === 'flat') {
      return (
        <div
          ref={ref}
          className={cn(
            'bg-[#1C1D21] text-white',
            roundedClasses[rounded],
            paddingClasses[padding],
            className
          )}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          'bg-[#1A1B1E] text-white',
          roundedClasses[rounded],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-gray-400', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };