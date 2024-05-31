import { Header, Tile } from '@components/home';
import Image from 'next/image';
import { FaMicrophone, FaPhoneFlip } from 'react-icons/fa6';
import Demo from '../../public/images/demo.png';

export default function HomePage() {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-full flex flex-col gap-4 mb-4'>
        <Header title='라이브 뷰' more='자세히 보기' />
        <Tile className='w-full aspect-[2/1] overflow-hidden relative'>
          <Image src={Demo} alt='이미지' objectFit='cover' />
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
      </div>
    </section>
  );
}
