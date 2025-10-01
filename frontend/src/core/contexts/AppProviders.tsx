'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';

/**
 * @component AppProviders
 * @summary A wrapper component that provides all global contexts to the application.
 * @domain core
 * @type context-provider
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
