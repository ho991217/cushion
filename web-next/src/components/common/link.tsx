'use client';

import { useReactNativeWebview } from '@/hooks';
import { cn, isApp } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { default as NextLink } from 'next/link';

type LinkProps = PropsWithChildren<{
  to: string;
  className?: string;
  hardLink?: boolean;
}>;

export default function Link({ to, children, hardLink, className }: LinkProps) {
  const { navigate, vibrate } = useReactNativeWebview();
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    vibrate('soft');
    if (hardLink && isApp()) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <NextLink
      href={to}
      className={cn(
        'text-blue-500 active:scale-[98%] active:opacity-80 transition-all select-none',
        className
      )}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
}
