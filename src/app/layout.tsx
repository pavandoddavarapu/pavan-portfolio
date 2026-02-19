// layout.tsx
import React from "react";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import { GeneralProvider } from "./contexts/generalContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavan doddavarapu",
  description: "Software Development Engineer Intern @ Amazon Web Services",
  keywords: ["Pavan doddavarapu", "Software Engineer", "AI/ML", "Cloud Computing"],
  creator: "Pavan doddavarapu",
  authors: [{ name: "Pavan doddavarpu" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luannguyen.net",
    title: "Pavan doddavarapu | Software Engineer",
    description:
      "Full-stack software engineer specializing in web development, AI/ML, and cloud solutions.",
    siteName: "pavan's Portfolio",
    
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        {/* Structured data for rich Google search results */}
        <script
          type="application/ld+json"
          
        />
      </head>
      <body className={inter.className}>
        <GeneralProvider>
          <Navigation />
          {children}
          <Analytics />
        </GeneralProvider>
      </body>
    </html>
  );
}
