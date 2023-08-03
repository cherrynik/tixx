import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { trpc } from '@tixx/utils/trpc';
import { env } from '../app/env/client.mjs';

function CustomApp({ Component, pageProps }: AppProps) {
  console.log(env.NEXT_PUBLIC_TEST)

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
