import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { trpc } from '@tixx/utils/trpc';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to tixx!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default trpc.withTRPC(CustomApp);
