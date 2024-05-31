import { Block } from '@/components/gallery';
import Demo from '../../../public/images/demo.png';

export default function Gallery() {
  return (
    <div className='w-full flex flex-col items-center gap-3'>
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
