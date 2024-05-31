import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function Block({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 items-center text-sm ring-offset-background active:scale-[98%] active:opacity-80 transition-all select-none',
        className
      )}
    >
      {children}
    </div>
  );
}
