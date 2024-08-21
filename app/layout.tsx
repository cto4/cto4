import Head from "next/head";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import LayoutX from "#c/LayoutX";

import logo from "#a/images/logo.svg";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "#a/styles/globals.scss";

export const metadata: Metadata = {
  title: "Hima Pro",
  description: "Ibrahim Megahed - @cto4 personal website.",
  icons: logo.src,
  metadataBase: new URL("https://hima-pro.ru"),
  openGraph: {
    type: "website",
    url: "https://hima-pro.ru",
    title: "Hima Pro",
    description: "Ibrahim Megahed - @cto4 personal website.",
    siteName: "Hima Pro",
    images: [{ url: logo.src }],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "yellow",
  });
  const Co = cookies();

  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={(Co.get("color-scheme")?.value as any) ?? "auto"}>
          <LayoutX wideOpen={Co.get("wide-open")?.value}>{children}</LayoutX>
          <Notifications zIndex={550} />
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
