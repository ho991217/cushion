import { cn } from '@/lib/utils';
import { RiWebcamFill } from 'react-icons/ri';
import { Link } from '../common';

type CamsProps = {
  id: number;
  location: '거실' | '안방' | '주방' | '침실';
  name: string;
  className?: string;
};

export default function Cam({ location, name, className, id }: CamsProps) {
  return (
    <Link
      hardLink
      to={`/cam/${id}`}
      className={cn(
        'flex flex-col items-start justify-start p-4 rounded-xl bg-neutral-800 text-white gap-4 active:scale-[98%] transition-transform duration-200 ease-in-out',
        className
      )}
    >
      <RiWebcamFill />
      <div>
        <h3 className='text-xl font-bold'>{name}</h3>
        <h4 className='text-sm text-muted-foreground'>{location}</h4>
      </div>
    </Link>
  );
}
