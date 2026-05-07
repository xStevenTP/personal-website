import styles from './ProjectCard.module.scss';

export interface Project {
  id: string;
  index: string;
  name: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.row}>
      <div className={styles.meta}>
        <span className="eyebrow">{project.index}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.desc}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map(t => <li key={t}>{t}</li>)}
        </ul>
        <div className={styles.links}>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener">Live <span data-arrow /></a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener">Repo <span data-arrow /></a>}
        </div>
      </div>
    </article>
  );
}
