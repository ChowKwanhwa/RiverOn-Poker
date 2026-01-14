import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://riveronpokerbangkok.com'),
  title: 'RiverOn Poker Bangkok | Premier Texas Hold\'em Club',
  description: 'Experience the best Texas Hold\'em in Bangkok at RiverOn Poker. Luxury environment, professional dealers, and 24/7 action. Book your seat now!',
  keywords: ['Poker Bangkok', 'Texas Hold\'em Thailand', 'RiverOn Poker', 'Bangkok Nightlife', 'Poker Tournament Bangkok', '방콕 포커', '曼谷扑克'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/?lang=en',
      'ko-KR': '/?lang=kr',
      'zh-CN': '/?lang=cn',
    },
  },
  openGraph: {
    title: 'RiverOn Poker Bangkok | Premier Texas Hold\'em Club',
    description: 'Experience luxury gaming in the heart of Bangkok. Private tables, professional dealers, and 24/7 poker action.',
    type: 'website',
    locale: 'en_US',
    url: 'https://riveronpokerbangkok.com',
    siteName: 'RiverOn Poker Bangkok',
    images: [{
      url: '/logo.jpeg',
      width: 1200,
      height: 630,
      alt: 'RiverOn Poker Bangkok Logo'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiverOn Poker Bangkok',
    description: 'Premier Texas Hold\'em Club in the heart of Bangkok.',
    images: ['/logo.jpeg'],
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.variable, playfair.variable)}>
      <body className="antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
