import type { Metadata } from "next";
import { Anton, Caveat, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const caveat = Caveat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Dylan — Audiovisual Portfolio",
  description:
    "Audiovisual production and direction portfolio: projects, services and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${caveat.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
