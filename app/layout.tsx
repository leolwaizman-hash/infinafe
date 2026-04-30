import type { Metadata } from "next";
import { DM_Sans, Syne, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400","500","600","700"] });
const syne = Syne({ variable: "--font-display", subsets: ["latin"], weight: ["700","800"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://infinafe.com"),
  title: { default: "Infina — AI Agent Security for Small Business", template: "%s | Infina" },
  description: "Infina protects the AI agents running your business from prompt injections, data leaks, and hijacks. Built for small businesses, not Fortune 500 security teams.",
  openGraph: {
    type: "website", siteName: "Infina",
    title: "Infina — AI Agent Security for Small Business",
    description: "Infina protects the AI agents running your business from prompt injections, data leaks, and hijacks.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinafe — AI Agent Security for Small Business",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
