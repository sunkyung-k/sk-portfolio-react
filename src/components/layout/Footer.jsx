import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 SunKyung Kim. All rights reserved.</p>
      <p>
        Contact: <a href="mailto:mimcom43@kakao.com">mimcom43@kakao.com</a>
      </p>
    </footer>
  );
}

export default Footer;
