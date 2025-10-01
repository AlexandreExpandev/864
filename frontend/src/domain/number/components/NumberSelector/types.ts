/**
 * @interface NumberSelectorProps
 * @summary Defines the props for the NumberSelector component.
 */
export interface NumberSelectorProps {
  /**
   * The currently selected number.
   * The component is controlled if this prop is provided.
   */
  value?: number;

  /**
   * Callback function that is called when the user selects a number.
   * @param value The selected numeric value.
   */
  onChange: (value: number) => void;
}
