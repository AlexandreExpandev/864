import { useQuery } from '@tanstack/react-query';
import { numberService } from '../../services/numberService';

/**
 * @hook useNumberList
 * @summary Fetches the list of available numbers from the API.
 * @domain number
 * @type domain-hook
 * @category data
 * @returns {Object} The result of the TanStack Query, including data, isLoading, and error.
 */
export const useNumberList = () => {
  return useQuery({
    queryKey: ['numbers'],
    queryFn: numberService.listNumbers,
  });
};
