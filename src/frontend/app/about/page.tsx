import Section from '../../components/Section';

export const metadata = { title: 'About — Steven Pham' };

export default function About() {
  return (
    <>
      <Section eyebrow="About" title="Two crafts, one operating system." lede="I'm Steven — a software engineer and a real-estate agent based in Boston. I keep both jobs because the through-line, for me, is solving problems people actually feel.">
        <p>
          By day I&rsquo;m a full-stack engineer at <strong>Rakuten Cartera</strong>, where I ship
          React, SCSS, and PHP work for partners like American Airlines, Delta, Southwest, Chase, and
          USAA. I&rsquo;ve led framework upgrades across multiple partner builds, owned end-to-end
          search experiences, and pair-debugged with marketers, designers, and PMs to make sure the
          thing we ship is the thing customers actually wanted.
        </p>
        <p style={{ marginTop: 'var(--space-4)' }}>
          By weeknight and weekend I&rsquo;m a licensed real-estate agent at <strong>Privi Realty</strong>,
          working with buyers and sellers across Greater Boston. The skills travel surprisingly well:
          listening, breaking a giant problem into a sequence of small ones, communicating clearly when
          stakes are high, and following through after the keys change hands.
        </p>
        <p style={{ marginTop: 'var(--space-4)' }}>
          Outside of work I&rsquo;m a relentless tinkerer — machine learning, blockchain, and cloud
          services are my current sandboxes. I&rsquo;m a sports obsessive (currently pickleball-pilled,
          slowly getting into golf), and I think the way sports bring people together is honestly the
          model I want my work to live up to.
        </p>
      </Section>

      <hr className="rule" />

      <Section eyebrow="Working with me" title="What you can expect." lede="Whether the project is software or a home, the operating principles are the same.">
        <ul style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <li><strong>Clear communication.</strong> No surprises. If something&rsquo;s slipping, you&rsquo;ll hear from me first.</li>
          <li><strong>Bias for shipping.</strong> Working software, signed contracts, closed deals. Not slide decks.</li>
          <li><strong>Good documentation.</strong> Decisions written down, paths reproducible, future-you protected.</li>
          <li><strong>Curiosity over ego.</strong> Better answers beat my answers. I&rsquo;ll ask, and I&rsquo;ll listen.</li>
        </ul>
      </Section>

      <hr className="rule" />

      <Section eyebrow="Résumé" title="Want the one-pager?">
        <p>
          The full résumé covers my engineering experience end-to-end. Real-estate clients can find
          relevant credentials on the <a href="/realty" data-arrow>Realty page</a>.
        </p>
        <p style={{ marginTop: 'var(--space-6)' }}>
          <a href="/resume.pdf" className="btn" target="_blank" rel="noopener">Download résumé ↓</a>
        </p>
      </Section>
    </>
  );
}
