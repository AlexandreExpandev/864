/**
 * @utility convertNumberToText
 * @summary Converts a number from 1 to 10 to its Portuguese text representation.
 * @domain number
 * @type utility-function
 * @category converter
 *
 * @param {number} num - The number to convert.
 * @returns {string} The text representation of the number.
 */
export const convertNumberToText = (num: number): string => {
  const numberMap: { [key: number]: string } = {
    1: 'Um',
    2: 'Dois',
    3: 'Três',
    4: 'Quatro',
    5: 'Cinco',
    6: 'Seis',
    7: 'Sete',
    8: 'Oito',
    9: 'Nove',
    10: 'Dez',
  };

  return numberMap[num] || '';
};
