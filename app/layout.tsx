import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

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
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} – Hundesport in Heidelberg`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.shortName} – Hundesport in Heidelberg`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
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
    <html lang="de" className={leagueSpartan.variable}>
      <body>
        <OrganizationJsonLd />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
