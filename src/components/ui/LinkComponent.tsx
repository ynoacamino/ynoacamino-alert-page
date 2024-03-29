import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

export function LinkComponent({
  href, className = '', children,
}: {
  href: string, children: ReactNode, className?: string
}) {
  return (
    <Link
      key={href}
      href={href}
      className={cn('hover:text-primary font-semibold', className)}
    >
      {children}
    </Link>
  );
}
