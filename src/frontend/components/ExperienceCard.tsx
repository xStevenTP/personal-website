export interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  timeframe: string;
  tasks: string[];
}

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="card">
      <h3>{experience.company}</h3>
      <h4>{experience.jobTitle}</h4>
      <p>{experience.timeframe}</p>
      <ul>
        {experience.tasks.map(t => <li key={t}>{t}</li>)}
      </ul>
    </article>
  );
}