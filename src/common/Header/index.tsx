import { useRouter } from 'next/router';
import styles from './Header.module.scss';
// import DesktopLogo from "../../assets/TextLogo";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.Header}>
      <section className={styles.Header__nav}>
        <button
          type="button"
          className={styles.Header__nav__logo}
          onClick={() => router.push('/')}
        >
          {/* <DesktopLogo /> */}
          <h3>로고넣어주기</h3>
        </button>
      </section>
    </header>
  );
};

export default Header;
