import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.scss';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Steven Pham — Engineer & Realtor',
  description: 'Boston-based software engineer at Rakuten and licensed real-estate agent at Privi Realty. Problem solver. Innovator.',
  metadataBase: new URL('https://stevenpham.dev'),
  openGraph: {
    title: 'Steven Pham — Engineer & Realtor',
    description: 'Engineering software. Selling homes. Solving problems.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
