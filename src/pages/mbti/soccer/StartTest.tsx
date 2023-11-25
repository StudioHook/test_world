import React, { useRef, useState } from 'react';
import styles from './startTest.module.scss';
// import Button from '@/components/styled-components/Button';
import PopularTest from '@/components/PopularTest';
import Image from 'next/image';
import main from 'public/images/main_pic.png';
import router, { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { userName } from '@/states/userState';

const StartTest = () => {
  const router = useRouter();
  const setUserName = useSetRecoilState(userName);
  const userNameRef = useRef<HTMLInputElement>(null);

  const onClickStartTest = () => {
    if (userNameRef?.current?.value) {
      setUserName(userNameRef.current.value);
      console.log(userNameRef.current.value);
      router.push('/mbti/soccer-test');
    } else {
      alert('닉네임을 입력해주세요.');
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className={styles.startTest}>
        <div className={styles.startTest__title}>축구 선수로 알아보는 나의 성격은?</div>
        <div className={styles.startTest__subtitle}>
          <div>총 16개의 유형의 MBTI 성향을 기반으로</div>
          <div>나의 성격에 따른 축구 포지션을 알아보아요!</div>
        </div>
        <Image src={main} width={'200px'} height={'400px'} alt="샘플 이미지" />
        <input
          className={styles.startTest__input}
          ref={userNameRef}
          placeholder="닉네임을 입력해주세요"
          required
        />
        <button className={styles.startTest__button} onClick={onClickStartTest}>
          테스트하기
        </button>
      </div>
      {/* <div style={{ maxWidth: '500px' }}>
        <PopularTest />
      </div> */}
    </div>
  );
};

export default StartTest;
