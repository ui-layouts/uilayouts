import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/website/theme-provider';
import { GeistMono } from 'geist/font/mono';
import Progressbar from '@/lib/progressbar';
import { siteConfig } from '@/lib/utils';
import { Toaster } from 'sonner';
import { Banner } from '@/components/website/ui/banner';
import { ArrowUpRight } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
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
    'motion/react',
    'gsap',
    'lenis react',
    'reactscroll animation',
    'web animation',
    'design engineer',
    'image mousetrail',
    'spotlight',
    'tabs',
    'image reveal',
    'sparkles',
    'shadcn components',
    'threejs ui-layouts',
    'react three fiber',
    'r3f',
  ],
  authors: [
    {
      name: 'naymur rahman',
      url: 'https://naymur-rahman.com/',
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

        <body className={poppins.className}>
          <Progressbar>
            <ThemeProvider attribute='class'>
              <div className='isolate min-h-screen' vaul-drawer-wrapper=''>
                  <Banner
                    variant='rainbow'
                    className='h-11 md:text-base sm:text-sm text-xs'
                  >
                    <p className='group-hover:underline underline-offset-4 flex flex-wrap gap-1 items-center'>
                      <picture>
                        <source
                          srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp'
                          type='image/webp'
                        />
                        <img
                          src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif'
                          alt='🚀'
                          className='w-6 h-6'
                          width='32'
                          height='32'
                        />
                      </picture>
                      Ship faster with{' '}
                      <span className='font-semibold'>UI-Layouts Pro</span>
                      <span className='md:inline-block hidden'>
                        – 50+ Tailwind & React components for production-ready
                        UIs
                      </span>
                    </p>
                    <ArrowUpRight
                      className='size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0'
                      strokeWidth={2}
                    />
                  </Banner>
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
