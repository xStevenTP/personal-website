import Section from '../../components/Section';

export const metadata = { title: 'About — Your Name' };

export default function About() {
  return (
    <Section title="About Me">
      <p>
        I'm a software engineer based in Boston, MA 
        with experience across multiple different frameworks.
      </p>
      <p>
        My work expertise is in React/Next.js frontend work including
        Typescript, SCSS, and PHP.
      </p>
      <p>
        Outside of my work experience, I enjoy working and learning new technologies
        such as machine learning, blockchain and cloud services.
      </p>
      <p>
        I am extremely passionate about all types of sports.
        I am currently obsessed with pickleball but am getting into golf!
        If I'm not playing sports then I am definetly watching sports.
        I absolutely love the way sports connect and bring people together!
      </p>
      <p>
        I hope to do the same with the work that I do!
      </p>
    </Section>
  );
}
