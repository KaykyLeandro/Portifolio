import type { Metadata } from "next";
import { Geist, Geist_Mono, Cutive_Mono, Quicksand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cutiveMono = Cutive_Mono({
  weight: '400',
  variable: "--font-cutive-mono",
  subsets: ['latin'],
});

const quicksand = Quicksand({
  variable: '--font-quicksand',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Kayky Leandro",
  description: "Portifolio - Dev Front-end",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cutiveMono.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
