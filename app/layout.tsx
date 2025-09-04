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
  // Use a template to automatically add your brand name to page titles
  title: {
    default: "ModernDev - Innovate. Develop. Transform.", // Title for the homepage
    template: "%s | ModernDev", // For other pages, e.g., "Our Projects | ModernDev"
  },
  description: "ModernDev is a college lab where students build cutting-edge projects and shape the future of technology. Join us to innovate, develop, and transform.",
  icons: {
    icon: '/logo.png',
  },
  // Add Open Graph and Twitter metadata for social sharing
  openGraph: {
    title: "ModernDev - Innovate. Develop. Transform.",
    description: "A college lab where students build cutting-edge projects.",
    url: "https://moderndev.vercel.app", // Your app's URL
    siteName: "ModernDev",
    images: [
      {
        url: 'https://moderndev.vercel.app/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'ModernDev Lab Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ModernDev - Innovate. Develop. Transform.",
    description: "A college lab where students build cutting-edge projects.",
    images: ['https://moderndev.vercel.app/og-image.png'], // Must be an absolute URL
  },
  // Add your Google Search Console verification tag here if you choose that method
  verification: {
    google: 'google60f7523fac2cca9a.html',
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


