'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, DollarSign, MessageSquareText, Check } from 'lucide-react'

export default function MiniForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', budget: '', summary: '' })

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(res => setTimeout(res, 1200))
    setLoading(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  const baseInput = 'peer w-full rounded-md bg-surface/80 px-10 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 placeholder-transparent'
  const iconBase = 'absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none'
  const labelBase = 'pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-sm text-muted transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs'

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4 rounded-2xl bg-surface/20 p-6 shadow-xl ring-1 ring-muted/20 backdrop-blur"
    >
      <div className="relative">
        <User className={iconBase} />
        <input id="name" type="text" value={form.name} onChange={handleChange('name')} placeholder=" " required className={baseInput} />
        <label htmlFor="name" className={labelBase}>Full Name</label>
      </div>
      <div className="relative">
        <Mail className={iconBase} />
        <input id="email" type="email" value={form.email} onChange={handleChange('email')} placeholder=" " required className={baseInput} />
        <label htmlFor="email" className={labelBase}>Work Email</label>
      </div>
      <div className="relative">
        <DollarSign className={iconBase} />
        <select id="budget" value={form.budget} onChange={handleChange('budget')} required className={`${baseInput} appearance-none pr-8`}> 
          <option value="" disabled hidden />
          <option value="<1k">{'<1k'}</option>
          <option value="1k–5k">1k–5k</option>
          <option value="5k–15k">5k–15k</option>
          <option value="15k+">15k+</option>
        </select>
        <label htmlFor="budget" className={labelBase}>Budget</label>
      </div>
      <div className="relative">
        <MessageSquareText className={iconBase} />
        <textarea id="summary" rows={3} value={form.summary} onChange={handleChange('summary')} placeholder=" " required className={`${baseInput} resize-none`} />
        <label htmlFor="summary" className={labelBase}>Project Summary</label>
      </div>
      <motion.button
        type="submit"
        data-event="webdev-cta-submit"
        whileHover={{ scale: !loading && !success ? 1.05 : 1 }}
        disabled={loading || success}
        className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-foreground shadow-md transition hover:bg-primary"
      >
        {loading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-muted border-t-transparent" /> : success ? <Check className="h-5 w-5" /> : 'Start My Mockup'}
      </motion.button>
      {success && <p className="pt-2 text-center text-sm text-muted">We’ll be in touch shortly.</p>}
    </motion.form>
  )
}
