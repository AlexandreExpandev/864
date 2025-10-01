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
    // Add a fallback for when the API is not available during development
    placeholderData: [
      { number: 1, text: 'Um' },
      { number: 2, text: 'Dois' },
      { number: 3, text: 'Três' },
      { number: 4, text: 'Quatro' },
      { number: 5, text: 'Cinco' },
      { number: 6, text: 'Seis' },
      { number: 7, text: 'Sete' },
      { number: 8, text: 'Oito' },
      { number: 9, text: 'Nove' },
      { number: 10, text: 'Dez' },
    ],
  });

  return {
    numbers: numbers || [],
    isLoading,
    isError,
    error,
  };
};
