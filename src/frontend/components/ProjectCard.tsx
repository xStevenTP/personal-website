export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <h4>Tech Stack:</h4>
      <ul>
        {project.tags.map(t => <li key={t}>{t}</li>)}
      </ul>
      <div className="projectUrls">
        {project.liveUrl && <a href={project.liveUrl} target="_blank">Live Site</a>}
        {project.repoUrl && <a href={project.repoUrl} target="_blank">Code Repository</a>}
      </div>
    </article>
  );
}