import '@/styles/globals.css';
import Header from '@/common/Header';
import Footer from '@/common/Footer';
import type { AppProps } from 'next/app';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}
