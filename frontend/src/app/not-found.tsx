import Link from 'next/link';

/**
 * @component NotFound
 * @summary Renders a user-friendly 404 page when a route is not found.
 * @domain core
 * @type layout-component
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">Could not find the requested page.</p>
      <Link href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Return Home
      </Link>
    </div>
  );
}
