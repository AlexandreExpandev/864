'use client';

import { useState } from 'react';
import { NumberSelector, SelectedNumberDisplay } from '@/domain/number/components';
import { convertNumberToText } from '@/domain/number/utils';
import { useNumbers } from '@/domain/number/hooks';

/**
 * @component HomePage
 * @summary The main page of the application, demonstrating the number selection and display feature.
 * @domain core
 * @type page-component
 */
export default function HomePage() {
  // #region States
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  // #endregion

  // #region Queries
  const { numbers, isLoading } = useNumbers();
  // #endregion

  // #region Memos
  const numberAsText = selectedNumber ? convertNumberToText(selectedNumber) : '';
  // #endregion

  // #region Render Logic
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-8 md:p-24">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Seletor de Números
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Selecione um número de 1 a 10 no menu abaixo para ver sua representação em texto.
        </p>
        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <NumberSelector
              value={selectedNumber ?? undefined}
              onChange={(value) => setSelectedNumber(value)}
            />
            <SelectedNumberDisplay text={numberAsText} />
          </div>
        )}
      </div>
    </main>
  );
  // #endregion
}
