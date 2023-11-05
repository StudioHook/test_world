import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { EIPoint, SNPoint, TFPoint, JPPoint } from '@/states/mbtiPoint';
type TQuestionBox = [
  {
    title: string;
    type: string;
    q: string;
    A: string;
    B: string;
  }
];

const ProgressTest = () => {
  const router = useRouter();
  const [QuestionNumber, setQuestionNumber] = useState(0);

  const [mbtiEIPoint, setEIPoint] = useRecoilState(EIPoint);
  const [mbtiSNPoint, setSNPoint] = useRecoilState(SNPoint);
  const [mbtiTFPoint, setTFPoint] = useRecoilState(TFPoint);
  const [mbtiJPPoint, setJPPoint] = useRecoilState(JPPoint);

  const questionBox = [
    {
      title: '문제 1번',
      type: 'EI',
      q: '종료직전 결승골을 넣었다면?',
      A: '상의 탈의 후 팬들의 환희를 즐긴다.',
      B: '모두가 주목하는 이 순간 나는 너무 어색하고 쑥스럽다.',
    },
    {
      title: '문제 2번',
      type: 'EI',
      q: '오늘은 자율훈련이 있는 날이다. 어떤 훈련을 할까?',
      A: '팀원들과 함께 공돌리기를 하며 자율훈련을 즐긴다.',
      B: '오늘만큼은 혼자있고 싶어! 개인 훈련을 즐긴다.',
    },
    {
      title: '문제 3번',
      type: 'EI',
      q: '경기종료 직전! 패널티킥을 얻었다..!',
      A: '내가 차고 싶어! 골을 넣고 경기의 MVP가 된다. ',
      B: '너무 긴장 돼 동료선수에게 양보한다.',
    },
    {
      title: '문제 4번',
      type: 'SN',
      q: '최근 슬럼프를 겪고 있는 당신 어떻게 해결할 것인가?',
      A: '"나는 요즘 왜이러지? 어디서부터 잘못된 건지 되짚어본다."',
      B: '힘들다 그냥 하자',
    },
    {
      title: '문제 5번',
      type: 'SN',
      q: '최근 한 달간 벤치신세를 겪고 있는 당신',
      A: '감독님은 무슨 생각이실까? 당장 감독님을 찾아간다',
      B: '감독님이 나에게 화나신게 있나? 혼자 고뇌에 빠진다.',
    },
    {
      title: '문제 6번',
      type: 'SN',
      q: '최근 패배한 팀과 리턴 매치가 성사됐다.',
      A: '패배의 요인을 분석하여 경기를 준비한다',
      B: '새로운 전술을 준비하여 경기에 임한다',
    },
    {
      title: '문제 7번',
      type: 'TF',
      q: '혼자만 플레이하는 선수가 우리팀에 있다 나라면?',
      A: '골만 잘넣으면 돼 이기는게 젤 중요해!',
      B: '쟤는 왜 저래? 약간 화가난다.',
    },
    {
      title: '문제 8번',
      type: 'TF',
      q: '후배가 나에게 고민을 상담하러 왔다..!',
      A: '후배의 부족한 점과 더불어 개선할 점을 알려준다.',
      B: '심리적으로 힘든 상태인 것을 눈치채고, 상황에 공감해준다.',
    },
    {
      title: '문제 9번',
      type: 'TF',
      q: '최근 훈련시간에 집중을 못하는 동료에게 나는?',
      A: '요즘 무슨일이 있나? 이유가 궁금하다!',
      B: '걱정이 되기 시작한다. 훈련이 끝나고 조용히 다가가 농담을 건넨다.',
    },
    {
      title: '문제 10번',
      type: 'JP',
      q: '이번주 주말까지 제출해야하는 과제가 있다. 당신은',
      A: '스케줄을 체크하고 미리미리 과제를 끝낸다',
      B: '버틸 때까지 버티다가 하루 전에 후다닥 처리한다.',
    },
    {
      title: '문제 11번',
      type: 'JP',
      q: '과제를 수행하는 중 좋은 아이디어가 나왔다. 당신은?',
      A: '계획 먼저 짜고 조사 해야지',
      B: '조사부터 하고 계획해야지',
    },
    {
      title: '문제 12번',
      type: 'JP',
      q: '기분이 울적해서 바다가 보고싶어졌다. 당신은?',
      A: '캘린더를 확인하고 갈 수 있는 날짜를 확인한다.',
      B: '바로 강릉 버스 표를 예매한다.',
    },
  ];

  const clickUserAnswr = (e: any) => {
    setQuestionNumber((prev) => prev + 1);
    if (QuestionNumber < 12) {
      if (e.target.value === 'O' && questionBox[QuestionNumber].type === 'EI') {
        setEIPoint((prev) => prev + 1);
      }
      if (e.target.value === 'O' && questionBox[QuestionNumber].type === 'SN') {
        setSNPoint((prev) => prev + 1);
      }
      if (e.target.value === 'O' && questionBox[QuestionNumber].type === 'TF') {
        setTFPoint((prev) => prev + 1);
      }
      if (e.target.value === 'O' && questionBox[QuestionNumber].type === 'JP') {
        setJPPoint((prev) => prev + 1);
      }
    } else {
      // navigate('/mbtiTestResult', {
      //   state: { user, EIPoint, SNPoint, TFPoint, JPPoint },
      // });
    }
  };
  useEffect(() => {
    if (QuestionNumber > 11) {
      router.push('/mbti/soccer-result');
    }
  }, [QuestionNumber]);

  return (
    <section className={styles.test}>
      {QuestionNumber <= 11 ? (
        <div className={styles.test__wrap}>
          <div className={styles.test__wrap__progress}>{QuestionNumber + 1}/12</div>
          <div className={styles.test__wrap__questionNum}>Q {QuestionNumber + 1}</div>
          <div className={styles.test__wrap__questionBox}>
            {QuestionNumber <= 12 ? (
              <h3 className={styles.question}>{questionBox[QuestionNumber].q}</h3>
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
              {questionBox[QuestionNumber].A}
            </button>
            <br />
            <button
              type="button"
              className={styles.test__wrap__btns__1}
              onClick={clickUserAnswr}
              value="X"
            >
              {questionBox[QuestionNumber].B}
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
