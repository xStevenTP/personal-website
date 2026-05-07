import Link from 'next/link';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SkillMatrix from '../components/SkillMatrix';

export default function Home() {
  return (
    <>
      <Hero />

      <Section eyebrow="Engineering" title="Building reliable software at scale." lede="At Rakuten Cartera I ship React/PHP experiences for American Airlines, Delta, Chase, USAA, and other partners — and lead React framework upgrades across the org.">
        <p>
          I gravitate toward problems where good engineering changes the customer&rsquo;s day:
          search experiences that actually find the thing, framework upgrades that cut tech debt in half,
          test suites that catch regressions before customers do.
        </p>
        <p style={{ marginTop: 'var(--space-4)' }}>
          <Link href="/experience" data-arrow>See my work</Link>
        </p>
      </Section>

      <hr className="rule" />

      <Section eyebrow="Real Estate" title="Helping clients find — and close on — the right home." lede="Licensed real-estate agent with Privi Realty serving Greater Boston. Same problem-solver instinct, applied to the biggest purchase most people will ever make.">
        <p>
          Buying or selling a home is a project with hard deadlines, dozens of moving parts, and
          real money on the line. I bring the same diligence I use shipping software — clear
          communication, good documentation, no surprises — to every client I represent.
        </p>
        <p style={{ marginTop: 'var(--space-4)' }}>
          <Link href="/realty" data-arrow>Work with me on a home</Link>
        </p>
      </Section>

      <hr className="rule" />

      <Section eyebrow="Toolkit" title="What I work with." lede="A broad stack across both crafts. Depth where it matters, breadth where it helps me move fast.">
        <SkillMatrix />
      </Section>

      <hr className="rule" />

      <Section eyebrow="Get in touch" title="Hire me, list with me, or just say hi.">
        <p>
          Whether you&rsquo;re a recruiter, a hiring manager, or someone moving into the Boston area,
          I&rsquo;d love to hear from you.
        </p>
        <p style={{ marginTop: 'var(--space-6)' }}>
          <Link href="/contact" className="btn">Start a conversation <span data-arrow /></Link>
        </p>
      </Section>
    </>
  );
}
