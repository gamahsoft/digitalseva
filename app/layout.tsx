import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieConsent } from "@/components/CookieConsent";
import { Navbar } from "@/components/Navbar";
import { siteContent } from "@/lib/content";
import { JsonLd } from "@/lib/seo";
import "./globals.css";

const brand = siteContent.brand;

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: "DigitalSeva | Global Nonprofit Management Platform",
    template: "%s | DigitalSeva",
  },
  description: brand.description,
  keywords: [
    "global nonprofit management platform",
    "nonprofit management software",
    "nonprofit management platform",
    "NGO management software",
    "charity management platform",
    "foundation management software",
    "church management website",
    "temple management software",
    "mosque management platform",
    "synagogue management software",
    "constituent management for nonprofits",
    "donation management website",
    "online donation management for nonprofits",
    "front-desk payment system for nonprofits",
    "faith-based organization software",
    "volunteer management for nonprofits",
    "community organization software",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/brand/digitalseva-mark.png",
    shortcut: "/images/brand/digitalseva-mark.png",
    apple: "/images/brand/digitalseva-mark.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "DigitalSeva | Global Nonprofit Management Platform",
    description: brand.description,
    url: brand.url,
    siteName: brand.name,
    images: [
      {
        url: "/images/digitalseva-og.svg",
        width: 1200,
        height: 630,
        alt: "DigitalSeva global nonprofit management platform preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
    images: ["/images/digitalseva-og.svg"],
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  ...(process.env.BING_SITE_VERIFICATION
    ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${brand.url}/#organization`,
        name: brand.name,
        url: brand.url,
        logo: `${brand.url}/images/brand/digitalseva-mark.png`,
        description: brand.description,
        email: brand.email,
        areaServed: "Worldwide",
        audience: {
          "@type": "Audience",
          audienceType:
            "Nonprofits, NGOs, charities, faith-based organizations, cultural organizations, and community organizations",
        },
        keywords: [
          "global nonprofit management platform",
          "NGO management software",
          "charity management platform",
          "faith-based organization software",
          "constituent management",
          "donation management",
          "volunteer management",
        ],
        sameAs: [brand.url],
        contactPoint: {
          "@type": "ContactPoint",
          email: brand.email,
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${brand.url}/#website`,
        name: brand.name,
        url: brand.url,
        publisher: { "@id": `${brand.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${brand.url}/#platform`,
        name: brand.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: brand.url,
        description: brand.description,
        audience: {
          "@type": "Audience",
          audienceType:
            "Nonprofits, NGOs, charities, faith-based organizations, cultural organizations, and community organizations",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description:
            "No upfront software license fee for existing standard platform capabilities. Affordable annual hosting, maintenance, support, configuration, and website-management plans are available for nonprofits.",
        },
      },
      {
        "@type": "Service",
        "@id": `${brand.url}/#annual-service`,
        name: "DigitalSeva annual platform service plan",
        provider: { "@id": `${brand.url}/#organization` },
        areaServed: "Worldwide",
        serviceType: "Global nonprofit management platform hosting, maintenance, and support",
      },
    ],
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <JsonLd data={structuredData} />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <GoogleAnalytics />
        <CookieConsent />
      </body>
    </html>
  );
}
