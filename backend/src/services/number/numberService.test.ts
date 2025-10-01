/**
 * @summary
 * Unit tests for number service
 */
import { numberList, numberToText } from './numberService';

describe('numberList', () => {
  it('should return an array of numbers from 1 to 10', () => {
    const result = numberList();
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result.length).toBe(10);
  });
});

describe('numberToText', () => {
  it('should convert 1 to "um"', () => {
    expect(numberToText(1)).toBe('um');
  });

  it('should convert 5 to "cinco"', () => {
    expect(numberToText(5)).toBe('cinco');
  });

  it('should convert 10 to "dez"', () => {
    expect(numberToText(10)).toBe('dez');
  });

  it('should return empty string for numbers out of range', () => {
    expect(numberToText(0)).toBe('');
    expect(numberToText(11)).toBe('');
  });
});
