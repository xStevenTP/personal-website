import styles from './ExperienceCard.module.scss';

export interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  timeframe: string;
  tasks: string[];
  url?: string;
}

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className={styles.row}>
      <div className={styles.meta}>
        <span className="eyebrow">{experience.timeframe}</span>
      </div>
      <div className={styles.body}>
        <header className={styles.head}>
          <h3>{experience.url ? <a href={experience.url} target="_blank" rel="noopener">{experience.company} <span data-arrow /></a> : experience.company}</h3>
          <p className={styles.role}>{experience.jobTitle}</p>
        </header>
        <ul className={styles.tasks}>
          {experience.tasks.map(t => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </article>
  );
}
