import { numberRules } from './numberRules';
import { NumberEntity } from './numberTypes';

/**
 * @summary
 * Service for handling number operations
 */
export const numberService = {
  /**
   * Lists all available numbers with their text representations
   * @returns {Promise<NumberEntity[]>} Array of number entities
   */
  async listNumbers(): Promise<NumberEntity[]> {
    return numberRules.getNumbersList();
  },

  /**
   * Gets a specific number by its numeric value
   * @param {number} id - The numeric value to retrieve
   * @returns {Promise<NumberEntity | null>} The number entity or null if not found
   */
  async getNumberById(id: number): Promise<NumberEntity | null> {
    return numberRules.getNumberById(id);
  },
};
