import ProjectCard, { Project } from '../../components/ProjectCard';
import { API_BASE_URL } from '../../lib/config';

export const revalidate = 0;
export const metadata = { title: 'Projects — Your Name' };

async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${API_BASE_URL}/projects`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load projects');
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <section className="section">
      <h2>Project Showcase</h2>
      <div className="grid" style={{ marginTop: '1rem' }}>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
