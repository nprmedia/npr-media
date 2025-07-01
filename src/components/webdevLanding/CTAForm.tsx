'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, DollarSign, MessageSquareText, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  budget: string;
  summary: string;
}

export default function CTAForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', budget: '', summary: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setSuccess(true);
    setLoading(false);
    setTimeout(() => setSuccess(false), 2000);
  };

  const inputBase = 'w-full rounded-md bg-white/80 px-10 py-3 text-sm text-black shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]';
  const iconBase = 'absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400';

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4 rounded-2xl bg-white/60 p-6 shadow-xl backdrop-blur-md"
      data-event="webdev-cta-submit"
    >
      <div className="relative">
        <User className={iconBase} />
        <input id="name" type="text" required value={form.name} onChange={handleChange('name')} className={inputBase} placeholder="Full Name" />
      </div>
      <div className="relative">
        <Mail className={iconBase} />
        <input id="email" type="email" required value={form.email} onChange={handleChange('email')} className={inputBase} placeholder="Work Email" />
      </div>
      <div className="relative">
        <DollarSign className={iconBase} />
        <select id="budget" required value={form.budget} onChange={handleChange('budget')} className={`${inputBase} appearance-none pr-8`}>
          <option value="" disabled hidden>
            Budget
          </option>
          <option value="<1k">{'<1k'}</option>
          <option value="1k–5k">1k–5k</option>
          <option value="5k–15k">5k–15k</option>
          <option value="15k+">15k+</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>
      <div className="relative">
        <MessageSquareText className={iconBase} />
        <textarea id="summary" required rows={3} value={form.summary} onChange={handleChange('summary')} className={`${inputBase} resize-none`} placeholder="Project Summary" />
      </div>
      <motion.button type="submit" whileHover={{ scale: loading || success ? 1 : 1.05 }} disabled={loading} className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-semibold text-white shadow-md ring-2 ring-[var(--color-accent)]/40 transition-transform">
        {loading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" /> : success ? <Check className="h-5 w-5" /> : 'Submit'}
      </motion.button>
      {success && <p className="pt-2 text-center text-sm text-green-700">Thanks! We&apos;ll be in touch soon.</p>}
    </motion.form>
  );
}
