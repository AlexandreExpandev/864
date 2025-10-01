import type { VariantProps } from 'tailwind-variants';
import type { selectVariants } from './variants';

export interface SelectOption<T extends string | number = string> {
  value: T;
  label: string;
}

export interface SelectProps<T extends string | number>
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value' | 'size'>,
    VariantProps<typeof selectVariants> {
  options: SelectOption<T>[];
  value: T | null | undefined;
  onChange: (value: T) => void;
  placeholder?: string;
}
