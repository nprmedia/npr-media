'use client';

import { useEffect, useState } from 'react';
import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import { Phone, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface Copy {
  headline: string;
  subtext: string;
}

const defaultCopy: Copy = {
  headline: 'Get in Touch',
  subtext: "Tell us a bit about your project and we'll respond shortly.",
};

interface FormState {
  name: string;
  email: string;
  summary: string;
}

export default function ContactPage() {
  const [copy, setCopy] = useState<Copy>(defaultCopy);

  useEffect(() => {
    async function loadCopy() {
      if (process.env.NEXT_PUBLIC_CMS === 'true') {
        try {
          const mod = await import('@/content/contact');
          if (mod?.contactCopy) {
            setCopy({ ...defaultCopy, ...mod.contactCopy });
          }
        } catch {
          // ignore missing file
        }
      }
    }
    loadCopy();
  }, []);

  const [form, setForm] = useState<FormState>({ name: '', email: '', summary: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email.';
    }
    if (!form.summary.trim()) errs.summary = 'Please provide a short summary.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', summary: '' });
      }
    } catch {
      setErrors({ summary: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen flex-col">
      <StickyHeader light />
      <main className="flex flex-1 items-center px-6 py-12 lg:px-12">
        <div className="relative mx-auto w-full max-w-3xl space-y-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <motion.div
              className="h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold md:text-5xl">{copy.headline}</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{copy.subtext}</p>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl bg-white p-6 shadow-lg dark:bg-neutral-900/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black focus-visible:outline focus-visible:outline-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                required
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black focus-visible:outline focus-visible:outline-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="summary" className="block text-sm font-medium">
                Project Summary
              </label>
              <textarea
                id="summary"
                rows={5}
                value={form.summary}
                onChange={handleChange('summary')}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-black focus-visible:outline focus-visible:outline-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                aria-describedby={errors.summary ? 'summary-error' : undefined}
              />
              {errors.summary && (
                <p id="summary-error" className="mt-1 text-sm text-red-600">
                  {errors.summary}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 text-white shadow-lg transition hover:scale-105 disabled:opacity-60"
            >
              {loading ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : submitted ? (
                'Sent!'
              ) : (
                'Send Message'
              )}
            </button>
            <p className="mt-2 text-xs text-neutral-500 italic">
              We reply to every serious inquiry within 1 business day.
            </p>
          </motion.form>
          <motion.div
            className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center rounded-lg border bg-neutral-50 p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <Phone className="mb-2 h-5 w-5 text-[var(--color-accent)]" />
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-neutral-50 p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <Mail className="mb-2 h-5 w-5 text-[var(--color-accent)]" />
              <p className="text-sm">contact@npr-media.com</p>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-neutral-50 p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <Calendar className="mb-2 h-5 w-5 text-[var(--color-accent)]" />
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </section>
  );
}
