import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { trpc } from '@tixx/utils/trpc';
import { appWithTranslation } from 'next-i18next';
import { i18nConfig } from '../../next-i18next.config.mjs';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to tixx!</title>
      </Head>
      <main className="app">
        <PrimeReactProvider>
          <Component {...pageProps} />
        </PrimeReactProvider>
      </main>
    </>
  );
}

const AppWithTranslation = appWithTranslation(CustomApp, i18nConfig);

export default trpc.withTRPC(AppWithTranslation);
