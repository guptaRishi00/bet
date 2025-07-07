import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient: 'bg-gradient-to-r from-[#61F308] to-[#15B54B] text-white hover:opacity-90',
        gradientOutline: 'relative text-white bg-[#19191d] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1.5px] before:bg-gradient-to-r before:from-[#61F308] before:to-[#15B54B] before:-z-10',
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm rounded-md',
        sm: 'h-9 px-3 text-sm rounded-md',
        lg: 'h-11 px-8 text-sm rounded-md',
        xl: 'h-12 px-6 py-3 text-base rounded-[25px]',
        icon: 'h-10 w-10 rounded-md',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-[25px]',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    if (variant === 'gradientOutline') {
      return (
        <div className="inline-block relative">
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r from-[#61F308] to-[#15B54B] rounded-[inherit]",
            rounded === 'full' ? 'rounded-[25px]' : 'rounded-md'
          )} />
          <Comp
            className={cn(
              buttonVariants({ size, rounded }),
              'relative bg-[#19191d] text-white m-[1.5px]',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }
    
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, rounded, className }))} 
        ref={ref} 
        {...props} 
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };