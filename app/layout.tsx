import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { Snowfall } from "@/components/snowfall";
import { siteConfig, christmasTheme } from "@/lib/site";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.shortName} – Hundesport in Heidelberg`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Schäferhundeverein Heidelberg",
    "Hundesport Heidelberg",
    "Hundeschule Dossenheim",
    "Agility Heidelberg",
    "IGP",
    "Begleithundeprüfung",
    "Welpentraining",
    "Hoopers",
    "VDH",
    "SV Ortsgruppe",
  ],
  alternates: { canonical: "/" },
  // Icons are declared here (not via the app/icon.* file convention) so the
  // favicon follows the christmasTheme flag like the logo does. When the flag is
  // off, this serves the original blue icons that now live in public/ — reverting
  // is just flipping the flag, no file juggling. The SVG is the festive marker
  // (green dog + red hat) that modern browsers show in the tab.
  icons: christmasTheme
    ? {
        icon: [
          { url: "/icon-christmas.svg", type: "image/svg+xml" },
          { url: "/icon-christmas.png", type: "image/png", sizes: "any" },
        ],
        shortcut: "/favicon-christmas.ico",
        apple: "/apple-icon-christmas.png",
      }
    : {
        icon: [
          { url: "/icon.svg", type: "image/svg+xml" },
          { url: "/icon.png", type: "image/png", sizes: "any" },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-icon.png",
      },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} – Hundesport in Heidelberg`,
    description: siteConfig.description,
    images: ["/logo-email.png"],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.shortName} – Hundesport in Heidelberg`,
    description: siteConfig.description,
    images: ["/logo-email.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: siteConfig.color,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${leagueSpartan.variable} ${christmasTheme ? "theme-christmas" : ""}`}
    >
      <body>
        <OrganizationJsonLd />
        {christmasTheme && <Snowfall />}
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
