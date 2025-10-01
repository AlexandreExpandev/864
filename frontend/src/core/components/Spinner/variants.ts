import { tv } from 'tailwind-variants';

export const spinnerVariants = tv({
  base: 'animate-spin text-blue-600',
  variants: {
    size: {
      small: 'h-5 w-5',
      medium: 'h-8 w-8',
      large: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
