'use client';

import { useState, useEffect } from 'react';
import { Check, Loader2, Mail, User, Wallet, FileText, Megaphone } from 'lucide-react';
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
  budget: string;
  summary: string;
  source: string;
}

export default function ContactForm() {
  const [copy, setCopy] = useState<Copy>(defaultCopy);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    budget: '',
    summary: '',
    source: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    async function loadCopy() {
      if (process.env.NEXT_PUBLIC_CMS === 'true') {
        try {
          const mod = await import('@/content/contact');
          if (mod?.contactCopy) setCopy({ ...defaultCopy, ...mod.contactCopy });
        } catch {
          // ignore
        }
      }
    }
    loadCopy();
  }, []);

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim()) {
      errs.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!form.summary.trim()) errs.summary = 'Required';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('loading');
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('success');
      setShowConfirm(true);
      setTimeout(() => {
        setForm({ name: '', email: '', budget: '', summary: '', source: '' });
        setStatus('idle');
        setShowConfirm(false);
      }, 2500);
    } catch {
      setStatus('idle');
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.section
      id="contact-form"
      className="mx-auto w-full max-w-lg space-y-6 rounded-2xl bg-white/80 p-8 shadow-xl ring-1 ring-transparent backdrop-blur-md transition hover:ring-blue-500/20 dark:bg-neutral-900/80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-center">
        <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold">{copy.headline}</h1>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {copy.subtext}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          {
            id: 'name',
            label: 'Full Name',
            icon: User,
            type: 'text',
            field: 'name',
          },
          {
            id: 'email',
            label: 'Work Email',
            icon: Mail,
            type: 'email',
            field: 'email',
          },
          {
            id: 'budget',
            label: 'Budget',
            icon: Wallet,
            type: 'select',
            field: 'budget',
          },
          {
            id: 'summary',
            label: 'Project Summary',
            icon: FileText,
            type: 'textarea',
            field: 'summary',
          },
          {
            id: 'source',
            label: 'How did you hear about us?',
            icon: Megaphone,
            type: 'selectSource',
            field: 'source',
          },
        ].map((input, i) => (
          <motion.div key={input.id} variants={inputVariants} initial="hidden" animate="visible" custom={i}>
            <div className="relative">
              {input.type === 'textarea' ? (
                <textarea
                  id={input.id}
                  rows={4}
                  value={form[input.field as keyof FormState] as string}
                  onChange={handleChange(input.field as keyof FormState)}
                  placeholder=" "
                  className="peer w-full resize-none rounded-lg bg-white/80 px-10 py-3 text-sm text-black shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800/80 dark:text-white"
                />
              ) : input.type === 'select' ? (
                <select
                  id={input.id}
                  value={form[input.field as keyof FormState] as string}
                  onChange={handleChange(input.field as keyof FormState)}
                  className="peer w-full appearance-none rounded-lg bg-white/80 px-10 py-3 text-sm text-black shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800/80 dark:text-white"
                >
                  <option value="" disabled hidden></option>
                  <option value="<1k">Less than $1k</option>
                  <option value="1k-5k">$1k – $5k</option>
                  <option value="5k-15k">$5k – $15k</option>
                  <option value="15k+">$15k+</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              ) : input.type === 'selectSource' ? (
                <select
                  id={input.id}
                  value={form[input.field as keyof FormState] as string}
                  onChange={handleChange(input.field as keyof FormState)}
                  className="peer w-full appearance-none rounded-lg bg-white/80 px-10 py-3 text-sm text-black shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800/80 dark:text-white"
                >
                  <option value="" disabled hidden></option>
                  <option value="search">Search Engine</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Referral</option>
                  <option value="newsletter">Newsletter</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <input
                  id={input.id}
                  type={input.type}
                  value={form[input.field as keyof FormState] as string}
                  onChange={handleChange(input.field as keyof FormState)}
                  placeholder=" "
                  className="peer w-full rounded-lg bg-white/80 px-10 py-3 text-sm text-black shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800/80 dark:text-white"
                />
              )}
              <input.icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <label
                htmlFor={input.id}
                className="absolute left-10 top-1/2 z-10 -translate-y-1/2 origin-left text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:text-xs peer-focus:text-blue-600 dark:text-neutral-400"
              >
                {input.label}
              </label>
              {errors[input.field as keyof FormState] && (
                <p className="mt-1 text-xs text-red-600">
                  {errors[input.field as keyof FormState]}
                </p>
              )}
            </div>
          </motion.div>
        ))}
        <motion.button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-white shadow-lg ring-2 ring-blue-500/50 transition hover:scale-105 hover:shadow-xl disabled:opacity-60"
          whileHover={{ scale: 1.04 }}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : status === 'success' ? (
            <Check className="h-5 w-5" />
          ) : null}
          {status === 'success' ? 'Sent!' : 'Send Message'}
        </motion.button>
        <div className="text-center text-xs text-neutral-500">
          <p>No spam. No obligation. Just clarity.</p>
          <p>Trusted by 25+ SaaS, DTC, and consulting brands</p>
        </div>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-green-600"
          >
            We’ll reach out within 1 business day.{' '}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Book a Call
            </a>
          </motion.div>
        )}
        <div className="flex items-center justify-center gap-4 pt-2">
          <img src="/logos/authority-platform.jpg" alt="Logo" className="h-8 w-auto" />
          <img src="/logos/Authority Platform.webp" alt="Logo" className="h-8 w-auto" />
          <img src="/logos/Article 2 - Template.png" alt="Logo" className="h-8 w-auto" />
        </div>
      </form>
    </motion.section>
  );
}

