import ProjectCard, { Project } from '../../components/ProjectCard';

export const revalidate = 0;
export const metadata = { title: 'Projects — Steven Pham' };

const projects : Project[] = [
  {
    id: "crypto-tracker",
    name: "Crypto Tracker",
    description: "Crypto Coin tracker website with AI suggestion.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Python", "Django", "Flask"],
    liveUrl: "https://crypto-tracker.vercel.app",
    repoUrl: "https://github.com/xStevenTP/CryptoTracker",
  },
];

export default async function ProjectsPage() {
  return (
    <section className="section">
      <h2>Project Showcase</h2>
      <div className="grid" style={{ marginTop: '1rem' }}>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
