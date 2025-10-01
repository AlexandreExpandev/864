import { numberTypes } from './numberTypes';

/**
 * Service for number-related operations
 */
export const numberService = {
  /**
   * Get a list of numbers with their text representations
   * @returns Array of number objects with numeric and text values
   */
  getNumbersList(): numberTypes.NumberItem[] {
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
      { number: 10, text: 'Dez' }
    ];
  },

  /**
   * Get text representation for a specific number
   * @param number The number to convert
   * @returns The text representation or null if not found
   */
  getNumberText(number: number): string | null {
    const item = this.getNumbersList().find(item => item.number === number);
    return item ? item.text : null;
  }
};
