import { Cam, Header, Tile } from '@components/home';
import Image from 'next/image';
import { FaMicrophone, FaPhoneFlip } from 'react-icons/fa6';
import Demo from '../../public/images/demo.png';
import Link from 'next/link';

type HomePageProps = {
  searchParams: {
    filter: '모든 카메라' | '거실' | '침실' | '주방';
  };
};

export default function HomePage({
  searchParams: { filter = '모든 카메라' },
}: HomePageProps) {
  const filterOptions = ['모든 카메라', '거실', '침실', '주방'];

  const cams = [
    <Cam key='거실' id={1} location='거실' name='거실 카메라' />,
    <Cam key='주방' id={2} location='주방' name='주방 카메라' />,
    // <Cam key='침실' id={2} location='침실' name='침실 카메라' />,
  ];

  return (
    <section className='w-full h-full flex flex-col items-center justify-between'>
      <div className='w-full flex flex-col'>
        <ul className='flex gap-4 font-medium text-lg mb-4'>
          {filterOptions.map((option) => (
            <li
              key={option}
              className={`cursor-pointer ${
                filter === option ? 'text-primary-500' : 'text-neutral-600'
              }`}
            >
              <Link href={`/?filter=${option}`}>{option}</Link>
            </li>
          ))}
        </ul>
        <div className='w-full grid grid-cols-2 gap-2'>
          {filter === '모든 카메라'
            ? cams.map((cam) => cam)
            : cams.filter((cam) => cam.props.location === filter)}
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
