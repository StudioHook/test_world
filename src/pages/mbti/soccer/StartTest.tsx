import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './startTest.module.scss';
import Button from '@/components/styled-components/Button';
// import { useNavigate } from 'react-router-dom';
import PopularTest from '@/components/PopularTest';
import Image from 'next/image';
import sampleImg from '../../../../public/images/mbtiTest-start.png';
import router, { useRouter } from 'next/router';

const StartTest = () => {
  const [userName, setUserName] = useState('');
  const router = useRouter();
  // const navigate = useNavigate();
  const onSubmit = (e: any) => {
    e.preventDefault();
    // navigate('/mbtiTest', { state: { name: userName } });
  };
  const onChange = (e: any) => {
    setUserName(e.currentTarget.value);
  };
  return (
    <div>
      <div className={styles.startTest}>
        <div className={styles.startTest__title}>여행 스타일로 보는 나의 성격은?</div>
        <div className={styles.startTest__subtitle}>
          총 16개의 유형의 MBTI 성향을 기반으로 여행 스타일 속 나의 모습을 알아보아요
        </div>
        <Image src={sampleImg} width={300} height={600} alt="샘플 이미지" />
        <input
          className={styles.startTest__input}
          type="text"
          onChange={onChange}
          placeholder="이름을 입력해주세요"
          required
        />
        <form
          className={styles.startTest__button}
          onSubmit={onSubmit}
          onClick={() => router.push('/mbti/soccer-test')}
        >
          <Button text="테스트하기" />
        </form>
      </div>
      <div>
        <PopularTest />
      </div>
    </div>
  );
};

export default StartTest;

// import React from 'react';
// import styles from './soccer.module.scss';
// import PopularTest from '@/components/PopularTest';
// import { useRouter } from 'next/router';

// const soccer = () => {
//   const router = useRouter();
//   return (
//     <div className={styles.layout}>
//       <div className={styles.soccerMain}>
//         축구이미지 넣어주기
//         <div onClick={() => router.push('/')} className={styles.button}>
//           테스트 시작하기
//         </div>
//       </div>
//       <div>
//         <PopularTest />
//       </div>
//     </div>
//   );
// };

// export default soccer;
