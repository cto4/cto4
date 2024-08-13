import Head from "next/head";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "#a/styles/globals.scss";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
});

export const metadata = {
  title: "Next App",
  description: "a simple next app with mantine",
};

const layout = ({ children }) => {

  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        {/* <meta name="theme-color" content={colorScheme} /> */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </Head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
};

export default layout;
