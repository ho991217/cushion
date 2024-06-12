import { Block } from '@/components/gallery';
import { Header } from '@/components/setting';

type Gallery = {
  videoId: string;
  uploadTime: string;
  thumbnailUrl: string;
  title: string;
};

export default async function Gallery() {
  try {
    const data: Gallery[] = await (
      await fetch('http://43.201.222.62:8080/api/fall_event/all', {
        cache: 'no-store',
      })
    ).json();

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
      </div>
    );
  } catch (error) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <p>Failed to load data</p>
      </div>
    );
  }
}
