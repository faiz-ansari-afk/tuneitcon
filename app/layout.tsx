import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Tune ITCon',
  description: `Are you a startup, small to medium-size enterprise (SME), and would like to build a sustainable
                  business? We are here to help you.`,
  generator: 'Nextjs',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
  style: ['normal', 'italic'], // Adjust styles as needed
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
