'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import useNewsLetter from '@/hooks/useNewsLetter';
import { cn } from '@/lib/utils';

export default function HomeFooter({ isHideCollaboration = false, className }: {
  isHideCollaboration?: boolean;
  className?: string;
}) {
  const [subscribe, response] = useNewsLetter();
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const email = String(new FormData(event.currentTarget).get('email') || '');
    setPending(true);
    setSubmitted(false);
    await subscribe({ email });
    setPending(false);
    setSubmitted(true);
  }

  return (
    <footer className={cn('mx-auto mt-12 flex w-[94%] max-w-[1100px] flex-wrap items-start justify-between gap-6 border-t py-8 text-sm', className)}>
      <nav aria-label="Footer" className="flex flex-wrap gap-4 text-muted-foreground">
        <Link href="/get-started">Getting started</Link><Link href="/mcp">MCP</Link>
        <Link href="/changelog">Changelog</Link>
        {!isHideCollaboration && <Link href="/work-with-us">Work with us</Link>}
      </nav>
      <div>
        <form onSubmit={submit} className="flex flex-wrap items-center gap-2">
          <label htmlFor="newsletter-email">Newsletter</label>
          <input id="newsletter-email" name="email" type="email" autoComplete="email" required placeholder="Your email"
            className="w-36 rounded-md border bg-background px-2 py-1" />
          <button type="submit" disabled={pending} className="cursor-pointer underline underline-offset-4">{pending ? 'Joining…' : 'Join'}</button>
        </form>
        <p role="status">{submitted && (response?.status === 204 ? 'You’re subscribed.' : 'Couldn’t subscribe. Please try again.')}</p>
      </div>
    </footer>
  );
}
