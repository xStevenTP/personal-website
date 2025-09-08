import Image from 'next/image';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <header className="hero">
        <Image src="/headshot.jpg" alt="Avatar" width={96} height={96} style={{ borderRadius: 9999 }} />
        <h1>Hi, I'm Steven!</h1>
        <p>I'm a full-stack engineer focused on making a meaningful impact on anything I work on.</p>
        <div className="cta">
          <a className="btn primary" href="/projects">View Projects</a>
          <a className="btn ghost" href="/contact">Get in Touch</a>
        </div>
      </header>

      <Section title="What I Do">
        <p>I build reliable, fast web apps with Next.js, Node/Python APIs, and modern CI/CD.</p>
      </Section>
    </>
  );
}
