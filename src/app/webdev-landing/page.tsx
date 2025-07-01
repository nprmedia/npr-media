'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Timer,
  Ban,
  AlertTriangle,
  DollarSign,
  Code,
  Smartphone,
  Layout,
  Database,
  Sparkles,
  Mail,
  User,
  MessageSquareText,
} from 'lucide-react'

interface HeroCopy {
  headline: string
  subheadline: string
  cta: string
}

interface LandingCopy {
  hero: HeroCopy
}

const defaultCopy: LandingCopy = {
  hero: {
    headline: 'Web Development That Converts Cold Clicks Into Clients',
    subheadline:
      'We build elite, conversion-optimized sites for SaaS startups, DTC brands, and professional services firms.',
    cta: 'Get a Free Strategy Mockup',
  },
}

export default function WebdevLandingPage() {
  const [copy, setCopy] = useState(defaultCopy)

  useEffect(() => {
    async function loadCopy() {
      if (process.env.NEXT_PUBLIC_CMS === 'true') {
        try {
          // @ts-ignore -- optional CMS file may not exist
          const mod = await import('@/content/landing/webdev')
          if (mod?.webdevLanding) {
            setCopy({ ...defaultCopy, ...mod.webdevLanding })
          }
        } catch {
          /* ignore missing file */
        }
      }
    }
    loadCopy()
  }, [])

  return (
    <main className="scroll-snap-y mandatory">
      <Hero copy={copy.hero} />
      <PainPoints />
      <OfferStack />
      <Proof />
      <PricingPreview />
      <FinalCTA />
    </main>
  )
}

function Hero({ copy }: { copy: HeroCopy }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      style={{ scrollSnapAlign: 'start' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl space-y-6 px-6 text-center md:px-12 lg:px-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2rem,6vw,4rem)] font-bold"
        >
          {copy.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-[clamp(1rem,2vw,1.25rem)] text-gray-200"
        >
          {copy.subheadline}
        </motion.p>
        <motion.a
          href="#cta"
          data-event="webdev-scroll-trigger"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-black shadow-xl ring-1 ring-black/20 transition hover:scale-105"
        >
          {copy.cta}
        </motion.a>
      </motion.div>
    </section>
  )
}

