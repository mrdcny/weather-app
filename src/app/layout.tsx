import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { GlobalContextProvider } from "./context/global";

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
  title: "Weather Forecast",
  description: "Weather Forecast Application created using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </GlobalContextProvider>
    </html>
  );
}
