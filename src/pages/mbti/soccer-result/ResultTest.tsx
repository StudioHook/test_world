import styles from './style.module.scss';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { resultBox } from './resultBox';
import TestImg from 'public/images/kfa_white.png';
import kakao from 'public/images/kakaotalk.png';
import { useRouter } from 'next/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userName } from '@/states/userState';
import { EIPoint, JPPoint, SNPoint, TFPoint } from '@/states/mbtiPoint';

type TResultBox = {
  id: string;
  title: string;
  name: string;
  contents: string;
};

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

  const [result, setResult] = useState('');
  const [resultContents, setResultContents] = useState<TResultBox>();

  const onRestartTest = () => {
    router.push('/mbti/soccer');
    resetEIpoint();
    resetSNpoint();
    resetTFpoint();
    resetJPpoint();
    resetUser();
  };

  useEffect(() => {
    const tmpResult = [
      useEIPoint >= 2 ? 'E' : 'I',
      useSNPoint >= 2 ? 'S' : 'N',
      useTFPoint >= 2 ? 'T' : 'F',
      useJPPoint >= 2 ? 'J' : 'P',
    ];

    const tmpResultBox = resultBox.find((item) => item.id === tmpResult.join(''));

    setResult(tmpResult.join(''));
    setResultContents(tmpResultBox);
  }, [useEIPoint, useSNPoint, useTFPoint, useJPPoint]);

  return (
    <section className={styles.Container}>
      <div className={styles.Container__result}>
        <div className={styles.Container__result__title}>축구 대표팀에서 {user}는?</div>
        <div className={styles.Container__result__img}>
          <Image src={TestImg} width={200} height={200} alt="샘플 이미지" />
        </div>

        <div className={styles.Container__result__name}>
          {resultContents?.name} {resultContents?.id}
        </div>
        <div className={styles.Container__result__nickname}>{resultContents?.title}</div>
        <div className={styles.Container__result__details}>
          {resultContents?.contents}
        </div>
      </div>
      <div className={styles.Container__share}>
        <span className={styles.Container__share__title}>친구에게 결과공유</span>
        <div className={styles.Container__share__kakaoImg}>
          <Image src={kakao} width={50} height={50} alt="카톡공유" />
        </div>
        {/* <div className={styles.result_share__clipEmogi}>🔗</div> */}
      </div>

      <button type="button" className={styles.Container__button} onClick={onRestartTest}>
        다시 테스트 하기
      </button>
    </section>
  );
};

export default ResultTest;
