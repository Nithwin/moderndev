import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ModernDev - Innovate. Develop. Transform.",
  description: "ModernDev is a college lab where students build cutting-edge projects and shape the future of technology. Join us to innovate, develop, and transform.",
  icons: {
    icon: '/logo.png', // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
