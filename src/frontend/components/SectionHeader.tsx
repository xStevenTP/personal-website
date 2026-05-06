import styles from './SectionHeader.module.scss';

export default function SectionHeader({ eyebrow, title, lede }: { eyebrow?: string; title: string; lede?: string }) {
  return (
    <header className={styles.header}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}
