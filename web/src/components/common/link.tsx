import { useReactNativeWebview } from '@/hooks';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { Link as ReactLink } from 'react-router-dom';

type LinkProps = PropsWithChildren<{
  to: string;
  className?: string;
  hardLink?: boolean;
}>;

export default function Link({ to, children, hardLink, className }: LinkProps) {
  const { isApp, navigate, vibrate } = useReactNativeWebview();
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    vibrate('soft');
    if (hardLink && isApp) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <ReactLink
      to={to}
      className={cn(
        'text-blue-500 active:scale-[98%] active:opacity-80 transition-all select-none',
        className
      )}
      onClick={onClick}
    >
      {children}
    </ReactLink>
  );
}
