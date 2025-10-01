import { QueryClient } from '@tanstack/react-query';

/**
 * @singleton queryClient
 * @summary Singleton instance of TanStack Query's QueryClient.
 * @type query-client
 * @category core-library
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false, // Optional: disable refetch on window focus
      retry: 2, // Retry failed requests 2 times
    },
  },
});
