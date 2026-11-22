/** Keep local previews on the current deployment and external previews on their own host. */
export function getPreviewUrl(localPath?: string, externalPath?: string) {
  const path = externalPath || localPath;
  if (!path) return undefined;
  if (/^https?:\/\//.test(path)) return path;
  const base = externalPath
    ? process.env.NEXT_PUBLIC_ANIMATION_URL || 'https://preview.ui-layouts.com'
    : '';
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}
