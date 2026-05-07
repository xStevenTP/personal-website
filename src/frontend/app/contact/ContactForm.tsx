'use client';
import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { API_BASE_URL } from '../../lib/config';
import styles from './contact.module.scss';

export default function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [topic, setTopic] = useState<string>('engineering');

  useEffect(() => {
    const t = params.get('topic');
    if (t === 'realty' || t === 'engineering' || t === 'other') setTopic(t);
  }, [params]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      topic,
    };
    try {
      setStatus('sending');
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'ok' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.form} aria-busy={status === 'sending'}>
      <fieldset className={styles.topic}>
        <legend className="eyebrow">I&rsquo;m here about</legend>
        {[
          { v: 'engineering', l: 'Engineering / hiring' },
          { v: 'realty', l: 'Buying or selling a home' },
          { v: 'other', l: 'Something else' },
        ].map(opt => (
          <label key={opt.v} className={styles.chip}>
            <input
              type="radio"
              name="topic"
              value={opt.v}
              checked={topic === opt.v}
              onChange={() => setTopic(opt.v)}
            />
            <span>{opt.l}</span>
          </label>
        ))}
      </fieldset>

      <label className={styles.field}>
        <span>Name</span>
        <input name="name" required placeholder="Your name" />
      </label>
      <label className={styles.field}>
        <span>Email</span>
        <input type="email" name="email" required placeholder="you@example.com" />
      </label>
      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" rows={6} required placeholder="What can I help with?" />
      </label>

      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'} <span data-arrow />
      </button>

      {status === 'ok' && <div className={styles.ok} role="status">Thanks — I&rsquo;ll be in touch shortly.</div>}
      {status === 'error' && <div className={styles.err} role="status">Something went wrong. Please email me at steventuanpham@gmail.com.</div>}
    </form>
  );
}
