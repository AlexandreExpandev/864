import React from 'react';
import { cn } from '@/core/utils';
import { buttonVariants } from './variants';
import type { ButtonProps } from './types';

/**
 * @component Button
 * @summary A versatile button component with variants for different use cases.
 * @domain core
 * @type ui-component
 * @category feedback
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
