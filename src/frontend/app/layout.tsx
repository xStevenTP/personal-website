import type { Metadata } from 'next';
import './globals.scss';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Engineer",
  description: "Portfolio and resume of a full-stack engineer."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
