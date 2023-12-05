import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { EIPoint, SNPoint, TFPoint, JPPoint } from '@/states/mbtiPoint';
import { questionBox } from './questionBox';
import Image from 'next/image';
import main from 'public/images/main_pic.png';

const ProgressTest = () => {
  const router = useRouter();
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [mbtiEIPoint, setEIPoint] = useRecoilState(EIPoint);
  const [mbtiSNPoint, setSNPoint] = useRecoilState(SNPoint);
  const [mbtiTFPoint, setTFPoint] = useRecoilState(TFPoint);
  const [mbtiJPPoint, setJPPoint] = useRecoilState(JPPoint);

  const clickUserAnswr = (e: any) => {
    setQuestionNumber((prev) => prev + 1);
    if (questionNumber < 12) {
      if (e.target.value === 'O' && questionBox[questionNumber].type === 'EI') {
        setEIPoint((prev) => prev + 1);
      }
      if (e.target.value === 'O' && questionBox[questionNumber].type === 'SN') {
        setSNPoint((prev) => prev + 1);
      }
      if (e.target.value === 'O' && questionBox[questionNumber].type === 'TF') {
        setTFPoint((prev) => prev + 1);
      }
      if (e.target.value === 'O' && questionBox[questionNumber].type === 'JP') {
        setJPPoint((prev) => prev + 1);
      }
    } else {
      // navigate('/mbtiTestResult', {
      //   state: { user, EIPoint, SNPoint, TFPoint, JPPoint },
      // });
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
          <div className={styles.test__wrap__progress}>{QuestionNumber + 1}/12</div>
          <div className={styles.test__wrap__questionNum}>Q {QuestionNumber + 1}</div>
          <div className={styles.test__wrap__Image}>
            <Image src={main} width={'500px'} height={'500px'} alt="샘플 이미지" />
          </div>
          <div className={styles.test__wrap__questionBox}>
            {questionNumber <= 12 ? (
              <h3>{questionBox[questionNumber].q}</h3>
            ) : (
              <h1>Loading</h1>
            )}
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
