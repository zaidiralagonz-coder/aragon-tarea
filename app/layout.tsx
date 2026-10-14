import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const BASE_URL = "https://aragontareas.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${site.name} — Tareas y entregas escolares`,
    template: `%s · ${site.name}`,
  },
  description: site.slogan,
  applicationName: site.name,
  keywords: [
    "tareas escolares",
    "CONALEP Aragón",
    "entregas escolares",
    "ensayos",
    "resúmenes",
    "CDMX",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: site.name,
    title: `${site.name} — Tareas y entregas escolares`,
    description: site.slogan,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Tareas y entregas escolares`,
    description: site.slogan,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <ThemeProvider>
          <div className="flex min-h-dvh flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}