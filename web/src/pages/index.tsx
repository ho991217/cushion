import { Header, Tile } from '@/components/home';
import LiveView from '@/components/live-view';
import { FaPhoneFlip } from 'react-icons/fa6';

export default function HomePage() {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-full flex flex-col gap-4 mb-4'>
        <Header title='라이브 뷰' more='자세히 보기' />
        <Tile className='w-full aspect-[2/1] overflow-hidden'>
          <LiveView />
        </Tile>
      </div>
      <div className='w-full grid gap-4 grid-cols-2'>
        <a href='tel:119'>
          <Tile className='w-full aspect-square flex items-center justify-center flex-col gap-2 bg-red-500'>
            <FaPhoneFlip size={32} />
            <h4 className='text-lg font-bold'>응급 전화</h4>
          </Tile>
        </a>
        <Tile className='w-full aspect-square' />
      </div>
    </section>
  );
}
