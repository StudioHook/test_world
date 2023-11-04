import styles from './style.module.scss';
import Image from 'next/image';
import logoImg from '../../../public/images/test-world-logo.png';

const Footer = () => {
  return (
    <nav className={styles.Footer}>
      <div className={styles.Footer__items}>
        <div className={styles.Footer__items__logo}>
          <Image src={logoImg} width={135} height={25} alt="이미지" />
        </div>
        <div className={styles.Footer__items__contact}>
          Contact : studiohook96@gmail.com
        </div>
      </div>
    </nav>
  );
};

export default Footer;
