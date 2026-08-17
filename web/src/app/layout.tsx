/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import { Fraunces, Poppins } from 'next/font/google';
import './globals.css';
import { Header, Footer, BottomNav } from '@/modules/layout';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Little Craft Store — Handmade Hair Accessories',
    template: '%s | Little Craft Store',
  },
  description:
    'Discover artisanal scrunchies, hair bands, clips, and accessories — each piece handcrafted with premium fabrics and love. Shop our curated collection.',
  keywords: [
    'handmade hair accessories',
    'scrunchies',
    'hair bands',
    'hair clips',
    'artisanal accessories',
    'handcrafted',
    'Little Craft Store',
  ],
  openGraph: {
    title: 'Little Craft Store — Handmade Hair Accessories',
    description:
      'Artisanal scrunchies, hair bands, clips & accessories. Handcrafted with premium fabrics.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Little Craft Store',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow w-full pb-24 md:pb-0">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
