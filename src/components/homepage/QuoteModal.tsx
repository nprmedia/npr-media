'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function QuoteModal({
  triggerLabel = 'Request a Quote',
}: {
  triggerLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog.Root onOpenChange={() => setSubmitted(false)}>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center justify-center rounded-full bg-olive px-6 py-2 text-sm font-semibold text-charcoal shadow hover:bg-olive">
          {triggerLabel}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-antique/80" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-olive p-6 text-charcoal shadow-lg">
          <Dialog.Title className="text-lg font-semibold">Tell us what you need</Dialog.Title>
          <Dialog.Description className="text-sm text-charcoal">
            Your submission is reviewed by our founder — not a sales bot.
          </Dialog.Description>
          <Dialog.Close className="absolute right-3 top-3 rounded p-1 text-charcoal hover:bg-olive">
            <X className="h-4 w-4" />
          </Dialog.Close>
          {submitted ? (
            <div className="mt-4 flex flex-col items-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-blood" />
              <p className="text-center text-sm">We&apos;ll respond within 24h with next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <label className="block text-sm">
                Project Type
                <select className="mt-1 w-full rounded border px-2 py-1" required>
                  <option value="website">Website</option>
                  <option value="automation">Automation</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="block text-sm">
                Budget Range
                <select className="mt-1 w-full rounded border px-2 py-1">
                  <option value="1-4k">$1K – $4K</option>
                  <option value="4-7k">$4K – $7K</option>
                  <option value="7-10k">$7K – $10K</option>
                  <option value="10k+">$10K+</option>
                </select>
              </label>
              <label className="block text-sm">
                Business Type / Industry
                <input className="mt-1 w-full rounded border px-2 py-1" required />
              </label>
              <label className="block text-sm">
                Desired Launch Timeline
                <select className="mt-1 w-full rounded border px-2 py-1">
                  <option value="asap">ASAP</option>
                  <option value="1month">1 Month</option>
                  <option value="3months">3 Months</option>
                </select>
              </label>
              <label className="block text-sm">
                Details
                <textarea className="mt-1 w-full rounded border px-2 py-1" rows={3} required></textarea>
              </label>
              <button type="submit" className="mt-2 w-full rounded bg-blood px-4 py-2 text-charcoal hover:bg-blood">
                Send Request
              </button>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
