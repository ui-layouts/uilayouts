import { ScrollArea } from '@/components/website/ui/scroll-area';
import styles from './code-surface.module.css';

export function CodeSurface({ html }: { html: string }) {
  return (
    <ScrollArea horizontal type="auto" className={styles.surface}>
      <div className="not-prose" dangerouslySetInnerHTML={{ __html: html }} />
    </ScrollArea>
  );
}
