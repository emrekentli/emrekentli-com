import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Emre Kentli — Software Engineer", template: "%s — Emre Kentli" },
  description: "Emre Kentli; dağıtık sistemler, backend geliştirme ve sürdürülebilir ürün mimarileri üzerine çalışan software engineer.",
  applicationName: "Emre Kentli", authors: [{ name: "Emre Kentli", url: siteUrl }], creator: "Emre Kentli",
  keywords: ["Emre Kentli", "Software Engineer", "Java", "Spring Boot", "Backend Developer", "Next.js"], alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { type: "website", locale: "tr_TR", url: "/", siteName: "Emre Kentli", title: "Emre Kentli — Software Engineer", description: "Karmaşık problemleri sade, hızlı ve güvenilir dijital ürünlere dönüştürüyorum." },
  twitter: { card: "summary", title: "Emre Kentli — Software Engineer", description: "Karmaşık problemleri sade, hızlı ve güvenilir dijital ürünlere dönüştürüyorum." },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#fffaf0" }, { media: "(prefers-color-scheme: dark)", color: "#17151f" }] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="tr"><body>{children}</body></html>; }
