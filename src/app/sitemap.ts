import { MetadataRoute } from "next";
import { routesData } from "@/data/routesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dammamairporttaxi.com";

  const routeUrls = routesData.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    /* ── Tier 1: Core pillar pages ──────── */
    { url: baseUrl,                                     lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/dammam-guide`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/dammam-airport-guide`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/gcc-border-crossing`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/tourist-destinations`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/corporate-transfers`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    /* ── Tier 2: Route pages ──────────────── */
    ...routeUrls,

    /* ── Tier 2.5: City landing pages ───────── */
    { url: `${baseUrl}/al-khobar`,                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/dhahran`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/jubail`,                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/qatif`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.80 },
    { url: `${baseUrl}/booking`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },

    /* ── Tier 3: Supporting pages ────────── */
    { url: `${baseUrl}/fleet`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faqs`,                           lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`,                           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${baseUrl}/contact`,                        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about`,                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/voice-search-faqs`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.65 },
    { url: `${baseUrl}/privacy-policy`,                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${baseUrl}/terms`,                          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}


