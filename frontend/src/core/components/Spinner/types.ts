import type { VariantProps } from 'tailwind-variants';
import type { spinnerVariants } from './variants';

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}
