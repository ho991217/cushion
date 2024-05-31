import { Block } from '@/components/gallery';
import Demo from '../../../public/images/demo.png';
import { Header } from '@/components/setting';

export default function Gallery() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-3'>
      <Header
        className='w-full items-start mb-4'
        title='이벤트 갤러리'
        description='발생한 낙상 이벤트를 확인할 수 있습니다.'
      />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
    </div>
  );
}
