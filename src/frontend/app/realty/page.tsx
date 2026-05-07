import Link from 'next/link';
import Section from '../../components/Section';
import styles from './realty.module.scss';

export const metadata = {
  title: 'Real Estate — Steven Pham · Privi Realty',
  description: 'Steven Pham is a licensed real-estate agent with Privi Realty, serving Greater Boston buyers and sellers.',
};

const markets = [
  'Boston',
  'Cambridge',
  'Somerville',
  'Brookline',
  'Newton',
  'Quincy',
  'Medford',
  'Arlington',
  'Watertown',
  'North Shore',
];

const services = [
  { title: 'Buyer representation', body: 'I’ll help you find the right home, structure a competitive offer, and shepherd the deal through inspection, financing, and close.' },
  { title: 'Seller representation', body: 'Listing prep, pricing strategy, marketing assets, and negotiation — with a clear, written plan from day one.' },
  { title: 'First-time buyers', body: 'Educational, no-pressure approach. We’ll walk through pre-approval, MA-specific costs, inspections, and what to expect at the closing table.' },
  { title: 'Out-of-state movers', body: 'New to Boston? I’ll orient you to neighbourhoods, commute realities, school catchments, and the rhythm of the local market.' },
];

export default function RealtyPage() {
  return (
    <>
      <header className={styles.hero}>
        <span className="eyebrow">Real Estate · Privi Realty</span>
        <h1 className={styles.headline}>
          Helping Greater Boston <span className={styles.italic}>find home.</span>
        </h1>
        <p className="lede">
          I&rsquo;m Steven Pham, a licensed real-estate agent with Privi Realty. Same problem-solver instinct
          I bring to engineering, applied to the biggest purchase most people will ever make.
        </p>
        <div className={styles.cta}>
          <Link href={{ pathname: '/contact', query: { topic: 'realty' } }} className="btn">Schedule a consult <span data-arrow /></Link>
          <a href="https://privirealty.com" target="_blank" rel="noopener" className="btn ghost">About Privi Realty <span data-arrow /></a>
        </div>
        <dl className={styles.credentials}>
          <div><dt>Brokerage</dt><dd>Privi Realty</dd></div>
          <div><dt>License #</dt><dd>MA #9632648-RE-S</dd></div>
          <div><dt>Service area</dt><dd>Greater Boston</dd></div>
        </dl>
      </header>

      <hr className="rule" />

      <Section eyebrow="Markets served" title="Where I work." lede="Primarily Greater Boston — with deep familiarity in the neighbourhoods most clients ask about first.">
        <ul className={styles.markets}>
          {markets.map(m => <li key={m}>{m}</li>)}
        </ul>
      </Section>

      <hr className="rule" />

      <Section eyebrow="How I help" title="Services." lede="Buyer- and seller-side representation, with extra care for first-time buyers and clients moving in from out of state.">
        <div className={styles.services}>
          {services.map(s => (
            <div key={s.title} className={styles.service}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <hr className="rule" />

      <Section eyebrow="Get in touch" title="Ready to talk through your move?">
        <p>
          Whether you’re six months out or already pre-approved, the best first step is a quick
          conversation. I’ll listen to what you’re trying to do and we’ll go from there.
        </p>
        <p style={{ marginTop: 'var(--space-6)' }}>
          <Link href={{ pathname: '/contact', query: { topic: 'realty' } }} className="btn">Start the conversation <span data-arrow /></Link>
        </p>
      </Section>
    </>
  );
}
