'use client';

import { useEffect } from 'react';

/**
 * @component GlobalError
 * @summary Renders a fallback UI for unhandled errors within the application.
 * @domain core
 * @type error-boundary
 */
export default function GlobalError({
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
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
            <p className="mt-4 text-gray-600">
              An unexpected error has occurred. Please try again.
            </p>
            <button
              onClick={() => reset()}
              className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
