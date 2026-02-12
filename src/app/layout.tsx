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
    "Portfolio of Theekshana Dineth — Computer Engineering undergraduate at University of Peradeniya specializing in AI, software engineering, research and startups. Director of Sri Lanka's AI Forum for Students.",
  keywords: [
    "Theekshana Dineth",
    "AI Engineer",
    "Machine Learning",
    "Computer Engineering",
    "University of Peradeniya",
    "Startups",
    "Research",
    "Portfolio",
  ],
  authors: [{ name: "Theekshana Dineth" }],
  openGraph: {
    title: "Theekshana Dineth | AI & ML Engineer",
    description:
      "Computer Engineering undergraduate specializing in AI, software engineering, research and startups at University of Peradeniya.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theekshana Dineth | AI & ML Engineer",
    description:
      "Computer Engineering undergraduate specializing in AI, software engineering, research and startups at University of Peradeniya.",
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
