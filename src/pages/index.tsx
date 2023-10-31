import PopularTest from '@/components/PopularTest';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.MainPage}>
      <PopularTest />
    </div>
  );
};

export default Home;
