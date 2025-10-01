import React from 'react';
import { numberSelectorVariants } from './variants';
import type { NumberSelectorProps } from './types';

/**
 * @component NumberSelector
 * @summary A dropdown component for selecting a number between 1 and 10.
 * @domain number
 * @type domain-component
 * @category form
 *
 * @props
 * @param {number} [props.value]
 *   - Required: No
 *   - Description: The currently selected value.
 * @param {(value: number) => void} props.onChange
 *   - Required: Yes
 *   - Description: Callback function triggered when a number is selected.
 *
 * @examples
 * ```tsx
 * <NumberSelector onChange={setSelectedNumber} />
 * ```
 */
export const NumberSelector = ({ value, onChange }: NumberSelectorProps) => {
  // #region Constants
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  // #endregion

  // #region Handlers
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      onChange(parseInt(selectedValue, 10));
    }
  };
  // #endregion

  // #region Styles
  const styles = numberSelectorVariants();
  // #endregion

  // #region Render Logic
  return (
    <div className={styles.base()}>
      <label htmlFor="number-selector" className={styles.label()}>
        Número
      </label>
      <select
        id="number-selector"
        value={value ?? ''}
        onChange={handleChange}
        className={styles.select()}
        aria-label="Selecione um número de 1 a 10"
      >
        <option value="" disabled>
          Selecione um número
        </option>
        {numbers.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
  // #endregion
};
