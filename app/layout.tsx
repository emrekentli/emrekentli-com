import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emre Kentli - Software Engineer",
  description: "Yazılım geliştirici Emre Kentli'nin kişisel web sitesi. Java, Spring Boot, Next.js ve daha birçok teknoloji ile full-stack web geliştirme deneyimi.",
  keywords: ["Emre Kentli", "Software Engineer", "Java Developer", "Full Stack Developer", "Spring Boot", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Emre Kentli" }],
  creator: "Emre Kentli",
  publisher: "Emre Kentli",
  robots: "index, follow",
  alternates: {
    canonical: "https://emrekentli.com",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://emrekentli.com",
    title: "Emre Kentli - Software Engineer",
    description: "Yazılım geliştirici Emre Kentli'nin kişisel web sitesi. Java, Spring Boot, Next.js ve daha birçok teknoloji ile full-stack web geliştirme deneyimi.",
    siteName: "Emre Kentli",
    images: [
      {
        url: "https://emrekentli.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emre Kentli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Kentli - Software Engineer",
    description: "Yazılım geliştirici Emre Kentli'nin kişisel web sitesi",
    images: ["https://emrekentli.com/og-image.jpg"],
    creator: "@emrekentli",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
