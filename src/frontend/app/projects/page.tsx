import ProjectCard, { Project } from '../../components/ProjectCard';
import Section from '../../components/Section';

export const revalidate = 0;
export const metadata = { title: 'Projects — Steven Pham' };

const projects: Project[] = [
  {
    id: 'my-squad',
    index: '01',
    name: 'MySquad',
    description: 'A modern multi-league sports and esports team tracker. Follow your favourite teams across the NBA, NFL, MLB, NHL, and major esports (League of Legends, CS:GO, Valorant, Dota 2) from one personalised dashboard. Built as a passion project for a fan who refuses to keep ten tabs open.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL'],
    liveUrl: 'https://my-squads.vercel.app',
    repoUrl: 'https://github.com/xStevenTP/MySquad',
  },
  {
    id: 'crypto-tracker',
    index: '02',
    name: 'Crypto Tracker',
    description: 'A crypto-coin tracker with an AI-driven suggestion layer that surfaces movers worth a closer look. Combines a Next.js frontend with Python services for data and lightweight model inference.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Python', 'Django', 'Flask'],
    liveUrl: 'https://crypto-tracker.vercel.app',
    repoUrl: 'https://github.com/xStevenTP/CryptoTracker',
  },
];

export default async function ProjectsPage() {
  return (
    <Section eyebrow="Selected work" title="Things I built because I wanted them to exist." lede="Side projects that scratch real itches — sports for the fan in me, crypto for the tinkerer.">
      <div>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Section>
  );
}
