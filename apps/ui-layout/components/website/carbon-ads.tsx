'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    refreshCarbon?: () => void;
    _carbonads?: {
      refresh: () => void;
    };
  }
}

export default function CarbonAd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.carbonads.com/carbon.js?serve=CW7IL2QI&placement=wwwui-layoutscom&format=responsive';
    script.id = '_carbonads_js';
    script.async = true;

    const container = document.getElementById('carbon-container');
    container?.appendChild(script);

    window.refreshCarbon = () => {
      const carbonAd = document.querySelector('#carbonads');
      if (!carbonAd) return;

      const carbonApi = window._carbonads;
      if (!carbonApi) return;

      carbonApi.refresh();
    };

    return () => {
      window.refreshCarbon = undefined;
      const carbonApiContainer = document.getElementById('carbon-container');
      if (carbonApiContainer && script.parentElement === carbonApiContainer) {
        carbonApiContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id='carbon-container'
      style={{
        transform: 'scale(0.9)',
        transformOrigin: 'top left',
      }}
    />
  );
}
