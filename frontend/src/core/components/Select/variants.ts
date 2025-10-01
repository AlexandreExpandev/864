import { tv } from 'tailwind-variants';

export const selectVariants = tv({
  base: [
    'appearance-none',
    'border',
    'rounded-md',
    'w-full',
    'bg-white dark:bg-gray-800',
    'border-gray-300 dark:border-gray-600',
    'text-gray-900 dark:text-white',
    'placeholder-gray-400 dark:placeholder-gray-500',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    'disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50',
  ],
  variants: {
    variant: {
      default: 'shadow-sm',
      outline: 'border-2',
    },
    size: {
      small: 'px-2 py-1 text-sm',
      medium: 'px-3 py-2 text-base',
      large: 'px-4 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
});
