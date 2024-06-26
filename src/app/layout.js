'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviderWrapper from './AuthProviderWrapper';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviderWrapper>
          {children}
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
