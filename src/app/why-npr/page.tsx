'use client';

import StickyHeader from '@/components/global/Header';
import FooterSection from '@/components/global/Footer';
import ScrollCue from '@/components/global/ScrollCue';
import WaveDivider from '@/components/whyNpr/WaveDivider';
import AiCarousel from '@/components/whyNpr/AiCarousel';
import NprCarousel from '@/components/whyNpr/NprCarousel';
import FirmCarousel from '@/components/whyNpr/FirmCarousel';
import FinalCTA from '@/components/sections/FinalCTA';
import { Routes } from '@/lib/routes';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Ban, CheckCircle2 } from 'lucide-react';

function TypingText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [isInView, text]);

  return <div ref={ref}>{display}</div>;
}

export default function WhyNprPage() {
  return (
    <section>
      <StickyHeader />
      <main
        className="relative w-full overflow-x-hidden bg-offwhite text-charcoal"
        style={{ paddingTop: 'calc(var(--header-height) + 1rem)' }}
      >
        {/* SECTION 1: NPR Media vs AI */}
        <section
          id="vs-ai"
          className="relative overflow-hidden bg-offwhite pt-20 text-charcoal"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-blood via-blood to-blood opacity-30 blur-3xl" />
          </div>
          <div className="container mx-auto space-y-12">
            <div className="space-y-2 text-center">
              <h1 className="text-[clamp(2rem,4vw,3rem)] text-blood font-bold tracking-tight">
                Why Human Strategy Beats AI Guesswork
              </h1>
              <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-charcoal">
                AI can parse data but it can&rsquo;t read minds or context.
              </p>
              <p className="mx-auto max-w-xl text-sm text-charcoal">
                Our strategists apply lived experience and own the results from concept to launch.
              </p>
            </div>
            <div className="space-y-12 bg">
              <div className="md:grid md:grid-cols-2 md:items-center md:gap-8">
                <div className="space-y-2 pb-8 text-center md:pb-0 md:text-left">
                  <h2 className="ml-20 mb-3 text-3xl text-olive underline decoration-2 underline-offset-3 font-extrabold sm:text-4xl">What AI Can’t Do</h2>
                  <p className="ml-20 text-sm text-charcoal">
                    Where automation simply can&rsquo;t compete
                  </p>
                  <div className="ml-20 pt-2">
                    <a
                      href="/webdev-landing"
                      data-event="cta-social-proof"
                      className="inline-block rounded-full bg-gradient-to-r from-blood to-blood px-4 py-2 text-xs font-semibold text-silver shadow transition hover:scale-105"
                    >
                      See the difference
                    </a>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <AiCarousel />
                </motion.div>
              </div>
              <div className="p-8 bg-sepia space-y-1 text-center">
                <h2 className="text-xl font-extrabold text-silver">Here&rsquo;s Where We Step In</h2>
                <p className="text-sm text-charcoal">
                  Real humans refine the data and own the outcome.
                </p>
                <ScrollCue
                  href="#npr-delivers"
                  className="mx-auto mt-2 text-blood"
                />
              </div>
              <div id="npr-delivers" className="md:grid md:grid-cols-2 md:items-center md:gap-8">
                <div className="ml-20 space-y-2 pb-8 text-center md:pb-0 md:text-left">
                  <h2 className="mb-3 text-3xl text-olive underline decoration-2 underline-offset-3 font-extrabold sm:text-4xl">How NPR Media Delivers</h2>
                  <p className="text-sm text-charcoal">
                    Hands-on strategy that actually moves the needle
                  </p>
                  <div className="pt-2">
                    <a
                      href="/webdev-landing"
                      data-event="cta-social-proof"
                      className="inline-block rounded-full bg-gradient-to-r from-blood to-blood px-4 py-2 text-xs font-semibold text-silver shadow transition hover:scale-105"
                    >
                      Explore our approach
                    </a>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <NprCarousel />
                </motion.div>
              </div>
            </div>
            <div className="p-10 bg-antique">        
            <div className="text-center">
            <h1 className="text-blood text-3xl font-extrabold">Founders Don’t Scale With Templates</h1>
            <p className="text-charcoal">You need strategy, not scripts—and that’s what we deliver.</p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative mt-12 flex items-start justify-center rounded-xl bg-offwhite p-6 text-charcoal shadow-lg md:p-8"
            >
              <div className="w-1/2 pr-4 text-sm">
                <p className="mb-2 font-semibold">AI output</p>
                <div className="rounded border-silver/30 bg-silver/10 p-3 text-charcoal shadow-inner">
                  <TypingText text="Predictable, generic, context-blind, lacks emotional depth." />  
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 h-10 w-px -translate-y-1/2 transform  bg-antique/30" />
              <div className="w-1/2 pl-4 text-sm">
                <p className="mb-2 font-bold text-blood">NPR Media approach</p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded border border-antique/30 bg-antique/10 p-3 text-crimson shadow-inner"
                >
                  Strategic, emotional, brand-aligned, optimized to convert.
                </motion.div>
              </div>
            </motion.div>
            <div className="pt-8 text-center">
              <a
                href="/webdev-landing"
                data-event="cta-social-proof"
                className="inline-block rounded-full bg-gradient-to-r from-blood to-blood px-6 py-3 text-sm font-semibold text-silver shadow-md ring-1 ring-silver/10 transition hover:scale-105"
              >
                Don’t get AI’d. Get outcomes.
              </a>
            </div>
            <ScrollCue href="#vs-firms" className="mx-auto mt-4 text-blood" />
          </div>
          </div>  
        </section>

        {/* SECTION 2: NPR Media vs Other Firms */}
        <section id="vs-firms" className="relative overflow-hidden bg-offwhite py-20 text-charcoal">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-1/2 bottom-0 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-br from-blood via-blood to-blood opacity-30 blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl space-y-12 px-4">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-[clamp(2rem,4vw,3rem)] text-blood font-bold tracking-tight">
                  Agency Bloat vs NPR Media
                </h1>
                <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-charcoal">
                  AI tools won&rsquo;t own your numbers&mdash;and neither will bloated agencies.
                  While others bill hours, we deliver outcomes.
                </p>
                <p className="mx-auto max-w-xl text-sm text-charcoal md:mx-0">
                  Large firms pad projects with juniors and endless steps. Our team
                  ships fast and stands behind every metric.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FirmCarousel />
              </motion.div>
            </div>
            <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-silver to-transparent" />
            <p className="text-center text-sm font-semibold text-charcoal">
              Here&rsquo;s how we do it differently.
            </p>
            <div className="grid gap-8 text-sm md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2 rounded-xl bg-antique p-6 text-charcoal shadow-md"
              >
                <p className="text-lg font-semibold">What other firms drag you through</p>
                <p className="text-sm text-charcoal">Extras you don&rsquo;t actually need</p>
                <div className="pt-2">
                  <a
                    href="/webdev-landing"
                    data-event="cta-social-proof"
                    className="inline-block rounded-full bg-gradient-to-r from-blood to-blood px-4 py-2 text-xs font-semibold text-silver shadow transition hover:scale-105"
                  >
                    Break free
                  </a>
                </div>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-crimson" />
                    <span>4-week discovery calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-crimson" />
                    <span>$2k wireframes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-crimson" />
                    <span>Slow handoffs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Ban className="h-4 w-4 text-crimson" />
                    <span>No CRO testing</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2 rounded-xl bg-antique border p-6 text-charcoal shadow-md"
              >
                <p className="text-lg text-blood font-bold underline decoration-1 underline-offset-5">How we keep projects moving</p>
                <p className="text-sm text-charcoal">The NPR no-bloat process</p>
                <div className="pt-2">
                  <a
                    href={Routes.contact}
                    data-event="cta-service"
                    className="inline-block rounded-full bg-gradient-to-r from-blood to-blood px-4 py-2 text-xs font-semibold text-silver shadow transition hover:scale-105"
                  >
                    Start winning
                  </a>
                </div>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blood" />
                    <span>Production-grade homepage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blood" />
                    <span>9-section CMS site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blood" />
                    <span>SOP-aligned builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blood" />
                    <span>Real-time revisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blood" />
                    <span>Weekly Condition   Audits</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="pt-8 text-center">
              <a
                href="/webdev-landing"
                data-event="cta-social-proof"
                className="inline-block rounded-full bg-gradient-to-r from-blood to-blood px-6 py-3 text-sm font-semibold text-silver shadow-md ring-1 ring-silver/20 transition hover:scale-105"
              >
                This time, don’t settle.
              </a>
            </div>
            <ScrollCue href="#footer" className="mx-auto mt-4 text-blood" />
          </div>
        </section>
      </main>
      <FinalCTA />
      <FooterSection />
    </section>
  );
}
