import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function Tile({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('bg-gray-900 rounded-2xl', className)}>{children}</div>
  );
}