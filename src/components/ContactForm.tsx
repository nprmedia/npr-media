'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, DollarSign, MessageSquareText, Search, Check } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  budget: string;
  summary: string;
  referral: string;
}

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
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

  const basePlaceholders = {
    name: 'Full Name',
    email: 'Work Email',
    summary: 'Project Summary',
  };
  const [placeholders, setPlaceholders] = useState({ ...basePlaceholders });
  const intervals = useRef<{ [K in keyof typeof basePlaceholders]?: NodeJS.Timeout }>({});

  const startErase = (field: keyof typeof basePlaceholders) => {
    if (intervals.current[field]) return;
    intervals.current[field] = setInterval(() => {
      setPlaceholders((prev) => {
        const text = prev[field];
        if (!text) {
          clearInterval(intervals.current[field]);
          intervals.current[field] = undefined;
          return prev;
        }
        const next = text.slice(1);
        return { ...prev, [field]: next };
      });
    }, 30);
  };

  const resetPlaceholder = (field: keyof typeof basePlaceholders) => {
    if (intervals.current[field]) {
      clearInterval(intervals.current[field]);
      intervals.current[field] = undefined;
    }
    setPlaceholders((p) => ({ ...p, [field]: basePlaceholders[field] }));
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      if (field in basePlaceholders) {
        if (value) startErase(field as keyof typeof basePlaceholders);
        else resetPlaceholder(field as keyof typeof basePlaceholders);
      }
    };

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim()) {
      errs.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email';
    }
    if (!form.summary.trim()) errs.summary = 'Please add details';
    return errs;
  };

  const resetForm = () => {
    setForm({ name: '', email: '', budget: '', summary: '', referral: '' });
    setErrors({});
    (Object.keys(basePlaceholders) as (keyof typeof basePlaceholders)[]).forEach((f) =>
      resetPlaceholder(f),
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setSuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setSuccess(false);
        resetForm();
      }, 2500);
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    'w-full rounded-md bg-antique/80 dark:bg-charcoal/80 px-10 py-3 text-sm text-charcoal dark:text-silver shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blood/40';

  const iconBase = 'absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sepia';

  return (
    <motion.form
      id="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 rounded-2xl bg-antique/80 p-6 shadow-xl ring-1 shadow-charcoal/10 ring-transparent backdrop-blur-md hover:ring-blood/20 dark:bg-charcoal/80"
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <User className={iconBase} />
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange('name')}
          className={inputBase}
          aria-invalid={!!errors.name}
        />
        {placeholders.name && (
          <span className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 text-sm text-sepia">
            {placeholders.name}
          </span>
        )}
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Mail className={iconBase} />
        <label htmlFor="email" className="sr-only">
          Work Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          className={inputBase}
          aria-invalid={!!errors.email}
        />
        {placeholders.email && (
          <span className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 text-sm text-sepia">
            {placeholders.email}
          </span>
        )}
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <DollarSign className={iconBase} />
        <label htmlFor="budget" className="sr-only">
          Budget
        </label>
        <select
          id="budget"
          value={form.budget}
          onChange={handleChange('budget')}
          className={`${inputBase} appearance-none pr-8`}
        >
          <option value="" disabled hidden />
          <option value="<1k">{'<1k'}</option>
          <option value="1k–5k">1k–5k</option>
          <option value="5k–15k">5k–15k</option>
          <option value="15k+">15k+</option>
          <option value="Not Sure">Not Sure</option>
        </select>
        {!form.budget && (
          <span className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 text-sm text-sepia">
            Budget
          </span>
        )}
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MessageSquareText className={iconBase} />
        <label htmlFor="summary" className="sr-only">
          Project Summary
        </label>
        <textarea
          id="summary"
          rows={4}
          value={form.summary}
          onChange={handleChange('summary')}
          className={`${inputBase} resize-none`}
          aria-invalid={!!errors.summary}
        />
        {placeholders.summary && (
          <span className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 text-sm text-sepia">
            {placeholders.summary}
          </span>
        )}
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Search className={iconBase} />
        <label htmlFor="referral" className="sr-only">
          How did you hear about us?
        </label>
        <select
          id="referral"
          value={form.referral}
          onChange={handleChange('referral')}
          className={`${inputBase} appearance-none pr-8`}
        >
          <option value="" disabled hidden />
          <option value="Google">Google</option>
          <option value="Referral">Referral</option>
          <option value="Social Media">Social Media</option>
          <option value="Other">Other</option>
        </select>
        {!form.referral && (
          <span className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 text-sm text-sepia">
            How did you hear about us?
          </span>
        )}
      </motion.div>
      <motion.button
        type="submit"
        whileHover={{ scale: !loading && !success ? 1.04 : 1 }}
        disabled={loading}
        className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal py-3 font-semibold text-silver shadow-md ring-2 ring-blood/50 transition-transform hover:shadow-lg disabled:opacity-60"
      >
        {loading ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-silver border-t-transparent" />
        ) : success ? (
          <Check className="h-5 w-5" />
        ) : (
          'Send Message'
        )}
      </motion.button>
      <div className="space-y-1 text-center text-xs text-sepia">
        <p>No spam. No obligation. Just clarity.</p>
        <p>Trusted by 25+ SaaS, DTC, and consulting brands</p>
      </div>
      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-green-600"
        >
          We&apos;ll reach out within 1 business day.
          <div className="pt-2">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blood underline"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.form>
  );
}