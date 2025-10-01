import React from 'react';

/**
 * @component MainLayout
 * @summary Provides the main layout structure for the application, including header, footer, and content area.
 * @domain core
 * @type layout-component
 */
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <nav className="container mx-auto">
          <h1 className="text-xl font-bold">Lista Inteiros</h1>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      <footer className="bg-gray-200 text-gray-600 p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Lista Inteiros. All rights reserved.</p>
      </footer>
    </div>
  );
};
