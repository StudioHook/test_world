import styles from './style.module.scss';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { resultBox } from './resultBox';
import kakao from 'public/images/KakaoShare.png';
import LinkShare from 'public/images/LinkShare.png';
import FacebookShare from 'public/images/FacebookShare.png';
import TwitterShare from 'public/images/TwitterShare.png';
import { useRouter } from 'next/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userName } from '@/states/userState';
import { EIPoint, JPPoint, SNPoint, TFPoint } from '@/states/mbtiPoint';

type NextImage = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

type TResultBox = {
  id: string;
  title: string;
  name: string;
  contents: string;
  image: NextImage;
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
  const [modalToggleOn, setModalToggleOn] = useState(false);
  const [resultContents, setResultContents] = useState<TResultBox>();

  //kakao 공유
  const shareKakao = async () => {
    await window.Kakao.Share.sendCustom({
      templateId: 102067,
      // templateArgs: {
      //   totalBook,
      //   totalAmount,
      // },
    });
  };

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

  useEffect(() => {
    const tmpResult = [
      useEIPoint >= 2 ? 'E' : 'I',
      useSNPoint >= 2 ? 'S' : 'N',
      useTFPoint >= 2 ? 'T' : 'F',
      useJPPoint >= 2 ? 'J' : 'P',
    ];

    const tmpResultBox = resultBox.find((item) => item.id === tmpResult.join(''));
    console.log(tmpResultBox);

    setResultContents(tmpResultBox);
  }, [useEIPoint, useSNPoint, useTFPoint, useJPPoint]);

  return (
    <section className={styles.Container}>
      <div className={styles.Container__result}>
        <div className={styles.Container__result__title}>축구 대표팀에서 {user}는?</div>
        <div className={styles.Container__result__img}>
          {resultContents && resultContents.image && (
            <Image
              src={resultContents.image.src}
              width={240}
              height={220}
              alt="결과 이미지"
            />
          )}
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
        <div className={styles.Container__share__resultShare}>
          <Image
            src={kakao}
            style={{ cursor: 'pointer' }}
            width={42}
            height={42}
            alt="카톡공유"
            onClick={shareKakao}
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
