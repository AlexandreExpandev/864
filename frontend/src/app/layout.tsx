import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/core/contexts';
import { MainLayout } from '@/core/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lista Inteiros',
  description: 'Aplicação para visualização de números por extenso.',
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
        <AppProviders>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
      </body>
    </html>
  );
}
