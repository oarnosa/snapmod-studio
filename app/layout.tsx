import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-san',
});

export const metadata: Metadata = {
  title: 'SnapMod Studio',
  description: 'AI-powered image editor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#624cf5' } }}>
      <html lang="en">
        <body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
