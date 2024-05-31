import { Cam, Header, Tile } from '@components/home';
import Image from 'next/image';
import { FaMicrophone, FaPhoneFlip } from 'react-icons/fa6';
import Demo from '../../public/images/demo.png';

export default function HomePage() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-between'>
      {/* <div className='w-full flex flex-col gap-4 mb-4'>
        <Header title='라이브 뷰' more='자세히 보기' />
        <Tile className='w-full aspect-[2/1] overflow-hidden relative'>
          <Image src={Demo} alt='이미지' objectFit='cover' fill />
        </Tile>
      </div>
      <div className='w-full grid gap-4 grid-cols-2'>
        <a href='tel:119'>
          <Tile className='w-full aspect-square flex items-center justify-center flex-col gap-2 bg-red-500'>
            <FaPhoneFlip size={32} />
            <h4 className='text-lg font-medium'>응급 전화</h4>
          </Tile>
        </a>
        <Tile className='w-full aspect-square flex items-center justify-center flex-col gap-2'>
          <FaMicrophone size={32} />
          <h4 className='text-lg font-medium'>음성 통화</h4>
        </Tile>
      </div> */}
      <div className='w-full flex flex-col'>
        <ul className='flex gap-4 font-medium text-lg mb-4'>
          <li>모든 카메라</li>
          <li className='text-muted-foreground'>거실</li>
          <li className='text-muted-foreground'>침실</li>
          <li className='text-muted-foreground'>주방</li>
        </ul>
        <div className='w-full grid grid-cols-2 gap-2'>
          <Cam location='거실' name='거실 카메라' />
          <Cam location='주방' name='주방 카메라' />
          <Cam location='침실' name='침실 카메라' />
        </div>
      </div>
      <div className='w-full flex items-center gap-2 h-14'>
        <a
          className='w-full h-full rounded-xl flex items-center justify-center gap-2 bg-red-700 active:scale-[98%] transition-transform duration-200 ease-in-out'
          href='tel:119'
        >
          <FaPhoneFlip size={16} />
          <h4 className='font-medium'>응급 전화</h4>
        </a>
        <div className='w-full h-full rounded-xl flex items-center justify-center gap-2 bg-neutral-900 active:scale-[98%] transition-transform duration-200 ease-in-out'>
          <FaMicrophone size={16} />
          <h4 className='font-medium'>음성 통화</h4>
        </div>
      </div>
    </section>
  );
}
