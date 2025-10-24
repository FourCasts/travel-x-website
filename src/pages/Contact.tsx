import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

interface FormState { name: string; email: string; message: string; }

export default function Contact() {
  const [tab, setTab] = useState<'partner' | 'customer'>('partner');
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 2500);
    }, 1200);
  };

  const isValidEmail = /.+@.+\..+/.test(form.email);
  const canSubmit = form.name && isValidEmail && form.message;

  return (
    <div className="max-w-4xl mx-auto pt-12">
      <SectionTitle title="Contact Us" subtitle="Reach out for partnerships or customer inquiries." />

      <div className="flex gap-4 mt-4">
        <button onClick={() => setTab('partner')} className={`px-4 py-2 rounded-full text-sm border ${tab === 'partner' ? 'border-brand-gold text-brand-gold' : 'border-neutral-300 dark:border-neutral-700 opacity-70 hover:opacity-100'}`}>Partner Enquiry</button>
        <button onClick={() => setTab('customer')} className={`px-4 py-2 rounded-full text-sm border ${tab === 'customer' ? 'border-brand-gold text-brand-gold' : 'border-neutral-300 dark:border-neutral-700 opacity-70 hover:opacity-100'}`}>Customer Relations</button>
      </div>

      <form onSubmit={onSubmit} className="mt-10 space-y-6" aria-live="polite">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="text-xs uppercase tracking-wider font-medium opacity-70">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="mt-2 w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-brand-gold outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs uppercase tracking-wider font-medium opacity-70">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              className="mt-2 w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-brand-gold outline-none transition"
            />
            {!isValidEmail && form.email && <p className="text-xs text-red-600 mt-1">Enter a valid email.</p>}
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-xs uppercase tracking-wider font-medium opacity-70">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange}
            required
            rows={6}
            className="mt-2 w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-brand-gold outline-none transition resize-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={!canSubmit || loading}
            className={`px-8 py-3 rounded-full border text-sm font-medium transition-colors ${canSubmit ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black' : 'border-neutral-300 dark:border-neutral-700 opacity-50'} ${loading ? 'animate-pulse' : ''}`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {submitted && <span className="text-sm text-brand-gold">Message received (demo) ✓</span>}
        </div>
        <p className="text-xs opacity-60">Form is non-functional in this demo. Phase 2 will integrate real backend and chatbot interactions.</p>
      </form>
    </div>
  );
}
