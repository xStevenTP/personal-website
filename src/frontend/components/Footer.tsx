import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <span className="eyebrow">Engineer</span>
          <a href="https://github.com/xStevenTP" target="_blank" rel="noopener">GitHub <span data-arrow /></a>
          <a href="https://www.linkedin.com/in/steven-pham-697585168/" target="_blank" rel="noopener">LinkedIn <span data-arrow /></a>
        </div>
        <div className={styles.col}>
          <span className="eyebrow">Realtor</span>
          <a href="https://privirealty.com" target="_blank" rel="noopener">Privi Realty <span data-arrow /></a>
          <a href="/realty">Work with me <span data-arrow /></a>
        </div>
        <div className={styles.col}>
          <span className="eyebrow">Reach me</span>
          <a href="mailto:steventuanpham@gmail.com">steventuanpham@gmail.com</a>
          <a href="/contact">Send a message <span data-arrow /></a>
        </div>
      </div>
      <div className={styles.meta}>
        <span>© {year} Steven Pham</span>
        <span>Boston, MA</span>
      </div>
    </footer>
  );
}
