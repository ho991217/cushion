import { cn } from '@/lib/utils';
import Image, { type StaticImageData } from 'next/image';
import { FaChevronRight } from 'react-icons/fa6';

type BlockProps = {
  thumbnail: string | StaticImageData;
  title: string;
  date: string;
  className?: string;
};

export default function Block({
  thumbnail,
  title,
  date,
  className,
}: BlockProps) {
  return (
    <div
      className={cn(
        'flex flex-col w-full rounded-2xl border border-input bg-background p-4 items-start justify-center text-sm active:scale-[98%] active:opacity-80 transition-all select-none',
        className
      )}
    >
      <div className='flex items-start space-x-4'>
        <Image
          src={thumbnail}
          alt={title}
          className='h-20 w-20 rounded-xl object-cover border border-input'
        />
        <div className='flex flex-col h-full items-start justify-between'>
          <div>
            <h3 className='text-lg font-semibold text-white'>{title}</h3>
            <p className='text-sm text-neutral-500'>{date} - 거실</p>
          </div>
          <div className='flex items-center gap-1 text-muted-foreground'>
            <span>확인하기</span> <FaChevronRight size={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
