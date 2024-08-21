import pb from "#/lib/db";
import type { MetadataRoute } from "next";

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await pb.collection("posts").getFullList(500, { fields: "id,updated" });

  return [
    { url: "https://hima-pro.ru", lastModified: new Date(), changeFrequency: "hourly", priority: 0.8 },
    { url: "https://hima-pro.ru/about", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: "https://hima-pro.ru/contact", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: "https://hima-pro.ru/projects", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: "https://hima-pro.ru/skills", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ].concat(
    posts.map((post) => ({
      url: "https://hima-pro.ru/posts/" + post.id,
      lastModified: new Date(post.updated),
      changeFrequency: "daily",
      priority: 0.8,
    }))
  ) as MetadataRoute.Sitemap;
}
