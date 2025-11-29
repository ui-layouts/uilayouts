export function InlineCodeRenderer({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={`px-1 py-0.5 bg-primary-foreground rounded text-sm ${className}`}
    >
      {children}
    </code>
  );
}
