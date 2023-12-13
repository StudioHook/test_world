import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { EIPoint, SNPoint, TFPoint, JPPoint } from '@/states/mbtiPoint';
import { questionBox } from './questionBox';
import Image from 'next/image';

const ProgressTest = () => {
  const router = useRouter();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [mbtiEIPoint, setEIPoint] = useRecoilState(EIPoint);
  const [mbtiSNPoint, setSNPoint] = useRecoilState(SNPoint);
  const [mbtiTFPoint, setTFPoint] = useRecoilState(TFPoint);
  const [mbtiJPPoint, setJPPoint] = useRecoilState(JPPoint);

  const clickUserAnswr = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuestionNumber((prev) => prev + 1);

    const target = e.target as HTMLButtonElement;

    if (questionNumber < 12) {
      if (target.value === 'O' && questionBox[questionNumber].type === 'EI') {
        setEIPoint((prev) => prev + 1);
      }
      if (target.value === 'O' && questionBox[questionNumber].type === 'SN') {
        setSNPoint((prev) => prev + 1);
      }
      if (target.value === 'O' && questionBox[questionNumber].type === 'TF') {
        setTFPoint((prev) => prev + 1);
      }
      if (target.value === 'O' && questionBox[questionNumber].type === 'JP') {
        setJPPoint((prev) => prev + 1);
      }
    }
  };
  useEffect(() => {
    if (questionNumber > 11) {
      router.push('/mbti/soccer-result');
    }
  }, [questionNumber, router]);

  return (
    <section className={styles.test}>
      {questionNumber <= 11 ? (
        <div className={styles.test__wrap}>
          <div className={styles.test__wrap__progress}>{questionNumber + 1}/12</div>
          <div className={styles.test__wrap__questionNum}>Q {questionNumber + 1}</div>
          <div className={styles.test__wrap__questionBox}>
            {questionNumber <= 12 ? (
              <h3>{questionBox[questionNumber].q}</h3>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
          <div className={styles.test__wrap__Image}>
            <Image
              src={questionBox[questionNumber].img}
              width={'350px'}
              height={'350px'}
              alt={questionBox[questionNumber].title}
            />
          </div>
          <div className={styles.test__wrap__btns}>
            <button
              type="button"
              className={styles.test__wrap__btns__1}
              onClick={clickUserAnswr}
              value="O"
            >
              {questionBox[questionNumber].A}
            </button>
            <br />
            <button
              type="button"
              className={styles.test__wrap__btns__1}
              onClick={clickUserAnswr}
              value="X"
            >
              {questionBox[questionNumber].B}
            </button>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </section>
  );
};

export default ProgressTest;
