/**
 * @component Loading
 * @summary A global loading indicator for route transitions.
 * @domain core
 * @type ui-component
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}
