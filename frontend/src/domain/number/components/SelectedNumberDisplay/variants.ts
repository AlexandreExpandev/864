import { tv } from 'tailwind-variants';

/**
 * @variants selectedNumberDisplayVariants
 * @summary Styling variants for the SelectedNumberDisplay component.
 * @domain number
 * @type component-variants
 */
export const selectedNumberDisplayVariants = tv({
  slots: {
    base: 'flex items-center justify-center p-4 bg-gray-100 border border-gray-200 rounded-lg min-h-[60px] min-w-[150px]',
    text: 'text-4xl sm:text-5xl font-bold text-blue-600',
  },
});
