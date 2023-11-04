import Header from '@/common/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
//test
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
