import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <RecoilRoot>
      <Head>
        <title>Sinmemo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Te ayuda a memorizar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "light" }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </RecoilRoot>
  );
}
