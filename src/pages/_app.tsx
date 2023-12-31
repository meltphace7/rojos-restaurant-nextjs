import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Rojo&apos;s Mexican Cuisine Official Site</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Rojo's Mexican Cuisine Official Site"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
