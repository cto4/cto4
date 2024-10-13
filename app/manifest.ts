import type { MetadataRoute } from "next";

import logo192 from "#a/images/logo-192.png";
import logo512 from "#a/images/logo-512.png";

export default function manifest(): MetadataRoute.Manifest {
  return {
    scope: "/",
    start_url: "/",
    name: "Codjix",
    display: "standalone",
    short_name: "Codjix",
    description: "Ibrahim Megahed - Codjix personal website.",
    background_color: "#242424",
    theme_color: "#f08c00",
    orientation: "any",
    icons: [
      { src: logo192.src, type: "image/png", sizes: "192x192" },
      { src: logo512.src, type: "image/png", sizes: "512x512" },
      { src: logo512.src, type: "image/png", sizes: "512x512", purpose: "monochrome" },
    ],
  };
}
