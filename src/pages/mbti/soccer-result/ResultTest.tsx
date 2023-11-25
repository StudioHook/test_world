import styles from './style.module.scss';
import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Image from 'next/image';
import TestImg from 'public/images/kfa_white.png';
import kakao from 'public/images/kakaotalk.png';
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

  console.log(result);

  return (
    <section className={styles.resultContainer}>
      <div className={styles.resultContainer__wrap}>
        <h3 className={styles.resultContainer__wrap__resultContainer__wrap__header}>
          축구대표팀 mbti 테스트
        </h3>

        <div className={styles.resultBox}>
          <div className={styles.resultBox__resultBox_Text}>
            <span className={styles.resultBox__resultBox_Big_Text}>축구대표팀</span>
            <span className={styles.resultBox__resultBox_small_Text}>에서 당신은?</span>
          </div>

          <div>
            <Image src={TestImg} width={180} height={155} alt="샘플 이미지" />
          </div>

          <div className={styles.resultBox__Box_in_Reulst}>
            <div style={{ color: '#f7706e' }}>
              <span className={styles.resultBox__result_Name}>이강인</span>
              {result}
            </div>
            <div className={styles.resultBox__result_Category}>
              재기발랄한 개인기가 넘치는 깜찍이 유형
            </div>
            <div className={styles.resultBox__result_Category}>
              군중을 단결시키는 능력을 가진 ESTJ 유형은 전세계 인구의 11% 유형입니다.
              가족이나 사회를 하나로 결집할 수 있는 능력을 가졌습니다. 옳다고 생각되는
              일은 막힘없이 밀고 나갑니다.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.result_share}>
        <span className={styles.result_share__share_text}>친구에게 결과공유</span>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <div>
            <Image src={kakao} width={60} height={60} alt="카톡공유" />
          </div>
          <div className={styles.result_share__clipEmogi}>🔗</div>
        </div>
      </div>

      <button
        type="button"
        className={styles.resultContainer__wrap__testAgainButton}
        onClick={onRestartTest}
        // onClick={testAgainButton}
      >
        다시 테스트 하기
      </button>
    </section>
  );
};

export default ResultTest;
