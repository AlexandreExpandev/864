/**
 * @summary
 * Service for number operations including listing available numbers
 * and converting numbers to their text representation.
 */

/**
 * Returns a list of available numbers (1-10)
 * @returns Array of numbers from 1 to 10
 */
export function numberList(): number[] {
  return Array.from({ length: 10 }, (_, i) => i + 1);
}

/**
 * Converts a number to its text representation
 * @param num The number to convert (1-10)
 * @returns The text representation of the number
 */
export function numberToText(num: number): string {
  const numberMap: Record<number, string> = {
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove',
    10: 'dez',
  };

  return numberMap[num] || '';
}
