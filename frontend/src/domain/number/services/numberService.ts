import { apiClient } from '@/core/lib/api';
import type { NumberData } from '../types';

/**
 * @service numberService
 * @summary Provides methods for all number-related backend operations.
 * @domain number
 * @type api-service
 */
export const numberService = {
  /**
   * @summary Fetches a list of all available numbers.
   * @returns {Promise<NumberData[]>} A list of numbers.
   */
  async listNumbers(): Promise<NumberData[]> {
    return apiClient.get<NumberData[]>('/numbers');
  },

  /**
   * @summary Fetches a single number by its ID.
   * @param {number} id - The ID of the number.
   * @returns {Promise<NumberData>} The number object.
   */
  async getNumberById(id: number): Promise<NumberData> {
    return apiClient.get<NumberData>(`/numbers/${id}`);
  },
};
