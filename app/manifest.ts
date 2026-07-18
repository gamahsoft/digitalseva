import type { MetadataRoute } from "next";
import { siteContent } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DigitalSeva",
    short_name: "DigitalSeva",
    description: siteContent.brand.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: siteContent.brand.colors.cream,
    theme_color: siteContent.brand.colors.cream,
    icons: [
      {
        src: "/images/brand/digitalseva-mark.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/brand/digitalseva-mark.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
