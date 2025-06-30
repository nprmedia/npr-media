'use client';

import { useState } from 'react';
import { User, Mail, Wallet, FileText, Search, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const budgetRanges = ['<1k', '1k\u20135k', '5k\u201315k', '15k+', 'Not Sure'];

interface FormState {
  name: string;
  email: string;
  budget: string;
  summary: string;
  referral: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    budget: '',
    summary: '',
    referral: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim()) {
      errs.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email';
    }
    if (!form.summary.trim()) errs.summary = 'Required';
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
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setForm({ name: '', email: '', budget: '', summary: '', referral: '' });
        }, 2500);
      }
    } catch {
      setErrors({ summary: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.form
      id="contact-form"
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      className="space-y-4 rounded-2xl bg-white/80 p-6 shadow-xl shadow-black/10 backdrop-blur-md ring-1 ring-transparent transition hover:ring-blue-500/20 dark:bg-neutral-900/80"
    >
      {[
        {
          id: 'name',
          label: 'Full Name',
          type: 'text',
          icon: User,
          value: form.name,
          onChange: handleChange('name'),
          error: errors.name,
        },
        {
          id: 'email',
          label: 'Work Email',
          type: 'email',
          icon: Mail,
          value: form.email,
          onChange: handleChange('email'),
          error: errors.email,
        },
      ].map((field, idx) => {
        const Icon = field.icon;
        return (
          <motion.div key={field.id} custom={idx} variants={fieldVariants} className="relative">
            <Icon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
            <input
              id={field.id}
              type={field.type}
              value={field.value}
              onChange={field.onChange}
              placeholder=" "
              className="peer w-full rounded-lg bg-white/80 px-10 py-3 shadow-sm outline outline-0 transition placeholder-transparent hover:outline-blue-500/20 focus:outline-blue-500/20 dark:bg-neutral-800/80"
              aria-invalid={!!field.error}
            />
            <label
              htmlFor={field.id}
              className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600"
            >
              {field.label}
            </label>
            {field.error && <p className="mt-1 text-xs text-red-600">{field.error}</p>}
          </motion.div>
        );
      })}

      <motion.div custom={2} variants={fieldVariants} className="relative">
        <Wallet className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
        <select
          id="budget"
          value={form.budget}
          onChange={handleChange('budget')}
          placeholder=" "
          className="peer w-full appearance-none rounded-lg bg-white/80 px-10 py-3 shadow-sm outline outline-0 transition hover:outline-blue-500/20 focus:outline-blue-500/20 dark:bg-neutral-800/80"
        >
          <option value="" disabled hidden></option>
          {budgetRanges.map((b) => (
            <option key={b} value={b} className="text-black dark:text-white">
              {b}
            </option>
          ))}
        </select>
        <label
          htmlFor="budget"
          className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600"
        >
          Budget
        </label>
      </motion.div>

      <motion.div custom={3} variants={fieldVariants} className="relative">
        <FileText className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-neutral-500" />
        <textarea
          id="summary"
          rows={5}
          value={form.summary}
          onChange={handleChange('summary')}
          placeholder=" "
          className="peer w-full rounded-lg bg-white/80 px-10 py-3 shadow-sm outline outline-0 transition placeholder-transparent hover:outline-blue-500/20 focus:outline-blue-500/20 dark:bg-neutral-800/80"
          aria-invalid={!!errors.summary}
        />
        <label
          htmlFor="summary"
          className="pointer-events-none absolute left-10 top-3 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600"
        >
          Project Summary
        </label>
        {errors.summary && <p className="mt-1 text-xs text-red-600">{errors.summary}</p>}
      </motion.div>

      <motion.div custom={4} variants={fieldVariants} className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
        <select
          id="referral"
          value={form.referral}
          onChange={handleChange('referral')}
          placeholder=" "
          className="peer w-full appearance-none rounded-lg bg-white/80 px-10 py-3 shadow-sm outline outline-0 transition hover:outline-blue-500/20 focus:outline-blue-500/20 dark:bg-neutral-800/80"
        >
          <option value="" disabled hidden></option>
          <option value="google" className="text-black dark:text-white">
            Google Search
          </option>
          <option value="social" className="text-black dark:text-white">
            Social Media
          </option>
          <option value="referral" className="text-black dark:text-white">
            Referral
          </option>
          <option value="other" className="text-black dark:text-white">
            Other
          </option>
        </select>
        <label
          htmlFor="referral"
          className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600"
        >
          How did you hear about us?
        </label>
      </motion.div>

      <motion.button
        type="submit"
        disabled={loading}
        variants={fieldVariants}
        custom={5}
        whileHover={{ scale: 1.04 }}
        className="flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 font-semibold text-white shadow-lg ring-2 ring-blue-500/50 transition hover:shadow-xl disabled:opacity-60"
      >
        {loading ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : success ? (
          <Check className="h-5 w-5" />
        ) : (
          'Send Message'
        )}
      </motion.button>

      {!success && (
        <motion.p
          variants={fieldVariants}
          custom={6}
          className="text-xs text-neutral-500"
        >
          No spam. No obligation. Just clarity.
        </motion.p>
      )}
      {!success && (
        <motion.p
          variants={fieldVariants}
          custom={7}
          className="text-xs text-neutral-500"
        >
          Trusted by 25+ SaaS, DTC, and consulting brands
        </motion.p>
      )}

      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
            We\u2019ll reach out within 1 business day.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:scale-105"
          >
            Book a Call
          </a>
        </motion.div>
      )}
    </motion.form>
  );
}
