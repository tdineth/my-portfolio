import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Theekshana Dineth | AI & ML Engineer | Computer Engineering",
  description:
    "Portfolio of Theekshana Dineth — Computer Engineering undergraduate specializing in AI, Machine Learning, Robotics and Research. Explore projects, research, and engineering work.",
  keywords: [
    "Theekshana Dineth",
    "AI Engineer",
    "Machine Learning",
    "Robotics",
    "Computer Engineering",
    "Portfolio",
    "Research",
  ],
  authors: [{ name: "Theekshana Dineth" }],
  openGraph: {
    title: "Theekshana Dineth | AI & ML Engineer",
    description:
      "Computer Engineering undergraduate specializing in AI, Machine Learning, Robotics and Research.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theekshana Dineth | AI & ML Engineer",
    description:
      "Computer Engineering undergraduate specializing in AI, Machine Learning, Robotics and Research.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
