import HomeHeader from '@/components/website/home/home-header';

export default function BlocksLayout({ children }: { children: React.ReactNode }) {
  return <><HomeHeader /><main className="not-prose">{children}</main></>;
}
