import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "DevNApp | Premium Solutions Catalog",
  description: "Explore our collection of luxurious, high-performance digital systems including AgriERP, advanced POS & Inventory, luxury NFC cards, and workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${inter.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-400">
        {children}
      </body>
    </html>
  );
}
