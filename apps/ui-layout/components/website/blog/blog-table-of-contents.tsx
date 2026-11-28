import type { TableOfContents } from '@/lib/toc';

export function BlogTableOfContents({ items }: TableOfContents) {
  return (
    <nav aria-label='On this page' className='text-sm leading-snug'>
      <ul className='space-y-2.5'>
        {items.map(({ title, url, items: subheadings }) => (
          <li key={url}>
            <a href={url} className='text-muted-foreground hover:text-foreground hover:underline'>
              {title}
            </a>
            {subheadings && subheadings.length > 0 && (
              <ul className='mt-2 space-y-2 border-l pl-3'>
                {subheadings.map((heading) => (
                  <li key={heading.url}>
                    <a
                      href={heading.url}
                      className='text-muted-foreground hover:text-foreground hover:underline'
                    >
                      {heading.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
