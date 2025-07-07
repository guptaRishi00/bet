export * from './button';

import { Button, ButtonProps } from './button';
import { forwardRef } from 'react';

export const GradientBackgroundButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button ref={ref} variant="gradient" rounded="full" size="xl" {...props}>
        {children}
      </Button>
    );
  }
);
GradientBackgroundButton.displayName = 'GradientBackgroundButton';

export const GradientBorderButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button ref={ref} variant="gradientOutline" rounded="full" size="xl" {...props}>
        {children}
      </Button>
    );
  }
);
GradientBorderButton.displayName = 'GradientBorderButton';