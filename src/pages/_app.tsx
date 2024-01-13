import '@/styles/globals.css';
import Header from '@/common/Header';
import Footer from '@/common/Footer';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';
import Head from 'next/head';
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
    <>
      <RecoilRoot>
        <Head>
          <title>TestWorld</title>
          <meta property="og:title" content="Test_World" />
          <meta property="og:description" content="축구 선수로 알아보는 나의 mbti는?" />
          <meta property="og:url" content="https://www.thetestworld.com/" />
          <meta
            property="og:image"
            content="https://www.thetestworld.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain_pic.de8061a9.png&w=750&q=75"
          />
          <link rel="icon" href="/favicon.icon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8158596099728583"
          crossOrigin="anonymous"
        ></script>
        <Footer />
      </RecoilRoot>
    </>
  );
}
