import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';

import '../styles/global.scss';
import { PrismicPreview } from '@prismicio/next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicPreview repositoryName={'ig-n'}>
      <NextAuthProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </PrismicPreview>
  );
}
