import Header from '@/common/Header';
import Footer from '@/common/Footer';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponent>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </StyledComponent>
  );
}

const StyledComponent = styled.div``;
