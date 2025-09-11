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
  {
    id: "commscope",
    company: "CommScope",
    jobTitle: "Software Engineer Intern",
    timeframe: "May 2022 - December 2022",
    tasks: [
        "Collaborated with Agile ServAssure® NXT UI team to transition legacy Javascript code to Angular components in Typescript",
        "Developed table user interface Angular component with new features in Nx Monorepo that customers were using on a daily basis",
        "Tested and debugged Angular components using Cypress and Storybook",
        "Facilitated Angular components to be used by NXT customers and in future products through thorough documentation and abstraction in the source code"
    ]
  },
  {
    id: "reflexis-systems",
    company: "Reflexis Systems",
    jobTitle: "Software Engineer Intern",
    timeframe: "June 2018 - August 2018",
    tasks: [
        "Collaborated with a diverse array of departments dealing with logistics such as customer success, immigration, software, and financial",
        "Developed and debugged a filing algorithm for the company’s client file database using Python and R",
        "Delved into high level AI, using R, by testing management software that the company was developing and launching to their corporate client"
    ]
  },
  {
    id: "intelycare",
    company: "IntelyCare Inc.",
    jobTitle: "Programmer",
    timeframe: "June 2016 - August 2016",
    tasks: [
        "Debugged and assisted in the development of the user application for the nursing side of the website using  HTML, CSS, and Javascript by testing the flow of the user experience and adding new tools for the users",
        "Assisted with the company’s goal to make connecting at home patients with nurses easier and more accessible by optimizing an easy and direct link, web application, between both parties"
    ],
  }
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
