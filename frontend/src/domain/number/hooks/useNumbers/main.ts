import { useQuery } from '@tanstack/react-query';
import { numberService } from '../../services';
import type { UseNumbersReturn } from './types';

const NUMBERS_QUERY_KEY = ['numbers'];

/**
 * @hook useNumbers
 * @summary Fetches the list of numbers from the API using TanStack Query.
 * @domain number
 * @type domain-hook
 * @category data
 * @returns {UseNumbersReturn} The state of the numbers query.
 */
export const useNumbers = (): UseNumbersReturn => {
  const {
    data: numbers,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: NUMBERS_QUERY_KEY,
    queryFn: numberService.getNumbersList,
  });

  return {
    numbers: numbers || [],
    isLoading,
    isError,
    error,
  };
};
