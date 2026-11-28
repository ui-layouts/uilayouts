'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogCategories, type BlogPost } from '@/lib/blog';

export default function BlogList({ posts }: { posts: readonly BlogPost[] }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const filtered = posts.filter((post) => (category === 'All' || post.category === category) && (post.title + ' ' + post.description).toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <div className='mt-10'>
      <label htmlFor='blog-search' className='sr-only'>Search articles</label>
      <input id='blog-search' type='search' placeholder='Search articles…' value={query} onChange={(event) => setQuery(event.target.value)} className='w-full rounded-xl border border-border bg-background px-4 py-3 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground' />
      <div className='my-6 flex flex-wrap gap-2' aria-label='Filter articles'>
        {['All', ...blogCategories].map((item) => <button key={item} type='button' aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline-2 ${category === item ? 'bg-foreground text-background' : 'text-neutral-600 hover:bg-muted dark:text-neutral-400'}`}>{item}</button>)}
      </div>
      <p role='status' className='mb-2 text-xs text-neutral-500'>{filtered.length} articles</p>
      <div className='divide-y divide-border'>
        {filtered.map((post) => <article key={post.slug}><Link href={`/blog/${post.slug}`} className='group block py-6 focus-visible:outline-2'><div className='mb-2 text-xs text-neutral-600 dark:text-neutral-400'>{post.category} · <time dateTime={post.date}>{post.date}</time></div><div className='flex items-start justify-between gap-4'><h2 className='text-lg font-medium leading-snug sm:text-xl'>{post.title}</h2><ArrowUpRight aria-hidden='true' className='mt-1 size-4 shrink-0 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' /></div><p className='mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400'>{post.description}</p></Link></article>)}
      </div>
      {filtered.length === 0 && <p className='py-12 text-center text-sm text-muted-foreground'>No matching articles. Try a different search.</p>}
    </div>
  );
}
