import '@/styles/globals.css';
import Header from '@/common/Header';
import Footer from '@/common/Footer';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';
declare global {
  // Kakao 전역에서 접근 가능하도록
  interface Window {
    Kakao: any;
  }
}
export default function App({ Component, pageProps }: AppProps) {
  const kakaoInit = () => {
    // 페이지가 로드시 실행
    if (!window.Kakao.isInitialized())
      // 선언되지 않았을 때만 실행하도록 if문 추가
      window.Kakao.init(process.env.NEXT_PUBLIC_JAVASCRIPT_KEY);
  };

  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Analytics />
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit} />
      <Footer />
    </RecoilRoot>
  );
}
