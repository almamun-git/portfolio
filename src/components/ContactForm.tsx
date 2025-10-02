import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    if (form.get('bot-field')) return; // honeypot
    const name = String(form.get('name')||'').trim();
    const email = String(form.get('email')||'').trim();
    const message = String(form.get('message')||'').trim();
    if (!name || !email || !message) return;
    setStatus('sending');

    const payload = { name, email, message, source: 'portfolio' };

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        formEl.reset();
        setStatus('sent');
        return;
      } catch (err: unknown) {
        // Normalize unknown error for logging
        const message = err instanceof Error ? err.message : String(err);
        console.warn('Contact endpoint failed, falling back to mailto:', message);
        setError('Network error occurred. Opening mail client as fallback...');
        setStatus('error');
      }
    }

    // Fallback to mailto
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage:\n${message}`);
    window.location.href = `mailto:almamun.codes@gmail.com?subject=${subject}&body=${body}`;
    formEl.reset();
    setTimeout(()=>setStatus('sent'), 400);
  }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4" aria-describedby="contact-desc">
      <p id="contact-desc" className="sr-only">Use this form to send a message{endpoint ? ' (direct submit)' : ' (will open your mail client)' }.</p>
      <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide">Name</label>
          <input required id="name" name="name" className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide">Email</label>
          <input required type="email" id="email" name="email" className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide">Message</label>
        <textarea required id="message" name="message" rows={4} className="resize-y rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none" />
      </div>
      <div className="flex items-center gap-4">
        <button type="submit" disabled={status==='sending'} className="inline-flex items-center rounded-md bg-primary-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-primary-500 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50">
          {status==='sending' ? (endpoint ? 'Sending…' : 'Opening Mail…') : status==='sent' ? 'Sent ✔' : 'Send Message'}
        </button>
        <span aria-live="polite" role="status" className="text-xs min-h-[1.25em]">
          {status==='sent' && <span className="text-green-600 dark:text-green-400">Message sent{endpoint ? ' successfully!' : ' (via mail client).'}</span>}
          {status==='sending' && !endpoint && <span className="text-neutral-500">Launching email app…</span>}
          {status==='error' && <span className="text-amber-600 dark:text-amber-400">{error}</span>}
          {error && status!=='sent' && status!=='error' && <span className="text-amber-600 dark:text-amber-400">{error}</span>}
        </span>
      </div>
      {!endpoint && <p className="text-[11px] text-neutral-500 dark:text-neutral-500">Tip: Provide an API endpoint via <code className="font-mono">VITE_CONTACT_ENDPOINT</code> to enable direct submissions.</p>}
    </form>
  );
}
