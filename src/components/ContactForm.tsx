import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, DollarSign, FileText, Megaphone, Loader2, Check } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  budget: string;
  summary: string;
  source: string;
}

export default function ContactForm() {
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

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setShowConfirm(true);
        setTimeout(() => {
          setForm({ name: '', email: '', budget: '', summary: '', source: '' });
          setStatus('idle');
          setShowConfirm(false);
        }, 2500);
      } else {
        setStatus('idle');
      }
    } catch {
      setStatus('idle');
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      id="contact-form"
      onSubmit={handleSubmit}
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4 rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-transparent backdrop-blur-md transition hover:ring-blue-500/20 dark:bg-neutral-900/80"
    >
      <motion.div variants={item} className="relative">
        <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-500" />
        <input
          id="name"
          type="text"
          placeholder=" "
          value={form.name}
          onChange={handleChange('name')}
          className="peer w-full rounded-lg bg-white/80 px-3 py-3 pl-9 text-black shadow-sm outline outline-0 transition focus:outline-blue-500/20 dark:bg-neutral-800/80 dark:text-white"
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        <label
          htmlFor="name"
          className="pointer-events-none absolute top-1/2 left-9 -translate-y-1/2 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
        >
          Full Name
        </label>
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </motion.div>
      <motion.div variants={item} className="relative">
        <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-500" />
        <input
          id="email"
          type="email"
          placeholder=" "
          value={form.email}
          onChange={handleChange('email')}
          className="peer w-full rounded-lg bg-white/80 px-3 py-3 pl-9 text-black shadow-sm outline outline-0 transition focus:outline-blue-500/20 dark:bg-neutral-800/80 dark:text-white"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        <label
          htmlFor="email"
          className="pointer-events-none absolute top-1/2 left-9 -translate-y-1/2 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
        >
          Work Email
        </label>
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </motion.div>
      <motion.div variants={item} className="relative">
        <DollarSign className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-500" />
        <select
          id="budget"
          value={form.budget}
          onChange={handleChange('budget')}
          className="peer w-full appearance-none rounded-lg bg-white/80 px-3 py-3 pl-9 text-black shadow-sm outline outline-0 transition focus:outline-blue-500/20 dark:bg-neutral-800/80 dark:text-white"
        >
          <option value="" disabled>
            Select budget
          </option>
          <option value="<1k">&lt;1k</option>
          <option value="1k-5k">1k–5k</option>
          <option value="5k-15k">5k–15k</option>
          <option value="15k+">15k+</option>
          <option value="not-sure">Not Sure</option>
        </select>
        <label
          htmlFor="budget"
          className="pointer-events-none absolute top-1/2 left-9 -translate-y-1/2 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
        >
          Budget
        </label>
      </motion.div>
      <motion.div variants={item} className="relative">
        <FileText className="absolute top-3 left-3 h-4 w-4 text-neutral-500" />
        <textarea
          id="summary"
          placeholder=" "
          rows={4}
          value={form.summary}
          onChange={handleChange('summary')}
          className="peer w-full resize-none rounded-lg bg-white/80 px-3 py-3 pl-9 text-black shadow-sm outline outline-0 transition focus:outline-blue-500/20 dark:bg-neutral-800/80 dark:text-white"
          aria-describedby={errors.summary ? 'summary-error' : undefined}
        />
        <label
          htmlFor="summary"
          className="pointer-events-none absolute top-3 left-9 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
        >
          Project Summary
        </label>
        {errors.summary && (
          <p id="summary-error" className="mt-1 text-sm text-red-600">
            {errors.summary}
          </p>
        )}
      </motion.div>
      <motion.div variants={item} className="relative">
        <Megaphone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-500" />
        <select
          id="source"
          value={form.source}
          onChange={handleChange('source')}
          className="peer w-full appearance-none rounded-lg bg-white/80 px-3 py-3 pl-9 text-black shadow-sm outline outline-0 transition focus:outline-blue-500/20 dark:bg-neutral-800/80 dark:text-white"
        >
          <option value="" disabled>
            How did you hear about us?
          </option>
          <option value="google">Google</option>
          <option value="referral">Referral</option>
          <option value="social">Social Media</option>
          <option value="other">Other</option>
        </select>
        <label
          htmlFor="source"
          className="pointer-events-none absolute top-1/2 left-9 -translate-y-1/2 text-sm text-neutral-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
        >
          How did you hear about us?
        </label>
      </motion.div>
      <motion.div variants={item}>
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={status === 'idle' ? { scale: 1.04 } : undefined}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 font-semibold text-white shadow-lg ring-2 ring-blue-500/50 transition hover:shadow-blue-500/30 disabled:opacity-60"
        >
          {status === 'loading' ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : status === 'success' ? (
            <Check className="h-5 w-5" />
          ) : (
            'Send Message'
          )}
        </motion.button>
        <p className="mt-2 text-center text-xs text-neutral-500 italic">
          No spam. No obligation. Just clarity.
        </p>
        <p className="text-center text-xs text-neutral-500">
          Trusted by 25+ SaaS, DTC, and consulting brands
        </p>
        {showConfirm && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-center text-sm text-green-600"
          >
            We’ll reach out within 1 business day.
          </motion.p>
        )}
        {status === 'success' && (
          <motion.a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 block text-center text-sm text-blue-600 underline"
          >
            Book a Call
          </motion.a>
        )}
      </motion.div>
      <motion.div variants={item} className="flex justify-center gap-4 pt-2">
        <img src="/logos/authority-platform.jpg" alt="Brand" className="h-6 w-auto rounded" />
        <img src="/logos/Authority Platform.webp" alt="Brand" className="h-6 w-auto rounded" />
        <img src="/logos/Article 1 - Template.png" alt="Brand" className="h-6 w-auto rounded" />
      </motion.div>
    </motion.form>
  );
}
