import styles from './style.module.scss';
import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Image from 'next/image';
import TestImg from 'public/images/kfa_white.png';
import kakao from 'public/images/KakaoShare.png';
import LinkShare from 'public/images/LinkShare.png';
import FacebookShare from 'public/images/FacebookShare.png';
import TwitterShare from 'public/images/TwitterShare.png';
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
  const [modalToggleOn, setModalToggleOn] = useState(false);
  const result = [
    useEIPoint >= 2 ? 'E' : 'I',
    useSNPoint >= 2 ? 'S' : 'N',
    useTFPoint >= 2 ? 'T' : 'F',
    useJPPoint >= 2 ? 'J' : 'P',
  ];

  //링크 공유
  const clip = () => {
    navigator.clipboard.writeText(window.location.href);
    setModalToggleOn(true);
  };

  const url = encodeURI(window.location.href);
  // Facebook
  const shareFacebook = () => {
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
  };
  // Twitter
  const shareTwitter = () => {
    const text = '나의 축구 MBTI는?';
    window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + url);
  };
  const onRestartTest = () => {
    router.push('/mbti/soccer');
    resetEIpoint();
    resetSNpoint();
    resetTFpoint();
    resetJPpoint();
    resetUser();
  };

  return (
    <section className={styles.Container}>
      <div className={styles.Container__result}>
        <div className={styles.Container__result__title}>축구 대표팀에서 {user}는?</div>
        <div className={styles.Container__result__img}>
          <Image src={TestImg} width={200} height={200} alt="샘플 이미지" />
        </div>

        <div className={styles.Container__result__name}>이강인 {result}</div>
        <div className={styles.Container__result__nickname}>
          재기발랄한 개인기가 넘치는 깜찍이 유형
        </div>
        <div className={styles.Container__result__details}>
          군중을 단결시키는 능력을 가진 ESTJ 유형은 전세계 인구의 11% 유형입니다. 가족이나
          사회를 하나로 결집할 수 있는 능력을 가졌습니다. 옳다고 생각되는 일은 막힘없이
          밀고 나갑니다.
        </div>
      </div>
      <div className={styles.Container__share}>
        <span className={styles.Container__share__title}>친구에게 결과공유</span>
        <div className={styles.Container__share__resultShare}>
          <Image
            src={kakao}
            style={{ cursor: 'pointer' }}
            width={42}
            height={42}
            alt="카톡공유"
          />
          <Image
            src={FacebookShare}
            onClick={shareFacebook}
            style={{ cursor: 'pointer' }}
            width={40}
            height={40}
            alt="페이스북공유"
          />
          <Image
            src={TwitterShare}
            onClick={shareTwitter}
            style={{ cursor: 'pointer' }}
            width={40}
            height={40}
            alt="트위터공유"
          />
          <Image
            src={LinkShare}
            onClick={clip}
            style={{ cursor: 'pointer' }}
            width={40}
            height={40}
            alt="링크 공유"
          />
        </div>
      </div>
      {modalToggleOn && (
        <div className={styles.modalWrap}>
          <div className={styles.modalWrapBody}>
            <span className={styles.closeBtn} onClick={() => setModalToggleOn(false)}>
              &times;
            </span>
            <p className={styles.modalText}>링크가 복사되었습니다!</p>
          </div>
        </div>
      )}
      <button type="button" className={styles.Container__button} onClick={onRestartTest}>
        다시 테스트 하기
      </button>
    </section>
  );
};

export default ResultTest;
