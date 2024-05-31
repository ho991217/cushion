import { Block } from '@/components/gallery';
import Demo from '../../../public/images/demo.png';
import { Header } from '@/components/setting';

type Gallery = {
  videoId: string;
  uploadTime: string;
  thumbnailUrl: string;
  title: string;
};

export default async function Gallery() {
  const data: Gallery[] = await (
    await fetch('http://43.201.222.62:8080/fall_event/all')
  ).json();

  console.log(data);

  return (
    <div className='w-full h-full flex flex-col items-center gap-3'>
      <Header
        className='w-full items-start mb-4'
        title='이벤트 갤러리'
        description='발생한 낙상 이벤트를 확인할 수 있습니다.'
      />
      {data.map((item) => (
        <Block
          key={item.videoId}
          id={item.videoId}
          thumbnail={item.thumbnailUrl}
          title={item.title}
          date={item.uploadTime}
        />
      ))}
      {/* <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' />
      <Block thumbnail={Demo} title='낙상 이벤트' date='2024-05-31' /> */}
    </div>
  );
}
