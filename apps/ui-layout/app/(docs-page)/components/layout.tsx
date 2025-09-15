import { ReactNode } from 'react';

export const metadata = {
    metadataBase: new URL("https://ui-layouts.com"),

    title: "UI Layouts Components | Ui-Layouts",
    description:
      "A collection of 60+ beautifully designed, accessible, and customizable UI components built with React, Next.js, and TailwindCSS. Copy and paste into your apps to build modern interfaces faster. 100% open source.",
    keywords: [
      "React components library",
      "Next.js UI components",
      "TailwindCSS components",
      "UI Layouts library",
      "Open source React components",
      "Copy paste components",
      "Accessible UI components",
      "Customizable UI library",
      "React Tailwind components",
      "Next.js design system",
      "Modern UI kit React",
      "UI layouts React Tailwind",
      "Prebuilt React components",
      "Next.js Tailwind UI",
      "Free React components",
      "React UI templates",
      "Component library open source",
      "Tailwind CSS UI kit",
      "React Next.js components",
      "UI Layouts collection",
    ],
    authors: [{ name: "Naymur Rahman", url: "https://x.com/naymur_dev" }],
    creator: "@naymur_dev",
    publisher: "UI Layouts",
  openGraph: {
    title: "UI Layouts Components | Ui-Layouts",
    description:
      "60+ open-source React, Next.js, and TailwindCSS components. Accessible, customizable, and beautifully designed — ready to copy and paste into your apps.",
    url: "https://ui-layouts.com/components",
    images: [
      {
        url: 'https://ui-layouts.com/component-og.jpg',
        width: 1200,
        height: 630,
        alt: 'UI Layouts Components',
      },
    ],
    siteName: 'UI Layouts',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "UI Layouts Components | Ui-Layouts",
    description:
      "60+ open-source React, Next.js, and TailwindCSS components. Accessible, customizable, and beautifully designed — ready to copy and paste into your apps.",
    creator: '@naymur_dev',
    images: ['https://ui-layouts.com/component-og.jpg'],
  },
};

export default function SectionLayout({ children }: { children: ReactNode }) {
  return children;
}
