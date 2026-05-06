import styles from './SkillMatrix.module.scss';

const groups: { label: string; items: string[] }[] = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Angular', 'SCSS / Tailwind', 'CanJS'] },
  { label: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PHP', 'Django / Flask'] },
  { label: 'Data & Infra', items: ['PostgreSQL', 'Supabase', 'Jenkins', 'Rundeck', 'Vercel'] },
  { label: 'Quality', items: ['Jest', 'Cypress', 'Storybook', 'Nx Monorepo'] },
  { label: 'Real Estate', items: ['MA Licensed Agent', 'Privi Realty', 'Buyer & Seller Representation', 'Greater Boston Markets'] },
];

export default function SkillMatrix() {
  return (
    <div className={styles.matrix}>
      {groups.map(g => (
        <div key={g.label} className={styles.group}>
          <div className={styles.label}>
            <span className="eyebrow">{g.label}</span>
          </div>
          <ul className={styles.items}>
            {g.items.map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
