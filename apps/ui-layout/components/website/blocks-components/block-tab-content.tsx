'use client';

import { useEffect, useState } from 'react';
import { TreeCodeViewer } from '@/components/ui/tree-view-code';
import type { TransformedCodeFile } from '@/lib/transform-code-files';
import { ClientPreCode } from '../code-components/client-pre-code';
import { DesignMarkdown } from './design-markdown';

type BlockTabData =
  | { tab: 'code'; files: TransformedCodeFile[] }
  | { tab: 'design'; markdown: string; html: string };

export function BlockTabContent({
  section,
  block,
  tab,
}: {
  section: string;
  block: string;
  tab: BlockTabData['tab'];
}) {
  const [data, setData] = useState<BlockTabData | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const path = [section, block, tab].map(encodeURIComponent).join('/');
    async function load() {
      try {
        const response = await fetch(`/api/block-content/${path}`, { signal: controller.signal });
        if (!response.ok) throw new Error('Block content could not be loaded');
        const result: BlockTabData = await response.json();
        if (!controller.signal.aborted) setData(result);
      } catch {
        if (!controller.signal.aborted) setFailed(true);
      }
    }
    void load();
    return () => controller.abort();
  }, [section, block, tab, attempt]);

  if (failed) {
    return (
      <div className='rounded-md border p-4 text-sm' role='status'>
        Could not load this tab.{' '}
        <button
          type='button'
          className='cursor-pointer underline'
          onClick={() => {
            setFailed(false);
            setAttempt((value) => value + 1);
          }}
        >
          Try again
        </button>
      </div>
    );
  }

  if (!data) return <p role='status' className='p-4 text-sm'>Loading {tab}…</p>;
  if (data.tab === 'design') {
    return <DesignMarkdown id={block} html={data.html} markdown={data.markdown} />;
  }

  if (data.files.length === 1) {
    const [file] = data.files;
    return <ClientPreCode html={file.html} raw={file.raw} />;
  }

  return <TreeCodeViewer files={data.files} />;
}
