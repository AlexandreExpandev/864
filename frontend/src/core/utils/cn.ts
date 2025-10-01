import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary Merges Tailwind CSS classes with clsx, resolving conflicts.
 * @domain core
 * @type utility-function
 * @category styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
