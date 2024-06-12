import { generateNotiType } from '@/lib';
import { cn } from '@/lib/utils';
import ReadButton from './read-button';

type BlockProps = {
  type?: 'info' | 'ad' | 'fall';
  id: number;
  message: string;
  className?: string;
  isRead?: boolean;
  time?: string;
};

export default function Block({
  type = 'info',
  id,
  message,
  isRead = false,
  time,
  className,
}: BlockProps) {
  const parsedTime = time ? new Date(time) : new Date();
  time = parsedTime.toLocaleString();
  return (
    <div
      className={cn(
        'flex items-center justify-between w-full bg-neutral-900 p-5 rounded-xl overflow-hidden select-none transition-transform duration-200 ease-in-out',
        isRead ? 'opacity-50' : 'active:scale-[98%]',
        className
      )}
    >
      <div className='flex flex-col'>
        <span className='text-muted-foreground text-xs mb-1'>
          {generateNotiType(type)}
        </span>
        <h4 className='font-medium max-w-[200px] leading-5'>{message}</h4>
        <span className='text-muted-foreground text-xs mt-2'>{time}</span>
      </div>
      {!isRead && <ReadButton id={id} />}
    </div>
  );
}
