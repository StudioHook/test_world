import PopularTest from '@/components/PopularTest';
import styles from './Home.module.scss';
import StartTest from './mbti/soccer/StartTest';
import Head from 'next/head';

const Home = () => {
  return (
    <div className={styles.MainPage}>
      <Head>
        <title>TestWorld</title>
        <meta property="og:url" content="https://www.thetestworld.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Test_World" />
        <meta property="og:description" content="축구 선수로 알아보는 나의 mbti는?" />
        <meta
          property="og:image"
          content="https://www.thetestworld.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain_pic.de8061a9.png&w=750&q=75"
        />
        <link rel="icon" href="/favicon.icon.ico" />
      </Head>

      {/* <PopularTest /> */}
      <StartTest />
    </div>
  );
};

export default Home;
