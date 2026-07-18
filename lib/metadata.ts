import type { Metadata } from "next";
import { siteContent } from "@/lib/content";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({ title, description, path, noIndex = false }: PageMetadata): Metadata {
  const url = `${siteContent.brand.url}${path}`;
  const fullTitle = `${title} | ${siteContent.brand.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteContent.brand.name,
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
      title: fullTitle,
      description,
      images: ["/images/digitalseva-og.svg"],
    },
  };
}
