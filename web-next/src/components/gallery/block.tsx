import { cn } from '@/lib/utils';
import Image, { type StaticImageData } from 'next/image';
import { FaChevronRight } from 'react-icons/fa6';
import { Link } from '../common';

type BlockProps = {
  id: string;
  thumbnail: string | StaticImageData;
  title: string;
  date: string;
  className?: string;
};

export default function Block({
  id,
  thumbnail,
  title,
  date,
  className,
}: BlockProps) {
  return (
    <Link
      hardLink
      to={`/gallery/${id}`}
      className={cn(
        'flex flex-col w-full rounded-2xl border border-input bg-background p-2 items-start justify-center text-sm active:scale-[98%] active:opacity-80 transition-all select-none',
        className
      )}
    >
      <div className='flex items-start space-x-4 w-full'>
        <Image
          src={thumbnail}
          alt={title}
          width={80}
          height={80}
          className='h-24 w-24 rounded-xl object-cover border border-input'
        />
        <div className='flex flex-col h-full items-start justify-between overflow-hidden pr-2 py-2'>
          <div className='w-full overflow-hidden'>
            <h3 className='text-lg font-semibold text-white text-ellipsis'>
              {title}
            </h3>
            <p className='text-sm text-neutral-500'>{date} - 거실</p>
          </div>
          <div className='flex items-center gap-1 text-muted-foreground'>
            <span>확인하기</span> <FaChevronRight size={10} />
          </div>
        </div>
      </div>
    </Link>
  );
}
