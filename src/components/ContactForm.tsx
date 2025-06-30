'use client';

import { useState } from 'react';
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

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
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
    'peer w-full rounded-md bg-white/80 dark:bg-neutral-800/80 px-10 py-3 text-sm text-black dark:text-white placeholder-transparent shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40';

  const labelBase =
    'pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs';

  const iconBase = 'absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400';

  return (
    <motion.form
      id="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-xl ring-1 shadow-black/10 ring-transparent backdrop-blur-md hover:ring-blue-500/20 dark:bg-neutral-900/80"
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <User className={iconBase} />
        <label htmlFor="name" className={labelBase}>
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange('name')}
          placeholder="Full Name"
          className={inputBase}
          aria-invalid={!!errors.name}
        />
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Mail className={iconBase} />
        <label htmlFor="email" className={labelBase}>
          Work Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          placeholder="Work Email"
          className={inputBase}
          aria-invalid={!!errors.email}
        />
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <DollarSign className={iconBase} />
        <label htmlFor="budget" className={`${labelBase} ${form.budget ? '-top-2 text-xs' : ''}`}>
          Budget
        </label>
        <select
          id="budget"
          value={form.budget}
          onChange={handleChange('budget')}
          className={`${inputBase} appearance-none pr-8`}
        >
          <option value="" disabled className="text-neutral-400">
            Select...
          </option>
          <option value="<1k">{'<1k'}</option>
          <option value="1k–5k">1k–5k</option>
          <option value="5k–15k">5k–15k</option>
          <option value="15k+">15k+</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MessageSquareText className={iconBase} />
        <label htmlFor="summary" className={labelBase}>
          Project Summary
        </label>
        <textarea
          id="summary"
          rows={4}
          value={form.summary}
          onChange={handleChange('summary')}
          placeholder="Project Summary"
          className={`${inputBase} resize-none`}
          aria-invalid={!!errors.summary}
        />
      </motion.div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Search className={iconBase} />
        <label
          htmlFor="referral"
          className={`${labelBase} ${form.referral ? '-top-2 text-xs' : ''}`}
        >
          How did you hear about us?
        </label>
        <select
          id="referral"
          value={form.referral}
          onChange={handleChange('referral')}
          className={`${inputBase} appearance-none pr-8`}
        >
          <option value="" disabled className="text-neutral-400">
            Select...
          </option>
          <option value="Google">Google</option>
          <option value="Referral">Referral</option>
          <option value="Social Media">Social Media</option>
          <option value="Other">Other</option>
        </select>
      </motion.div>
      <motion.button
        type="submit"
        whileHover={{ scale: !loading && !success ? 1.04 : 1 }}
        disabled={loading}
        className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-semibold text-white shadow-md ring-2 ring-blue-500/50 transition-transform hover:shadow-lg disabled:opacity-60"
      >
        {loading ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : success ? (
          <Check className="h-5 w-5" />
        ) : (
          'Send Message'
        )}
      </motion.button>
      <div className="space-y-1 text-center text-xs text-neutral-500">
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
              className="text-blue-600 underline"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.form>
  );
}
