import type { SelectProps } from './types';
import { selectVariants } from './variants';

/**
 * @component Select
 * @summary A reusable select dropdown component.
 * @domain core
 * @type ui-component
 */
export const Select = <T extends string | number>({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  className,
  variant,
  size,
  ...props
}: SelectProps<T>) => {
  const styles = selectVariants({ variant, size, className });

  return (
    <select
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value as T)}
      disabled={disabled}
      className={styles}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
