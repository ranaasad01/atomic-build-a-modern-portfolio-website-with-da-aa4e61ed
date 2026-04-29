import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, beautiful, and scalable web applications.",
  keywords: ["full-stack engineer", "React", "Next.js", "TypeScript", "web developer", "portfolio"],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, beautiful, and scalable web applications.",
    siteName: "Alex Morgan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Engineer",
    description: "Full-stack engineer specializing in React, Next.js, and Node.js.",
    creator: "@alexmorgan",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
