import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://infinafe.com"),
  title: { default: "Infinafe — AI Agent Security for Small Business", template: "%s | Infinafe" },
  description: "Infinafe protects the AI agents running your business from prompt injections, data leaks, and hijacks. Built for small businesses, not Fortune 500 security teams.",
  openGraph: {
    type: "website", siteName: "Infinafe",
    title: "Infinafe — AI Agent Security for Small Business",
    description: "Infinafe protects the AI agents running your business from prompt injections, data leaks, and hijacks.",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
