import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '.edsy | Learning Platform',
  description: 'Master your skills with structured learning.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-white/20" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
