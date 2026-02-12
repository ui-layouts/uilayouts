import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/components/website/theme-provider';
import { siteConfig } from '@/lib/utils';
import { Toaster } from 'sonner';
import Progressbar from '@/lib/progressbar';
import { DM_Sans, Manrope, Poppins, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-dmSans',
});
export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Framer Motion',
    'motion/react',
    'gsap',
    'lenis react',
    'react scroll animation',
    'web animation',
    'UI components',
    'open source components',
    'copy paste components',
    'modern UI design',
    'design engineer',
    'frontend developer tools',
    'image mousetrail',
    'spotlight effect',
    'tabs component',
    'image reveal animation',
    'sparkles effect',
    'shadcn components',
    'shadcn ui',
    'threejs ui-layouts',
    'react three fiber',
    'r3f',
    '3D UI components',
    'UI layouts',
    'component library',
    'react ui kit',
    'tailwind ui kit',
    'react animations',
    'scroll animations',
    'parallax scrolling',
    'sticky scroll',
    'timeline animation',
    'masonry grid',
    'animated cards',
    'product cards',
    'carousel component',
    'slider component',
    'drawer component',
    'sidebar component',
    'header component',
    'footer component',
    'responsive layouts',
    'dashboard ui',
    'portfolio ui',
    'landing page components',
    'interactive components',
    'css effects',
    'react gsap animations',
    'three.js effects',
  ],
  authors: [
    {
      name: 'naymur rahman',
      url: 'https://naymur.com/',
    },
  ],
  creator: 'naymur',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@naymur_dev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-BH0GZ3L39R'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BH0GZ3L39R');
        `}
        </Script>

        <body
          className={`
    ${poppins.variable}
    ${spaceGrotesk.variable}
    ${dmSans.variable}
    ${manrope.variable}
    font-poppins
  `}
        >
          <Analytics />
          <Progressbar>
            <ThemeProvider attribute='class'>
              <div className='isolate min-h-screen' vaul-drawer-wrapper=''>
                {/* <SocialShareModal /> */}
                {children}
              </div>
              <Toaster />
            </ThemeProvider>
          </Progressbar>
        </body>
      </html>
    </>
  );
}
