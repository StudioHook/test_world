import React from 'react';
import styles from './Popular.module.scss';
import { useRouter } from 'next/router';

const PopularTest = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.title}>인기 심리테스트</div>
      <div className={styles.container}>
        <div className={styles.flexItem} onClick={() => router.push('/mbti/soccer')}>
          축구선수 테스트
        </div>
        <div className={styles.flexItem}>테스트1</div>
        <div className={styles.flexItem}>테스트1</div>
        <div className={styles.flexItem}>테스트1</div>
        <div className={styles.flexItem}>테스트1</div>
        <div className={styles.flexItem}>테스트1</div>
        <div className={styles.flexItem}>테스트1</div>
        <div className={styles.flexItem}>테스트1</div>
        <div className={styles.flexItem}>테스트1</div>
      </div>
    </div>
  );
};

export default PopularTest;
