import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/ui/particles";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aboycalledgarcia",
  description: "Welcome to my personal space nigga!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <NextIntlClientProvider>
        <body
          cz-shortcut-listen="true"
          className="min-h-full overflow-x-hidden relative flex flex-col"
        >
          <Particles
            className="absolute inset-0 z-0"
            quantity={800}
            ease={10}
            color="#fff"
            size={0.2}
            refresh
          />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
