import { Header, Tile } from '@/components/home';
import LiveView from '@/components/live-view';

export default function HomePage() {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-full flex flex-col gap-4 mb-4'>
        <Header title='라이브 뷰' more='자세히 보기' />
        <Tile className='w-full aspect-[2/1]'>
          <LiveView />
        </Tile>
      </div>
      <div className='w-full grid gap-4 grid-cols-2'>
        <Tile className='w-full aspect-square' />
        <Tile className='w-full aspect-square' />
      </div>
    </section>
  );
}
