import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://romyq.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Romyq — Software Lifecycle Management",
    template: "%s | Romyq",
  },
  description:
    "Open-source software lifecycle management for AI-assisted development. Local-first, terminal-native. No cloud, no telemetry.",
  keywords: [
    "software lifecycle management",
    "AI project management",
    "terminal project manager",
    "developer workflow automation",
    "project governance",
    "open source development tools",
    "romyq",
  ],
  authors: [{ name: "Romyq contributors" }],
  creator: "Romyq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Romyq",
    title: "Romyq — Software Lifecycle Management",
    description:
      "Open-source software lifecycle management for AI-assisted development. Local-first, terminal-native. No cloud, no telemetry.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romyq — Software Lifecycle Management",
    description:
      "Open-source software lifecycle management for AI-assisted development. Local-first, terminal-native. No cloud, no telemetry.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
