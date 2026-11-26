import HomeHeader from '@/components/website/home/home-header';
import DocsSidebar from '@/components/website/sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-3">Skip to content</a>
      <HomeHeader />
      <div className="mx-auto grid w-[94%] max-w-[1280px] gap-6 lg:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="hidden lg:block lg:sticky lg:top-20 lg:h-[calc(100svh-6rem)]"><DocsSidebar /></aside>
        <main id="main-content" tabIndex={-1} className="min-w-0">{children}</main>
      </div>
    </>
  );
}
