import type { MetadataRoute } from "next";
import { siteContent } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/solutions", "/pricing", "/demo", "/about", "/contact", "/privacy", "/terms"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteContent.brand.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
