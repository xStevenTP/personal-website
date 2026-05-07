import ExperienceCard, { Experience } from '../../components/ExperienceCard';
import Section from '../../components/Section';

export const revalidate = 0;
export const metadata = { title: 'Work — Steven Pham' };

const experiences: Experience[] = [
  {
    id: 'privi-realty',
    company: 'Privi Realty',
    jobTitle: 'Licensed Real-Estate Agent',
    timeframe: '2025 — Present',
    url: 'https://privirealty.com',
    tasks: [
      'Represent buyers and sellers across Greater Boston, handling everything from initial search through offer negotiation, inspection, and close.',
      'Apply an engineer’s eye to the home-buying process — documented checklists, transparent timelines, and clear written communication at every step.',
      'Partner with mortgage brokers, inspectors, attorneys, and contractors to coordinate transactions end-to-end and protect client interests.',
    ],
  },
  {
    id: 'rakuten-cartera',
    company: 'Rakuten — Cartera',
    jobTitle: 'Software Engineer',
    timeframe: '2023 — Present',
    tasks: [
      'Build and maintain customer-facing experiences in React, SCSS, CanJS, and PHP for partners including American Airlines, Delta, Southwest, United, Alaska Airlines, Chase, USAA, Bank of America, and Barclays.',
      'Lead React framework upgrades across multiple partner builds, coordinating release through Jenkins and Rundeck and de-risking large migrations behind feature flags.',
      'Own immersive-search experiences and other high-visibility features end-to-end, partnering with engineering, design, marketing, and partner-side stakeholders.',
      'Write Jest test coverage and cross-device QA for high-traffic flows, ensuring responsive, accessible UIs across the partner portfolio.',
    ],
  },
  {
    id: 'commscope',
    company: 'CommScope',
    jobTitle: 'Software Engineer Intern',
    timeframe: 'May 2022 — Dec 2022',
    tasks: [
      'Migrated legacy JavaScript on the ServAssure® NXT UI team into Angular components in TypeScript inside an Nx monorepo.',
      'Built a customer-facing table component used daily by NXT users, with reusable hooks and thorough Storybook + Cypress coverage.',
      'Documented and abstracted shared components so other product teams could adopt them downstream.',
    ],
  },
  {
    id: 'reflexis-systems',
    company: 'Reflexis Systems',
    jobTitle: 'Software Engineer Intern',
    timeframe: 'Jun 2018 — Aug 2018',
    tasks: [
      'Built a Python and R filing algorithm against the company’s client file database, automating a previously manual logistics workflow.',
      'Tested management software pre-launch with corporate clients and worked across customer success, immigration, software, and finance teams.',
    ],
  },
  {
    id: 'intelycare',
    company: 'IntelyCare Inc.',
    jobTitle: 'Programmer',
    timeframe: 'Jun 2016 — Aug 2016',
    tasks: [
      'Helped build the nursing-side user experience in HTML, CSS, and JavaScript, focused on QA and feature additions.',
      'Contributed to the company’s mission of connecting at-home patients with nurses through a streamlined web application.',
    ],
  },
];

export default async function ExperiencesPage() {
  return (
    <Section eyebrow="Work" title="A decade of building — and now selling — things people use." lede="Concurrent roles in software engineering and real estate, plus the path that got me here.">
      <div>
        {experiences.map(p => <ExperienceCard key={p.id} experience={p} />)}
      </div>
    </Section>
  );
}
