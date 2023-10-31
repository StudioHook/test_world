import React from 'react';
import styles from './soccer.module.scss';
import PopularTest from '@/components/PopularTest';

const soccer = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.soccerMain}>축구이미지 넣어주기</div>
      <PopularTest />
    </div>
  );
};

export default soccer;
