import Link from 'next/link';
import HomeHeader from './home-header';

export default function McpPage() {
  return (
    <>
      <HomeHeader />
      <main className="mx-auto w-[92%] max-w-3xl py-16 sm:py-24">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">UI Layouts MCP</h1>
        <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">Find components from your editor. The MCP server gives your assistant access to the UI Layouts catalog, documentation, and React source.</p>
        <div className="my-8 flex flex-wrap items-center gap-5">
          <a className="rounded-lg bg-foreground px-4 py-3 text-background" href="https://www.npmjs.com/package/@ui-layouts/mcp">Installation guide</a>
          <a className="underline underline-offset-4" href="https://github.com/ui-layouts/mcp">View source</a>
        </div>
        <section className="mt-14 border-t pt-7">
          <h2 className="text-xl font-medium">Using the catalog</h2>
          <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">Ask your assistant to find a component by name or describe the interaction you need. It can read the usage notes and metadata, then retrieve the source for your project.</p>
          <Link className="mt-5 inline-block underline underline-offset-4" href="/components">Browse components</Link>
        </section>
      </main>
    </>
  );
}
