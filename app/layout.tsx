import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denis Maiyo | Full-Stack & AI Engineer",
  description:
    "Full-Stack & AI Engineer building intelligent platforms, SaaS products, and scalable cloud systems. Available for hire.",
  keywords: ["Denis Maiyo", "Full-Stack Developer", "AI Engineer", "Next.js", "React", "Node.js", "Software Engineer Kenya"],
  authors: [{ name: "Denis Maiyo" }],
  creator: "Denis Maiyo",
  openGraph: {
    title: "Denis Maiyo | Full-Stack & AI Engineer",
    description: "Turning ambitious ideas into scalable software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} ${caveat.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
