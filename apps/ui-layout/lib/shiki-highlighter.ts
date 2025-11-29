import { createHighlighter } from 'shiki';

let highlighterPromise: Promise<import('shiki').Highlighter> | null = null;

function getHighlighterInstance() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark', 'github-light', 'slack-dark'],
      langs: ['ts', 'tsx', 'js', 'jsx', 'bash', 'json', 'css', 'html'],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(code: string, lang = 'ts') {
  const highlighter = await getHighlighterInstance();

  return highlighter.codeToHtml(code, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'slack-dark',
    },
  });
}
