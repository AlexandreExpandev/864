/**
 * @component HomePage
 * @summary The main landing page of the application.
 * @domain core
 * @type page-component
 */
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Lista Inteiros</h1>
        <p className="text-lg text-gray-700">
          This is the foundation of the application. Features will be built here.
        </p>
      </div>
    </main>
  );
}
