import type { NumberItem } from '../../types';

/**
 * @interface UseNumbersReturn
 * @summary Defines the return type for the useNumbers hook.
 */
export interface UseNumbersReturn {
  /** The list of numbers. */
  numbers: NumberItem[];
  /** True if the query is currently loading. */
  isLoading: boolean;
  /** True if the query resulted in an error. */
  isError: boolean;
  /** The error object if an error occurred. */
  error: Error | null;
}
