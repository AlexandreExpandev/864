import { NumberSelector } from '@/domain/number/components/NumberSelector';

/**
 * @component HomePage
 * @summary The main entry page for the application.
 * @domain core
 * @type page-component
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-12 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center text-center font-mono text-sm">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Lista Inteiros
        </h1>
        <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
          Selecione um número de 1 a 10 no menu suspenso abaixo para ver sua representação textual.
        </p>
        <NumberSelector />
      </div>
    </main>
  );
}
