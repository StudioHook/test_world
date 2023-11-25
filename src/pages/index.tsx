import PopularTest from '@/components/PopularTest';
import styles from './Home.module.scss';
import StartTest from './mbti/soccer/StartTest';

const Home = () => {
  return (
    <div className={styles.MainPage}>
      {/* <PopularTest /> */}
      <StartTest />
    </div>
  );
};

export default Home;
