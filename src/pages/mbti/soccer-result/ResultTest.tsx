import styles from './style.module.scss';
import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Image from 'next/image';
import sampleImg from '../../../../public/images/mbtiTest-start.png';
import { useRouter } from 'next/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userName } from '@/states/userState';
import { EIPoint, JPPoint, SNPoint, TFPoint } from '@/states/mbtiPoint';

const ResultTest = () => {
  const router = useRouter();
  const user = useRecoilValue(userName);
  const useEIPoint = useRecoilValue(EIPoint);
  const useSNPoint = useRecoilValue(SNPoint);
  const useTFPoint = useRecoilValue(TFPoint);
  const useJPPoint = useRecoilValue(JPPoint);

  const resetEIpoint = useResetRecoilState(EIPoint);
  const resetSNpoint = useResetRecoilState(SNPoint);
  const resetTFpoint = useResetRecoilState(TFPoint);
  const resetJPpoint = useResetRecoilState(JPPoint);
  const resetUser = useResetRecoilState(userName);

  const result = [
    useEIPoint >= 2 ? 'E' : 'I',
    useSNPoint >= 2 ? 'S' : 'N',
    useTFPoint >= 2 ? 'T' : 'F',
    useJPPoint >= 2 ? 'J' : 'P',
  ];

  const onRestartTest = () => {
    router.push('/mbti/soccer');
    resetEIpoint();
    resetSNpoint();
    resetTFpoint();
    resetJPpoint();
    resetUser();
  };

  return (
    <section className={styles.resultContainer}>
      <div className={styles.resultContainer__wrap}>
        <h3 className={styles.resultContainer__wrap__header}>{user}님의 MBTI 결과는</h3>
        {/* <img
          src={`${process.env.PUBLIC_URL}/images/mbtiTest/mbtiTest-start.png`}
          alt="이미지"
        /> */}
        <Image src={sampleImg} width={300} height={600} alt="샘플 이미지" />
        {/* <div className={styles.resultContainer__wrap__result}>{result}</div> */}
        <div className={styles.resultContainer__wrap__result}>{result}</div>
        <button
          type="button"
          className={styles.resultContainer__wrap__testAgainButton}
          onClick={onRestartTest}
          // onClick={testAgainButton}
        >
          다시 테스트 하기
        </button>
      </div>
    </section>
  );
};

export default ResultTest;
