import ProjectCard, { Project } from '../../components/ProjectCard';

export const revalidate = 0;
export const metadata = { title: 'Projects — Steven Pham' };

const projects : Project[] = [
  {
    id: "my-squad",
    name: "MySquad",
    description: "Passion Project of mine as a huge sports fan. A modern sports and esports team tracking dashboard. Follow your favorite teams across NBA, NFL, MLB, NHL, League of Legends, CS:GO, Valorant, and Dota 2.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "PostgresSQL"],
    liveUrl: "https://my-squads.vercel.app",
    repoUrl: "https://github.com/xStevenTP/MySquad",
  },
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
