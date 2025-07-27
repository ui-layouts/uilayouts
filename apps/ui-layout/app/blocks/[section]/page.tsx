import { notFound } from "next/navigation";
import { getDocBySlug, getAllDocs } from "@/lib/docs";
import { absoluteUrl, cn } from "@/lib/utils";
import { Component } from "lucide-react";
import TableOfContents from "@/components/website/tableof-compoents";
import { ComponentPagination } from "@/components/website/code-components/pagination";
import Footer from "@/components/website/footer";
import { MainComponents, SpecialComponents } from "@/configs/docs";

import { Metadata } from "next";
import { blocksDesign } from "@/configs/blocks-docs"; // Update path
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
    const { section } = await params;
    const sectionData = blocksDesign.find((b) => b.id === section);

    if (!sectionData) return {};

    return {
        title: `${sectionData.name} | UI Layouts`,
        description: sectionData.des,
        keywords: sectionData.tags || [],
    };
}

export default async function SectionPage(props: { params: Promise<{ section?: string }> }) {
    const { section } = await props.params;
    const sectionData = blocksDesign.find((s) => s.id === section);

    if (!sectionData) return notFound();
    console.log(sectionData);
    return (
        <>
            <div className="lg:container lg:px-0 px-3 mx-auto mt-0 ">
                <div className="flex w-full lg:gap-3">
                    <section className="xl:mr-0 mr-3 prose mt-[4.34rem] w-full prose-zinc min-w-0 max-w-full pb-5  pt-4 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-2xl prose-h2:my-4  prose-h2:py-1  prose-h2:border-b prose-h3:py-1  prose-h2:mt-3 prose-h2:font-medium prose-h3:text-2xl prose-h3:mt-4 prose-h3:mb-2 prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-4">
                        <article className="flex justify-betweenmb-4 mt-0 rounded-lg bg-gradient-to-r dark:from-black/40 to-blue-100 to-100% from-zinc-100  border backdrop-blur-md p-6 2xl:w-[90%] mx-auto relative">
                            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 w-full h-full bg-[repeating-linear-gradient(135deg,#475aff33_0px_1px,transparent_1px_15px)] [mask-image:radial-gradient(ellipse_50%_135%_at_93%_0%,#000_55%,transparent_100%)]"></div>
                            <div className="space-y-2 rounded-md dark:text-white text-black">
                                <span className="">
                                    <a href="/blocks">blocks</a>/{sectionData.id}
                                </span>
                                <h1 className={cn("mb-0 flex scroll-m-20  not-prose items-center lg:text-3xl text-2xl gap-2 font-medium tracking-tight")}>
                                    <div className="lg:w-10  w-8 lg:h-10  h-8 bg-primary grid place-content-center text-primary-foreground rounded-lg">
                                        <Component />
                                    </div>
                                    {sectionData.name}
                                </h1>
                                <p className="sm:text-sm text-xs">{sectionData.des}</p>
                            </div>
                            {/* <div>
  <a href={`https://github.com/ui-layouts/uilayouts/tree/main/packages/blocks/src/${sectionData.id}`} target="_blank" className="text-primary hover:text-primary/80">Github</a>
</div> */}
                        </article>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 py-16">
                            {sectionData.blocks?.map((block) => (
                                <Link key={block.id} href={`/blocks/${sectionData.id}/${block.id}`} className="relative group no-underline dark:bg-neutral-950 bg-neutral-200 p-4 rounded-lg border dark:border-neutral-800 border-neutral-300">
                                    <Image src={block.imgSrc} alt={block.name} width={400} height={400} className="rounded-lg w-full object-cover" />
                                    <h3 className="mt-2 text-lg font-medium absolute bottom-2 left-2">{block.name}</h3>
                                    {/* <p className="text-sm text-muted-foreground">{block.des}</p> */}
                                </Link>
                            ))}
                        </div>
                        <Footer />
                    </section>
                </div>
            </div>
        </>
    );
}
