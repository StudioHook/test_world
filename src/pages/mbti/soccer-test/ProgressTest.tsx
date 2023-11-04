import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import { useRouter } from 'next/router';
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
  // const location = useLocation();
  // const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [EIPoint, setEIPoint] = useState(0);
  const [SNPoint, setSNPoint] = useState(0);
  const [TFPoint, setTFPoint] = useState(0);
  const [JPPoint, setJPPoint] = useState(0);

  const questionBox = [
    {
      title: '문제 1번',
      type: 'EI',
      q: '코로나 끝! 학과 MT가 잡혔다. 당신은?',
      A: '당장 가야지!! 꿈에 그리던 대학 MT!',
      B: '사람 많은 곳은 기빨려..그냥 쉬자.',
    },
    {
      title: '문제 2번',
      type: 'EI',
      q: '아는 사람 아무도 없이 홀로 교양수업을 듣게된 첫날, 당신은?',
      A: '저 친구 마음에 드는데? 말걸어 봐야지',
      B: '조용히 빈자리를 찾아 앉는다.',
    },
    {
      title: '문제 3번',
      type: 'EI',
      q: '창밖에 날씨가 좋다. 자체휴강을 때린 당신은?',
      A: '친구한테 전화해서 드라이브가기',
      B: '침대에서 광합성이 최고',
    },
    {
      title: '문제 4번',
      type: 'SN',
      q: '동기가 포스터를 보여주며 공모전에 같이 나가자고 한다. 당신은?',
      A: '작년도 수상 사례를 찾아본다.',
      B: '어떤 기획을 할지 아이디어를 생각해본다.',
    },
    {
      title: '문제 5번',
      type: 'SN',
      q: '어벤져스 영화 스파이더맨을 보고 든 생각은?',
      A: '와 역시 마블이구나,, 액션씬 진짜 ㄷㄷ이다.',
      B: '아니 스파이더맨 할라면 고소공포증 없어야되네..ㅠ',
    },
    {
      title: '문제 6번',
      type: 'SN',
      q: '왠지 기분이 좋아서 오랜만에 복권을 구입했다. 당신은?',
      A: '일단 주머니에 넣어두고 주말에 맞춰본다.',
      B: '아 1등되면 어떡하지.. 자퇴해야되나.. 그래도 학교는 졸업해야되는데..',
    },
    {
      title: '문제 7번',
      type: 'TF',
      q: '별로 안친한 동기가 감기 걸렸다고 칭얼거린다면?',
      A: '아.. 병원은 갔어?',
      B: '에고 어쩌다가ㅠㅠ 괜찮아?',
    },
    {
      title: '문제 8번',
      type: 'TF',
      q: '선배가 갑자기 부르더니 이렇게 말한다. (이렇게 행동하면 아무도 너 안좋아해)',
      A: '네 (속마음 : 어쩌라고 ㅋㅋ)',
      B: '네..? (속마음 : 나 뭐 잘못했나ㅠㅠ 뭐지..)',
    },
    {
      title: '문제 9번',
      type: 'TF',
      q: '오늘 면접 본 친구한테 전화가 왔다. (나 면접 망한 것 같아..)',
      A: '왜? 준비는 잘하고 갔어? 질문 뭐였는데',
      B: '에고 야 고생했어 ㅠㅠ 술이나 먹자',
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
  // useEffect(() => {
  //   if (location.state !== null) {
  //     setUser(location.state.name);
  //   } else {
  //     navigate('/');
  //   }
  // }, [location.state, navigate]);

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
