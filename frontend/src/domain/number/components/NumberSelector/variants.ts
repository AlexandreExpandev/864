import { tv } from 'tailwind-variants';

export const numberSelectorVariants = tv({
  slots: {
    base: 'grid w-full max-w-2xl grid-cols-1 items-center gap-8 md:grid-cols-2',
    selectWrapper: 'w-full',
    displayWrapper: 'flex h-24 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800',
    displayText: 'text-5xl font-bold capitalize text-blue-600 dark:text-blue-400',
    placeholderText: 'text-lg text-gray-500 dark:text-gray-400',
    errorText: 'text-lg text-red-500',
  },
});
