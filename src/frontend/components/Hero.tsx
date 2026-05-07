import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.copy}>
        <span className="eyebrow">Steven Pham · Boston, MA</span>
        <h1 className={styles.headline}>
          <span>Engineering software.</span>
          <span>Selling homes.</span>
          <span className={styles.italic}>Solving problems.</span>
        </h1>
        <p className="lede">
          I&rsquo;m a full-stack engineer at Rakuten and a licensed real-estate agent at Privi Realty.
          Two crafts, one job — turning messy problems into clean outcomes for the people I work with.
        </p>
        <div className={styles.cta}>
          <Link href="/projects" className="btn">View work <span data-arrow /></Link>
          <Link href="/realty" className="btn ghost">Meet your Realtor <span data-arrow /></Link>
          <a href="/resume.pdf" className={styles.resumeLink} target="_blank" rel="noopener">Download résumé ↓</a>
        </div>
      </div>
      <div className={styles.portrait}>
        <Image src="/headshot.jpg" alt="Steven Pham" width={480} height={600} priority />
      </div>
    </header>
  );
}
