import type { Metadata } from "next";
import { Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura Studio — Websites, Apps & Digital Products",
  description: "A small product studio building websites, web apps, SaaS products, dashboards, and mobile applications for startups, creators, and growing businesses.",
  authors: [{ name: "Aura Studio" }],
  openGraph: {
    title: "Aura Studio — Websites, Apps & Digital Products",
    description: "A small product studio building websites, web apps, SaaS products, dashboards, and mobile applications for startups, creators, and growing businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Studio — Websites, Apps & Digital Products",
    description: "A small product studio building websites, web apps, SaaS products, dashboards, and mobile applications for startups, creators, and growing businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-white text-[#111111] flex flex-col selection:bg-[#111111] selection:text-white">
        {children}
      </body>
    </html>
  );
}
