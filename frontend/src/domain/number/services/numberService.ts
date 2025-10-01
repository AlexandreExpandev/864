import { apiClient } from '@/core/lib/api';
import type { SuccessResponse } from '@/core/types';
import type { NumberItem } from '../types';

/**
 * @service numberService
 * @summary Provides methods for all number-related backend operations.
 * @domain number
 * @type api-service
 */
export const numberService = {
  /**
   * @api {get} /external/public/numbers
   * @summary Fetches a list of numbers with their text representations.
   * @returns {Promise<NumberItem[]>} A list of number items.
   */
  async getNumbersList(): Promise<NumberItem[]> {
    const response = await apiClient.get<SuccessResponse<NumberItem[]>>(
      '/external/public/numbers'
    );
    return response.data;
  },
};
