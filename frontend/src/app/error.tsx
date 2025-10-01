'use client';

import { useEffect } from 'react';

/**
 * @component GlobalError
 * @summary Renders a fallback UI for unhandled errors within the application.
 * @domain core
 * @type layout-component
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-6">{error.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Try again
      </button>
    </div>
  );
}
