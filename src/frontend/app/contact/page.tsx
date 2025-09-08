'use client';
import { FormEvent, useState } from 'react';
import { API_BASE_URL } from '../../lib/config';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      setStatus('sending');
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setStatus(res.ok ? 'ok' : 'error');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section" style={{ maxWidth: 760, margin: '0 auto' }}>
      <h2>Contact</h2>
      <form onSubmit={onSubmit} className="contactCard" style={{ display: 'grid', gap: '.75rem' }}>
        <input name="name" placeholder="Steven Pham" required />
        <input type="email" name="email" placeholder="you@example.com" required />
        <textarea name="message" placeholder="How can I help?" rows={6} required />
        <button className="btn primary" type="submit" disabled={status==='sending'}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
        {status === 'ok' && <div role="status">Thanks! I'll reply shortly.</div>}
        {status === 'error' && <div role="status">Something went wrong. Please try again.</div>}
      </form>
    </section>
  );
}
