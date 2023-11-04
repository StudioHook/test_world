import styles from './style.module.scss';
import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Image from 'next/image';
import sampleImg from '../../../../public/images/mbtiTest-start.png';
import { useRouter } from 'next/router';

const ResultTest = () => {
  const router = useRouter();
  // const location = useLocation();
  // const navigate = useNavigate();
  // const user = location.state && location.state.user;
  // const EIPoint = location.state && location.state.EIPoint;
  // const SNPoint = location.state && location.state.SNPoint;
  // const TFPoint = location.state && location.state.TFPoint;
  // const JPPoint = location.state && location.state.JPPoint;

  // const result = [
  //   EIPoint >= 2 ? 'E' : 'I',
  //   SNPoint >= 2 ? 'S' : 'N',
  //   TFPoint >= 2 ? 'T' : 'F',
  //   JPPoint >= 2 ? 'J' : 'P',
  // ];

  // useEffect(() => {
  //   if (location.state === null) {
  //     navigate('/');
  //   }
  // }, [location.state, navigate]);

  // const testAgainButton = () => {
  //   navigate('/');
  // };

  return (
    <section className={styles.resultContainer}>
      <div className={styles.resultContainer__wrap}>
        <h3 className={styles.resultContainer__wrap__header}>(닉네임)님의 MBTI 결과는</h3>
        {/* <img
          src={`${process.env.PUBLIC_URL}/images/mbtiTest/mbtiTest-start.png`}
          alt="이미지"
        /> */}
        <Image src={sampleImg} width={300} height={600} alt="샘플 이미지" />
        {/* <div className={styles.resultContainer__wrap__result}>{result}</div> */}
        <div className={styles.resultContainer__wrap__result}>ESTP</div>
        <button
          type="button"
          className={styles.resultContainer__wrap__testAgainButton}
          onClick={() => router.push('/')}
          // onClick={testAgainButton}
        >
          다시 테스트 하기
        </button>
      </div>
    </section>
  );
};

export default ResultTest;
