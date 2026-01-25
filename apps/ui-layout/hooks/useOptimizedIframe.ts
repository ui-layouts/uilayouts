import { useState, useRef, useEffect, RefObject } from 'react';
// Check if a URL is already cached by the service worker
export async function isUrlCached(url: string): Promise<boolean> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return false;
  }

  try {
    const cache = await caches.open('cnblocks-iframe-cache-v1');
    const cachedResponse = await cache.match(url);
    return cachedResponse !== undefined;
  } catch (error) {
    console.error('Error checking cache:', error);
    return false;
  }
}
const getCacheKey = (src: string) => `iframe-cache-${src}`;

interface UseOptimizedIframeProps {
  previewUrl: string;
  containerRef: RefObject<HTMLElement | null>;
}

interface UseOptimizedIframeReturn {
  iframeRef: RefObject<HTMLIFrameElement | null>;
  shouldLoadIframe: boolean;
  isIframeCached: boolean;
}

export const useOptimizedIframe = ({
  previewUrl,
  containerRef,
}: UseOptimizedIframeProps): UseOptimizedIframeReturn => {
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const [isIframeCached, setIsIframeCached] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadIframe(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [containerRef]);

  useEffect(() => {
    const checkCache = async () => {
      try {
        const isCached = await isUrlCached(previewUrl);
        setIsIframeCached(isCached);
        if (isCached) {
          setShouldLoadIframe(true);
        }
      } catch (error) {
        console.error('Error checking service worker cache status:', error);
      }
    };

    checkCache();

    try {
      const cacheKey = getCacheKey(previewUrl);
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { timestamp } = JSON.parse(cached);
        const now = Date.now();
        if (now - timestamp < 24 * 60 * 60 * 1000) {
          setShouldLoadIframe(true);
        } else {
          localStorage.removeItem(cacheKey);
        }
      }
    } catch (error) {
      console.error('Error retrieving iframe height from localStorage:', error);
    }
  }, [previewUrl]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !shouldLoadIframe) return;

    const handleLoad = () => {
      try {
        if (iframe.contentWindow && iframe.contentWindow.document.body) {
          const cacheKey = getCacheKey(previewUrl);
          const cacheValue = JSON.stringify({
            timestamp: Date.now(),
          });
          localStorage.setItem(cacheKey, cacheValue);
        }
      } catch (e) {
        console.warn('Error accessing iframe content:', e);
      }
    };

    iframe.addEventListener('load', handleLoad);
    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, [shouldLoadIframe, previewUrl]);

  useEffect(() => {
    if (!containerRef.current || shouldLoadIframe || isIframeCached) return;

    const linkElement = document.createElement('link');
    linkElement.rel = 'preload';
    linkElement.href = previewUrl;
    linkElement.as = 'document';

    if (
      !document.head.querySelector(`link[rel="preload"][href="${previewUrl}"]`)
    ) {
      document.head.appendChild(linkElement);
    }

    return () => {
      const existingLink = document.head.querySelector(
        `link[rel="preload"][href="${previewUrl}"]`
      );
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, [previewUrl, shouldLoadIframe, containerRef, isIframeCached]);

  return {
    iframeRef,
    shouldLoadIframe,
    isIframeCached,
  };
};
