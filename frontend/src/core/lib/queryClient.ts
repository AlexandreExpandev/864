import { QueryClient } from '@tanstack/react-query';

/**
 * @singleton queryClient
 * @summary Singleton instance of QueryClient for TanStack Query.
 * @type query-client
 * @category core-library
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Time before a query is considered stale
      staleTime: 1000 * 60 * 5, // 5 minutes
      // Time before inactive queries are garbage collected
      gcTime: 1000 * 60 * 15, // 15 minutes
      // Retry failed requests 3 times
      retry: 3,
      // Do not refetch on window focus by default
      refetchOnWindowFocus: false,
    },
  },
});
