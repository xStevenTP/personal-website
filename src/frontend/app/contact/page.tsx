import { Suspense } from 'react';
import Section from '../../components/Section';
import ContactForm from './ContactForm';

export const metadata = { title: 'Contact — Steven Pham' };

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Let&rsquo;s talk." lede="Hiring, listing, partnering, or just curious — I read every message and reply within a couple of days.">
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </Section>
  );
}
