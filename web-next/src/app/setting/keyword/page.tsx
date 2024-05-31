import { Block, Header } from '@/components/setting';
import { Input } from '@/components/ui';

export default function Keyword() {
  return (
    <div className='w-full flex flex-col gap-3'>
      <Header
        className='mb-4'
        title='키워드 설정'
        description='키워드는 최대 5개까지 설정할 수 있어요.'
      />
      <Block>살려줘</Block>
      <Block>크어억</Block>
      <Block>끼에엑</Block>
      <Input placeholder='키워드를 입력해주세요.' />
    </div>
  );
}