function PainPoints() {
  const points = [
    {
      icon: Ban,
      title: 'They Miss the Strategy',
      text: 'Most developers focus on code, not conversions.',
    },
    {
      icon: Timer,
      title: 'Slow and Overpriced',
      text: 'Projects drag on while budgets spiral out of control.',
    },
    {
      icon: AlertTriangle,
      title: 'Not Built to Convert',
      text: 'Pretty pages alone rarely drive real revenue.',
    },
  ]
  return (
    <section
      className="bg-white py-24"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
        >
          The Problem With Most Web Dev Agencies…
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-3 rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-black/10 backdrop-blur-md hover:shadow-2xl"
            >
              <p className="text-[var(--color-accent)]">
                <p.icon className="h-8 w-8" />
              </p>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-neutral-600">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferStack() {
  const offers = [
    { icon: Code, title: 'Custom-coded frontend', text: 'Next.js + Tailwind for ultimate control.' },
    { icon: Smartphone, title: 'Mobile-first design', text: 'Looks flawless on every device.' },
    { icon: Layout, title: 'Strategy-backed layouts', text: 'Built to guide visitors toward action.' },
    { icon: Database, title: 'CMS integration', text: 'Easily manage copy and blogs.' },
    { icon: Sparkles, title: 'Fast turnaround', text: 'Launch in days, not months.' },
  ]
  return (
    <section className="bg-neutral-100 py-24" style={{ scrollSnapAlign: 'start' }}>
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
        >
          What You’ll Get With NPR Media
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-3 rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-black/10 backdrop-blur-md hover:shadow-2xl"
            >
              <o.icon className="h-8 w-8 text-[var(--color-accent)]" />
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="text-sm text-neutral-600">{o.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Proof() {
  const testimonials = [
    {
      quote:
        'NPR Media delivered a polished site in under a week and conversions jumped immediately.',
      name: 'Alex R., SaaS Founder',
    },
    {
      quote:
        "We've worked with big agencies and none matched NPR's speed or quality.",
      name: 'Jordan M., Ecommerce CEO',
    },
    {
      quote:
        'The new site paid for itself within the first month. Highly recommend.',
      name: 'Samantha K., Consultant',
    },
  ]
  return (
    <section className="bg-white py-24" style={{ scrollSnapAlign: 'start' }}>
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
        >
          Trusted by Founders Across Industries
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-black/10 backdrop-blur-md hover:shadow-2xl"
            >
              <p className="text-sm italic">“{t.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-neutral-700">{t.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-6 text-sm text-neutral-600">
          <span>25+ sites launched</span>
          <span>&lt;10 day average turnaround</span>
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  return (
    <section className="bg-neutral-100 py-24" style={{ scrollSnapAlign: 'start' }}>
      <div className="mx-auto max-w-7xl space-y-6 px-6 text-center md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
        >
          Simple Pricing, No Surprises
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-xl text-[clamp(1rem,2vw,1.25rem)] text-neutral-700"
        >
          Projects start at $1,000. Scope defines final cost — no retainers, no upsells.
        </motion.p>
        <motion.a
          href="#cta"
          data-event="webdev-scroll-trigger"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block rounded-full bg-[var(--color-accent)] px-6 py-3 font-semibold text-black shadow-xl ring-1 ring-black/20 transition hover:scale-105"
        >
          Let’s Build Your Quote
        </motion.a>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-neutral-600"
        >
          We respond to every serious request within 1 business day.
        </motion.p>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative bg-white py-24"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:px-12 lg:px-20">
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
          >
            Get Your Free Strategy Mockup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1rem,2vw,1.125rem)] text-neutral-700"
          >
            Tell us about your project and we’ll map out the fastest path to launch.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2 text-sm"
          >
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-4 w-4 text-[var(--color-accent)]" />
              Clear next steps tailored to your business
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-4 w-4 text-[var(--color-accent)]" />
              No pressure or hard sell
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-4 w-4 text-[var(--color-accent)]" />
              Response within 1 business day
            </li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 text-sm text-neutral-600"
          >
            Prefer to schedule a call?{' '}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Book via Calendly
            </a>
          </motion.p>
        </div>
        <CTAForm />
      </div>
    </section>
  )
}

function CTAForm() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', summary: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1200))
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      setForm({ name: '', email: '', budget: '', summary: '' })
    }, 2000)
    setLoading(false)
  }

  const inputBase =
    'w-full rounded-md bg-white/80 px-10 py-3 text-sm text-black shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40'
  const iconBase = 'absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400'

  return (
    <motion.form
      onSubmit={handleSubmit}
      data-event="webdev-cta-submit"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-black/10 backdrop-blur-md"
    >
      <div className="relative">
        <User className={iconBase} />
        <input
          type="text"
          required
          placeholder="Name"
          value={form.name}
          onChange={handleChange('name')}
          className={inputBase}
        />
      </div>
      <div className="relative">
        <Mail className={iconBase} />
        <input
          type="email"
          required
          placeholder="Work Email"
          value={form.email}
          onChange={handleChange('email')}
          className={inputBase}
        />
      </div>
      <div className="relative">
        <DollarSign className={iconBase} />
        <select
          required
          value={form.budget}
          onChange={handleChange('budget')}
          className={`${inputBase} appearance-none pr-8`}
        >
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
        <textarea
          rows={4}
          required
          placeholder="Project Summary"
          value={form.summary}
          onChange={handleChange('summary')}
          className={`${inputBase} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-semibold text-white shadow-md ring-2 ring-blue-500/50 transition-transform hover:scale-105 disabled:opacity-60"
      >
        {loading ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : success ? (
          'Sent!'
        ) : (
          'Request Mockup'
        )}
      </button>
      {success && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-green-600"
        >
          We’ll reach out soon.
        </motion.p>
      )}
    </motion.form>
  )
}
