import { cn } from '@/lib/utils';

type BlockProps = {
  type?: 'info' | 'ad' | 'fall';
  message: string;
  className?: string;
  isRead?: boolean;
};

export default function Block({
  type = 'info',
  message,
  isRead = false,
  className,
}: BlockProps) {
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
          {type === 'info' ? '알림' : type === 'ad' ? '광고' : '🚨 감지된 낙상'}
        </span>
        <h4 className='font-medium max-w-[200px] leading-5'>{message}</h4>
      </div>
      {!isRead && <button className='text-sm text-primary'>확인하기</button>}
    </div>
  );
}
