'use client';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>Steven Pham.dev</Link>
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
