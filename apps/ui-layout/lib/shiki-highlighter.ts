import { createHighlighter, Highlighter } from 'shiki';
const SAFE_LANGS = new Set([
  'ts',
  'tsx',
  'js',
  'jsx',
  'json',
  'css',
  'html',
  'bash',
]);

function normalizeLang(lang?: string) {
  if (!lang) return 'txt';
  return SAFE_LANGS.has(lang) ? lang : 'txt';
}
let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighterInstance() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark', 'github-light', 'slack-dark'],
      langs: ['ts', 'tsx', 'js', 'jsx', 'json', 'css', 'html', 'bash', 'txt'],
    });
  }

  return highlighterPromise;
}
export async function highlightCode(code: string, lang = 'ts') {
  // console.log('checking code', code);

  const highlighter = await getHighlighterInstance();
  const safeLang = normalizeLang(lang);

  try {
    return highlighter.codeToHtml(code, {
      lang: safeLang,
      themes: {
        light: 'github-light',
        dark: 'slack-dark',
      },
    });
  } catch (err) {
    console.warn('[Shiki error – fallback]', err);

    // Fallback: plain escaped code
    return `<pre><code>${escapeHtml(code)}</code></pre>`;
  }
}

function escapeHtml(str: unknown) {
  if (typeof str !== 'string') {
    console.warn('escapeHtml got non-string:', str);
    return '';
  }

  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
