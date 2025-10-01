import type { VariantProps } from 'tailwind-variants';
import type { buttonVariants } from './variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
