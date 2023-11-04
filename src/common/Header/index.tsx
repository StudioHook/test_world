import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import logoImg from '../../../public/images/test-world-logo.png';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.Header}>
      <section className={styles.Header__nav__logo}>
        <div
          onClick={() => router.push('/')}
          style={{ marginTop: '10px', cursor: 'pointer' }}
        >
          <Image src={logoImg} width={270} height={50} alt="이미지" />
        </div>
      </section>
    </header>
  );
};

export default Header;
