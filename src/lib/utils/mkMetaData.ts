import { Metadata } from "next";

import logo from "#a/images/logo-512.png";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const url = process.env.APP_URL ?? "https://hima-pro.ru";

const mkMetaData = ({
  title = "Hima Pro",
  description = "Ibrahim Megahed - @cto4 personal website.",
  images = [{ url: logo.src }],
  extra = null as Metadata,
  og = null as OpenGraph,
}): Metadata => ({
  title,
  description,
  icons: logo.src,
  metadataBase: new URL(url),
  ...extra,
  openGraph: {
    url,
    title,
    description,
    type: "website",
    siteName: "Hima Pro",
    images,
    ...og,
  },
});

export default mkMetaData;
