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
    try {
      const response = await apiClient.get<SuccessResponse<NumberItem[]>>(
        '/external/public/numbers'
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch numbers:', error);
      // Return fallback data when API is unavailable
      return [
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
      ];
    }
  },
};
