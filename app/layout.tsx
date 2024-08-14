import Head from "next/head";
import { cookies } from "next/headers";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import LayoutX from "#c/LayoutX";

import "@mantine/core/styles.css";
import "#a/styles/globals.scss";

export const metadata = {
  title: "Hima Pro",
  description: "Ibrahim Megahed - @cto4 personal website.",
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
        <link rel="shortcut icon" href="/favicon.svg" />
        {/* <meta name="theme-color" content={colorScheme} /> */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={(Co.get("color-scheme")?.value as any) ?? "auto"}>
          <LayoutX wideOpen={Co.get("wide-open")?.value}>{children}</LayoutX>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
