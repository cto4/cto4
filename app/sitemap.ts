import pb from "#/lib/db";
import type { MetadataRoute } from "next";

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await pb.collection("posts").getFullList(500, { fields: "id,updated" });
  const url = (process.env.APP_URL ?? "https://hima-pro.ru")
  return [
    { url, lastModified: new Date(), changeFrequency: "hourly", priority: 0.8 },
    { url: url + "/about", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: url + "/contact", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: url + "/projects", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: url + "/skills", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ].concat(
    posts.map((post) => ({
      url: url + "/posts/" + post.id,
      lastModified: new Date(post.updated),
      changeFrequency: "daily",
      priority: 0.8,
    }))
  ) as MetadataRoute.Sitemap;
}
