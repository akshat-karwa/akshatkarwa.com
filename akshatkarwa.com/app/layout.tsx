import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Akshat Karwa | Portfolio',
  description: 'Personal portfolio website showcasing my work in software development, projects, and professional experience.',
  keywords: 'Akshat Karwa, Software Developer, Portfolio, Web Development',
  openGraph: {
    title: 'Akshat Karwa | Portfolio',
    description: 'Personal portfolio website showcasing my work in software development, projects, and professional experience.',
    url: 'https://akshatkarwa.com',
    siteName: 'Akshat Karwa Portfolio',
    images: [
      {
        url: '/images/background.jpg',
        width: 1200,
        height: 630,
        alt: 'Akshat Karwa Portfolio'
      }
    ],
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
