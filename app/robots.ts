import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot", disallow: "/api/", allow: ["/"] },
      { userAgent: ["Applebot", "Bingbot"], allow: ["/"] },
    ],
    sitemap: "https://hima-pro.ru/sitemap.xml",
  };
}
