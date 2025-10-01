import { tv } from 'tailwind-variants';

/**
 * @variants numberSelectorVariants
 * @summary Styling variants for the NumberSelector component.
 * @domain number
 * @type component-variants
 */
export const numberSelectorVariants = tv({
  slots: {
    base: 'flex flex-col items-start',
    label: 'mb-2 text-sm font-medium text-gray-700',
    select:
      'w-full sm:w-auto min-w-[200px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out',
  },
});
