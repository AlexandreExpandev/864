import { NumberEntity } from './numberTypes';

/**
 * @summary
 * Business rules for number operations
 */
export const numberRules = {
  /**
   * Gets the list of all available numbers with their text representations
   * @returns {NumberEntity[]} Array of number entities
   */
  getNumbersList(): NumberEntity[] {
    return [
      { id: 1, text: 'Um' },
      { id: 2, text: 'Dois' },
      { id: 3, text: 'Três' },
      { id: 4, text: 'Quatro' },
      { id: 5, text: 'Cinco' },
      { id: 6, text: 'Seis' },
      { id: 7, text: 'Sete' },
      { id: 8, text: 'Oito' },
      { id: 9, text: 'Nove' },
      { id: 10, text: 'Dez' },
    ];
  },

  /**
   * Gets a specific number by its numeric value
   * @param {number} id - The numeric value to retrieve
   * @returns {NumberEntity | null} The number entity or null if not found
   */
  getNumberById(id: number): NumberEntity | null {
    const numbers = this.getNumbersList();
    return numbers.find((number) => number.id === id) || null;
  },
};
