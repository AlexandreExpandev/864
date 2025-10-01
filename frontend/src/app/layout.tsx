import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppProviders } from '@/core/contexts/AppProviders';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lista Inteiros',
  description: 'Selecione um número e veja sua forma textual.',
};

/**
 * @component RootLayout
 * @summary The root layout for the entire application.
 * @domain core
 * @type layout-component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
