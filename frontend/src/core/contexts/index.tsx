import React from 'react';
import { QueryProvider } from './QueryProvider';

/**
 * @component AppProviders
 * @summary Composes all global context providers for the application.
 * @domain core
 * @type provider-component
 */
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
