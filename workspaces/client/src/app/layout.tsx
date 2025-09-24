import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const montSerrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'DAMP Payout',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montSerrat.variable}} antialiased`}>{children}</body>
    </html>
  );
}
