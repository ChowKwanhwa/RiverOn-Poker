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
  title: 'RiverOn Poker Bangkok | Premier Texas Hold\'em Club',
  description: 'Experience the best Texas Hold\'em in Bangkok at RiverOn Poker. Luxury environment, professional dealers, and 24/7 action. Book your seat now!',
  keywords: ['Poker Bangkok', 'Texas Hold\'em Thailand', 'RiverOn Poker', 'Bangkok Nightlife', 'Poker Tournament Bangkok'],
  openGraph: {
    title: 'RiverOn Poker Bangkok',
    description: 'Premier Texas Hold\'em Club in the heart of Bangkok.',
    type: 'website',
    locale: 'en_US',
    url: 'https://riveronpokerbangkok.com',
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.variable, playfair.variable)}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
