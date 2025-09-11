import ExperienceCard, { Experience } from '../../components/ExperienceCard';

export const revalidate = 0;
export const metadata = { title: 'Experiences — Steven Pham' };

const experiences : Experience[] = [
  {
    id: "rakuten-cartera",
    company: "Rakuten - Cartera",
    jobTitle: "Software Engineer",
    timeframe: "2023 - Present",
    tasks: [
        "Developed and maintained user-enhancing experiences using React JS, HTML, SCSS, Can JS, and PHP for leading partners including American Airlines, Delta, Southwest, United, Alaska Airlines, as well as major financial institutions such as Barclays, Chase, USAA, and Bank of America.",
        "Collaborated with cross-functional teams (engineering, marketing, design) across client departments to deliver a wide range of web services and features, including immersive search experiences to improve customer engagement.",
        "Led React JS framework upgrades for multiple partners, ensuring seamless integration of the latest tools and resources, managed through Jenkins and Rundeck",
        "Tested and debugged web experiences for optimal performance across devices and screen sizes using Jest, ensuring high-quality, responsive user interfaces.",
    ],
  },
];

export default async function ExperiencesPage() {
  return (
    <section className="section">
      <h2>Work Experience</h2>
      <div className="grid" style={{ marginTop: '1rem' }}>
        {experiences.map(p => <ExperienceCard key={p.id} experience={p} />)}
      </div>
    </section>
  );
}
