'use client';

import { useState, useEffect } from 'react';
import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import { Phone, Mail, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

const defaultCopy = {
  headline: "Let's Connect",
  subtext: "Tell us about your project and we'll reach out shortly.",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', summary: '' });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    summary?: string;
    general?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copy, setCopy] = useState(defaultCopy);

  useEffect(() => {
    import('@/content/contact')
      .then((mod) => {
        if (mod?.contactCopy) {
          setCopy({ ...defaultCopy, ...mod.contactCopy });
        }
      })
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      newErrors.email = 'Invalid email';
    if (!form.summary.trim()) newErrors.summary = 'Required';
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network');
      setSuccess(true);
      setForm({ name: '', email: '', summary: '' });
    } catch {
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <StickyHeader />
      <main
        className="relative flex min-h-screen flex-col items-center bg-white text-black"
        style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}
      >
        <div className="absolute inset-0 -z-10 flex items-start justify-center overflow-hidden">
          <motion.div
            className="h-96 w-96 rounded-full bg-pink-300 opacity-20 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl space-y-8 px-6 lg:px-12"
        >
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">{copy.headline}</h1>
            <p className="text-neutral-600 dark:text-neutral-400">{copy.subtext}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl bg-white/90 p-6 shadow-md backdrop-blur"
          >
            <label className="block text-sm font-medium" htmlFor="name">
              Full Name
              <input
                id="name"
                type="text"
                className="mt-1 w-full rounded border px-3 py-2 text-black focus-visible:outline focus-visible:outline-blue-500 dark:bg-neutral-800 dark:text-white"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600" id="name-error">
                  {errors.name}
                </p>
              )}
            </label>
            <label className="block text-sm font-medium" htmlFor="email">
              Work Email
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full rounded border px-3 py-2 text-black focus-visible:outline focus-visible:outline-blue-500 dark:bg-neutral-800 dark:text-white"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600" id="email-error">
                  {errors.email}
                </p>
              )}
            </label>
            <label className="block text-sm font-medium" htmlFor="summary">
              Project Summary
              <textarea
                id="summary"
                rows={5}
                className="mt-1 w-full rounded border px-3 py-2 text-black focus-visible:outline focus-visible:outline-blue-500 dark:bg-neutral-800 dark:text-white"
                value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
              />
              {errors.summary && (
                <p className="mt-1 text-xs text-red-600" id="summary-error">
                  {errors.summary}
                </p>
              )}
            </label>
            {errors.general && (
              <p className="text-xs text-red-600" role="alert">
                {errors.general}
              </p>
            )}
            {success ? (
              <p className="text-sm text-green-600">Thanks! We&apos;ll be in touch soon.</p>
            ) : (
              <button
                type="submit"
                className="w-full rounded-xl bg-black px-6 py-3 text-white shadow-lg transition hover:scale-105 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? <span className="animate-spin">⏳</span> : 'Send Message'}
              </button>
            )}
            <p className="mt-2 text-xs text-neutral-500 italic">
              We reply to every serious inquiry within 1 business day.
            </p>
          </form>

          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg border p-4 shadow-sm">
              <Phone className="mb-2 h-5 w-5" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-4 shadow-sm">
              <Mail className="mb-2 h-5 w-5" />
              <span className="text-sm">contact@npr-media.com</span>
            </div>
            <a
              href="https://calendly.com/placeholder"
              className="flex flex-col items-center rounded-lg border p-4 shadow-sm hover:bg-neutral-50"
            >
              <CalendarDays className="mb-2 h-5 w-5" />
              <span className="text-sm">Book a Call</span>
            </a>
          </div>
        </motion.div>
      </main>
      <FooterSection />
    </section>
  );
}
