'use client';
import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/navbar.module.scss';

const links: { href: Route; label: string }[] = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/realty', label: 'Realty' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          Steven&nbsp;Pham
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
        <ul id="primary-menu" className={`${styles.links} ${open ? styles.open : ''}`}>
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
