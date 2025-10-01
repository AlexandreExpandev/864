import React from 'react';
import { selectedNumberDisplayVariants } from './variants';
import type { SelectedNumberDisplayProps } from './types';

/**
 * @component SelectedNumberDisplay
 * @summary Displays the text representation of the selected number.
 * @domain number
 * @type domain-component
 * @category display
 *
 * @props
 * @param {string} props.text
 *   - Required: Yes
 *   - Description: The text to display.
 *
 * @examples
 * ```tsx
 * <SelectedNumberDisplay text="Cinco" />
 * ```
 */
export const SelectedNumberDisplay = ({ text }: SelectedNumberDisplayProps) => {
  // #region Styles
  const styles = selectedNumberDisplayVariants();
  // #endregion

  // #region Render Logic
  return (
    <div className={styles.base()}>
      <p className={styles.text()}>{text || '...'}</p>
    </div>
  );
  // #endregion
};
