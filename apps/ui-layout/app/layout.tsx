import './globals.css';
import { ThemeProvider } from '@/components/website/theme-provider';
import Progressbar from '@/lib/progressbar';
import { siteConfig } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { Toaster } from 'sonner';

// Self-host the same font families so builds do not depend on Google Fonts availability.
const poppins = localFont({
  src: [
    { path: './fonts/Poppins-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: './fonts/Poppins-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/Poppins-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Poppins-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/Poppins-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Poppins-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Poppins-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './fonts/Poppins-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
  preload: false,
});

const spaceGrotesk = localFont({
  src: './fonts/Space-Grotesk-Variable.ttf',
  weight: '300 700',
  variable: '--font-spaceGrotesk',
  display: 'swap',
  preload: false,
});

const dmSans = localFont({
  src: './fonts/DM-Sans-Variable.ttf',
  weight: '100 1000',
  variable: '--font-dmSans',
  display: 'swap',
  preload: false,
});

const manrope = localFont({
  src: './fonts/Manrope-Variable.ttf',
  weight: '200 800',
  variable: '--font-manrope',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: siteConfig.name,
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    site: '@naymur_dev',
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
  manifest: `${siteConfig.url}/manifest.webmanifest`,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
