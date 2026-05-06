'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/navbar.module.scss';

const links = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/realty', label: 'Realty' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          Steven&nbsp;Pham
        </Link>
        <button
          className={styles.menuBtn}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === l.href ? 'page' : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
